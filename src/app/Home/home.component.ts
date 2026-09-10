import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface HospitalModule {

    id: number;

    name: string;

    description: string;

    icon: string;

    color: string;

    route?: string;

    locked?: boolean;

    showNumber?: boolean;

}


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private router = inject(Router);


    modules: HospitalModule[] = [

        {
            id: 1,
            name: 'Patient Management',
            description:
                'Register, manage and track patient information',
            icon: 'person',
            color: 'blue',
            route: '/patient/register',
            locked: false
        },

        {
            id: 2,
            name: 'Booking Management',
            description:
                'Manage appointments, queue and token system',
            icon: 'event_available',
            color: 'purple',
            route: '/booking',
            locked: false
        },

        {
            id: 13,
            name: 'Billing & Revenue Management',
            description:
                'Manage billing, invoices and revenue',
            icon: 'payments',
            color: 'green',
            route: '/billing/generate',
            locked: false,
            showNumber: false
        },

        {
            id: 20,
            name: 'Support Services',
            description:
                'Get help, guidance and technical support',
            icon: 'support_agent',
            color: 'purple',
            locked: false
        },

        {
            id: 3,
            name: 'Doctor & Clinical Management',
            description:
                'Manage doctors, schedules and clinical operations',
            icon: 'medical_services',
            color: 'green',
            locked: true
        },

        {
            id: 4,
            name: 'EMR / EHR',
            description:
                'Electronic medical records and patient history',
            icon: 'description',
            color: 'pink',
            locked: true
        },

        {
            id: 5,
            name: 'OPD & IPD Management',
            description:
                'Manage outpatient and inpatient care',
            icon: 'local_hospital',
            color: 'orange',
            locked: true
        },

        {
            id: 6,
            name: 'Emergency & Critical Care',
            description:
                'Manage emergency cases and critical care',
            icon: 'emergency',
            color: 'red',
            locked: true
        },

        {
            id: 7,
            name: 'Laboratory Management',
            description:
                'Manage lab tests, samples and results',
            icon: 'science',
            color: 'teal',
            locked: true
        },

        {
            id: 8,
            name: 'Radiology & Diagnostics',
            description:
                'Manage radiology, imaging and diagnostic reports',
            icon: 'biotech',
            color: 'blue',
            locked: true
        },

        {
            id: 9,
            name: 'Pharmacy Management',
            description:
                'Manage pharmacy, medicines and prescriptions',
            icon: 'medication',
            color: 'purple',
            locked: true
        },

        {
            id: 10,
            name: 'Specialty Care Management',
            description:
                'Manage department-wise specialty care',
            icon: 'healing',
            color: 'pink',
            locked: true
        },

        {
            id: 11,
            name: 'Blood Bank Management',
            description:
                'Manage blood donors, stock and transfusions',
            icon: 'bloodtype',
            color: 'red',
            locked: true
        },

        {
            id: 12,
            name: 'OT & Surgery Management',
            description:
                'Manage operation theaters, surgeries and procedures',
            icon: 'medical_information',
            color: 'blue',
            locked: true
        },

        {
            id: 14,
            name: 'Insurance & TPA Management',
            description:
                'Manage insurance claims and TPA processing',
            icon: 'health_and_safety',
            color: 'purple',
            locked: true
        },

        {
            id: 15,
            name: 'Inventory & Procurement',
            description:
                'Manage inventory, supplies and procurement',
            icon: 'inventory_2',
            color: 'orange',
            locked: true
        },

        {
            id: 16,
            name: 'HR & Workforce Management',
            description:
                'Manage staff, attendance and payroll',
            icon: 'badge',
            color: 'purple',
            locked: true
        },

        {
            id: 17,
            name: 'Home Healthcare & Telemedicine',
            description:
                'Manage home care and virtual consultations',
            icon: 'video_call',
            color: 'orange',
            locked: true
        },

        {
            id: 18,
            name: 'Analytics & Healthcare Intelligence',
            description:
                'Reports, insights and data analytics',
            icon: 'analytics',
            color: 'blue',
            locked: true
        },

        {
            id: 19,
            name: 'Integration & Digital Health Platform',
            description:
                'Integrate with external systems and digital health services',
            icon: 'hub',
            color: 'teal',
            locked: true
        },

    ];


    openModule(module: HospitalModule): void {

        if (module.locked) {

            alert(
                'This module is locked.'
            );

            return;
        }

        if (module.route) {

            this.router.navigate([
                module.route
            ]);

            return;
        }

        console.log(
            'Opening module:',
            module.name
        );

    }

}
