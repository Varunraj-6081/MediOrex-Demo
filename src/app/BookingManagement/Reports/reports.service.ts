import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_BASE_URL, CLIENT_CODE } from "../../shared/api.config";

export interface ApiPatientReport {
  registrationId: string;
  name: string;
  age: number | null;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string | null;
  mobile: string;
  email: string | null;
  address: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  pincode: string | null;
  emergencyMobile: string | null;
  patientStatus: string | null;
  registeredOn: string;
}

export interface ApiTokenReport {
  token: string;
  appointmentNo: string;
  patient: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  type: string;
  status: string;
}

export interface PatientReportResponse {
  success: boolean;
  patients: ApiPatientReport[];
  total: number;
  from: string;
  to: string;
}

export interface TokenReportResponse {
  success: boolean;
  tokens: ApiTokenReport[];
  total: number;
  from: string;
  to: string;
}

export interface ReportSummaryResponse {
  success: boolean;
  totalPatients: number;
  totalAppointments: number;
  totalCancelledAppointments: number;
  totalBills: number;
  totalCancelledBills: number;
  totalBillAmount: number;
  appointmentStatus: {
    completed: number;
    waiting: number;
    cancelled: number;
    noShow: number;
  };
  paymentMethods: {
    cash: number;
    card: number;
    online: number;
    credit: number;
  };
  from: string;
  to: string;
}

@Injectable({ providedIn: "root" })
export class ReportsService {
  private readonly endpoint = `${API_BASE_URL}/reports`;

  constructor(private readonly http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }

  private params(from: string, to: string, search?: string): HttpParams {
    let params = new HttpParams().set("from", from).set("to", to);
    if (search?.trim()) {
      params = params.set("search", search.trim());
    }
    return params;
  }

  getPatientReport(
    from: string,
    to: string,
    search?: string,
  ): Observable<PatientReportResponse> {
    return this.http.get<PatientReportResponse>(`${this.endpoint}/patients`, {
      headers: this.headers(),
      params: this.params(from, to, search),
    });
  }

  getTokenReport(
    from: string,
    to: string,
    search?: string,
  ): Observable<TokenReportResponse> {
    return this.http.get<TokenReportResponse>(`${this.endpoint}/tokens`, {
      headers: this.headers(),
      params: this.params(from, to, search),
    });
  }

  getSummary(from: string, to: string): Observable<ReportSummaryResponse> {
    return this.http.get<ReportSummaryResponse>(`${this.endpoint}/summary`, {
      headers: this.headers(),
      params: this.params(from, to),
    });
  }
}
