import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-BLZA3SWA.js";

// src/app/shared/auth/auth.service.ts
var AUTH_STORAGE_KEY = "mediorex_authenticated";
var USER_STORAGE_KEY = "mediorex_user";
var AuthService = class _AuthService {
  authenticated = signal(localStorage.getItem(AUTH_STORAGE_KEY) === "true");
  currentUser = signal(this.readUser());
  user = this.currentUser.asReadonly();
  isAuthenticated = this.authenticated.asReadonly();
  constructor() {
    window.addEventListener("storage", (event) => {
      if (event.key === AUTH_STORAGE_KEY || event.key === USER_STORAGE_KEY) {
        this.authenticated.set(localStorage.getItem(AUTH_STORAGE_KEY) === "true");
        this.currentUser.set(this.readUser());
      }
    });
  }
  isLoggedIn() {
    return this.authenticated();
  }
  login(user) {
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    this.authenticated.set(true);
    this.currentUser.set(user);
  }
  getUser() {
    return this.currentUser();
  }
  logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    this.authenticated.set(false);
    this.currentUser.set(null);
  }
  readUser() {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (!storedUser) {
      return null;
    }
    try {
      return JSON.parse(storedUser);
    } catch {
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-R4WLTVLJ.js.map
