import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api.config';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  readonly endpoint = `${API_BASE_URL}/users`;

  constructor(private readonly http: HttpClient) {}
}
