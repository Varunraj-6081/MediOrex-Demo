import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PatientRegistrationService } from '../../PatientManagement/PatientRegistration/patient-registration.service';
import type { ApiPatient } from '../../PatientManagement/PatientView/patient-view.service';
import {
  BookingAppointmentService,
  Department,
  Doctor,
  AppointmentPayload,
} from './booking-appointment.service';


interface Appointment {
    appointmentId: number;
    name: string;
    time: string;
    type: 'Online' | 'Walk-in';
    status: 'Confirmed' | 'Waiting' | 'Cancelled' | 'Consulted';
    token: string;
}

@Component({
    selector: 'app-booking-appointment',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './booking-appointment.component.html',
    styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent implements OnInit {

    bookingMode: 'online' | 'offline' = 'offline';

    patientType: 'existing' | 'new' = 'new';

    departments: Department[] = [];
    doctors: Doctor[] = [];
    isLoadingMasters = false;
    mastersError = '';

    isSearching = false;
    lookupError = '';
    matchedPatients: ApiPatient[] = [];
    selectedMatchedId = '';
    comboOpen = false;
    private lastFetchedMobile = '';

    // Snapshot of patient data as filled by lookup. Compared at booking
    // time so unchanged bookings send no patient fields at all.
    private patientSnapshot: {
        name: string;
        mobile: string;
        age: number | null;
        sex: string;
        address: string;
    } | null = null;

    isBooking = false;
    bookError = '';
    showTokenDialog = false;
    savedTokenNumber = '';
    savedAppointmentNumber = '';
    savedPatientName = '';

    constructor(
        private readonly patientRegistrationService: PatientRegistrationService,
        private readonly bookingAppointmentService: BookingAppointmentService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.appointment.date = this.todayLocal();
        this.loadDepartments();
        this.loadTodayAppointments();
    }

    loadTodayAppointments(): void {
        this.bookingAppointmentService.getAppointments(this.todayLocal()).subscribe({
            next: (response) => {
                const list = response?.appointments || [];
                const validStatuses = ['Confirmed', 'Waiting', 'Cancelled', 'Consulted'];
                this.appointments = list.map((item) => ({
                    appointmentId: item.appointmentId,
                    name: item.patientName || '—',
                    time: item.displayTime || item.time || '',
                    type: (item.bookingMode === 'Online' ? 'Online' : 'Walk-in') as 'Online' | 'Walk-in',
                    status: (
                        validStatuses.includes(item.status) ? item.status : 'Waiting'
                    ) as 'Confirmed' | 'Waiting' | 'Cancelled' | 'Consulted',
                    token: item.token || '-',
                }));
            },
            error: () => {
                this.appointments = [];
            },
        });
    }

    loadDepartments(): void {
        this.isLoadingMasters = true;
        this.mastersError = '';
        this.bookingAppointmentService.getDepartments().subscribe({
            next: (response) => {
                this.isLoadingMasters = false;
                this.departments = response?.departments || [];
                if (this.departments.length > 0) {
                    this.appointment.departmentId = this.departments[0].departmentId;
                } else {
                    this.appointment.departmentId = null;
                }
                this.loadDoctors();
            },
            error: (error: HttpErrorResponse) => {
                this.isLoadingMasters = false;
                this.mastersError =
                    error.error?.message || 'Unable to load departments.';
            },
        });
    }

    loadDoctors(): void {
        this.bookingAppointmentService.getDoctors(this.appointment.departmentId).subscribe({
            next: (response) => {
                this.doctors = response?.doctors || [];
                if (this.doctors.length > 0) {
                    this.appointment.doctorId = this.doctors[0].doctorId;
                } else {
                    this.appointment.doctorId = null;
                }
            },
            error: (error: HttpErrorResponse) => {
                this.mastersError =
                    error.error?.message || 'Unable to load doctors.';
            },
        });
    }

    onDepartmentChange(): void {
        this.appointment.doctorId = null;
        this.loadDoctors();
    }

    patient = {
        name: '',
        mobile: '',
        email: '',
        age: null as number | null,
        sex: '',
        address: ''
    };

    appointment = {
        departmentId: null as number | null,
        doctorId: null as number | null,
        date: '',
        time: '',
        consultationType: 'In-Person',
        remarks: ''
    };


    appointments: Appointment[] = [];


    get totalCount(): number {
        return this.appointments.length;
    }

    get consultedCount(): number {
        return this.appointments.filter((a) => a.status === 'Consulted').length;
    }

    get waitingCount(): number {
        return this.appointments.filter((a) => a.status === 'Waiting').length;
    }

    get cancelledCount(): number {
        return this.appointments.filter((a) => a.status === 'Cancelled').length;
    }

    get recentAppointments(): Appointment[] {
        return this.appointments.slice(-10).reverse();
    }

    viewAll(): void {
        this.router.navigate(['/booking/appointment-list']);
    }


    newAppointment(): void {

        this.clearForm();

        this.patientType = 'new';

    }


    clearForm(): void {

        this.isSearching = false;
        this.lookupError = '';
        this.matchedPatients = [];
        this.selectedMatchedId = '';
        this.comboOpen = false;
        this.lastFetchedMobile = '';
        this.patientSnapshot = null;
        this.bookError = '';
        this.showTokenDialog = false;

        this.patient = {
            name: '',
            mobile: '',
            email: '',
            age: null,
            sex: '',
            address: ''
        };

        this.appointment = {
            departmentId: this.departments.length > 0 ? this.departments[0].departmentId : null,
            doctorId: null,
            date: this.todayLocal(),
            time: '',
            consultationType: 'In-Person',
            remarks: ''
        };
        if (this.appointment.departmentId !== null) {
            this.loadDoctors();
        } else {
            this.doctors = [];
        }

    }


    selectPatientType(type: 'existing' | 'new'): void {
        this.patientType = type;
        this.isSearching = false;
        this.lookupError = '';
        this.matchedPatients = [];
        this.selectedMatchedId = '';
        this.comboOpen = false;
        this.lastFetchedMobile = '';
        this.patientSnapshot = null;
        if (type === 'new') {
            this.clearForm();
            this.patientType = 'new';
        }
    }

    onMobileInput(event: Event): void {
        const input = event.target as HTMLInputElement | null;
        if (input) {
            const cleaned = (input.value || '').replace(/[^0-9]/g, '').slice(0, 10);
            if (cleaned !== input.value) {
                input.value = cleaned;
            }
            this.patient.mobile = cleaned;
        }
        this.lookupError = '';
        if (this.patientType !== 'existing' || this.isSearching) {
            return;
        }
        const digits = (this.patient.mobile || '').replace(/[^0-9]/g, '').slice(-10);
        if (/^\d{10}$/.test(digits)) {
            if (digits !== this.lastFetchedMobile) {
                this.fetchPatientByMobile(digits);
            } else if (this.matchedPatients.length > 1) {
                this.comboOpen = true;
            }
        } else {
            this.matchedPatients = [];
            this.selectedMatchedId = '';
            this.comboOpen = false;
            this.lastFetchedMobile = '';
        }
    }

    onMobileBlur(): void {
        if (this.patientType !== 'existing' || this.isSearching) {
            return;
        }
        // Don't refetch while the suggestion list is open — a click on a
        // suggestion blurs the input first.
        if (this.comboOpen && this.matchedPatients.length > 1) {
            return;
        }
        const digits = (this.patient.mobile || '').replace(/[^0-9]/g, '').slice(-10);
        if (!/^\d{10}$/.test(digits) || digits === this.lastFetchedMobile) {
            return;
        }
        this.fetchPatientByMobile(digits);
    }

    fetchPatientByMobile(mobile: string): void {
        const digits = (mobile || '').replace(/[^0-9]/g, '').slice(-10);
        if (!/^\d{10}$/.test(digits) || this.isSearching) {
            return;
        }
        this.lastFetchedMobile = digits;
        this.isSearching = true;
        this.lookupError = '';
        this.patientSnapshot = null;
        this.patientRegistrationService.getPatientByMobile(digits).subscribe({
            next: (response) => {
                this.isSearching = false;
                const list = response?.patients?.length
                    ? response.patients
                    : response?.patient
                        ? [response.patient]
                        : [];
                if (list.length === 0) {
                    this.matchedPatients = [];
                    this.selectedMatchedId = '';
                    this.comboOpen = false;
                    this.lookupError = 'No patient found for this mobile number.';
                    return;
                }
                this.matchedPatients = list;
                this.selectedMatchedId = list[0].patientRegistrationId || '';
                this.comboOpen = list.length > 1;
                this.fillRequiredFromApi(list[0]);
            },
            error: (error: HttpErrorResponse) => {
                this.isSearching = false;
                this.matchedPatients = [];
                this.selectedMatchedId = '';
                this.comboOpen = false;
                this.lookupError =
                    error.error?.message || 'No patient found for this mobile number.';
            },
        });
    }

    onSelectMatchedPatient(registrationId: string): void {
        const found = this.matchedPatients.find(
            (p) => (p.patientRegistrationId || '') === registrationId,
        );
        if (!found) {
            return;
        }
        this.selectedMatchedId = registrationId;
        this.fillRequiredFromApi(found);
        this.lookupError = '';
        this.comboOpen = false;
    }

    reopenCombo(): void {
        if (this.patientType === 'existing' && this.matchedPatients.length > 1) {
            this.comboOpen = true;
        }
    }

    getMatchedLabel(p: ApiPatient): string {
        const name = `${p.firstName || ''} ${p.lastName || ''}`.trim() || 'Unknown';
        const id = p.patientRegistrationId || '—';
        const extra = [p.age ? `Age ${p.age}` : '', p.gender || ''].filter(Boolean).join(' / ');
        return extra ? `${id} - ${name} - ${extra}` : `${id} - ${name}`;
    }

    private fillRequiredFromApi(api: ApiPatient): void {
        const digitsOnly = (v: string | null | undefined) =>
            (v || '').replace(/[^0-9]/g, '').slice(-10);
        const name = `${api.firstName || ''} ${api.lastName || ''}`.trim();
        const addressParts = [
            api.addressLine1 || '',
            api.addressLine2 || '',
            api.city || '',
            api.state || '',
            api.pincode || '',
        ].filter(Boolean);

        this.patient = {
            name,
            mobile: digitsOnly(api.mobile),
            email: this.patient.email || '',
            age: api.age ?? null,
            sex: api.gender || '',
            address: addressParts.join(', '),
        };
        this.patientSnapshot = {
            name: this.patient.name,
            mobile: this.patient.mobile,
            age: this.patient.age,
            sex: this.patient.sex,
            address: this.patient.address,
        };
    }

    private dirtyPatientFields(): {
        name?: string;
        mobile?: string;
        age?: number | null;
        sex?: string;
        address?: string;
    } {
        const name = this.patient.name.trim();
        const mobile = (this.patient.mobile || '').replace(/[^0-9]/g, '').slice(-10);
        const snapshot = this.patientSnapshot;

        // No lookup baseline (manually typed): send everything, as before.
        if (this.patientType !== 'existing' || !snapshot) {
            return {
                name,
                mobile,
                age: this.patient.age,
                sex: this.patient.sex,
                address: (this.patient.address || '').trim(),
            };
        }

        const digits = (value: string) =>
            (value || '').replace(/[^0-9]/g, '').slice(-10);
        const diffs: {
            name?: string;
            mobile?: string;
            age?: number | null;
            sex?: string;
            address?: string;
        } = {};
        if (name !== snapshot.name) {
            diffs.name = name;
        }
        if (digits(mobile) !== digits(snapshot.mobile)) {
            diffs.mobile = digits(mobile);
        }
        if ((this.patient.age ?? null) !== (snapshot.age ?? null)) {
            diffs.age = this.patient.age;
        }
        if (this.patient.sex !== snapshot.sex) {
            diffs.sex = this.patient.sex;
        }
        if ((this.patient.address || '').trim() !== snapshot.address) {
            diffs.address = (this.patient.address || '').trim();
        }
        return diffs;
    }


    bookAppointment(): void {
        this.bookError = '';

        const mobile = (this.patient.mobile || '').replace(/[^0-9]/g, '').slice(-10);

        if (!this.patient.name?.trim() || !/^\d{10}$/.test(mobile)) {
            this.bookError = 'Please fill patient name and a valid 10-digit mobile number.';
            return;
        }

        if (this.patientType === 'new' && (this.patient.age === null || !this.patient.sex)) {
            this.bookError = 'Please fill age and sex for a new patient.';
            return;
        }

        if (this.isBooking) {
            return;
        }

        const payload: AppointmentPayload = {
            patientType: this.patientType,
            ...(this.patientType === 'existing'
                ? {
                    ...(this.selectedMatchedId ? { patientRegistrationId: this.selectedMatchedId } : { mobile }),
                    ...this.dirtyPatientFields(),
                }
                : {
                    name: this.patient.name.trim(),
                    mobile,
                    age: this.patient.age,
                    sex: this.patient.sex,
                    address: (this.patient.address || '').trim(),
                }),
            departmentId: this.appointment.departmentId,
            doctorId: this.appointment.doctorId,
            appointmentDate: this.appointment.date || this.todayLocal(),
            appointmentTime: this.appointment.time || this.currentTime24(),
            bookingMode: this.bookingMode,
            consultationType: this.appointment.consultationType,
            remarks: (this.appointment.remarks || '').trim(),
        };

        this.isBooking = true;

        this.bookingAppointmentService.createAppointment(payload).subscribe({
            next: (response) => {
                this.isBooking = false;
                const bookedName = this.patient.name.trim();
                this.clearForm();
                this.savedTokenNumber = response.tokenNumber;
                this.savedAppointmentNumber = response.appointmentNumber;
                this.savedPatientName = bookedName;
                this.bookError = '';
                this.showTokenDialog = true;
                this.loadTodayAppointments();
            },
            error: (error: HttpErrorResponse) => {
                this.isBooking = false;
                this.bookError =
                    error.error?.message || 'Unable to generate token. Please try again.';
            },
        });
    }

    private todayLocal(): string {
        const now = new Date();
        const pad = (num: number) => `${num}`.padStart(2, '0');
        return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    }

    private currentTime24(): string {
        const now = new Date();
        const pad = (num: number) => `${num}`.padStart(2, '0');
        return `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }


    closeTokenDialog(): void {
        this.showTokenDialog = false;
    }

    openMenuIndex: number | null = null;
    confirmCancelItem: Appointment | null = null;
    isCancelling = false;

    toggleMenu(index: number): void {
        this.openMenuIndex = this.openMenuIndex === index ? null : index;
    }

    canCancel(item: Appointment): boolean {
        return item.status === 'Waiting' || item.status === 'Confirmed';
    }

    askCancelToken(item: Appointment): void {
        this.openMenuIndex = null;
        if (!this.canCancel(item)) {
            return;
        }
        this.confirmCancelItem = item;
    }

    closeCancelConfirm(): void {
        if (this.isCancelling) {
            return;
        }
        this.confirmCancelItem = null;
    }

    confirmCancelToken(): void {
        if (!this.confirmCancelItem || this.isCancelling) {
            return;
        }
        const item = this.confirmCancelItem;
        this.isCancelling = true;
        this.bookingAppointmentService.cancelAppointment(item.appointmentId).subscribe({
            next: () => {
                this.isCancelling = false;
                this.confirmCancelItem = null;
                this.bookError = '';
                this.loadTodayAppointments();
            },
            error: (error: HttpErrorResponse) => {
                this.isCancelling = false;
                this.confirmCancelItem = null;
                this.bookError =
                    error.error?.message || 'Unable to cancel token. Please try again.';
            },
        });
    }

    getStatusClass(status: string): string {

        switch (status) {

            case 'Confirmed':
                return 'confirmed-status';

            case 'Waiting':
                return 'waiting-status';

            case 'Cancelled':
                return 'cancelled-status';

            case 'Consulted':
                return 'consulted-status';

            default:
                return '';

        }

    }

}
