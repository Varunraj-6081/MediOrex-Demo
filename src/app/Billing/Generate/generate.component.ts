import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {
  BookingAppointmentService,
  Doctor,
} from '../../BookingManagement/Booking/booking-appointment.service';
import { GenerateBillService, LookupConsultation, BillPayload } from './generate.service';
import { AuthService } from '../../shared/auth/auth.service';
import { BillPdfData, BillPdfService } from '../bill-pdf.service';

interface Patient {
    name: string;
    gender: string;
    age: number;
    uhid: string;
    phone: string;
}

interface BillItem {
    name: string;
    description: string;
    amount: number;
}

@Component({
    selector: 'app-generate-bill',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './generate.component.html',
    styleUrls: ['./generate.component.css']
})
export class GenerateBillComponent implements OnInit {

    constructor(
        private readonly bookingAppointmentService: BookingAppointmentService,
        private readonly generateBillService: GenerateBillService,
        private readonly authService: AuthService,
        private readonly billPdfService: BillPdfService,
    ) { }

    doctors: Doctor[] = [];

    selectedDoctorId: number | null = null;

    doctorsError = '';

    searchError = '';

    isSearching = false;

    matchedConsultations: LookupConsultation[] = [];

    selectedConsultationKey = '';

    consultOpen = false;

    selectedDepartmentId: number | null = null;

    selectedAppointmentId: number | null = null;

    isGenerating = false;

    showBillDialog = false;
    savedBillNumber = '';
    savedPatientName = '';
    savedPatientPhone = '';
    savedBillData: BillPdfData | null = null;

    patientSearch = '';

    patient: Patient | null = null;


    visitDate = '';

    department = 'General Medicine';

    doctor = '';

    consultationType = 'In-Person';

    visitType = 'New Visit';

    tokenNumber = '';

    notes = '';


    billItems: BillItem[] = [
        {
            name: 'Consultation Fee',
            description: 'General Medicine Consultation',
            amount: 500
        }
    ];


    subtotal = 500;

    discount = 0;

    totalAmount = 500;


    paymentMode = 'Cash';

    amountReceived = 500;

    changeAmount = 0;

    sendBill = true;


    ngOnInit(): void {

        this.visitDate = this.todayLocal();
        this.calculateTotal();
        this.loadDoctors();

    }

    private todayLocal(): string {
        const now = new Date();
        const pad = (num: number) => `${num}`.padStart(2, '0');
        return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    }

