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

// src/app/Billing/View/view.service.ts
var ViewBillsService = class _ViewBillsService {
  http;
  endpoint = `${API_BASE_URL}/billing`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }
  getBills(from, to, search, page, pageSize) {
    let params = new HttpParams().set("from", from).set("to", to);
    if (search?.trim()) {
      params = params.set("search", search.trim());
    }
    if (page !== void 0 && page !== null) {
      params = params.set("page", String(page));
    }
    if (pageSize !== void 0 && pageSize !== null) {
      params = params.set("pageSize", String(pageSize));
    }
    return this.http.get(this.endpoint, {
      headers: this.headers(),
      params
    });
  }
  getBill(billId) {
    return this.http.get(`${this.endpoint}/${billId}`, {
      headers: this.headers()
    });
  }
  cancelBill(billId) {
    return this.http.patch(`${this.endpoint}/${billId}/cancel`, {}, { headers: this.headers() });
  }
  static \u0275fac = function ViewBillsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewBillsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewBillsService, factory: _ViewBillsService.\u0275fac, providedIn: "root" });
};

export {
  ViewBillsService
};
//# sourceMappingURL=chunk-XDPLEQDW.js.map
