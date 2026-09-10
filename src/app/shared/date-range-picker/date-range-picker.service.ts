import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api.config';

@Injectable({ providedIn: 'root' })
export class DateRangePickerService {
  readonly endpoint = `${API_BASE_URL}/reports`; 

  constructor(private readonly http: HttpClient) {}
}
