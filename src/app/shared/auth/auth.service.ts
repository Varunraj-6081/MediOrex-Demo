import { Injectable, signal } from "@angular/core";
import type { LoginUser } from "../../login/login.service";

const AUTH_STORAGE_KEY = "mediorex_authenticated";
const USER_STORAGE_KEY = "mediorex_user";

@Injectable({ providedIn: "root" })
export class AuthService {
  private readonly authenticated = signal<boolean>(
    localStorage.getItem(AUTH_STORAGE_KEY) === "true",
  );
  private readonly currentUser = signal<LoginUser | null>(this.readUser());

  readonly user = this.currentUser.asReadonly();
  readonly isAuthenticated = this.authenticated.asReadonly();

  constructor() {
    // Sync login/logout across open tabs.
    window.addEventListener("storage", (event) => {
      if (event.key === AUTH_STORAGE_KEY || event.key === USER_STORAGE_KEY) {
        this.authenticated.set(localStorage.getItem(AUTH_STORAGE_KEY) === "true");
        this.currentUser.set(this.readUser());
      }
    });
  }

  isLoggedIn(): boolean {
    return this.authenticated();
  }

  login(user: LoginUser): void {
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    this.authenticated.set(true);
    this.currentUser.set(user);
  }

  getUser(): LoginUser | null {
    return this.currentUser();
  }

  logout(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    this.authenticated.set(false);
    this.currentUser.set(null);
  }

  private readUser(): LoginUser | null {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser) as LoginUser;
    } catch {
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  }
}
