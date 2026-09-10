import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_BASE_URL } from "../../shared/api.config";

export interface ClinicDetails {
  name: string;
  shortName: string;
  type: string;
  tagline: string;
  website: string;
  email: string;
  phone: string;
  alternatePhone: string;
  registrationNumber: string;
  licenseNumber: string;
  establishedYear: number | null;
  timeZone: string;
  slotDuration: string;
  lunchStart: string;
  lunchEnd: string;
  timeFormat: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  description: string;
}

export interface OrganizationDetails {
  id: number;
  code: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

export interface WorkingHour {
  dayOfWeek: number;
  start: string;
  end: string;
  closed: boolean;
}

export interface ClinicResponse {
  success: boolean;
  clinic: ClinicDetails;
  organization: OrganizationDetails;
  workingHours: WorkingHour[];
}

@Injectable({ providedIn: "root" })
export class ClinicDetailsService {
  private readonly endpoint = `${API_BASE_URL}/clinic`;

  constructor(private readonly http: HttpClient) {}

  getDetails(): Observable<ClinicResponse> {
    return this.http.get<ClinicResponse>(this.endpoint);
  }

  saveDetails(
    payload: Omit<ClinicResponse, "success">,
  ): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(
      this.endpoint,
      payload,
    );
  }
}
