import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CLIENT_CODE } from '../../shared/api.config';

export interface QueueRow {
  tokenId: number;
  token: string;
  appointmentId: number;
  appointmentNumber: string;
  patientName: string;
  age: number | null;
  gender: string;
  mobile: string | null;
  type: string;
  departmentId: number;
  department: string;
  doctor: string;
  appointmentTime: string;
  displayAppointmentTime: string;
  waitingMinutes: number;
  status: string;
}

export interface QueueSummary {
  waiting: number;
  serving: number;
  completed: number;
  noShow: number;
  averageWaitingMinutes: number;
  totalAppointments: number;
}

export interface QueueResponse {
  success: boolean;
  queue: QueueRow[];
  total: number;
  nowServing: (QueueRow & { elapsedMinutes: number }) | null;
  next: QueueRow | null;
  summary: QueueSummary;
  departmentId: number;
  date: string;
}

export interface TokenActionResponse {
  success: boolean;
  message: string;
  tokenId: number;
  appointmentId: number;
  action: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class QueueService {
  private readonly endpoint = `${API_BASE_URL}/queue`;

  constructor(private readonly http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ 'X-Client-Code': CLIENT_CODE });
  }

  getQueue(departmentId: number, date?: string): Observable<QueueResponse> {
    let params = new HttpParams().set('departmentId', String(departmentId));
    if (date) {
      params = params.set('date', date);
    }
    return this.http.get<QueueResponse>(this.endpoint, {
      headers: this.headers(),
      params,
    });
  }

  updateToken(
    tokenId: number,
    action: 'call' | 'start' | 'complete' | 'no-show',
  ): Observable<TokenActionResponse> {
    return this.http.patch<TokenActionResponse>(
      `${this.endpoint}/tokens/${tokenId}`,
      { action },
      { headers: this.headers() },
    );
  }
}
