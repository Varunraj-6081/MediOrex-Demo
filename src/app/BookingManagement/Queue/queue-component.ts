import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {
  BookingAppointmentService,
  Department,
} from '../Booking/booking-appointment.service';
import { QueueRow, QueueService } from './queue.service';

interface QueuePatient {

    tokenId: number;

    token: string;

    appointmentId: string;

    name: string;

    age: number;

    gender: string;

    type: 'Online' | 'Walk-in';

    department: string;

    doctor: string;

    appointmentTime: string;

    waitingMinutes: number;

    status: 'Waiting' | 'Called' | 'In Consultation';

}


@Component({
    selector: 'app-queue-management',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './queue-component.html',
    styleUrls: ['./queue-component.css']
})
export class QueueManagementComponent implements OnInit {

    constructor(
        private readonly queueService: QueueService,
        private readonly bookingAppointmentService: BookingAppointmentService,
    ) { }

    ngOnInit(): void {
        this.loadDepartments();
    }

    departments: Department[] = [];
    selectedDepartmentId: number | null = null;

    isLoading = false;
    loadError = '';

    summary = {
        waiting: 0,
        serving: 0,
        completed: 0,
        noShow: 0,
        averageWaitingMinutes: 0,
        totalAppointments: 0,
    };

    elapsedMinutes = 0;

    queueFilter:
        | 'all'
        | 'online'
        | 'walkin' = 'all';

    searchText = '';

    queuePaused = false;


    /* =====================================================
       CURRENT PATIENT
       ===================================================== */

    currentPatient: QueuePatient | null = null;


    /* =====================================================
       QUEUE DATA
       ===================================================== */

    queue: QueuePatient[] = [];


    filteredQueue: QueuePatient[] = [];


    /* =====================================================
       LOAD
       ===================================================== */

    loadDepartments(): void {
        this.isLoading = true;
        this.bookingAppointmentService.getDepartments().subscribe({
            next: (response) => {
                this.departments = response?.departments || [];
                if (this.departments.length > 0) {
                    this.selectedDepartmentId = this.departments[0].departmentId;
                } else {
                    this.selectedDepartmentId = null;
                }
                this.loadQueue();
            },
            error: (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.loadError =
                    error.error?.message || 'Unable to load departments.';
            },
        });
    }

    loadQueue(): void {
        if (!this.selectedDepartmentId) {
            this.queue = [];
            this.filteredQueue = [];
            this.currentPatient = null;
            this.isLoading = false;
            return;
        }
        this.isLoading = true;
        this.loadError = '';
        this.queueService.getQueue(this.selectedDepartmentId).subscribe({
            next: (response) => {
                this.isLoading = false;
                this.queue = (response?.queue || []).map((item) =>
                    this.toRow(item),
                );
                this.currentPatient = response?.nowServing
                    ? this.toRow(response.nowServing)
                    : null;
                this.elapsedMinutes = response?.nowServing?.elapsedMinutes ?? 0;
                this.summary = response?.summary || {
                    waiting: 0,
                    serving: 0,
                    completed: 0,
                    noShow: 0,
                    averageWaitingMinutes: 0,
                    totalAppointments: 0,
                };
                this.applyFilters();
            },
            error: (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.queue = [];
                this.filteredQueue = [];
                this.currentPatient = null;
                this.loadError =
                    error.error?.message || 'Unable to load queue.';
            },
        });
    }

    private toRow(item: QueueRow): QueuePatient {
        const validStatuses = ['Waiting', 'Called', 'In Consultation'];
        return {
            tokenId: item.tokenId,
            token: item.token || '',
            appointmentId: item.appointmentNumber || '',
            name: item.patientName || '—',
            age: item.age ?? 0,
            gender: item.gender || '',
            type: (item.type === 'Online' ? 'Online' : 'Walk-in') as 'Online' | 'Walk-in',
            department: item.department || '',
            doctor: item.doctor || '',
            appointmentTime: item.displayAppointmentTime || item.appointmentTime || '',
            waitingMinutes: item.waitingMinutes ?? 0,
            status: (
                validStatuses.includes(item.status) ? item.status : 'Waiting'
            ) as 'Waiting' | 'Called' | 'In Consultation',
        };
    }


    /* =====================================================
       SUMMARY
       ===================================================== */

    get waitingCount(): number {

        return this.summary.waiting;

    }


    get completedCount(): number {

        return this.summary.completed;

    }


    get noShowCount(): number {

        return this.summary.noShow;

    }


