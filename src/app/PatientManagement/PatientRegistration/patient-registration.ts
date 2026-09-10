import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {
  PatientRegistrationPayload,
  PatientRegistrationService,
} from './patient-registration.service';
import type { PatientRow } from '../PatientView/patient-view';
import type { ApiPatient } from '../PatientView/patient-view.service';

@Component({
    selector: 'app-patient-registration',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './patient-registration.html',
    styleUrls: ['./patient-registration.css']
})
export class PatientRegistrationComponent implements OnInit {

    registrationType: 'new' | 'existing' = 'new';

    patientId = '';

    searchMobile = '';
    isSearching = false;
    lookupError = '';
    lookupSuccess = '';
    matchedPatients: ApiPatient[] = [];
    selectedMatchedId = '';
    comboOpen = false;
    private lastFetchedMobile = '';

    isSubmitting = false;
    submitted = false;
    submitError = '';
    submitSuccess = '';
    showSuccessDialog = false;
    savedPatientId = '';

    constructor(
        private readonly patientRegistrationService: PatientRegistrationService,
    ) { }

    ngOnInit(): void {
        const editPatient = (
            history.state as { editPatient?: PatientRow } | null
        )?.editPatient;

        if (editPatient) {
            this.applyEditPatient(editPatient);
            history.replaceState({}, '');
            return;
        }

        this.loadLatestPatientId();
    }

    selectRegistrationType(type: 'new' | 'existing'): void {
        this.registrationType = type;
        this.submitError = '';
        this.submitSuccess = '';
        this.lookupError = '';
        this.lookupSuccess = '';
        this.lastFetchedMobile = '';
        this.matchedPatients = [];
        this.selectedMatchedId = '';
        this.comboOpen = false;

        if (type === 'new') {
            this.searchMobile = '';
            this.isSearching = false;
            this.loadLatestPatientId();
        } else {
            // Fresh lookup: clear auto-generated new-patient ID and form.
            this.patientId = '';
            this.clearForm(true);
        }
    }

    private loadLatestPatientId(): void {
        this.patientRegistrationService.getLatestPatientRegistrationId().subscribe({
            next: (response) => {
                if (response.patientRegistrationId) {
                    this.patientId = response.patientRegistrationId;
                }
            },
        });
    }

    keepSearchMobileNumbersOnly(event: Event): void {
        const input = event.target as HTMLInputElement | null;
        if (!input) {
            return;
        }
        let cleaned = (input.value || '').replace(/[^0-9]/g, '').slice(0, 10);
        if (cleaned !== input.value) {
            input.value = cleaned;
        }
        this.searchMobile = cleaned;
        this.lookupError = '';
        this.lookupSuccess = '';
    }

    fetchPatientByMobile(mobileOverride?: string): void {
        const raw = mobileOverride ?? this.searchMobile;
        const mobile = (raw || '').replace(/[^0-9]/g, '').slice(-10);
        this.searchMobile = mobile;
        this.lookupError = '';
        this.lookupSuccess = '';
        this.submitError = '';
        this.submitSuccess = '';
        this.matchedPatients = [];
        this.selectedMatchedId = '';
        this.comboOpen = false;

        if (!/^\d{10}$/.test(mobile)) {
            this.lookupError = 'Please enter a valid 10-digit mobile number.';
            return;
        }

        if (this.isSearching) {
            return;
        }

        this.lastFetchedMobile = mobile;
        this.isSearching = true;

        this.patientRegistrationService.getPatientByMobile(mobile).subscribe({
            next: (response) => {
                this.isSearching = false;
                const list = response?.patients?.length
                    ? response.patients
                    : response?.patient
                        ? [response.patient]
                        : [];
                if (list.length === 1) {
                    this.matchedPatients = list;
                    this.selectedMatchedId = list[0].patientRegistrationId || '';
                    this.comboOpen = false;
                    this.applyApiPatient(list[0]);
                    this.lookupSuccess = `Patient found: ${this.patientId}. Details filled below.`;
                } else if (list.length > 1) {
                    this.matchedPatients = list;
                    this.selectedMatchedId = list[0].patientRegistrationId || '';
                    this.comboOpen = true;
                    this.applyApiPatient(list[0]);
                    this.lookupSuccess = `${list.length} patients found for this mobile number. Select a patient below.`;
                } else {
                    this.lookupError = 'No patient found for this mobile number.';
                }
            },
            error: (error: HttpErrorResponse) => {
                this.isSearching = false;
                this.lookupError =
                    error.error?.message || 'No patient found for this mobile number.';
            },
        });
    }

