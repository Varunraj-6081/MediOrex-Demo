import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_BASE_URL } from "../../shared/api.config";

export interface ApiUser {
  userId: number;
  username: string;
  email: string | null;
  firstName: string;
  lastName: string | null;
  mobileNumber: string | null;
  status: string;
  lastLoginAt: string | null;
  roles: string[];
}

export interface UsersResponse {
  success: boolean;
  users: ApiUser[];
  total: number;
}

export interface ApiRole {
  roleId: number;
  roleCode: string;
  roleName: string;
}

export interface RolesResponse {
  success: boolean;
  roles: ApiRole[];
  total: number;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string | null;
  role: string;
  username: string;
  password: string;
  active: boolean;
}

export interface CreateUserResponse {
  success: boolean;
  message: string;
  user: ApiUser;
}

export interface UpdateUserRequest extends Omit<CreateUserRequest, "password"> {
  userId: number;
  password: string;
}

export interface UpdateUserResponse {
  success: boolean;
  message: string;
}

export interface DeleteUserResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: "root" })
export class UsersService {
  private readonly endpoint = `${API_BASE_URL}/users`;

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.endpoint);
  }

  getRoles(): Observable<RolesResponse> {
    return this.http.get<RolesResponse>(`${this.endpoint}/roles`);
  }

  createUser(payload: CreateUserRequest): Observable<CreateUserResponse> {
    return this.http.post<CreateUserResponse>(this.endpoint, payload);
  }

  updateUser(payload: UpdateUserRequest): Observable<UpdateUserResponse> {
    return this.http.put<UpdateUserResponse>(
      `${this.endpoint}/${payload.userId}`,
      payload,
    );
  }

  deleteUser(userId: number): Observable<DeleteUserResponse> {
    return this.http.delete<DeleteUserResponse>(`${this.endpoint}/${userId}`);
  }
}
