import {
  ViewBillsService
} from "./chunk-XDPLEQDW.js";
import {
  DateRangePickerComponent
} from "./chunk-Y3YC6K6G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GFRD3CSB.js";
import {
  API_BASE_URL,
  CLIENT_CODE
} from "./chunk-OCZWZWFA.js";
import {
  CommonModule,
  DecimalPipe,
  HttpClient,
  HttpHeaders,
  HttpParams,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BLZA3SWA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/BookingManagement/Reports/reports.service.ts
var ReportsService = class _ReportsService {
  http;
  endpoint = `${API_BASE_URL}/reports`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }
  params(from, to, search) {
    let params = new HttpParams().set("from", from).set("to", to);
    if (search?.trim()) {
      params = params.set("search", search.trim());
    }
    return params;
  }
  getPatientReport(from, to, search) {
    return this.http.get(`${this.endpoint}/patients`, {
      headers: this.headers(),
      params: this.params(from, to, search)
    });
  }
  getTokenReport(from, to, search) {
    return this.http.get(`${this.endpoint}/tokens`, {
      headers: this.headers(),
      params: this.params(from, to, search)
    });
  }
  getSummary(from, to) {
    return this.http.get(`${this.endpoint}/summary`, {
      headers: this.headers(),
      params: this.params(from, to)
    });
  }
  static \u0275fac = function ReportsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsService, factory: _ReportsService.\u0275fac, providedIn: "root" });
};

