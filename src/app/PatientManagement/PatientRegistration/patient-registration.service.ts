import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CLIENT_CODE } from '../../shared/api.config';
import type { ApiPatient } from '../PatientView/patient-view.service';

export interface PatientRegistrationPayload {
  patientRegistrationId?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  age: number | null;
  gender: string;
  bloodGroup: string;
  maritalStatus: string;
  occupation: string;
  govtId: string;
  mobile: string;
  alternateMobile: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
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
}

export interface PatientRegistrationResponse {
  success: boolean;
  message: string;
  patientRegistrationId: string;
}

export interface LatestPatientResponse {
  success: boolean;
  patientRegistrationId: string | null;
}

export interface PatientByMobileResponse {
  success: boolean;
  patients: ApiPatient[];
  total: number;
  patient?: ApiPatient;
}

@Injectable({ providedIn: 'root' })
export class PatientRegistrationService {
  private readonly endpoint = `${API_BASE_URL}/patients`;

  constructor(private readonly http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ 'X-Client-Code': CLIENT_CODE });
  }

  registerPatient(payload: PatientRegistrationPayload): Observable<PatientRegistrationResponse> {
    return this.http.post<PatientRegistrationResponse>(this.endpoint, payload, {
      headers: this.headers(),
    });
  }

  getPatient(patientId: number): Observable<unknown> {
    return this.http.get(`${this.endpoint}/${patientId}`, {
      headers: this.headers(),
    });
  }

  getLatestPatientRegistrationId(): Observable<LatestPatientResponse> {
    return this.http.get<LatestPatientResponse>(`${this.endpoint}/latest`, {
      headers: this.headers(),
    });
  }

  getPatientByMobile(mobile: string): Observable<PatientByMobileResponse> {
    const params = new HttpParams().set('mobile', mobile.trim());
    return this.http.get<PatientByMobileResponse>(`${this.endpoint}/by-mobile`, {
      headers: this.headers(),
      params,
    });
  }
}
