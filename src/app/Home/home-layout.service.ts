import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../shared/api.config';

@Injectable({ providedIn: 'root' })
export class HomeLayoutService {
  readonly endpoint = `${API_BASE_URL}/home`;

  constructor(private readonly http: HttpClient) {}
}
