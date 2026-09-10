import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CLIENT_CODE } from '../../shared/api.config';

export interface LookupPatient {
  name: string;
  gender: string;
  age: number | null;
  uhid: string;
  phone: string;
}

export interface BillItemPayload {
  name: string;
  description: string;
  amount: number;
}

export interface BillPayload {
  patientUhid: string;
  appointmentId?: number | null;
  doctorId?: number | null;
  departmentId?: number | null;
  visitDate: string;
  consultationType: string;
  visitType: string;
  tokenNumber?: string;
  notes?: string;
  items: BillItemPayload[];
  discount?: number;
  paymentMode?: string;
  amountReceived?: number;
  sendBill?: boolean;
  generatedBy?: number | null;
}

export interface BillResponse {
  success: boolean;
  message: string;
  billId: number;
  billNumber: string;
  patientUhid: string;
  totalAmount: number;
  amountReceived: number;
  changeAmount: number;
  paymentStatus: string;
  itemCount: number;
}

export interface LookupConsultation {
  patient: LookupPatient;
  department: { departmentId: number; departmentName: string };
  doctor: { doctorId: number; name: string; consultationFee: string | null };
  appointment: {
    appointmentId: number;
    appointmentNumber: string;
    date: string;
    time: string;
    displayTime: string;
    consultationType: string | null;
  };
  token: {
    tokenId: number;
    tokenNumber: string;
    date: string;
    status: string;
  } | null;
  visitDate: string;
}

export interface LookupResponse {
  success: boolean;
  consultations: LookupConsultation[];
  total: number;
  visitDate: string;
}

@Injectable({ providedIn: 'root' })
export class GenerateBillService {
  private readonly endpoint = `${API_BASE_URL}/billing`;

  constructor(private readonly http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ 'X-Client-Code': CLIENT_CODE });
  }

  lookup(search: string): Observable<LookupResponse> {
    const value = (search || '').trim();
    let params = new HttpParams();
    if (/^TK/i.test(value)) {
      params = params.set('token', value.toUpperCase());
    } else {
      params = params.set('mobile', value.replace(/\D/g, '').slice(-10));
    }
    return this.http.get<LookupResponse>(`${this.endpoint}/lookup`, {
      headers: this.headers(),
      params,
    });
  }

  searchPatient(search: string): Observable<unknown> {
    return this.http.get(`${API_BASE_URL}/patients`, { params: { search } });
  }

  createBill(payload: BillPayload): Observable<BillResponse> {
    return this.http.post<BillResponse>(this.endpoint, payload, {
      headers: this.headers(),
    });
  }
}