// src/app/BookingManagement/Reports/reports.component.ts
function ReportsAnalyticsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "app-date-range-picker", 10);
    \u0275\u0275listener("dateRangeChange", function ReportsAnalyticsComponent_div_11_Template_app_date_range_picker_dateRangeChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateRangeChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 11);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshReport());
    });
    \u0275\u0275elementStart(3, "i", 4);
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("startDate", ctx_r1.reportStartDate)("endDate", ctx_r1.reportEndDate);
  }
}
function ReportsAnalyticsComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_button_13_Template_button_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTab(tab_r4.id));
    });
    \u0275\u0275elementStart(1, "i", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeTab === tab_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r4.label, " ");
  }
}
function ReportsAnalyticsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "i", 4);
    \u0275\u0275text(5, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "span", 17);
    \u0275\u0275text(8, "Total Patients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 19)(13, "div", 15)(14, "i", 4);
    \u0275\u0275text(15, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "span", 17);
    \u0275\u0275text(18, "Total Appointments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 15)(24, "i", 4);
    \u0275\u0275text(25, "event_busy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 16)(27, "span", 17);
    \u0275\u0275text(28, "Cancelled Appointments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18)(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 21)(33, "div", 15)(34, "i", 4);
    \u0275\u0275text(35, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 16)(37, "span", 17);
    \u0275\u0275text(38, "Total Bills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 18)(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 22)(43, "div", 15)(44, "i", 4);
    \u0275\u0275text(45, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 16)(47, "span", 17);
    \u0275\u0275text(48, "Total Bill Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 18)(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 23)(53, "div", 15)(54, "i", 4);
    \u0275\u0275text(55, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 16)(57, "span", 17);
    \u0275\u0275text(58, "Cancelled Bills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 18)(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "div", 24)(63, "section", 25)(64, "div", 26)(65, "h2");
    \u0275\u0275text(66, "Appointment Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 27)(68, "div", 28)(69, "div", 29)(70, "div", 30)(71, "span");
    \u0275\u0275element(72, "i", 31);
    \u0275\u0275text(73, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "strong");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 32);
    \u0275\u0275element(77, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 29)(79, "div", 30)(80, "span");
    \u0275\u0275element(81, "i", 34);
    \u0275\u0275text(82, "Waiting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "strong");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 32);
    \u0275\u0275element(86, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 29)(88, "div", 30)(89, "span");
    \u0275\u0275element(90, "i", 36);
    \u0275\u0275text(91, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "strong");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 32);
    \u0275\u0275element(95, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 29)(97, "div", 30)(98, "span");
    \u0275\u0275element(99, "i", 38);
    \u0275\u0275text(100, "No Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "strong");
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 32);
    \u0275\u0275element(104, "span", 39);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(105, "section", 40)(106, "div", 26)(107, "div")(108, "span", 41);
    \u0275\u0275text(109, "Billing overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "h2");
    \u0275\u0275text(111, "Payment Method Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "span", 42);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 43)(115, "div", 44)(116, "div", 45)(117, "div", 46)(118, "strong");
    \u0275\u0275text(119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "span");
    \u0275\u0275text(121, "Total Bills");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(122, "div", 47)(123, "div", 48);
    \u0275\u0275element(124, "span", 49);
    \u0275\u0275elementStart(125, "span", 50);
    \u0275\u0275text(126, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "strong");
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 48);
    \u0275\u0275element(130, "span", 51);
    \u0275\u0275elementStart(131, "span", 50);
    \u0275\u0275text(132, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "strong");
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 48);
    \u0275\u0275element(136, "span", 52);
    \u0275\u0275elementStart(137, "span", 50);
    \u0275\u0275text(138, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "strong");
    \u0275\u0275text(140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 48);
    \u0275\u0275element(142, "span", 53);
    \u0275\u0275elementStart(143, "span", 50);
    \u0275\u0275text(144, "Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "strong");
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.reportData.totalPatients);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.reportData.totalAppointments);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.reportData.totalCancelledAppointments);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.reportData.totalBills);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatBillAmount(ctx_r1.reportData.totalBillAmount));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.reportData.totalCancelledBills);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStatus.completed);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.percentage(ctx_r1.appointmentStatus.completed, ctx_r1.appointmentStatusTotal()), "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStatus.waiting);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.percentage(ctx_r1.appointmentStatus.waiting, ctx_r1.appointmentStatusTotal()), "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStatus.cancelled);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.percentage(ctx_r1.appointmentStatus.cancelled, ctx_r1.appointmentStatusTotal()), "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStatus.noShow);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.percentage(ctx_r1.appointmentStatus.noShow, ctx_r1.appointmentStatusTotal()), "%");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.reportData.totalBills, " bills tracked");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.paymentDonutStyle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.reportData.totalBills);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.paymentMethods.cash, " (", ctx_r1.percentage(ctx_r1.paymentMethods.cash, ctx_r1.paymentMethodTotal()), "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.paymentMethods.card, " (", ctx_r1.percentage(ctx_r1.paymentMethods.card, ctx_r1.paymentMethodTotal()), "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.paymentMethods.online, " (", ctx_r1.percentage(ctx_r1.paymentMethods.online, ctx_r1.paymentMethodTotal()), "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.paymentMethods.credit, " (", ctx_r1.percentage(ctx_r1.paymentMethods.credit, ctx_r1.paymentMethodTotal()), "%)");
  }
}
function ReportsAnalyticsComponent_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.patientError);
  }
}
function ReportsAnalyticsComponent_div_15_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 71);
    \u0275\u0275text(2, "Loading patient report...");
    \u0275\u0275elementEnd()();
  }
}
function ReportsAnalyticsComponent_div_15_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.registrationId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (tmp_5_0 = row_r6.age) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2014", " / ", row_r6.gender || "\u2014", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.dateOfBirth || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.bloodGroup || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.mobile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.address || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.address2 || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.city || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.state || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.pincode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.emergencyMobile || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.patientStatus || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.registeredOn);
  }
}
function ReportsAnalyticsComponent_div_15_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2, " No patient records for this period. ");
    \u0275\u0275elementEnd()();
  }
}
function ReportsAnalyticsComponent_div_15_option_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", size_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r7, " / page ");
  }
}
function ReportsAnalyticsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 54)(2, "div", 55)(3, "i", 4);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsAnalyticsComponent_div_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.patientSearch, $event) || (ctx_r1.patientSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ReportsAnalyticsComponent_div_15_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patientPage = 1);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-date-range-picker", 10);
    \u0275\u0275listener("dateRangeChange", function ReportsAnalyticsComponent_div_15_Template_app_date_range_picker_dateRangeChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPatientDateRangeChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadPatients());
    });
    \u0275\u0275elementStart(8, "i", 4);
    \u0275\u0275text(9, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 57);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPatients());
    });
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Export ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ReportsAnalyticsComponent_div_15_div_14_Template, 2, 1, "div", 58);
    \u0275\u0275elementStart(15, "div", 59)(16, "div", 60)(17, "h2");
    \u0275\u0275text(18, "Patient Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 61)(22, "table")(23, "thead")(24, "tr")(25, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("registrationId"));
    });
    \u0275\u0275text(26, " Registration ID ");
    \u0275\u0275elementStart(27, "i", 63);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("name"));
    });
    \u0275\u0275text(30, " Patient Name ");
    \u0275\u0275elementStart(31, "i", 63);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("age"));
    });
    \u0275\u0275text(34, " Age / Sex ");
    \u0275\u0275elementStart(35, "i", 63);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_37_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("dateOfBirth"));
    });
    \u0275\u0275text(38, " Date of Birth ");
    \u0275\u0275elementStart(39, "i", 63);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_41_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("bloodGroup"));
    });
    \u0275\u0275text(42, " Blood Group ");
    \u0275\u0275elementStart(43, "i", 63);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_45_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("mobile"));
    });
    \u0275\u0275text(46, " Mobile Number ");
    \u0275\u0275elementStart(47, "i", 63);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_49_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("email"));
    });
    \u0275\u0275text(50, " Email ");
    \u0275\u0275elementStart(51, "i", 63);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_53_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("address"));
    });
    \u0275\u0275text(54, " Address 1 ");
    \u0275\u0275elementStart(55, "i", 63);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_57_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("address2"));
    });
    \u0275\u0275text(58, " Address 2 ");
    \u0275\u0275elementStart(59, "i", 63);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_61_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("city"));
    });
    \u0275\u0275text(62, " City ");
    \u0275\u0275elementStart(63, "i", 63);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_65_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("state"));
    });
    \u0275\u0275text(66, " State ");
    \u0275\u0275elementStart(67, "i", 63);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_69_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("pincode"));
    });
    \u0275\u0275text(70, " Pincode ");
    \u0275\u0275elementStart(71, "i", 63);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_73_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("emergencyMobile"));
    });
    \u0275\u0275text(74, " Emergency Contact ");
    \u0275\u0275elementStart(75, "i", 63);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_77_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("patientStatus"));
    });
    \u0275\u0275text(78, " Status ");
    \u0275\u0275elementStart(79, "i", 63);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_th_click_81_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortPatients("registeredOn"));
    });
    \u0275\u0275text(82, " Registered On ");
    \u0275\u0275elementStart(83, "i", 63);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "tbody");
    \u0275\u0275template(86, ReportsAnalyticsComponent_div_15_tr_86_Template, 3, 0, "tr", 8)(87, ReportsAnalyticsComponent_div_15_tr_87_Template, 31, 16, "tr", 64)(88, ReportsAnalyticsComponent_div_15_tr_88_Template, 3, 0, "tr", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "div", 65)(90, "span");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 66)(93, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsAnalyticsComponent_div_15_Template_select_ngModelChange_93_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.patientPageSize, $event) || (ctx_r1.patientPageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReportsAnalyticsComponent_div_15_Template_select_ngModelChange_93_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPatientPageSizeChange());
    });
    \u0275\u0275template(94, ReportsAnalyticsComponent_div_15_option_94_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "button", 69);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patientPrevPage());
    });
    \u0275\u0275text(96, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 69);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_15_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patientNextPage());
    });
    \u0275\u0275text(100, " \u203A ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patientSearch);
    \u0275\u0275advance();
    \u0275\u0275property("startDate", ctx_r1.patientStart)("endDate", ctx_r1.patientEnd);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.patientError);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredPatients.length, " records");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "registrationId");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "registrationId", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "name");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "name", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "age");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "age", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "dateOfBirth");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "dateOfBirth", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "bloodGroup");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "bloodGroup", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "mobile");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "mobile", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "email");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "email", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "address");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "address", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "address2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "address2", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "city");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "city", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "state");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "state", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "pincode");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "pincode", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "emergencyMobile");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "emergencyMobile", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "patientStatus");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "patientStatus", ctx_r1.patientSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.patientSortKey === "registeredOn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.patientSortKey, "registeredOn", ctx_r1.patientSortDir));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.patientPagedRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingPatients && ctx_r1.filteredPatients.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.patientRangeLabel());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patientPageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.patientPage <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.patientPage, " / ", ctx_r1.patientTotalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.patientPage >= ctx_r1.patientTotalPages());
  }
}
function ReportsAnalyticsComponent_div_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tokenError);
  }
}
function ReportsAnalyticsComponent_div_16_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275text(2, "Loading token report...");
    \u0275\u0275elementEnd()();
  }
}
function ReportsAnalyticsComponent_div_16_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.token);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.appointmentNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.department);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.doctor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.status);
  }
}
function ReportsAnalyticsComponent_div_16_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275text(2, " No token records for this period. ");
    \u0275\u0275elementEnd()();
  }
}
function ReportsAnalyticsComponent_div_16_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", size_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r10, " / page ");
  }
}
function ReportsAnalyticsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 54)(2, "div", 55)(3, "i", 4);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsAnalyticsComponent_div_16_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tokenSearch, $event) || (ctx_r1.tokenSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ReportsAnalyticsComponent_div_16_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tokenPage = 1);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-date-range-picker", 10);
    \u0275\u0275listener("dateRangeChange", function ReportsAnalyticsComponent_div_16_Template_app_date_range_picker_dateRangeChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTokenDateRangeChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadTokens());
    });
    \u0275\u0275elementStart(8, "i", 4);
    \u0275\u0275text(9, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 57);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportTokens());
    });
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Export ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ReportsAnalyticsComponent_div_16_div_14_Template, 2, 1, "div", 58);
    \u0275\u0275elementStart(15, "div", 59)(16, "div", 60)(17, "h2");
    \u0275\u0275text(18, "Token Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 61)(22, "table")(23, "thead")(24, "tr")(25, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("token"));
    });
    \u0275\u0275text(26, " Token ");
    \u0275\u0275elementStart(27, "i", 63);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("appointmentNo"));
    });
    \u0275\u0275text(30, " Appointment No ");
    \u0275\u0275elementStart(31, "i", 63);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_33_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("patient"));
    });
    \u0275\u0275text(34, " Patient ");
    \u0275\u0275elementStart(35, "i", 63);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_37_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("department"));
    });
    \u0275\u0275text(38, " Department ");
    \u0275\u0275elementStart(39, "i", 63);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_41_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("doctor"));
    });
    \u0275\u0275text(42, " Doctor ");
    \u0275\u0275elementStart(43, "i", 63);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_45_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("date"));
    });
    \u0275\u0275text(46, " Date ");
    \u0275\u0275elementStart(47, "i", 63);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_49_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("time"));
    });
    \u0275\u0275text(50, " Time ");
    \u0275\u0275elementStart(51, "i", 63);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_53_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("type"));
    });
    \u0275\u0275text(54, " Type ");
    \u0275\u0275elementStart(55, "i", 63);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_th_click_57_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortTokens("status"));
    });
    \u0275\u0275text(58, " Status ");
    \u0275\u0275elementStart(59, "i", 63);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "tbody");
    \u0275\u0275template(62, ReportsAnalyticsComponent_div_16_tr_62_Template, 3, 0, "tr", 8)(63, ReportsAnalyticsComponent_div_16_tr_63_Template, 19, 9, "tr", 64)(64, ReportsAnalyticsComponent_div_16_tr_64_Template, 3, 0, "tr", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 65)(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 66)(69, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsAnalyticsComponent_div_16_Template_select_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tokenPageSize, $event) || (ctx_r1.tokenPageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReportsAnalyticsComponent_div_16_Template_select_ngModelChange_69_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTokenPageSizeChange());
    });
    \u0275\u0275template(70, ReportsAnalyticsComponent_div_16_option_70_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 69);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tokenPrevPage());
    });
    \u0275\u0275text(72, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 69);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_16_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tokenNextPage());
    });
    \u0275\u0275text(76, " \u203A ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tokenSearch);
    \u0275\u0275advance();
    \u0275\u0275property("startDate", ctx_r1.tokenStart)("endDate", ctx_r1.tokenEnd);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.tokenError);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredTokens.length, " records");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "token");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "token", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "appointmentNo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "appointmentNo", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "patient");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "patient", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "department");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "department", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "doctor");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "doctor", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "date");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "date", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "time");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "time", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "type");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "type", ctx_r1.tokenSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.tokenSortKey === "status");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.tokenSortKey, "status", ctx_r1.tokenSortDir));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingTokens);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tokenPagedRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingTokens && ctx_r1.filteredTokens.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tokenRangeLabel());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tokenPageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.tokenPage <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.tokenPage, " / ", ctx_r1.tokenTotalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.tokenPage >= ctx_r1.tokenTotalPages());
  }
}
function ReportsAnalyticsComponent_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.billError);
  }
}
function ReportsAnalyticsComponent_div_17_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275text(2, "Loading bill report...");
    \u0275\u0275elementEnd()();
  }
}
function ReportsAnalyticsComponent_div_17_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.billNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.department);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.doctor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 8, row_r12.amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r12.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.status);
  }
}
function ReportsAnalyticsComponent_div_17_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275text(2, " No bill records for this period. ");
    \u0275\u0275elementEnd()();
  }
}
function ReportsAnalyticsComponent_div_17_option_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r13 = ctx.$implicit;
    \u0275\u0275property("ngValue", size_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r13, " / page ");
  }
}
function ReportsAnalyticsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 54)(2, "div", 55)(3, "i", 4);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsAnalyticsComponent_div_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.billSearch, $event) || (ctx_r1.billSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ReportsAnalyticsComponent_div_17_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.billPage = 1);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-date-range-picker", 10);
    \u0275\u0275listener("dateRangeChange", function ReportsAnalyticsComponent_div_17_Template_app_date_range_picker_dateRangeChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBillDateRangeChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadBills());
    });
    \u0275\u0275elementStart(8, "i", 4);
    \u0275\u0275text(9, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 57);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportBills());
    });
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Export ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ReportsAnalyticsComponent_div_17_div_14_Template, 2, 1, "div", 58);
    \u0275\u0275elementStart(15, "div", 59)(16, "div", 60)(17, "h2");
    \u0275\u0275text(18, "Bill Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 61)(22, "table")(23, "thead")(24, "tr")(25, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_25_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("billNo"));
    });
    \u0275\u0275text(26, " Bill No ");
    \u0275\u0275elementStart(27, "i", 63);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_29_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("date"));
    });
    \u0275\u0275text(30, " Date ");
    \u0275\u0275elementStart(31, "i", 63);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_33_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("patient"));
    });
    \u0275\u0275text(34, " Patient ");
    \u0275\u0275elementStart(35, "i", 63);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_37_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("department"));
    });
    \u0275\u0275text(38, " Department ");
    \u0275\u0275elementStart(39, "i", 63);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_41_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("doctor"));
    });
    \u0275\u0275text(42, " Doctor ");
    \u0275\u0275elementStart(43, "i", 63);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_45_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("amount"));
    });
    \u0275\u0275text(46, " Amount (\u20B9) ");
    \u0275\u0275elementStart(47, "i", 63);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_49_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("paymentMode"));
    });
    \u0275\u0275text(50, " Payment ");
    \u0275\u0275elementStart(51, "i", 63);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "th", 62);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_th_click_53_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBills("status"));
    });
    \u0275\u0275text(54, " Status ");
    \u0275\u0275elementStart(55, "i", 63);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "tbody");
    \u0275\u0275template(58, ReportsAnalyticsComponent_div_17_tr_58_Template, 3, 0, "tr", 8)(59, ReportsAnalyticsComponent_div_17_tr_59_Template, 18, 11, "tr", 64)(60, ReportsAnalyticsComponent_div_17_tr_60_Template, 3, 0, "tr", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 65)(62, "span");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 66)(65, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsAnalyticsComponent_div_17_Template_select_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.billPageSize, $event) || (ctx_r1.billPageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReportsAnalyticsComponent_div_17_Template_select_ngModelChange_65_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBillPageSizeChange());
    });
    \u0275\u0275template(66, ReportsAnalyticsComponent_div_17_option_66_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 69);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.billPrevPage());
    });
    \u0275\u0275text(68, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 69);
    \u0275\u0275listener("click", function ReportsAnalyticsComponent_div_17_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.billNextPage());
    });
    \u0275\u0275text(72, " \u203A ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.billSearch);
    \u0275\u0275advance();
    \u0275\u0275property("startDate", ctx_r1.billStart)("endDate", ctx_r1.billEnd);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.billError);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredBills.length, " records");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "billNo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "billNo", ctx_r1.billSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "date");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "date", ctx_r1.billSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "patient");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "patient", ctx_r1.billSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "department");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "department", ctx_r1.billSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "doctor");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "doctor", ctx_r1.billSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "amount");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "amount", ctx_r1.billSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "paymentMode");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "paymentMode", ctx_r1.billSortDir));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.billSortKey === "status");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortIcon(ctx_r1.billSortKey, "status", ctx_r1.billSortDir));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingBills);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.billPagedRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingBills && ctx_r1.filteredBills.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.billRangeLabel());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.billPageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.billPage <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.billPage, " / ", ctx_r1.billTotalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.billPage >= ctx_r1.billTotalPages());
  }
}
var ReportsAnalyticsComponent = class _ReportsAnalyticsComponent {
  reportsService;
  viewBillsService;
  constructor(reportsService, viewBillsService) {
    this.reportsService = reportsService;
    this.viewBillsService = viewBillsService;
  }
  ngOnInit() {
    this.startDate = this.formatDate(this.reportStartDate);
    this.endDate = this.formatDate(this.reportEndDate);
    this.loadPatients();
    this.loadTokens();
    this.loadBills();
    this.loadSummary();
  }
  activeTab = "analytics";
  tabs = [
    { id: "analytics", label: "Reports and Analytics", icon: "analytics" },
    { id: "patients", label: "Patient Report", icon: "group" },
    { id: "tokens", label: "Token Report", icon: "confirmation_number" },
    { id: "bills", label: "Bill Report", icon: "receipt_long" }
  ];
  // Per-tab ranges: last 30 days by default.
  patientStart = this.daysAgo(29);
  patientEnd = this.todayDate();
  tokenStart = this.daysAgo(29);
  tokenEnd = this.todayDate();
  billStart = this.daysAgo(29);
  billEnd = this.todayDate();
  patientSearch = "";
  tokenSearch = "";
  billSearch = "";
  pageSizeOptions = [10, 20, 50];
  patientPage = 1;
  patientPageSize = 10;
  tokenPage = 1;
  tokenPageSize = 10;
  billPage = 1;
  billPageSize = 10;
  patientRows = [];
  tokenRows = [];
  billRows = [];
  isLoadingPatients = false;
  isLoadingTokens = false;
  isLoadingBills = false;
  patientError = "";
  tokenError = "";
  billError = "";
  summaryError = "";
  startDate = "";
  endDate = "";
  reportStartDate = this.daysAgo(29);
  reportEndDate = this.todayDate();
  completionRate = 86;
  /* =====================================================
       REPORT DATA
       ===================================================== */
  reportData = {
    totalAppointments: 0,
    totalCancelledAppointments: 0,
    completed: 728,
    waiting: 86,
    cancelled: 28,
    noShow: 18,
    totalPatients: 0,
    totalBills: 0,
    totalCancelledBills: 0,
    totalBillAmount: 0,
    averageWaitingTime: 15,
    newPatients: 214,
    existingPatients: 404
  };
  appointmentStatus = { completed: 0, waiting: 0, cancelled: 0, noShow: 0 };
  paymentMethods = { cash: 0, card: 0, online: 0, credit: 0 };
  loadSummary() {
    this.summaryError = "";
    this.reportsService.getSummary(this.toISODate(this.reportStartDate), this.toISODate(this.reportEndDate)).subscribe({
      next: (response) => {
        this.reportData = __spreadProps(__spreadValues({}, this.reportData), {
          totalPatients: Number(response.totalPatients) || 0,
          totalAppointments: Number(response.totalAppointments) || 0,
          totalCancelledAppointments: Number(response.totalCancelledAppointments) || 0,
          totalBills: Number(response.totalBills) || 0,
          totalCancelledBills: Number(response.totalCancelledBills) || 0,
          totalBillAmount: Number(response.totalBillAmount) || 0
        });
        this.appointmentStatus = response.appointmentStatus || this.appointmentStatus;
        this.paymentMethods = response.paymentMethods || this.paymentMethods;
      },
      error: (error) => {
        this.summaryError = error.error?.message || "Unable to load report summary.";
      }
    });
  }
  formatBillAmount(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  }
  percentage(value, total) {
    return total ? Math.round(value / total * 100) : 0;
  }
  appointmentStatusTotal() {
    return Object.values(this.appointmentStatus).reduce((total, value) => total + value, 0);
  }
  paymentMethodTotal() {
    return Object.values(this.paymentMethods).reduce((total, value) => total + value, 0);
  }
  paymentDonutStyle() {
    const total = this.paymentMethodTotal() || 1;
    const cash = this.paymentMethods.cash / total * 360;
    const card = cash + this.paymentMethods.card / total * 360;
    const online = card + this.paymentMethods.online / total * 360;
    return `conic-gradient(#07925e 0deg ${cash}deg, #0879e8 ${cash}deg ${card}deg, #7041dd ${card}deg ${online}deg, #ec9500 ${online}deg 360deg)`;
  }
  /* =====================================================
       EXPORT
       ===================================================== */
  exportReport() {
    console.log("Exporting Reports & Analytics");
    const report = {
      period: {
        start: this.startDate,
        end: this.endDate
      },
      metrics: this.reportData
    };
    console.log(report);
    alert("Report export started.");
  }
  refreshReport() {
    this.onDateRangeChange({
      startDate: this.reportStartDate,
      endDate: this.reportEndDate
    });
  }
  /* =====================================================
       TABS
       ===================================================== */
  selectTab(tab) {
    this.activeTab = tab;
    if (tab === "patients") {
      this.patientPage = 1;
      this.loadPatients();
    } else if (tab === "tokens") {
      this.tokenPage = 1;
      this.loadTokens();
    } else if (tab === "bills") {
      this.billPage = 1;
      this.loadBills();
    }
  }
  toISODate(date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  loadPatients() {
    this.isLoadingPatients = true;
    this.patientError = "";
    this.reportsService.getPatientReport(this.toISODate(this.patientStart), this.toISODate(this.patientEnd)).subscribe({
      next: (response) => {
        this.isLoadingPatients = false;
        this.patientRows = (response?.patients || []).map((item) => this.toPatientRow(item));
      },
      error: (error) => {
        this.isLoadingPatients = false;
        this.patientRows = [];
        this.patientError = error.error?.message || "Unable to load patient report.";
      }
    });
  }
  loadTokens() {
    this.isLoadingTokens = true;
    this.tokenError = "";
    this.reportsService.getTokenReport(this.toISODate(this.tokenStart), this.toISODate(this.tokenEnd)).subscribe({
      next: (response) => {
        this.isLoadingTokens = false;
        this.tokenRows = (response?.tokens || []).map((item) => this.toTokenRow(item));
      },
      error: (error) => {
        this.isLoadingTokens = false;
        this.tokenRows = [];
        this.tokenError = error.error?.message || "Unable to load token report.";
      }
    });
  }
  loadBills() {
    this.isLoadingBills = true;
    this.billError = "";
    this.viewBillsService.getBills(this.toISODate(this.billStart), this.toISODate(this.billEnd)).subscribe({
      next: (response) => {
        this.isLoadingBills = false;
        this.billRows = (response?.bills || []).map((item) => this.toBillRow(item));
      },
      error: (error) => {
        this.isLoadingBills = false;
        this.billRows = [];
        this.billError = error.error?.message || "Unable to load bill report.";
      }
    });
  }
  toPatientRow(item) {
    return {
      registrationId: item.registrationId || "",
      name: item.name || "\u2014",
      age: item.age ?? null,
      gender: item.gender || "",
      dateOfBirth: item.dateOfBirth || "",
      bloodGroup: item.bloodGroup || "",
      mobile: item.mobile || "",
      email: item.email || "",
      address: item.address || "",
      address2: item.address2 || "",
      city: item.city || "",
      state: item.state || "",
      pincode: item.pincode || "",
      emergencyMobile: item.emergencyMobile || "",
      patientStatus: item.patientStatus || "",
      registeredOn: item.registeredOn || ""
    };
  }
  toTokenRow(item) {
    const validTypes = ["Online", "Walk-in"];
    return {
      token: item.token || "",
      appointmentNo: item.appointmentNo || "",
      patient: item.patient || "\u2014",
      department: item.department || "",
      doctor: item.doctor || "",
      date: item.date || "",
      time: item.time || "",
      type: validTypes.includes(item.type) ? item.type : "Walk-in",
      status: item.status || ""
    };
  }
  toBillRow(item) {
    return {
      billNo: item.billNo || "",
      date: item.date || "",
      patient: item.patientName || "\u2014",
      department: item.department || "",
      doctor: item.doctor || "",
      amount: Number(item.amount) || 0,
      paymentMode: item.paymentMode || "",
      status: item.status || ""
    };
  }
  todayDate() {
    const now = /* @__PURE__ */ new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }
  monthStart() {
    const now = this.todayDate();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }
  daysAgo(days) {
    const date = this.todayDate();
    date.setDate(date.getDate() - days);
    return date;
  }
  get filteredPatients() {
    const search = this.patientSearch.trim().toLowerCase();
    if (!search) {
      return this.patientRows;
    }
    return this.patientRows.filter((row) => `${row.registrationId} ${row.name} ${row.mobile} ${row.city}`.toLowerCase().includes(search));
  }
  get filteredTokens() {
    const search = this.tokenSearch.trim().toLowerCase();
    if (!search) {
      return this.tokenRows;
    }
    return this.tokenRows.filter((row) => `${row.token} ${row.appointmentNo} ${row.patient} ${row.department} ${row.doctor}`.toLowerCase().includes(search));
  }
  get filteredBills() {
    const search = this.billSearch.trim().toLowerCase();
    if (!search) {
      return this.billRows;
    }
    return this.billRows.filter((row) => `${row.billNo} ${row.patient} ${row.department} ${row.doctor}`.toLowerCase().includes(search));
  }
  /* =====================================================
       PAGINATION (client-side over the loaded rows)
       ===================================================== */
  patientSortKey = "";
  patientSortDir = "asc";
  tokenSortKey = "";
  tokenSortDir = "asc";
  billSortKey = "";
  billSortDir = "asc";
  sortPatients(key) {
    if (this.patientSortKey === key) {
      this.patientSortDir = this.patientSortDir === "asc" ? "desc" : "asc";
    } else {
      this.patientSortKey = key;
      this.patientSortDir = "asc";
    }
    this.patientPage = 1;
  }
  sortTokens(key) {
    if (this.tokenSortKey === key) {
      this.tokenSortDir = this.tokenSortDir === "asc" ? "desc" : "asc";
    } else {
      this.tokenSortKey = key;
      this.tokenSortDir = "asc";
    }
    this.tokenPage = 1;
  }
  sortBills(key) {
    if (this.billSortKey === key) {
      this.billSortDir = this.billSortDir === "asc" ? "desc" : "asc";
    } else {
      this.billSortKey = key;
      this.billSortDir = "asc";
    }
    this.billPage = 1;
  }
  sortIcon(activeKey, key, dir) {
    if (activeKey !== key) {
      return "unfold_more";
    }
    return dir === "asc" ? "arrow_upward" : "arrow_downward";
  }
  sortRows(rows, key, dir) {
    if (!key) {
      return rows;
    }
    const multiplier = dir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];
      if (aValue === bValue) {
        return 0;
      }
      if (aValue === null || aValue === void 0 || aValue === "") {
        return 1;
      }
      if (bValue === null || bValue === void 0 || bValue === "") {
        return -1;
      }
      if (typeof aValue === "number" && typeof bValue === "number") {
        return (aValue - bValue) * multiplier;
      }
      return `${aValue}`.localeCompare(`${bValue}`, void 0, { numeric: true }) * multiplier;
    });
  }
  get sortedPatients() {
    return this.sortRows(this.filteredPatients, this.patientSortKey, this.patientSortDir);
  }
  get sortedTokens() {
    return this.sortRows(this.filteredTokens, this.tokenSortKey, this.tokenSortDir);
  }
  get sortedBills() {
    return this.sortRows(this.filteredBills, this.billSortKey, this.billSortDir);
  }
  get patientPagedRows() {
    return this.paginate(this.sortedPatients, this.patientPage, this.patientPageSize);
  }
  get tokenPagedRows() {
    return this.paginate(this.sortedTokens, this.tokenPage, this.tokenPageSize);
  }
  get billPagedRows() {
    return this.paginate(this.sortedBills, this.billPage, this.billPageSize);
  }
  paginate(rows, page, pageSize) {
    const start = (Math.max(page, 1) - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }
  patientTotalPages() {
    return Math.max(1, Math.ceil(this.filteredPatients.length / this.patientPageSize));
  }
  tokenTotalPages() {
    return Math.max(1, Math.ceil(this.filteredTokens.length / this.tokenPageSize));
  }
  billTotalPages() {
    return Math.max(1, Math.ceil(this.filteredBills.length / this.billPageSize));
  }
  patientRangeLabel() {
    return this.rangeLabel(this.filteredPatients.length, this.patientPage, this.patientPageSize);
  }
  tokenRangeLabel() {
    return this.rangeLabel(this.filteredTokens.length, this.tokenPage, this.tokenPageSize);
  }
  billRangeLabel() {
    return this.rangeLabel(this.filteredBills.length, this.billPage, this.billPageSize);
  }
  rangeLabel(total, page, pageSize) {
    if (total === 0) {
      return "Showing 0 of 0";
    }
    const start = (page - 1) * pageSize + 1;
    const end = Math.min(page * pageSize, total);
    return `Showing ${start}\u2013${end} of ${total}`;
  }
  patientPrevPage() {
    if (this.patientPage > 1) {
      this.patientPage -= 1;
    }
  }
  patientNextPage() {
    if (this.patientPage < this.patientTotalPages()) {
      this.patientPage += 1;
    }
  }
  tokenPrevPage() {
    if (this.tokenPage > 1) {
      this.tokenPage -= 1;
    }
  }
  tokenNextPage() {
    if (this.tokenPage < this.tokenTotalPages()) {
      this.tokenPage += 1;
    }
  }
  billPrevPage() {
    if (this.billPage > 1) {
      this.billPage -= 1;
    }
  }
  billNextPage() {
    if (this.billPage < this.billTotalPages()) {
      this.billPage += 1;
    }
  }
  onPatientPageSizeChange() {
    this.patientPage = 1;
  }
  onTokenPageSizeChange() {
    this.tokenPage = 1;
  }
  onBillPageSizeChange() {
    this.billPage = 1;
  }
  /* =====================================================
       DATE RANGE
       ===================================================== */
  changeDateRange(start, end) {
    this.startDate = start;
    this.endDate = end;
  }
  onDateRangeChange(range) {
    this.reportStartDate = range.startDate;
    this.reportEndDate = range.endDate;
    this.startDate = this.formatDate(range.startDate);
    this.endDate = this.formatDate(range.endDate);
    this.loadSummary();
  }
  onPatientDateRangeChange(range) {
    this.patientStart = range.startDate;
    this.patientEnd = range.endDate;
    this.patientPage = 1;
    this.loadPatients();
  }
  onTokenDateRangeChange(range) {
    this.tokenStart = range.startDate;
    this.tokenEnd = range.endDate;
    this.tokenPage = 1;
    this.loadTokens();
  }
  onBillDateRangeChange(range) {
    this.billStart = range.startDate;
    this.billEnd = range.endDate;
    this.billPage = 1;
    this.loadBills();
  }
  exportPatients() {
    const rows = this.filteredPatients;
    if (!rows.length) {
      alert("No patient records to export.");
      return;
    }
    this.downloadExcel(`patient-report-${this.toISODate(this.patientStart)}-to-${this.toISODate(this.patientEnd)}.xls`, [
      "Registration ID",
      "Patient Name",
      "Age",
      "Sex",
      "Date of Birth",
      "Blood Group",
      "Mobile Number",
      "Email",
      "Address 1",
      "Address 2",
      "City",
      "State",
      "Pincode",
      "Emergency Contact",
      "Status",
      "Registered On"
    ], rows.map((row) => [
      row.registrationId,
      row.name,
      row.age ?? "",
      row.gender,
      row.dateOfBirth,
      row.bloodGroup,
      row.mobile,
      row.email,
      row.address,
      row.address2,
      row.city,
      row.state,
      row.pincode,
      row.emergencyMobile,
      row.patientStatus,
      row.registeredOn
    ]));
  }
  exportTokens() {
    const rows = this.filteredTokens;
    if (!rows.length) {
      alert("No token records to export.");
      return;
    }
    this.downloadExcel(`token-report-${this.toISODate(this.tokenStart)}-to-${this.toISODate(this.tokenEnd)}.xls`, [
      "Token",
      "Appointment No",
      "Patient",
      "Department",
      "Doctor",
      "Date",
      "Time",
      "Type",
      "Status"
    ], rows.map((row) => [
      row.token,
      row.appointmentNo,
      row.patient,
      row.department,
      row.doctor,
      row.date,
      row.time,
      row.type,
      row.status
    ]));
  }
  exportBills() {
    const rows = this.filteredBills;
    if (!rows.length) {
      alert("No bill records to export.");
      return;
    }
    this.downloadExcel(`bill-report-${this.toISODate(this.billStart)}-to-${this.toISODate(this.billEnd)}.xls`, [
      "Bill No",
      "Date",
      "Patient",
      "Department",
      "Doctor",
      "Amount (\u20B9)",
      "Payment",
      "Status"
    ], rows.map((row) => [
      row.billNo,
      row.date,
      row.patient,
      row.department,
      row.doctor,
      row.amount,
      row.paymentMode,
      row.status
    ]));
  }
  downloadExcel(filename, headers, rows) {
    const escapeHtml = (value) => {
      return `${value ?? ""}`.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    const headerRow = `<tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr>`;
    const bodyRows = rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("");
    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"></head><body><table>${headerRow}${bodyRows}</table></body></html>`;
    const blob = new Blob(["\uFEFF", html], {
      type: "application/vnd.ms-excel;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  formatDate(date) {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  static \u0275fac = function ReportsAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsAnalyticsComponent)(\u0275\u0275directiveInject(ReportsService), \u0275\u0275directiveInject(ViewBillsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsAnalyticsComponent, selectors: [["app-reports-analytics"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 6, consts: [[1, "reports-page"], [1, "page-header"], [1, "page-heading"], [1, "heading-icon"], [1, "material-icons"], ["class", "header-actions", 4, "ngIf"], [1, "tabs"], ["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "header-actions"], [3, "dateRangeChange", "startDate", "endDate"], ["title", "Refresh", 1, "report-icon-btn", 3, "click"], [1, "tab", 3, "click"], [1, "kpi-grid"], [1, "kpi-card", "purple"], [1, "kpi-icon"], [1, "kpi-content"], [1, "kpi-title"], [1, "kpi-value-row"], [1, "kpi-card", "blue"], [1, "kpi-card", "orange"], [1, "kpi-card", "green"], [1, "kpi-card", "teal"], [1, "kpi-card", "red"], [1, "chart-grid"], [1, "chart-card", "status-card", "appointment-status-card"], [1, "chart-header"], [1, "status-content", "appointment-status-content"], [1, "appointment-bars"], [1, "appointment-bar-row"], [1, "appointment-bar-label"], [1, "status-color", "completed"], [1, "appointment-bar-track"], [1, "appointment-bar-fill", "completed"], [1, "status-color", "waiting"], [1, "appointment-bar-fill", "waiting"], [1, "status-color", "cancelled"], [1, "appointment-bar-fill", "cancelled"], [1, "status-color", "noshow"], [1, "appointment-bar-fill", "noshow"], [1, "chart-card", "status-card", "payment-status-card"], [1, "section-eyebrow"], [1, "payment-status-total"], [1, "status-content", "payment-status-content"], [1, "donut-wrapper"], [1, "donut", "payment-donut"], [1, "donut-center"], [1, "status-list"], [1, "status-row"], [1, "status-color", "payment-cash"], [1, "status-name"], [1, "status-color", "payment-card"], [1, "status-color", "payment-online"], [1, "status-color", "payment-credit"], [1, "report-toolbar"], [1, "report-search"], ["type", "text", "placeholder", "Search ID, name, mobile, city...", 3, "ngModelChange", "input", "ngModel"], ["title", "Export", 1, "report-export-btn", 3, "click"], ["class", "report-error", 4, "ngIf"], [1, "report-card"], [1, "report-card-header"], [1, "report-table-wrapper"], [1, "sortable", 3, "click"], [1, "material-icons", "sort-icon"], [4, "ngFor", "ngForOf"], [1, "report-pagination"], [1, "report-page-controls"], [3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "click", "disabled"], [1, "report-error"], ["colspan", "6", 1, "empty-state"], [1, "row-id"], [1, "row-name"], ["colspan", "15", 1, "empty-state"], [3, "ngValue"], ["type", "text", "placeholder", "Search token, appointment, patient...", 3, "ngModelChange", "input", "ngModel"], ["colspan", "9", 1, "empty-state"], ["type", "text", "placeholder", "Search bill no, patient, doctor...", 3, "ngModelChange", "input", "ngModel"], ["colspan", "8", 1, "empty-state"]], template: function ReportsAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h1");
      \u0275\u0275text(8, "Reports & Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Overview of appointments, patients and clinic performance.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, ReportsAnalyticsComponent_div_11_Template, 5, 2, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275template(13, ReportsAnalyticsComponent_button_13_Template, 4, 4, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, ReportsAnalyticsComponent_div_14_Template, 147, 30, "div", 8)(15, ReportsAnalyticsComponent_div_15_Template, 101, 60, "div", 8)(16, ReportsAnalyticsComponent_div_16_Template, 77, 42, "div", 8)(17, ReportsAnalyticsComponent_div_17_Template, 73, 39, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.activeTab === "analytics");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "analytics");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "patients");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "tokens");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "bills");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DateRangePickerComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #102052;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.heading-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #10a85d,\n      #09a865);\n  color: white;\n  box-shadow: 0 6px 15px rgba(16, 168, 93, 0.15);\n}\n.heading-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 26px;\n  font-weight: 700;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #536998;\n  font-size: 13px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n}\n.header-actions[_ngcontent-%COMP%]   app-date-range-picker[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.date-range[_ngcontent-%COMP%] {\n  height: 45px;\n  min-width: 285px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 13px;\n  border: 1px solid #d9e3ef;\n  border-radius: 6px;\n  background: white;\n  color: #243763;\n  font-size: 13px;\n}\n.calendar-icon[_ngcontent-%COMP%] {\n  color: #243f76;\n  font-size: 18px;\n  line-height: 1;\n}\n.date-range[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #7c8aa4;\n  font-weight: 400;\n}\n.date-range[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #3c557f;\n  font-size: 20px;\n  line-height: 1;\n}\n.export-btn[_ngcontent-%COMP%] {\n  height: 45px;\n  min-width: 136px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: none;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 14px;\n  cursor: pointer;\n}\n.export-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1;\n}\n.export-btn[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 13px;\n  margin-bottom: 16px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  min-height: 102px;\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 12px 16px;\n  border: 1px solid;\n  border-radius: 8px;\n}\n.kpi-card.blue[_ngcontent-%COMP%] {\n  background: #edf6ff;\n  border-color: #dceafa;\n}\n.kpi-card.green[_ngcontent-%COMP%] {\n  background: #ecfaf4;\n  border-color: #d8f0e5;\n}\n.kpi-card.orange[_ngcontent-%COMP%] {\n  background: #fff7e8;\n  border-color: #f5e7cc;\n}\n.kpi-card.red[_ngcontent-%COMP%] {\n  background: #fff0f2;\n  border-color: #f4dfe2;\n}\n.kpi-card.purple[_ngcontent-%COMP%] {\n  background: #f3edff;\n  border-color: #e5dbfa;\n}\n.kpi-card.teal[_ngcontent-%COMP%] {\n  background: #e9fbfa;\n  border-color: #d2f0ee;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 43px;\n  border-radius: 9px;\n}\n.kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.blue[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: #dceeff;\n  color: #0879e8;\n}\n.green[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: #d8f4e6;\n  color: #07925e;\n}\n.orange[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: #fff0d0;\n  color: #ec9500;\n}\n.red[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: #ffe0e4;\n  color: #ed3f4c;\n}\n.purple[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: #e8dcff;\n  color: #7041dd;\n}\n.teal[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: #d5f4f1;\n  color: #078b86;\n}\n.kpi-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.kpi-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 7px;\n  color: #16285a;\n  font-size: 13px;\n  font-weight: 500;\n}\n.kpi-value-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n.kpi-value-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0b1953;\n  font-size: 25px;\n  line-height: 1;\n}\n.kpi-value-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.positive[_ngcontent-%COMP%] {\n  color: #07965e;\n}\n.negative[_ngcontent-%COMP%] {\n  color: #ef3947;\n}\n.kpi-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n  color: #52658b;\n  font-size: 11px;\n}\n.payment-status-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 18px 20px;\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n}\n.payment-status-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 15px;\n}\n.section-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #0879e8;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.payment-status-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0b1854;\n  font-size: 17px;\n}\n.payment-status-total[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-radius: 5px;\n  background: #f3f7fc;\n  color: #53678e;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.payment-status-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n.payment-method-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  gap: 9px 12px;\n  padding: 12px;\n  border: 1px solid #e5edf5;\n  border-radius: 6px;\n  background: #fbfdff;\n}\n.payment-method-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #1a2d5e;\n  font-size: 13px;\n  font-weight: 600;\n}\n.payment-method-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.payment-method-label[_ngcontent-%COMP%]   .cash[_ngcontent-%COMP%] {\n  color: #07925e;\n}\n.payment-method-label[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.payment-method-label[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%] {\n  color: #7041dd;\n}\n.payment-method-label[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  color: #ec9500;\n}\n.payment-method-row[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: #0b1953;\n  font-size: 16px;\n}\n.payment-method-row[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #71809d;\n  font-size: 10px;\n  font-weight: 500;\n}\n.payment-status-pill[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  justify-self: start;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n}\n.payment-status-pill.paid[_ngcontent-%COMP%] {\n  background: #e5f7ee;\n  color: #078452;\n}\n.payment-status-pill.pending[_ngcontent-%COMP%] {\n  background: #fff4d9;\n  color: #b26b00;\n}\n.payment-status-pill.due[_ngcontent-%COMP%] {\n  background: #ffe9eb;\n  color: #d12f3f;\n}\n.chart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 15px;\n}\n.appointment-status-card[_ngcontent-%COMP%] {\n  grid-column: 1 / 4;\n  grid-row: 1;\n}\n.payment-status-card[_ngcontent-%COMP%] {\n  grid-column: 4 / 7;\n  grid-row: 1;\n}\n.chart-card[_ngcontent-%COMP%] {\n  min-height: 360px;\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.chart-header[_ngcontent-%COMP%] {\n  min-height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 17px;\n}\n.chart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0b1854;\n  font-size: 17px;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #53678e;\n  font-size: 12px;\n}\n.legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  display: inline-block;\n  border-radius: 3px;\n}\n.booked-dot[_ngcontent-%COMP%] {\n  background: #2384e9;\n}\n.completed-dot[_ngcontent-%COMP%] {\n  background: #12ad6a;\n}\n.billed-dot[_ngcontent-%COMP%] {\n  background: #078b86;\n}\n.cancelled-dot[_ngcontent-%COMP%] {\n  background: #fa5660;\n}\n.status-card[_ngcontent-%COMP%] {\n  min-height: 360px;\n  padding-bottom: 10px;\n}\n.status-content[_ngcontent-%COMP%] {\n  height: 285px;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  padding: 0 18px;\n}\n.chart-card.status-card[_ngcontent-%COMP%]:not(.payment-status-card) {\n  min-height: 330px;\n}\n.chart-card.status-card[_ngcontent-%COMP%]:not(.payment-status-card)   .status-content[_ngcontent-%COMP%] {\n  height: 255px;\n}\n.appointment-status-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 24px 0;\n}\n.appointment-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  padding-top: 6px;\n}\n.appointment-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.appointment-bar-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #1b2c59;\n  font-size: 12px;\n}\n.appointment-bar-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.appointment-bar-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #17275a;\n  font-size: 12px;\n}\n.appointment-bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: #edf1f7;\n}\n.appointment-bar-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  min-width: 2px;\n  border-radius: inherit;\n}\n.appointment-bar-fill.completed[_ngcontent-%COMP%] {\n  background: #13ad6b;\n}\n.appointment-bar-fill.waiting[_ngcontent-%COMP%] {\n  background: #ffab18;\n}\n.appointment-bar-fill.cancelled[_ngcontent-%COMP%] {\n  background: #fa4d57;\n}\n.appointment-bar-fill.noshow[_ngcontent-%COMP%] {\n  background: #7742e4;\n}\n.donut-wrapper[_ngcontent-%COMP%] {\n  width: 180px;\n  flex: 0 0 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.donut[_ngcontent-%COMP%] {\n  position: relative;\n  width: 170px;\n  height: 170px;\n  flex: 0 0 170px;\n  border-radius: 50%;\n  background:\n    conic-gradient(\n      #13ad6b 0deg 310deg,\n      #ffab18 310deg 347deg,\n      #fa4d57 347deg 359deg,\n      #7742e4 359deg 360deg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.donut[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 108px;\n  height: 108px;\n  border-radius: 50%;\n  background: white;\n}\n.donut-center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.donut-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #101e56;\n  font-size: 25px;\n}\n.donut-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #657493;\n  font-size: 11px;\n}\n.payment-donut[_ngcontent-%COMP%] {\n  background:\n    conic-gradient(\n      #07925e 0deg 138deg,\n      #0879e8 138deg 259deg,\n      #7041dd 259deg 332deg,\n      #ec9500 332deg 360deg);\n}\n.payment-cash[_ngcontent-%COMP%] {\n  background: #07925e;\n}\n.payment-card[_ngcontent-%COMP%] {\n  background: #0879e8;\n}\n.payment-online[_ngcontent-%COMP%] {\n  background: #7041dd;\n}\n.payment-credit[_ngcontent-%COMP%] {\n  background: #ec9500;\n}\n.status-list[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n}\n.status-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 12px 1fr auto;\n  align-items: center;\n  gap: 7px;\n}\n.status-color[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n}\n.status-color.completed[_ngcontent-%COMP%] {\n  background: #13ad6b;\n}\n.status-color.waiting[_ngcontent-%COMP%] {\n  background: #ffab18;\n}\n.status-color.cancelled[_ngcontent-%COMP%] {\n  background: #fa4d57;\n}\n.status-color.noshow[_ngcontent-%COMP%] {\n  background: #7742e4;\n}\n.status-name[_ngcontent-%COMP%] {\n  color: #1b2c59;\n  font-size: 12px;\n}\n.status-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #17275a;\n  font-size: 12px;\n}\n.secondary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 15px;\n}\n.secondary-card[_ngcontent-%COMP%] {\n  min-height: 116px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 17px;\n  border: 1px solid;\n  border-radius: 8px;\n}\n.secondary-card.teal[_ngcontent-%COMP%] {\n  background: #edfaf6;\n  border-color: #d9f0e8;\n}\n.secondary-card.light-blue[_ngcontent-%COMP%] {\n  background: #edf6ff;\n  border-color: #dbeafa;\n}\n.secondary-card.light-purple[_ngcontent-%COMP%] {\n  background: #f4efff;\n  border-color: #e5dcfa;\n}\n.secondary-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 50px;\n  border-radius: 9px;\n}\n.secondary-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n}\n.teal[_ngcontent-%COMP%]   .secondary-icon[_ngcontent-%COMP%] {\n  background: #d9f4ec;\n  color: #08a997;\n}\n.light-blue[_ngcontent-%COMP%]   .secondary-icon[_ngcontent-%COMP%] {\n  background: #dceeff;\n  color: #0879e8;\n}\n.light-purple[_ngcontent-%COMP%]   .secondary-icon[_ngcontent-%COMP%] {\n  background: #e9ddff;\n  color: #7141df;\n}\n.secondary-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  min-width: 0;\n}\n.secondary-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 7px;\n  color: #18295a;\n  font-size: 12px;\n}\n.secondary-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.secondary-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0d1c56;\n  font-size: 25px;\n}\n.secondary-value[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.secondary-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #53678e;\n  font-size: 11px;\n}\n.completion-card[_ngcontent-%COMP%] {\n  min-height: 121px;\n  display: grid;\n  grid-template-columns: 80px 1fr 190px;\n  align-items: center;\n  gap: 15px;\n  padding: 16px 20px;\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n}\n.completion-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9px;\n  background: #e5f1ff;\n  color: #0879e8;\n}\n.completion-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 1;\n}\n.completion-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #0b1854;\n  font-size: 17px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 16px;\n  overflow: hidden;\n  border-radius: 10px;\n  background: #e5ebf3;\n}\n.progress-value[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  background: #13b66d;\n  transition: width 0.4s ease;\n}\n.completion-result[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.completion-result[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 13px;\n}\n.completion-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0a1855;\n  font-size: 28px;\n}\n.completion-result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.completion-result[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #53678e;\n  font-size: 11px;\n}\n@media (max-width: 1250px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .chart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .page-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .appointment-status-card[_ngcontent-%COMP%], \n   .payment-status-card[_ngcontent-%COMP%] {\n    grid-column: auto;\n    grid-row: auto;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-actions[_ngcontent-%COMP%]   app-date-range-picker[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .secondary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .payment-status-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .status-content[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 650px) {\n  .header-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .header-actions[_ngcontent-%COMP%]   app-date-range-picker[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .completion-card[_ngcontent-%COMP%] {\n    grid-template-columns: 60px 1fr;\n  }\n  .payment-status-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .payment-status-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .completion-result[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n  .legend[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .status-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 10px 15px 20px;\n  }\n}\n.tabs[_ngcontent-%COMP%] {\n  height: 58px;\n  display: flex;\n  align-items: stretch;\n  background: white;\n  border: 1px solid #e0e8f3;\n  border-radius: 7px;\n  box-shadow: 0 2px 7px rgba(40, 75, 115, 0.03);\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.tab[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  border: none;\n  background: white;\n  color: #182858;\n  font-size: 14px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.tab[_ngcontent-%COMP%]    + .tab[_ngcontent-%COMP%] {\n  border-left: 1px solid #e1e8f1;\n}\n.tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1;\n  color: #4c628d;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-weight: 600;\n}\n.tab.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 3px;\n  background: #0879e8;\n}\n.report-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 13px;\n  flex-wrap: wrap;\n}\n.report-search[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 260px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border: 1px solid #d9e3ef;\n  border-radius: 7px;\n  background: white;\n  color: #71809d;\n}\n.report-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.report-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  color: #1c2c5a;\n  font-size: 13px;\n}\n.report-icon-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  flex: 0 0 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d9e3ef;\n  border-radius: 7px;\n  background: white;\n  color: #263a68;\n  cursor: pointer;\n}\n.report-icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.report-icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: #0879e8;\n  color: #0879e8;\n}\n.report-export-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 110px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 0 14px;\n  border: none;\n  border-radius: 7px;\n  background: #0879e8;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.report-export-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.report-export-btn[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n.report-toolbar[_ngcontent-%COMP%]   app-date-range-picker[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.report-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e1e9f3;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.report-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e4ebf4;\n}\n.report-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071555;\n  font-size: 16px;\n}\n.report-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71809d;\n  font-size: 12px;\n}\n.report-error[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n  padding: 10px 14px;\n  border: 1px solid #f3c2c6;\n  border-radius: 8px;\n  background: #fff0f1;\n  color: #b4232a;\n  font-size: 13px;\n}\n.report-table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f7faff;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 36px;\n  padding: 0 10px;\n  color: #122357;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  white-space: nowrap;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  color: #0879e8;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  vertical-align: middle;\n  color: #9aabc6;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover   .sort-icon[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   .sort-icon.active[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 10px;\n  border-bottom: 1px solid #e7edf4;\n  color: #26365e;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   .row-id[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-weight: 600;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   .row-name[_ngcontent-%COMP%] {\n  color: #16255a;\n  font-weight: 500;\n}\n.report-table-wrapper[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #7c8dad;\n  font-size: 12px;\n}\n.report-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px 16px;\n  border-top: 1px solid #e4ebf4;\n  color: #71809d;\n  font-size: 12px;\n  flex-wrap: wrap;\n}\n.report-page-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.report-page-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 8px;\n  border: 1px solid #d9e3ef;\n  border-radius: 6px;\n  background: white;\n  color: #263a68;\n  font-size: 12px;\n}\n.report-page-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 30px;\n  height: 30px;\n  padding: 0 8px;\n  border: 1px solid #d9e3ef;\n  border-radius: 6px;\n  background: white;\n  color: #263a68;\n  font-size: 14px;\n  cursor: pointer;\n}\n.report-page-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.report-page-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  border-color: #0879e8;\n  color: #0879e8;\n}\n/*# sourceMappingURL=reports.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsAnalyticsComponent, { className: "ReportsAnalyticsComponent" });
})();
export {
  ReportsAnalyticsComponent
};
//# sourceMappingURL=chunk-R4MY3KQZ.js.map
