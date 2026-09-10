import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CLIENT_CODE } from '../../shared/api.config';

export interface ApiBillItem {
  name: string;
  description: string | null;
  amount: number;
}

export interface ApiBill {
  billId: number;
  billNo: string;
  date: string;
  time: string;
  patientName: string;
  uhid: string;
  age: number | null;
  gender: string;
  phone: string;
  department: string | null;
  doctor: string;
  tokenNo: string;
  consultationType: string;
  visitType: string;
  amount: number;
  paymentMode: string;
  status: string;
  subtotal: number;
  discount: number;
  change: number;
  items: ApiBillItem[];
}

export interface CancelBillResponse {
  success: boolean;
  message: string;
  billId: number;
  billNumber: string;
  status: string;
}

export interface BillListResponse {
  success: boolean;
  bills: ApiBill[];
  total: number;
  page: number;
  pageSize: number;
  totalRevenue: number;
  from: string;
  to: string;
}

@Injectable({ providedIn: 'root' })
export class ViewBillsService {
  private readonly endpoint = `${API_BASE_URL}/billing`;

  constructor(private readonly http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ 'X-Client-Code': CLIENT_CODE });
  }

  getBills(
    from: string,
    to: string,
    search?: string,
    page?: number,
    pageSize?: number,
  ): Observable<BillListResponse> {
    let params = new HttpParams().set('from', from).set('to', to);
    if (search?.trim()) {
      params = params.set('search', search.trim());
    }
    if (page !== undefined && page !== null) {
      params = params.set('page', String(page));
    }
    if (pageSize !== undefined && pageSize !== null) {
      params = params.set('pageSize', String(pageSize));
    }
    return this.http.get<BillListResponse>(this.endpoint, {
      headers: this.headers(),
      params,
    });
  }

  getBill(billId: number): Observable<unknown> {
    return this.http.get(`${this.endpoint}/${billId}`, {
      headers: this.headers(),
    });
  }

  cancelBill(billId: number): Observable<CancelBillResponse> {
    return this.http.patch<CancelBillResponse>(
      `${this.endpoint}/${billId}/cancel`,
      {},
      { headers: this.headers() },
    );
  }
}
