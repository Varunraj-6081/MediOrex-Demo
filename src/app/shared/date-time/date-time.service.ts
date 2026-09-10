import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api.config';

@Injectable({ providedIn: 'root' })
export class DateTimeService {
  readonly endpoint = `${API_BASE_URL}/system/time`;

  constructor(private readonly http: HttpClient) {}
}
