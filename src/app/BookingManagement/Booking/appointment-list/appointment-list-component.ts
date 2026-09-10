import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {
  BookingAppointmentService,
  DayAppointment,
} from '../booking-appointment.service';

interface Appointment {
    appointmentId: number;
    id: string;
    token: string;
    patient: string;
    mobile: string;
    age: number;
    gender: string;
    department: string;
    doctor: string;
    date: string;
    time: string;
    type: 'Online' | 'Walk-in';
    status:
    | 'Confirmed'
    | 'Waiting'
    | 'Consulted'
    | 'Cancelled';
}

@Component({
    selector: 'app-appointment-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './appointment-list-component.html',
    styleUrls: ['./appointment-list-component.css']
})
export class AppointmentListComponent implements OnInit {

    constructor(
        private readonly bookingAppointmentService: BookingAppointmentService,
    ) { }

    ngOnInit(): void {
        this.selectedDate = this.todayLocal();
        this.loadAppointments();
    }

    selectedDate = '';
    isLoading = false;
    loadError = '';

    filterId = '';

    filterToken = '';

    filterPatient = '';

    filterMobile = '';

    filterDepartment = '';

    filterDoctor = '';

    filterDate = '';

    filterTime = '';

    filterType = '';

    filterStatus = '';


    appointments: Appointment[] = [];


    filteredAppointments: Appointment[] = [];

    loadAppointments(): void {
        if (!this.selectedDate) {
            return;
        }
        this.isLoading = true;
        this.loadError = '';
        this.bookingAppointmentService.getAppointments(this.selectedDate).subscribe({
            next: (response) => {
                this.isLoading = false;
                this.appointments = (response?.appointments || []).map((item) =>
                    this.toRow(item),
                );
                this.applyFilters();
            },
            error: (error) => {
                this.isLoading = false;
                this.appointments = [];
                this.filteredAppointments = [];
                this.loadError =
                    error?.error?.message || 'Unable to load appointments.';
            },
        });
    }

    private toRow(item: DayAppointment): Appointment {
        const validTypes = ['Online', 'Walk-in'];
        const validStatuses = ['Confirmed', 'Waiting', 'Consulted', 'Cancelled'];
        return {
            appointmentId: item.appointmentId,
            id: item.appointmentNumber || '',
            token: item.token || '-',
            patient: item.patientName || '—',
            mobile: item.mobile || '',
            age: item.age ?? 0,
            gender: item.gender || '',
            department: item.department || '',
            doctor: item.doctor || '',
            date: this.formatDate(item.date),
            time: item.displayTime || item.time || '',
            type: (
                validTypes.includes(item.bookingMode) ? item.bookingMode : 'Walk-in'
            ) as 'Online' | 'Walk-in',
            status: (
                validStatuses.includes(item.status) ? item.status : 'Waiting'
            ) as 'Confirmed' | 'Waiting' | 'Consulted' | 'Cancelled',
        };
    }

    private todayLocal(): string {
        const now = new Date();
        const pad = (num: number) => `${num}`.padStart(2, '0');
        return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    }

    private formatDate(isoDate: string): string {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate || '');
        if (!match) {
            return isoDate || '';
        }
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ];
        const month = months[Number(match[2]) - 1] || match[2];
        return `${match[3]} ${month} ${match[1]}`;
    }


    get totalAppointments(): number {
        return this.appointments.length;
    }


    get consultedCount(): number {
        return this.appointments.filter(
            x => x.status === 'Consulted'
        ).length;
    }


    get waitingCount(): number {
        return this.appointments.filter(
            x => x.status === 'Waiting'
        ).length;
    }


    get cancelledCount(): number {
        return this.appointments.filter(
            x => x.status === 'Cancelled'
        ).length;
    }


    selectCard(status: string): void {
        this.filterStatus = this.filterStatus === status ? '' : status;
        this.applyFilters();
    }

    applyFilters(): void {        this.filteredAppointments =
            this.appointments.filter(item => {

                const matchesId =
                    this.matches(item.id, this.filterId);

                const matchesToken =
                    this.matches(item.token, this.filterToken);

                const matchesPatient =
                    this.matches(item.patient, this.filterPatient);

                const matchesMobile =
                    this.matches(item.mobile, this.filterMobile);

                const matchesDepartment =
                    this.matches(item.department, this.filterDepartment);

                const matchesDoctor =
                    this.matches(item.doctor, this.filterDoctor);

                const matchesDate =
                    this.matches(item.date, this.filterDate);

                const matchesTime =
                    this.matches(item.time, this.filterTime);

                const matchesType =
                    this.matches(item.type, this.filterType);

                const matchesStatus =
                    this.matches(item.status, this.filterStatus);


                return (
                    matchesId &&
                    matchesToken &&
                    matchesPatient &&
                    matchesMobile &&
                    matchesDepartment &&
                    matchesDoctor &&
                    matchesDate &&
                    matchesTime &&
                    matchesType &&
                    matchesStatus
                );

            });

    }


    matches(value: string, filter: string): boolean {

        const search = filter.trim().toLowerCase();

        if (!search) {
            return true;
        }

        return value.toLowerCase().includes(search);

    }


    resetFilters(): void {

        this.filterId = '';

        this.filterToken = '';

        this.filterPatient = '';

        this.filterMobile = '';

        this.filterDepartment = '';

        this.filterDoctor = '';

        this.filterDate = '';

        this.filterTime = '';

        this.filterType = '';

        this.filterStatus = '';

        this.selectedDate = this.todayLocal();
        this.loadAppointments();

    }


    getStatusClass(status: string): string {

        switch (status) {

            case 'Confirmed':
                return 'confirmed';

            case 'Waiting':
                return 'waiting';

            case 'Consulted':
                return 'consulted';

            case 'Cancelled':
                return 'cancelled';

            default:
                return '';

        }

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
                this.loadError = '';
                this.loadAppointments();
            },
            error: (error: HttpErrorResponse) => {
                this.isCancelling = false;
                this.confirmCancelItem = null;
                this.loadError =
                    error.error?.message || 'Unable to cancel token. Please try again.';
            },
        });
    }

}