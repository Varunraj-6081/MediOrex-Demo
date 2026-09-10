import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../shared/auth/auth.service';
import { DateRange, DateRangePickerComponent } from '../../shared/date-range-picker/date-range-picker.component';
import { ApiBill, ViewBillsService } from './view.service';
import { BillPdfService } from '../bill-pdf.service';

interface BillItem {
    name: string;
    description: string;
    amount: number;
}

interface Bill {
    billId: number;
    billNo: string;
    date: string;
    time: string;

    patientName: string;
    uhid: string;

    age: number;
    gender: string;
    phone: string;

    department: string;
    doctor: string;

    tokenNo: string;

    consultationType: string;
    visitType: string;

    amount: number;

    paymentMode: string;
    status: string;

    subtotal: number;
    discount: number;
    change: number;

    items: BillItem[];
}


@Component({
    selector: 'app-view-bills',
    standalone: true,
    imports: [CommonModule, FormsModule, DateRangePickerComponent],
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewBillsComponent implements OnInit {

    constructor(
        protected readonly authService: AuthService,
        private readonly viewBillsService: ViewBillsService,
        private readonly billPdfService: BillPdfService,
    ) {}

    get displayName(): string {
        const user = this.authService.getUser();
        if (!user) {
            return 'User';
        }
        const fullName = `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim();
        return fullName || user.username || 'User';
    }

    get roleName(): string {
        return this.authService.getUser()?.role_name ?? '—';
    }

    get avatarInitials(): string {
        const parts = this.displayName.split(' ').filter(Boolean);
        const initials = parts.slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join('');
        return initials || 'U';
    }

    // ================= FILTERS =================

    rangeStart = this.todayDate();

    rangeEnd = this.todayDate();

    isLoading = false;

    loadError = '';

    searchText = '';

    department = 'All Departments';

    doctor = 'All Doctors';

    paymentMode = 'All Payment Modes';

    status = 'All Status';

    pageSize = 10;


    // ================= SUMMARY =================

    get totalBills(): number {
        return this.bills.length;
    }

    get totalRevenue(): number {
        return this.bills
            .filter((bill) => bill.status !== 'Cancelled')
            .reduce(
                (sum, bill) => sum + Number(bill.amount || 0),
                0,
            );
    }

    get paidBills(): number {
        return this.bills.filter(
            (bill) => bill.status === 'Paid',
        ).length;
    }

    get cancelledBills(): number {
        return this.bills.filter(
            (bill) => bill.status === 'Cancelled',
        ).length;
    }

    // ================= DRAWER =================

    showBillDetails = false;

    selectedBill: Bill | null = null;


    // ================= DATA =================

    bills: Bill[] = [];


    filteredBills: Bill[] = [];


    ngOnInit(): void {

        this.loadBills();

    }

    onDateRangeChange(range: DateRange): void {
        this.rangeStart = range.startDate;
        this.rangeEnd = range.endDate;
        this.loadBills();
    }

    loadBills(): void {
        this.isLoading = true;
        this.loadError = '';
        this.viewBillsService
            .getBills(this.toISODate(this.rangeStart), this.toISODate(this.rangeEnd))
            .subscribe({
                next: (response) => {
                    this.isLoading = false;
                    this.bills = (response?.bills || []).map((item) =>
                        this.toBill(item),
                    );
                    this.applyFilters();
                },
                error: (error: HttpErrorResponse) => {
                    this.isLoading = false;
                    this.bills = [];
                    this.filteredBills = [];
                    this.loadError =
                        error.error?.message || 'Unable to load bills.';
                },
            });
    }

    onRangeChange(): void {
        this.loadBills();
    }

    private toBill(item: ApiBill): Bill {
        const validStatuses = ['Paid', 'Pending', 'Cancelled'];
        return {
            billId: item.billId,
            billNo: item.billNo || '',
            date: item.date || '',
            time: item.time || '',
            patientName: item.patientName || '—',
            uhid: item.uhid || '',
            age: item.age ?? 0,
            gender: item.gender || '',
            phone: item.phone || '',
            department: item.department || '',
            doctor: item.doctor || '',
            tokenNo: item.tokenNo || '-',
            consultationType: item.consultationType || '',
            visitType: item.visitType || '',
            amount: Number(item.amount) || 0,
            paymentMode: item.paymentMode || '',
            status: (
                validStatuses.includes(item.status) ? item.status : 'Pending'
            ) as 'Paid' | 'Pending' | 'Cancelled',
            subtotal: Number(item.subtotal) || 0,
            discount: Number(item.discount) || 0,
            change: Number(item.change) || 0,
            items: (item.items || []).map((entry) => ({
                name: entry.name || '',
                description: entry.description || '',
                amount: Number(entry.amount) || 0,
            })),
        };
    }

    private todayDate(): Date {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return now;
    }

    private toISODate(date: Date): string {
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    // ================= FILTER =================

    applyFilters(): void {

        const search =
            this.searchText
                .trim()
                .toLowerCase();


        this.filteredBills =
            this.bills.filter(bill => {

                const matchesSearch =
                    !search ||
                    bill.billNo.toLowerCase().includes(search) ||
                    bill.patientName.toLowerCase().includes(search) ||
                    bill.uhid.toLowerCase().includes(search) ||
                    bill.doctor.toLowerCase().includes(search);


                const matchesDepartment =
                    this.department === 'All Departments' ||
                    bill.department === this.department;


                const matchesDoctor =
                    this.doctor === 'All Doctors' ||
                    bill.doctor === this.doctor;


                const matchesPayment =
                    this.paymentMode === 'All Payment Modes' ||
                    bill.paymentMode === this.paymentMode;


                const matchesStatus =
                    this.status === 'All Status' ||
                    bill.status === this.status;


                return (
                    matchesSearch &&
                    matchesDepartment &&
                    matchesDoctor &&
                    matchesPayment &&
                    matchesStatus
                );

            });

    }


    resetFilters(): void {

        this.searchText = '';

        this.department = 'All Departments';

        this.doctor = 'All Doctors';

        this.paymentMode = 'All Payment Modes';

        this.status = 'All Status';

        this.rangeStart = this.todayDate();
        this.rangeEnd = this.todayDate();
        this.loadBills();

    }


    // ================= VIEW =================

    viewBill(bill: Bill): void {

        this.selectedBill = bill;

        this.showBillDetails = true;

    }


    closeBillDetails(): void {

        this.showBillDetails = false;

    }


    // ================= ACTIONS =================

    generateNewBill(): void {

        console.log(
            'Navigate to Generate Bill'
        );

    }


    printBill(bill: Bill | null): void {

        if (!bill) {
            return;
        }

        const invoice = document.querySelector(
            '.bill-drawer .invoice',
        ) as HTMLElement | null;

        if (!invoice) {
            alert('Open the bill preview before printing.');
            return;
        }

        this.billPdfService
            .printInvoiceElement(invoice)
            .catch(() => {
                alert('Unable to print bill. Please try again.');
            });

    }


    downloadBill(bill: Bill | null): void {

        if (!bill) {
            return;
        }

        const invoice = document.querySelector(
            '.bill-drawer .invoice',
        ) as HTMLElement | null;

        if (!invoice) {
            alert('Open the bill preview before downloading.');
            return;
        }

        this.billPdfService
            .downloadInvoiceElement(invoice, `${bill.billNo || 'bill'}.pdf`)
            .catch(() => {
                alert('Unable to download bill. Please try again.');
            });

    }


    sendToPatient(bill: Bill | null): void {

        if (!bill) {
            return;
        }

        console.log(
            'Sending bill to:',
            bill.phone
        );

        alert(
            `Bill ${bill.billNo} sent to ${bill.patientName}`
        );

    }


    openMenuIndex: number | null = null;
    confirmCancelItem: Bill | null = null;
    isCancelling = false;

    toggleMenu(index: number): void {
        this.openMenuIndex = this.openMenuIndex === index ? null : index;
    }

    canCancelBill(bill: Bill): boolean {
        return bill.status !== 'Cancelled';
    }

    askCancelBill(bill: Bill): void {
        this.openMenuIndex = null;
        if (!this.canCancelBill(bill)) {
            return;
        }
        this.confirmCancelItem = bill;
    }

    closeCancelConfirm(): void {
        if (this.isCancelling) {
            return;
        }
        this.confirmCancelItem = null;
    }

    confirmCancelBill(): void {
        if (!this.confirmCancelItem || this.isCancelling) {
            return;
        }
        const item = this.confirmCancelItem;
        this.isCancelling = true;
        this.viewBillsService.cancelBill(item.billId).subscribe({
            next: () => {
                this.isCancelling = false;
                this.confirmCancelItem = null;
                this.loadError = '';
                this.loadBills();
            },
            error: (error: HttpErrorResponse) => {
                this.isCancelling = false;
                this.confirmCancelItem = null;
                this.loadError =
                    error.error?.message || 'Unable to cancel bill. Please try again.';
            },
        });
    }

}