    onSelectMatchedPatient(registrationId: string): void {
        if (!registrationId) {
            return;
        }
        const found = this.matchedPatients.find(
            (p) => (p.patientRegistrationId || '') === registrationId,
        );
        if (!found) {
            return;
        }
        this.selectedMatchedId = registrationId;
        this.applyApiPatient(found);
        this.lookupSuccess = `Patient selected: ${this.patientId}. Details filled below.`;
        this.lookupError = '';
        this.comboOpen = false;
    }

    reopenCombo(): void {
        if (this.matchedPatients.length > 1) {
            this.comboOpen = true;
        }
    }

    getMatchedLabel(p: ApiPatient): string {
        const name = `${p.firstName || ''} ${p.lastName || ''}`.trim() || 'Unknown';
        const id = p.patientRegistrationId || '—';
        const extra = [p.age ? `Age ${p.age}` : '', p.gender || ''].filter(Boolean).join(' / ');
        return extra ? `${id} - ${name} - ${extra}` : `${id} - ${name}`;
    }

    private applyApiPatient(api: ApiPatient): void {
        this.registrationType = 'existing';
        this.patientId = api.patientRegistrationId || '';

        this.submitted = false;
        this.submitError = '';
        this.submitSuccess = '';
        this.showSuccessDialog = false;
        this.savedPatientId = '';

        const digitsOnly = (v: string | null | undefined) =>
            (v || '').replace(/[^0-9]/g, '').slice(-10);

        this.patient = {
            firstName: api.firstName || '',
            lastName: api.lastName || '',

            dateOfBirth: (api.dateOfBirth || '').slice(0, 10),
            age: api.age ?? null,

            gender: api.gender || '',
            bloodGroup: api.bloodGroup || '',

            maritalStatus: api.maritalStatus || '',
            occupation: api.occupation || '',

            govtId: api.govtId || '',

            mobile: digitsOnly(api.mobile),
            alternateMobile: digitsOnly(api.alternateMobile),
            email: api.email || '',

            addressLine1: api.addressLine1 || '',
            addressLine2: api.addressLine2 || '',
            city: api.city || '',
            state: api.state || '',
            pincode: (api.pincode || '').replace(/[^0-9]/g, '').slice(0, 6),

            emergencyName: api.emergencyName || '',
            emergencyRelation: api.emergencyRelation || '',
            emergencyMobile: digitsOnly(api.emergencyMobile),

            hasInsurance: !!api.hasInsurance,

            insuranceProvider: api.insuranceProvider || '',
            policyNumber: api.policyNumber || '',
            policyExpiry: (api.policyExpiry || '').slice(0, 10),

            smsNotification: !!api.smsNotification,
            whatsappNotification: !!api.whatsappNotification,
            emailNotification: !!api.emailNotification,
        };
    }

    private applyEditPatient(editPatient: PatientRow): void {
        this.registrationType = 'existing';
        this.patientId = editPatient.patientId || '';

        this.submitted = false;
        this.submitError = '';
        this.submitSuccess = '';
        this.showSuccessDialog = false;
        this.savedPatientId = '';

        this.patient = {
            firstName: editPatient.firstName || '',
            lastName: editPatient.lastName || '',

            dateOfBirth: (editPatient.dateOfBirth || '').slice(0, 10),
            age: editPatient.age ?? null,

            gender: editPatient.gender || '',
            bloodGroup: editPatient.bloodGroup || '',

            maritalStatus: editPatient.maritalStatus || '',
            occupation: editPatient.occupation || '',

            govtId: editPatient.govtId || '',

            mobile: editPatient.mobile || '',
            alternateMobile: editPatient.alternateMobile || '',
            email: editPatient.email || '',

            addressLine1: editPatient.addressLine1 || '',
            addressLine2: editPatient.addressLine2 || '',
            city: editPatient.city || '',
            state: editPatient.state || '',
            pincode: editPatient.pincode || '',

            emergencyName: editPatient.emergencyName || '',
            emergencyRelation: editPatient.emergencyRelation || '',
            emergencyMobile: editPatient.emergencyMobile || '',

            hasInsurance: !!editPatient.hasInsurance,

            insuranceProvider: editPatient.insuranceProvider || '',
            policyNumber: editPatient.policyNumber || '',
            policyExpiry: (editPatient.policyExpiry || '').slice(0, 10),

            smsNotification: !!editPatient.smsNotification,
            whatsappNotification: !!editPatient.whatsappNotification,
            emailNotification: !!editPatient.emailNotification,
        };
    }


