import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from './shared/api.config';

@Injectable({ providedIn: 'root' })
export class AppService {
  readonly apiUrl = API_BASE_URL;

  constructor(private readonly http: HttpClient) {}
}