    get visitDateDisplay(): string {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(this.visitDate || '');
        if (!match) {
            return this.visitDate || '—';
        }
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ];
        return `${match[3]}-${months[Number(match[2]) - 1]}-${match[1]}`;
    }

    loadDoctors(): void {
        this.doctorsError = '';
        this.bookingAppointmentService.getDoctors().subscribe({
            next: (response) => {
                this.doctors = response?.doctors || [];
                if (this.doctors.length > 0) {
                    this.selectedDoctorId = this.doctors[0].doctorId;
                    this.applyDoctor(this.doctors[0]);
                } else {
                    this.selectedDoctorId = null;
                }
            },
            error: (error: HttpErrorResponse) => {
                this.doctorsError =
                    error.error?.message || 'Unable to load doctors.';
            },
        });
    }

    onDoctorChange(): void {
        const selected = this.doctors.find(
            (doc) => doc.doctorId === this.selectedDoctorId,
        );
        if (!selected) {
            return;
        }
        this.applyDoctor(selected);
    }

    private applyDoctor(selected: Doctor): void {
        this.doctor = selected.name;
        if (selected.departmentName) {
            this.department = selected.departmentName;
        }
        const fee = Number(selected.consultationFee);
        if (!Number.isFinite(fee) || fee < 0) {
            return;
        }
        const consultationItem = this.billItems[0];
        if (consultationItem) {
            consultationItem.amount = fee;
            consultationItem.description =
                `${selected.departmentName || 'General'} Consultation`;
        }
        this.calculateTotal();
        this.amountReceived = this.totalAmount;
    }


    // ================= PATIENT =================

    searchPatient(): void {

        const query = (this.patientSearch || '').trim();
        this.searchError = '';

        if (!query) {
            this.searchError = 'Enter a mobile number or token number to search.';
            return;
        }

        this.isSearching = true;
        this.matchedConsultations = [];
        this.selectedConsultationKey = '';
        this.consultOpen = false;

        this.generateBillService.lookup(query).subscribe({
            next: (response) => {
                this.isSearching = false;
                const list = response?.consultations || [];
                if (list.length === 0) {
                    this.matchedConsultations = [];
                    this.selectedConsultationKey = '';
                    this.consultOpen = false;
                    this.searchError = 'No Appointment details found.';
                    return;
                }
                this.matchedConsultations = list;
                const first = list[0];
                this.selectedConsultationKey = this.consultationKey(first);
                this.consultOpen = list.length > 1;
                this.applyConsultation(first, response?.visitDate);
            },
            error: (error: HttpErrorResponse) => {
                this.isSearching = false;
                this.matchedConsultations = [];
                this.selectedConsultationKey = '';
                this.consultOpen = false;
                this.searchError =
                    error.error?.message || 'No Appointment details found.';
            },
        });

    }

    consultationKey(item: LookupConsultation): string {
        return item.token?.tokenNumber || item.appointment?.appointmentNumber || '';
    }

    getConsultationLabel(item: LookupConsultation): string {
        const token = this.consultationKey(item);
        const name = item.patient?.name?.trim() || 'Unknown';
        const ageSex = [item.patient?.age ?? '', item.patient?.gender || '']
            .filter((part) => part !== '' && part !== null && part !== undefined)
            .join('/');
        const when = `${this.formatDisplayDate(item.appointment?.date)} ${item.appointment?.displayTime || ''}`.trim();
        return [token, `${name}${ageSex ? ` - ${ageSex}` : ''}`, when]
            .filter(Boolean)
            .join(' - ');
    }

    onSelectConsultation(key: string): void {
        const found = this.matchedConsultations.find(
            (item) => this.consultationKey(item) === key,
        );
        if (!found) {
            return;
        }
        this.selectedConsultationKey = key;
        this.applyConsultation(found);
        this.searchError = '';
        this.consultOpen = false;
    }

    reopenConsult(): void {
        if (this.matchedConsultations.length > 1) {
            this.consultOpen = true;
        }
    }

    private applyConsultation(item: LookupConsultation, visitDate?: string): void {
        this.selectedDepartmentId = item.department?.departmentId ?? null;
        this.selectedAppointmentId = item.appointment?.appointmentId ?? null;
        this.patient = {
            name: item.patient?.name || '',
            gender: item.patient?.gender || '',
            age: item.patient?.age ?? 0,
            uhid: item.patient?.uhid || '',
            phone: item.patient?.phone || '',
        };
        if (item.department?.departmentName) {
            this.department = item.department.departmentName;
        }
        const foundDoctor = (this.doctors || []).find(
            (doc) => doc.doctorId === item.doctor?.doctorId,
        );
        if (foundDoctor) {
            this.selectedDoctorId = foundDoctor.doctorId;
            this.applyDoctor(foundDoctor);
        } else if (item.doctor?.name) {
            this.doctor = item.doctor.name;
        }
        if (item.token?.tokenNumber) {
            this.tokenNumber = item.token.tokenNumber;
        }
        if (item.appointment?.consultationType) {
            this.consultationType =
                item.appointment.consultationType === 'Video'
                    ? 'Online'
                    : 'In-Person';
        }
        // Visit date defaults to today for the new bill.
        this.visitDate = visitDate || this.todayLocal();
    }

    private formatDisplayDate(isoDate: string): string {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate || '');
        if (!match) {
            return isoDate || '';
        }
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ];
        return `${match[3]} ${months[Number(match[2]) - 1]} ${match[1]}`;
    }


    newPatient(): void {

        console.log('Opening new patient registration');

    }


    viewHistory(): void {

        if (!this.patient) {

            return;

        }

        console.log(
            'Opening history:',
            this.patient.uhid
        );

    }


    // ================= BILL =================

    calculateTotal(): void {

        this.subtotal = this.billItems.reduce(
            (sum, item) =>
                sum + Number(item.amount || 0),
            0
        );


        this.totalAmount = Math.max(
            this.subtotal - Number(this.discount || 0),
            0
        );


        this.calculateChange();

    }


    addService(): void {

        this.billItems.push({

            name: 'Additional Service',

            description: 'Additional consultation service',

            amount: 0

        });


        this.calculateTotal();

    }


    removeService(index: number): void {

        this.billItems.splice(index, 1);

        this.calculateTotal();

    }


    // ================= PAYMENT =================

    selectPayment(mode: string): void {

        this.paymentMode = mode;

    }


    calculateChange(): void {

        const received =
            Number(this.amountReceived || 0);

        this.changeAmount =
            Math.max(
                received - this.totalAmount,
                0
            );

    }


    // ================= GENERATE =================

    generateBill(): void {

        if (!this.patient) {

            alert('Please select a patient.');

            return;

        }


        if (this.totalAmount <= 0) {

            alert('Bill amount must be greater than zero.');

            return;

        }


        if (
            this.paymentMode !== 'Insurance' &&
            this.amountReceived < this.totalAmount
        ) {

            alert(
                'Amount received is less than the bill amount.'
            );

            return;

        }

        if (this.isGenerating) {

            return;

        }

        const payload: BillPayload = {

            patientUhid: this.patient.uhid,

            appointmentId: this.selectedAppointmentId,

            doctorId: this.selectedDoctorId,

            departmentId: this.selectedDepartmentId,

            visitDate: this.visitDate,

            consultationType: this.consultationType,

            visitType: this.visitType,

            tokenNumber: this.tokenNumber,

            notes: this.notes,

            items: this.billItems.map((item) => ({
                name: item.name,
                description: item.description,
                amount: Number(item.amount || 0),
            })),

            discount: Number(this.discount || 0),

            paymentMode: this.paymentMode,

            amountReceived: Number(this.amountReceived || 0),

            sendBill: this.sendBill,

            generatedBy: this.authService.getUser()?.user_id ?? null

        };

        this.isGenerating = true;

        this.generateBillService.createBill(payload).subscribe({
            next: (response) => {
                this.isGenerating = false;
                const billedName = this.patient?.name || '';
                const billedPhone = this.patient?.phone || '';
                const billData = {
                    ...this.buildBillPdfData(),
                    billNo: response.billNumber,
                };
                this.resetForm();
                this.savedBillNumber = response.billNumber;
                this.savedPatientName = billedName;
                this.savedPatientPhone = billedPhone;
                this.savedBillData = billData;
                this.showBillDialog = true;
            },
            error: (error: HttpErrorResponse) => {
                this.isGenerating = false;
                alert(
                    error.error?.message || 'Unable to generate bill. Please try again.'
                );
            },
        });

    }

    closeBillDialog(): void {
        this.showBillDialog = false;
    }

    dialogSendBill(): void {
        if (!this.savedPatientPhone) {
            return;
        }
        alert(
            `Bill ${this.savedBillNumber} sent to ${this.savedPatientName || this.savedPatientPhone}`
        );
    }


    // ================= QUICK ACTIONS =================

    printBill(): void {

        this.billPdfService.printBillData(this.buildBillPdfData());

    }

    dialogPrintBill(): void {

        if (!this.savedBillData) {
            return;
        }

        this.billPdfService.printBillData(this.savedBillData);

    }

    private buildBillPdfData(): BillPdfData {

        return {
            billNo: '',
            date: this.visitDateDisplay,
            time: '',
            patientName: this.patient?.name || '',
            uhid: this.patient?.uhid || '',
            age: this.patient?.age ?? '',
            gender: this.patient?.gender || '',
            phone: this.patient?.phone || '',
            department: this.department,
            doctor: this.doctor,
            tokenNo: this.tokenNumber,
            consultationType: this.consultationType,
            visitType: this.visitType,
            items: this.billItems.map((item) => ({
                name: item.name,
                description: item.description,
                amount: Number(item.amount || 0),
            })),
            subtotal: this.subtotal,
            discount: Number(this.discount || 0),
            totalAmount: this.totalAmount,
            paymentMode: this.paymentMode,
            amountReceived: Number(this.amountReceived || 0),
        };

    }

    downloadBill(): void {

        this.billPdfService.downloadBillData(this.buildBillPdfData());

    }

    dialogDownloadBill(): void {

        if (!this.savedBillData) {
            return;
        }

        this.billPdfService.downloadBillData(this.savedBillData);

    }


    sendBillToPatient(): void {

        if (!this.patient) {

            return;

        }

        console.log(
            'Send bill to:',
            this.patient.phone
        );

    }


    viewBills(): void {

        console.log('Navigate to View Bills');

    }


    resetForm(): void {

        this.patientSearch = '';

        this.searchError = '';

        this.isSearching = false;

        this.patient = null;

        this.showBillDialog = false;

        this.matchedConsultations = [];

        this.selectedConsultationKey = '';

        this.consultOpen = false;

        this.selectedDepartmentId = null;

        this.selectedAppointmentId = null;

        this.savedBillData = null;

        this.visitDate = this.todayLocal();

        this.consultationType = 'In-Person';

        this.visitType = 'New Visit';

        this.tokenNumber = '';

        this.notes = '';

        this.billItems = [
            {
                name: 'Consultation Fee',
                description: 'General Medicine Consultation',
                amount: 500
            }
        ];

        if (this.doctors.length > 0) {
            this.selectedDoctorId = this.doctors[0].doctorId;
            this.applyDoctor(this.doctors[0]);
        } else {
            this.department = 'General Medicine';

            this.doctor = 'Dr. Priya Sharma';
        }

        this.discount = 0;

        this.paymentMode = 'Cash';

        this.amountReceived = this.totalAmount;

        this.sendBill = true;

        this.calculateTotal();

    }

}