    get totalAppointments(): number {

        return this.summary.totalAppointments;

    }


    get onlineCount(): number {

        return this.queue.filter(
            patient =>
                patient.type === 'Online'
        ).length;

    }


    get walkinCount(): number {

        return this.queue.filter(
            patient =>
                patient.type === 'Walk-in'
        ).length;

    }


    /* =====================================================
       NEXT PATIENT
       ===================================================== */

    get nextPatient(): QueuePatient | null {

        return (
            this.filteredQueue[0] ||
            this.queue[0] ||
            null
        );

    }


    shortToken(token: string): string {
        const match = /^TK\d{8}(\d+)$/.exec((token || '').trim());
        return match ? `TK-${match[1]}` : (token || '');
    }


    /* =====================================================
       FILTER
       ===================================================== */    setQueueFilter(
        filter:
            | 'all'
            | 'online'
            | 'walkin'
    ): void {

        this.queueFilter = filter;

        this.applyFilters();

    }


    applyFilters(): void {

        const search =
            this.searchText
                .trim()
                .toLowerCase();


        this.filteredQueue =
            this.queue.filter(
                patient => {

                    const matchesSearch =
                        !search ||

                        patient.name
                            .toLowerCase()
                            .includes(search) ||

                        patient.token
                            .toLowerCase()
                            .includes(search);


                    const matchesType =

                        this.queueFilter === 'all' ||

                        (
                            this.queueFilter === 'online' &&
                            patient.type === 'Online'
                        ) ||

                        (
                            this.queueFilter === 'walkin' &&
                            patient.type === 'Walk-in'
                        );


                    return (
                        matchesSearch &&
                        matchesType
                    );

                }
            );

    }


    /* =====================================================
       DEPARTMENT
       ===================================================== */

    changeDepartment(): void {

        this.loadQueue();

    }


    /* =====================================================
       CALL NEXT
       ===================================================== */

    callNext(): void {

        if (this.queuePaused) {

            alert(
                'Queue is currently on hold.'
            );

            return;

        }


        const current = this.currentPatient;
        const next = this.nextPatient;

        if (!current && !next) {

            alert(
                'No patients waiting in queue.'
            );

            return;

        }

        // Starting the next consultation auto-completes the current one
        // on the backend. With nobody waiting, just finish the current.
        if (next) {
            this.queueService.updateToken(next.tokenId, 'start').subscribe({
                next: () => {
                    this.loadError = '';
                    this.loadQueue();
                },
                error: (error: HttpErrorResponse) => {
                    this.loadError =
                        error.error?.message || 'Unable to call patient.';
                },
            });
            return;
        }

        if (current) {
            this.queueService.updateToken(current.tokenId, 'complete').subscribe({
                next: () => {
                    this.loadError = '';
                    this.loadQueue();
                },
                error: (error: HttpErrorResponse) => {
                    this.loadError =
                        error.error?.message || 'Unable to complete consultation.';
                },
            });
        }

    }


    /* =====================================================
       CALL PATIENT
       ===================================================== */

    callPatient(
        patient: QueuePatient
    ): void {

        if (this.queuePaused) {

            alert(
                'Queue is currently on hold.'
            );

            return;

        }

        this.queueService.updateToken(patient.tokenId, 'start').subscribe({
            next: () => {
                this.loadError = '';
                this.loadQueue();
            },
            error: (error: HttpErrorResponse) => {
                this.loadError =
                    error.error?.message || 'Unable to call patient.';
            },
        });

    }


    /* =====================================================
       RECALL
       ===================================================== */

    recallPatient(): void {

        if (!this.currentPatient) {

            return;

        }

        alert(
            `${this.currentPatient.token} - ${this.currentPatient.name} recalled.`
        );

    }


    /* =====================================================
       NO SHOW
       ===================================================== */

    markNoShow(): void {

        if (!this.nextPatient) {

            return;

        }

        this.queueService.updateToken(this.nextPatient.tokenId, 'no-show').subscribe({
            next: () => {
                this.loadError = '';
                this.loadQueue();
            },
            error: (error: HttpErrorResponse) => {
                this.loadError =
                    error.error?.message || 'Unable to mark no-show.';
            },
        });

    }


    /* =====================================================
       HOLD / RESUME
       ===================================================== */

    toggleQueue(): void {

        this.queuePaused =
            !this.queuePaused;

    }


    /* =====================================================
       ACTION MENU
       ===================================================== */

    openActions(
        patient: QueuePatient
    ): void {

        console.log(
            'Queue actions:',
            patient
        );

    }

}