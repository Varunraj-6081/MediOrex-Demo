import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, CLIENT_CODE } from '../shared/api.config';

export interface LoginUser {
  user_id: number;
  username: string;
  email: string | null;
  first_name: string;
  last_name: string | null;
  role_name: string | null;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user: LoginUser;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly endpoint = `${API_BASE_URL}/auth`;

  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'X-Client-Code': CLIENT_CODE });
    return this.http.post<LoginResponse>(
      `${this.endpoint}/login`,
      {
        username,
        password,
      },
      { headers },
    );
  }
}
