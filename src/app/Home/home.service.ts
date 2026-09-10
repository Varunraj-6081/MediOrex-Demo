import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../shared/api.config';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private readonly endpoint = `${API_BASE_URL}/home`;

  constructor(private readonly http: HttpClient) {}

  getModules(): Observable<unknown> {
    return this.http.get(this.endpoint);
  }
}
