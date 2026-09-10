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

// src/app/PatientManagement/PatientRegistration/patient-registration.service.ts
var PatientRegistrationService = class _PatientRegistrationService {
  http;
  endpoint = `${API_BASE_URL}/patients`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }
  registerPatient(payload) {
    return this.http.post(this.endpoint, payload, {
      headers: this.headers()
    });
  }
  getPatient(patientId) {
    return this.http.get(`${this.endpoint}/${patientId}`, {
      headers: this.headers()
    });
  }
  getLatestPatientRegistrationId() {
    return this.http.get(`${this.endpoint}/latest`, {
      headers: this.headers()
    });
  }
  getPatientByMobile(mobile) {
    const params = new HttpParams().set("mobile", mobile.trim());
    return this.http.get(`${this.endpoint}/by-mobile`, {
      headers: this.headers(),
      params
    });
  }
  static \u0275fac = function PatientRegistrationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientRegistrationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PatientRegistrationService, factory: _PatientRegistrationService.\u0275fac, providedIn: "root" });
};

export {
  PatientRegistrationService
};
//# sourceMappingURL=chunk-KGCK5YBE.js.map