    patient = {

        firstName: '',
        lastName: '',

        dateOfBirth: '',
        age: null as number | null,

        gender: '',
        bloodGroup: '',

        maritalStatus: '',
        occupation: '',

        govtId: '',

        mobile: '',
        alternateMobile: '',
        email: '',

        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',

        emergencyName: '',
        emergencyRelation: '',
        emergencyMobile: '',

        hasInsurance: false,

        insuranceProvider: '',
        policyNumber: '',
        policyExpiry: '',

        smsNotification: true,
        whatsappNotification: true,
        emailNotification: false

    };


    get todayLabel(): string {
        return new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    }

    get submitButtonLabel(): string {
        if (this.isSubmitting) {
            return this.registrationType === 'existing'
                ? 'Updating...'
                : 'Registering...';
        }

        return this.registrationType === 'existing'
            ? 'Update Patient'
            : 'Register Patient';
    }


    getPatientName(): string {

        const firstName =
            this.patient.firstName.trim();

        const lastName =
            this.patient.lastName.trim();

        const name =
            `${firstName} ${lastName}`.trim();

        return name || 'New Patient';

    }


    allowNumbersOnly(event: KeyboardEvent): void {

        const navigationKeys = [
            'Backspace', 'Delete', 'Tab',
            'ArrowLeft', 'ArrowRight', 'Home', 'End',
        ];

        if (navigationKeys.includes(event.key)) {
            return;
        }

        if (!/^[0-9]$/.test(event.key)) {
            event.preventDefault();
        }

    }


    keepNumbersOnly(
        field: 'mobile' | 'alternateMobile' | 'pincode' | 'emergencyMobile',
        event: Event,
        maxLength?: number,
    ): void {

        const input = event.target as HTMLInputElement | null;

        if (!input) {
            return;
        }

        let cleaned = (input.value || '').replace(/[^0-9]/g, '');

        if (maxLength && cleaned.length > maxLength) {
            cleaned = cleaned.slice(0, maxLength);
        }

        if (cleaned !== input.value) {
            input.value = cleaned;
        }

        this.patient[field] = cleaned;

    }


    getInitials(): string {

        const first =
            this.patient.firstName
                ?.charAt(0)
                .toUpperCase() || '';

        const last =
            this.patient.lastName
                ?.charAt(0)
                .toUpperCase() || '';

        return (
            first + last
        ) || 'NP';

    }


