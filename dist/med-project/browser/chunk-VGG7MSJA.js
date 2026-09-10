import {
  API_BASE_URL,
  CLIENT_CODE
} from "./chunk-OCZWZWFA.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BLZA3SWA.js";

// src/app/BookingManagement/Booking/booking-appointment.service.ts
var BookingAppointmentService = class _BookingAppointmentService {
  http;
  endpoint = `${API_BASE_URL}/appointments`;
  mastersEndpoint = `${API_BASE_URL}/masters`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }
  getAppointments(date) {
    let params = new HttpParams();
    if (date) {
      params = params.set("date", date);
    }
    return this.http.get(this.endpoint, {
      headers: this.headers(),
      params
    });
  }
  createAppointment(payload) {
    return this.http.post(this.endpoint, payload, {
      headers: this.headers()
    });
  }
  cancelAppointment(appointmentId) {
    return this.http.patch(`${this.endpoint}/${appointmentId}/cancel`, {}, {
      headers: this.headers()
    });
  }
  getDepartments() {
    return this.http.get(`${this.mastersEndpoint}/departments`, {
      headers: this.headers()
    });
  }
  getDoctors(departmentId) {
    let params = new HttpParams();
    if (departmentId !== void 0 && departmentId !== null) {
      params = params.set("departmentId", String(departmentId));
    }
    return this.http.get(`${this.mastersEndpoint}/doctors`, {
      headers: this.headers(),
      params
    });
  }
  static \u0275fac = function BookingAppointmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookingAppointmentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingAppointmentService, factory: _BookingAppointmentService.\u0275fac, providedIn: "root" });
};

export {
  BookingAppointmentService
};
//# sourceMappingURL=chunk-VGG7MSJA.js.map
