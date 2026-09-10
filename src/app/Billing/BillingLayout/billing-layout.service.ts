import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../shared/api.config';

@Injectable({ providedIn: 'root' })
export class BillingLayoutService {
  readonly endpoint = `${API_BASE_URL}/billing`;

  constructor(private readonly http: HttpClient) {}
}
