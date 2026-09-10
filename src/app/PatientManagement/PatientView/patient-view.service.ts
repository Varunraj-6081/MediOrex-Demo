import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CLIENT_CODE } from '../../shared/api.config';

export interface ApiPatient {
  patientId: number;
  patientRegistrationId: string;
  firstName: string;
  lastName: string | null;
  dateOfBirth: string | null;
  age: number | null;
  gender: string;
  bloodGroup: string | null;
  maritalStatus: string | null;
  occupation: string | null;
  govtId: string | null;
  mobile: string;
  alternateMobile: string | null;
  email: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: string | null;
  pincode: string | null;
  emergencyName: string | null;
  emergencyRelation: string | null;
  emergencyMobile: string | null;
  hasInsurance: boolean;
  insuranceProvider: string | null;
  policyNumber: string | null;
  policyExpiry: string | null;
  smsNotification: boolean;
  whatsappNotification: boolean;
  emailNotification: boolean;
  status: string;
  registeredAt: string;
}

export interface PatientListResponse {
  success: boolean;
  patients: ApiPatient[];
  total: number;
  page: number;
  pageSize: number;
}

export interface PatientListFilters {
  from: string;
  to: string;
  search?: string;
  page: number;
  pageSize: number;
}

@Injectable({ providedIn: 'root' })
export class PatientViewService {
  private readonly endpoint = `${API_BASE_URL}/patients`;

  constructor(private readonly http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ 'X-Client-Code': CLIENT_CODE });
  }

  getPatients(filters: PatientListFilters): Observable<PatientListResponse> {
    let params = new HttpParams()
      .set('from', filters.from)
      .set('to', filters.to)
      .set('page', String(filters.page))
      .set('pageSize', String(filters.pageSize));

    if (filters.search?.trim()) {
      params = params.set('search', filters.search.trim());
    }

    return this.http.get<PatientListResponse>(this.endpoint, {
      headers: this.headers(),
      params,
    });
  }
}
