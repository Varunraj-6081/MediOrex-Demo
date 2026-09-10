import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../shared/api.config';

@Injectable({ providedIn: 'root' })
export class PatientLayoutService {
  readonly endpoint = `${API_BASE_URL}/patients`;

  constructor(private readonly http: HttpClient) { }
}