    registerPatient(): void {
        this.submitError = '';
        this.submitSuccess = '';
        this.submitted = true;

        const isExisting = this.registrationType === 'existing';
        const existingId = this.patientId.trim();

        if (isExisting && !existingId) {
            this.submitError =
                'No patient selected. Please choose a patient from View Patients Edit option.';
            return;
        }

        if (
            !this.patient.firstName ||
            !this.patient.lastName ||
            !this.patient.mobile ||
            !this.patient.age ||
            !this.patient.gender ||
            !this.patient.addressLine1 ||
            !this.patient.city ||
            !this.patient.state ||
            !this.patient.pincode
        ) {

            return;
        }


        const payload: PatientRegistrationPayload = {

            ...(isExisting ? { patientRegistrationId: existingId } : {}),

            firstName: this.patient.firstName.trim(),
            lastName: this.patient.lastName.trim(),

            dateOfBirth: this.patient.dateOfBirth,
            age: this.patient.age,

            gender: this.patient.gender,
            bloodGroup: this.patient.bloodGroup,

            maritalStatus: this.patient.maritalStatus,
            occupation: this.patient.occupation.trim(),

            govtId: this.patient.govtId.trim(),

            mobile: this.patient.mobile.trim(),
            alternateMobile: this.patient.alternateMobile.trim(),
            email: this.patient.email.trim(),

            addressLine1: this.patient.addressLine1.trim(),
            addressLine2: this.patient.addressLine2.trim(),
            city: this.patient.city.trim(),
            state: this.patient.state,
            pincode: this.patient.pincode.trim(),

            emergencyName: this.patient.emergencyName.trim(),
            emergencyRelation: this.patient.emergencyRelation,
            emergencyMobile: this.patient.emergencyMobile.trim(),

            hasInsurance: this.patient.hasInsurance,

            insuranceProvider: this.patient.insuranceProvider.trim(),
            policyNumber: this.patient.policyNumber.trim(),
            policyExpiry: this.patient.policyExpiry,

            smsNotification: this.patient.smsNotification,
            whatsappNotification: this.patient.whatsappNotification,
            emailNotification: this.patient.emailNotification

        };


        console.log(
            'Patient Registration:',
            payload
        );

        this.isSubmitting = true;

        this.patientRegistrationService.registerPatient(payload).subscribe({
            next: (response) => {
                this.isSubmitting = false;
                if (response.patientRegistrationId) {
                    this.patientId = response.patientRegistrationId;
                }
                this.submitSuccess =
                    response.message || 'Patient registered successfully.';
                this.savedPatientId = this.patientId;
                this.resetPatientFields();
                // Clear the top search box + suggestions after save/update.
                this.searchMobile = '';
                this.matchedPatients = [];
                this.selectedMatchedId = '';
                this.comboOpen = false;
                this.lookupError = '';
                this.lookupSuccess = '';
                this.lastFetchedMobile = '';
                this.isSearching = false;
                this.showSuccessDialog = true;
            },
            error: (error: HttpErrorResponse) => {
                this.isSubmitting = false;
                this.submitError =
                    error.error?.message || 'Unable to register patient. Please try again.';
            },
        });

    }


    closeSuccessDialog(): void {
        this.showSuccessDialog = false;
    }


    private resetPatientFields(): void {
        this.submitted = false;

        this.patient = {

            firstName: '',
            lastName: '',

            dateOfBirth: '',
            age: null,

            gender: '',
            bloodGroup: '',

            maritalStatus: '',
            occupation: '',

            govtId: '',

            mobile: '',
            alternateMobile: '',
            email: '',

            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            pincode: '',

            emergencyName: '',
            emergencyRelation: '',
            emergencyMobile: '',

            hasInsurance: false,

            insuranceProvider: '',
            policyNumber: '',
            policyExpiry: '',

            smsNotification: true,
            whatsappNotification: true,
            emailNotification: false

        };

    }


    clearForm(keepLookupMobile = false): void {
        this.submitError = '';
        this.submitSuccess = '';
        this.submitted = false;
        this.showSuccessDialog = false;
        this.savedPatientId = '';
        if (!keepLookupMobile) {
            this.searchMobile = '';
            this.lookupError = '';
            this.lookupSuccess = '';
            this.isSearching = false;
            this.lastFetchedMobile = '';
            this.matchedPatients = [];
            this.selectedMatchedId = '';
            this.comboOpen = false;
        }

        this.patient = {

            firstName: '',
            lastName: '',

            dateOfBirth: '',
            age: null,

            gender: '',
            bloodGroup: '',

            maritalStatus: '',
            occupation: '',

            govtId: '',

            mobile: '',
            alternateMobile: '',
            email: '',

            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            pincode: '',

            emergencyName: '',
            emergencyRelation: '',
            emergencyMobile: '',

            hasInsurance: false,

            insuranceProvider: '',
            policyNumber: '',
            policyExpiry: '',

            smsNotification: true,
            whatsappNotification: true,
            emailNotification: false

        };

    }

}
