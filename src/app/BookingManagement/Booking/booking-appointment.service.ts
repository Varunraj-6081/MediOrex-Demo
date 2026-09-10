import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CLIENT_CODE } from '../../shared/api.config';

export interface Department {
  departmentId: number;
  departmentCode: string;
  departmentName: string;
  description: string | null;
}

export interface Doctor {
  doctorId: number;
  doctorCode: string;
  name: string;
  firstName: string;
  lastName: string | null;
  specialization: string | null;
  qualification: string | null;
  consultationFee: string | null;
  departmentId: number;
  departmentName: string;
}

export interface DepartmentsResponse {
  success: boolean;
  departments: Department[];
  total: number;
}

export interface DoctorsResponse {
  success: boolean;
  doctors: Doctor[];
  total: number;
}

export interface DayAppointment {
  appointmentId: number;
  appointmentNumber: string;
  date: string;
  time: string;
  displayTime: string;
  bookingType: string;
  bookingMode: string;
  consultationType: string | null;
  reason: string | null;
  status: string;
  token: string;
  tokenStatus: string | null;
  patientName: string;
  patientRegistrationId: string;
  mobile: string;
  age: number | null;
  gender: string;
  department: string;
  doctor: string;
}

export interface DayAppointmentsResponse {
  success: boolean;
  appointments: DayAppointment[];
  total: number;
  date: string;
}

export interface AppointmentPayload {
  patientType: 'existing' | 'new';
  patientRegistrationId?: string;
  name?: string;
  mobile?: string;
  age?: number | null;
  sex?: string;
  address?: string;
  departmentId?: number | null;
  doctorId?: number | null;
  appointmentDate?: string;
  appointmentTime?: string;
  bookingMode?: string;
  consultationType?: string;
  remarks?: string;
}

export interface CancelResponse {
  success: boolean;
  message: string;
  appointmentId: number;
  appointmentNumber: string;
  status: string;
  tokensCancelled: number;
  tokens: string[];
}

export interface BookingResponse {
  success: boolean;
  message: string;
  appointmentId: number;
  appointmentNumber: string;
  tokenId: number;
  tokenNumber: string;
  tokenDate: string;
  patientId: number;
  patientRegistrationId: string;
  patientUpdated: boolean;
  status: string;
  bookingType: string;
}

@Injectable({ providedIn: 'root' })
export class BookingAppointmentService {
  private readonly endpoint = `${API_BASE_URL}/appointments`;
  private readonly mastersEndpoint = `${API_BASE_URL}/masters`;

  constructor(private readonly http: HttpClient) { }

  private headers(): HttpHeaders {
    return new HttpHeaders({ 'X-Client-Code': CLIENT_CODE });
  }

  getAppointments(date?: string): Observable<DayAppointmentsResponse> {
    let params = new HttpParams();
    if (date) {
      params = params.set('date', date);
    }
    return this.http.get<DayAppointmentsResponse>(this.endpoint, {
      headers: this.headers(),
      params,
    });
  }

  createAppointment(payload: AppointmentPayload): Observable<BookingResponse> {
    return this.http.post<BookingResponse>(this.endpoint, payload, {
      headers: this.headers(),
    });
  }

  cancelAppointment(appointmentId: number): Observable<CancelResponse> {
    return this.http.patch<CancelResponse>(`${this.endpoint}/${appointmentId}/cancel`, {}, {
      headers: this.headers(),
    });
  }

  getDepartments(): Observable<DepartmentsResponse> {
    return this.http.get<DepartmentsResponse>(`${this.mastersEndpoint}/departments`, {
      headers: this.headers(),
    });
  }

  getDoctors(departmentId?: number | null): Observable<DoctorsResponse> {
    let params = new HttpParams();
    if (departmentId !== undefined && departmentId !== null) {
      params = params.set('departmentId', String(departmentId));
    }
    return this.http.get<DoctorsResponse>(`${this.mastersEndpoint}/doctors`, {
      headers: this.headers(),
      params,
    });
  }
}
