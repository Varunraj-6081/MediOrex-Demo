import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DateRange, DateRangePickerComponent } from '../../shared/date-range-picker/date-range-picker.component';
import { ApiPatient, PatientViewService } from './patient-view.service';

export interface PatientRow {
    patientId: string;
    registrationType: string;
    firstName: string;
    lastName: string;
    name: string;
    age: number;
    gender: string;
    mobile: string;
    alternateMobile: string;
    email: string;
    city: string;
    state: string;
    pincode: string;
    addressLine1: string;
    addressLine2: string;
    dateOfBirth: string;
    bloodGroup: string;
    maritalStatus: string;
    occupation: string;
    govtId: string;
    emergencyName: string;
    emergencyRelation: string;
    emergencyMobile: string;
    hasInsurance: boolean;
    insuranceProvider: string;
    policyNumber: string;
    policyExpiry: string;
    smsNotification: boolean;
    whatsappNotification: boolean;
    emailNotification: boolean;
    registrationDate: string;
}

@Component({
    selector: 'app-patient-view',
    standalone: true,
    imports: [CommonModule, FormsModule, DateRangePickerComponent],
    templateUrl: './patient-view.html',
    styleUrls: ['./patient-view.css']
})
export class PatientViewComponent implements OnInit {

    startDate = this.currentMonthStart();
    endDate = new Date();
    searchText = '';

    page = 1;
    pageSize = 20;
    total = 0;
    pageSizeOptions = [10, 20, 50];

    patients: PatientRow[] = [];

    filteredPatients: PatientRow[] = [];

    selectedPatient: PatientRow | null = null;

    showPatientDetails = false;

    isLoading = false;
    loadError = '';

    constructor(
        private readonly patientViewService: PatientViewService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.loadPatients();
    }

    loadPatients(): void {
        this.isLoading = true;
        this.loadError = '';
        this.selectedPatient = null;
        this.showPatientDetails = false;

        this.patientViewService.getPatients({
            from: this.toISODate(this.startDate),
            to: this.toISODate(this.endDate),
            search: this.searchText,
            page: this.page,
            pageSize: this.pageSize,
        }).subscribe({
            next: (response) => {
                this.isLoading = false;
                this.patients = (response.patients || []).map((item) => this.toRow(item));
                this.filteredPatients = [...this.patients];
                this.total = response.total || 0;
                this.page = response.page || this.page;
                this.pageSize = response.pageSize || this.pageSize;
            },
            error: (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.patients = [];
                this.filteredPatients = [];
                this.total = 0;
                this.loadError =
                    error.error?.message || 'Unable to load patients. Please try again.';
            },
        });
    }

    get totalPages(): number {
        return Math.max(1, Math.ceil(this.total / this.pageSize));
    }

    get rangeStart(): number {
        return this.total === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
    }

    get rangeEnd(): number {
        return Math.min(this.page * this.pageSize, this.total);
    }

    prevPage(): void {
        if (this.page > 1) {
            this.page -= 1;
            this.loadPatients();
        }
    }

    nextPage(): void {
        if (this.page < this.totalPages) {
            this.page += 1;
            this.loadPatients();
        }
    }

    onPageSizeChange(): void {
        this.page = 1;
        this.loadPatients();
    }

    applySearch(): void {
        this.page = 1;
        this.loadPatients();
    }

    applyFilters(): void {
        this.page = 1;
        this.loadPatients();
    }

    resetFilters(): void {
        this.startDate = this.currentMonthStart();
        this.endDate = new Date();
        this.searchText = '';
        this.page = 1;
        this.loadPatients();
    }

    onDateRangeChange(range: DateRange): void {
        this.startDate = range.startDate;
        this.endDate = range.endDate;
        this.page = 1;
        this.loadPatients();
    }

    private currentMonthStart(): Date {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    }

    private toRow(item: ApiPatient): PatientRow {
        const firstName = item.firstName || '';
        const lastName = item.lastName || '';
        const name = `${firstName} ${lastName}`.trim() || '—';

        return {
            patientId: item.patientRegistrationId || '',
            registrationType: '',
            firstName,
            lastName,
            name,
            age: item.age ?? 0,
            gender: item.gender || '',
            mobile: item.mobile || '',
            alternateMobile: item.alternateMobile || '',
            email: item.email || '',
            city: item.city || '',
            state: item.state || '',
            pincode: item.pincode || '',
            addressLine1: item.addressLine1 || '',
            addressLine2: item.addressLine2 || '',
            dateOfBirth: (item.dateOfBirth || '').slice(0, 10),
            bloodGroup: item.bloodGroup || '',
            maritalStatus: item.maritalStatus || '',
            occupation: item.occupation || '',
            govtId: item.govtId || '',
            emergencyName: item.emergencyName || '',
            emergencyRelation: item.emergencyRelation || '',
            emergencyMobile: item.emergencyMobile || '',
            hasInsurance: !!item.hasInsurance,
            insuranceProvider: item.insuranceProvider || '',
            policyNumber: item.policyNumber || '',
            policyExpiry: (item.policyExpiry || '').slice(0, 10),
            smsNotification: !!item.smsNotification,
            whatsappNotification: !!item.whatsappNotification,
            emailNotification: !!item.emailNotification,
            registrationDate: (item.registeredAt || '').slice(0, 10),
        };
    }

    private toISODate(date: Date): string {
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    viewPatient(patient: PatientRow): void {
        this.selectedPatient = patient;
        this.showPatientDetails = true;
    }

    editPatient(patient: PatientRow): void {
        this.router.navigate(['/patient/register'], {
            state: { editPatient: patient },
        });
    }

    closeDetails(): void {
        this.selectedPatient = null;
        this.showPatientDetails = false;
    }

    getInitials(): string {
        if (!this.selectedPatient) {
            return 'NP';
        }

        const parts = this.selectedPatient.name.split(' ').filter(Boolean);
        const initials = parts.slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join('');
        return initials || 'NP';
    }
}
