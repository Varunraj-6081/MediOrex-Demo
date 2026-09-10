import {
  BookingAppointmentService
} from "./chunk-VGG7MSJA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GFRD3CSB.js";
import "./chunk-OCZWZWFA.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/BookingManagement/Booking/appointment-list/appointment-list-component.ts
function AppointmentListComponent_tr_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "strong");
    \u0275\u0275text(3, " Loading appointments... ");
    \u0275\u0275elementEnd()()();
  }
}
function AppointmentListComponent_tr_120_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "button", 52);
    \u0275\u0275listener("click", function AppointmentListComponent_tr_120_div_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const appointment_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.askCancelToken(appointment_r5));
    });
    \u0275\u0275text(2, " Cancel Token ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appointment_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canCancel(appointment_r5));
  }
}
function AppointmentListComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 43)(8, "div")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 44);
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
    \u0275\u0275elementStart(21, "td", 45);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 46);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "span", 47);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 48)(31, "button", 49);
    \u0275\u0275listener("click", function AppointmentListComponent_tr_120_Template_button_click_31_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMenu(i_r2));
    });
    \u0275\u0275text(32, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, AppointmentListComponent_tr_120_div_33_Template, 3, 1, "div", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const appointment_r5 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r5.id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", appointment_r5.token, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", appointment_r5.patient, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", appointment_r5.age, " yrs \u2022 ", appointment_r5.gender, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r5.mobile, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r5.department, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r5.doctor, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r5.date, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r5.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("online", appointment_r5.type === "Online")("walkin", appointment_r5.type === "Walk-in");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appointment_r5.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(appointment_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appointment_r5.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.openMenuIndex === i_r2);
  }
}
function AppointmentListComponent_tr_121_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Try changing your search or filters. ");
    \u0275\u0275elementEnd();
  }
}
function AppointmentListComponent_tr_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "div", 53);
    \u0275\u0275text(3, " \u25A3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AppointmentListComponent_tr_121_span_6_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadError || "No appointments found", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadError);
  }
}
function AppointmentListComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function AppointmentListComponent_div_136_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275elementEnd();
  }
}
function AppointmentListComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 56);
    \u0275\u0275listener("click", function AppointmentListComponent_div_137_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275text(2, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57);
    \u0275\u0275text(4, " \u2298 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Cancel Token?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " Do you want to cancel token ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 58)(13, "button", 59);
    \u0275\u0275listener("click", function AppointmentListComponent_div_137_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275text(14, " No ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 60);
    \u0275\u0275listener("click", function AppointmentListComponent_div_137_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmCancelToken());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.confirmCancelItem.token);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isCancelling);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isCancelling);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isCancelling ? "Cancelling..." : "Yes, Cancel", " ");
  }
}
var AppointmentListComponent = class _AppointmentListComponent {
  bookingAppointmentService;
  constructor(bookingAppointmentService) {
    this.bookingAppointmentService = bookingAppointmentService;
  }
  ngOnInit() {
    this.selectedDate = this.todayLocal();
    this.loadAppointments();
  }
  selectedDate = "";
  isLoading = false;
  loadError = "";
  filterId = "";
  filterToken = "";
  filterPatient = "";
  filterMobile = "";
  filterDepartment = "";
  filterDoctor = "";
  filterDate = "";
  filterTime = "";
  filterType = "";
  filterStatus = "";
  appointments = [];
  filteredAppointments = [];
  loadAppointments() {
    if (!this.selectedDate) {
      return;
    }
    this.isLoading = true;
    this.loadError = "";
    this.bookingAppointmentService.getAppointments(this.selectedDate).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.appointments = (response?.appointments || []).map((item) => this.toRow(item));
        this.applyFilters();
      },
      error: (error) => {
        this.isLoading = false;
        this.appointments = [];
        this.filteredAppointments = [];
        this.loadError = error?.error?.message || "Unable to load appointments.";
      }
    });
  }
  toRow(item) {
    const validTypes = ["Online", "Walk-in"];
    const validStatuses = ["Confirmed", "Waiting", "Consulted", "Cancelled"];
    return {
      appointmentId: item.appointmentId,
      id: item.appointmentNumber || "",
      token: item.token || "-",
      patient: item.patientName || "\u2014",
      mobile: item.mobile || "",
      age: item.age ?? 0,
      gender: item.gender || "",
      department: item.department || "",
      doctor: item.doctor || "",
      date: this.formatDate(item.date),
      time: item.displayTime || item.time || "",
      type: validTypes.includes(item.bookingMode) ? item.bookingMode : "Walk-in",
      status: validStatuses.includes(item.status) ? item.status : "Waiting"
    };
  }
  todayLocal() {
    const now = /* @__PURE__ */ new Date();
    const pad = (num) => `${num}`.padStart(2, "0");
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }
  formatDate(isoDate) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate || "");
    if (!match) {
      return isoDate || "";
    }
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const month = months[Number(match[2]) - 1] || match[2];
    return `${match[3]} ${month} ${match[1]}`;
  }
  get totalAppointments() {
    return this.appointments.length;
  }
  get consultedCount() {
    return this.appointments.filter((x) => x.status === "Consulted").length;
  }
  get waitingCount() {
    return this.appointments.filter((x) => x.status === "Waiting").length;
  }
  get cancelledCount() {
    return this.appointments.filter((x) => x.status === "Cancelled").length;
  }
  selectCard(status) {
    this.filterStatus = this.filterStatus === status ? "" : status;
    this.applyFilters();
  }
  applyFilters() {
    this.filteredAppointments = this.appointments.filter((item) => {
      const matchesId = this.matches(item.id, this.filterId);
      const matchesToken = this.matches(item.token, this.filterToken);
      const matchesPatient = this.matches(item.patient, this.filterPatient);
      const matchesMobile = this.matches(item.mobile, this.filterMobile);
      const matchesDepartment = this.matches(item.department, this.filterDepartment);
      const matchesDoctor = this.matches(item.doctor, this.filterDoctor);
      const matchesDate = this.matches(item.date, this.filterDate);
      const matchesTime = this.matches(item.time, this.filterTime);
      const matchesType = this.matches(item.type, this.filterType);
      const matchesStatus = this.matches(item.status, this.filterStatus);
      return matchesId && matchesToken && matchesPatient && matchesMobile && matchesDepartment && matchesDoctor && matchesDate && matchesTime && matchesType && matchesStatus;
    });
  }
  matches(value, filter) {
    const search = filter.trim().toLowerCase();
    if (!search) {
      return true;
    }
    return value.toLowerCase().includes(search);
  }
  resetFilters() {
    this.filterId = "";
    this.filterToken = "";
    this.filterPatient = "";
    this.filterMobile = "";
    this.filterDepartment = "";
    this.filterDoctor = "";
    this.filterDate = "";
    this.filterTime = "";
    this.filterType = "";
    this.filterStatus = "";
    this.selectedDate = this.todayLocal();
    this.loadAppointments();
  }
  getStatusClass(status) {
    switch (status) {
      case "Confirmed":
        return "confirmed";
      case "Waiting":
        return "waiting";
      case "Consulted":
        return "consulted";
      case "Cancelled":
        return "cancelled";
      default:
        return "";
    }
  }
  openMenuIndex = null;
  confirmCancelItem = null;
  isCancelling = false;
  toggleMenu(index) {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }
  canCancel(item) {
    return item.status === "Waiting" || item.status === "Confirmed";
  }
  askCancelToken(item) {
    this.openMenuIndex = null;
    if (!this.canCancel(item)) {
      return;
    }
    this.confirmCancelItem = item;
  }
  closeCancelConfirm() {
    if (this.isCancelling) {
      return;
    }
    this.confirmCancelItem = null;
  }
  confirmCancelToken() {
    if (!this.confirmCancelItem || this.isCancelling) {
      return;
    }
    const item = this.confirmCancelItem;
    this.isCancelling = true;
    this.bookingAppointmentService.cancelAppointment(item.appointmentId).subscribe({
      next: () => {
        this.isCancelling = false;
        this.confirmCancelItem = null;
        this.loadError = "";
        this.loadAppointments();
      },
      error: (error) => {
        this.isCancelling = false;
        this.confirmCancelItem = null;
        this.loadError = error.error?.message || "Unable to cancel token. Please try again.";
      }
    });
  }
  static \u0275fac = function AppointmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentListComponent)(\u0275\u0275directiveInject(BookingAppointmentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppointmentListComponent, selectors: [["app-appointment-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 138, vars: 29, consts: [[1, "appointment-list"], [1, "list-header"], [1, "summary-grid"], [1, "summary-card", 3, "click"], [1, "summary-icon", "blue"], [1, "material-icons"], [1, "summary-icon", "green"], [1, "summary-icon", "orange"], [1, "summary-icon", "red"], [1, "table-card"], [1, "table-header"], [1, "header-actions"], [1, "reset-btn", 3, "click"], [1, "export-btn"], [1, "table-wrapper"], [1, "filter-row"], ["type", "text", "placeholder", "Search ID", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Search token", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Search patient", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Search mobile", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Search dept", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Search doctor", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "DD Mon YYYY", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Search time", 3, "ngModelChange", "input", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "Online"], ["value", "Walk-in"], ["value", "Confirmed"], ["value", "Waiting"], ["value", "Consulted"], ["value", "Cancelled"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-buttons"], ["disabled", ""], [1, "active"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["class", "cancel-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "Cancel token confirmation", 4, "ngIf"], ["colspan", "11", 1, "empty-state"], [1, "appointment-id"], [1, "token-badge"], [1, "patient-cell"], [1, "mobile"], [1, "time"], [1, "type-badge"], [1, "status-badge", 3, "ngClass"], [1, "actions"], ["title", "More", 1, "more-btn", 3, "click"], ["class", "action-dropdown", 4, "ngIf"], [1, "action-dropdown"], ["type", "button", 3, "click", "disabled"], [1, "empty-icon"], [1, "dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Cancel token confirmation", 1, "cancel-dialog"], ["type", "button", "aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "cancel-icon"], [1, "cancel-actions"], ["type", "button", 1, "cancel-no", 3, "click", "disabled"], ["type", "button", 1, "cancel-yes", 3, "click", "disabled"]], template: function AppointmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Appointment List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, " View, manage and track all patient appointments. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 2)(8, "div", 3);
      \u0275\u0275listener("click", function AppointmentListComponent_Template_div_click_8_listener() {
        return ctx.selectCard("");
      });
      \u0275\u0275elementStart(9, "div", 4)(10, "i", 5);
      \u0275\u0275text(11, "event");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div")(13, "span");
      \u0275\u0275text(14, "Total Appointments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "strong");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 3);
      \u0275\u0275listener("click", function AppointmentListComponent_Template_div_click_17_listener() {
        return ctx.selectCard("Consulted");
      });
      \u0275\u0275elementStart(18, "div", 6)(19, "i", 5);
      \u0275\u0275text(20, "check_circle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div")(22, "span");
      \u0275\u0275text(23, "Consulted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "strong");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 3);
      \u0275\u0275listener("click", function AppointmentListComponent_Template_div_click_26_listener() {
        return ctx.selectCard("Waiting");
      });
      \u0275\u0275elementStart(27, "div", 7)(28, "i", 5);
      \u0275\u0275text(29, "schedule");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div")(31, "span");
      \u0275\u0275text(32, "Waiting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "strong");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 3);
      \u0275\u0275listener("click", function AppointmentListComponent_Template_div_click_35_listener() {
        return ctx.selectCard("Cancelled");
      });
      \u0275\u0275elementStart(36, "div", 8)(37, "i", 5);
      \u0275\u0275text(38, "cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div")(40, "span");
      \u0275\u0275text(41, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "strong");
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 9)(45, "div", 10)(46, "div")(47, "h3");
      \u0275\u0275text(48, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 11)(50, "button", 12);
      \u0275\u0275listener("click", function AppointmentListComponent_Template_button_click_50_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(51, " \u21BB Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 13);
      \u0275\u0275text(53, " \u2193 Export ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 14)(55, "table")(56, "thead")(57, "tr")(58, "th");
      \u0275\u0275text(59, "Appointment ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Token");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, "Patient");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th");
      \u0275\u0275text(65, "Mobile Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th");
      \u0275\u0275text(67, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th");
      \u0275\u0275text(69, "Doctor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th");
      \u0275\u0275text(71, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th");
      \u0275\u0275text(73, "Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th");
      \u0275\u0275text(75, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th");
      \u0275\u0275text(79, "Actions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "tr", 15)(81, "th")(82, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_82_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterId, $event) || (ctx.filterId = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_82_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "th")(84, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_84_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterToken, $event) || (ctx.filterToken = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_84_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "th")(86, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterPatient, $event) || (ctx.filterPatient = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_86_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "th")(88, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterMobile, $event) || (ctx.filterMobile = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_88_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "th")(90, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_90_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterDepartment, $event) || (ctx.filterDepartment = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_90_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "th")(92, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_92_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterDoctor, $event) || (ctx.filterDoctor = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_92_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "th")(94, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_94_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterDate, $event) || (ctx.filterDate = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_94_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "th")(96, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterTime, $event) || (ctx.filterTime = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AppointmentListComponent_Template_input_input_96_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "th")(98, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_select_ngModelChange_98_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AppointmentListComponent_Template_select_change_98_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(99, "option", 25);
      \u0275\u0275text(100, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "option", 26);
      \u0275\u0275text(102, "Online");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "option", 27);
      \u0275\u0275text(104, "Walk-in");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "th")(106, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function AppointmentListComponent_Template_select_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AppointmentListComponent_Template_select_change_106_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(107, "option", 25);
      \u0275\u0275text(108, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "option", 28);
      \u0275\u0275text(110, "Confirmed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "option", 29);
      \u0275\u0275text(112, "Waiting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "option", 30);
      \u0275\u0275text(114, "Consulted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "option", 31);
      \u0275\u0275text(116, "Cancelled");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(117, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "tbody");
      \u0275\u0275template(119, AppointmentListComponent_tr_119_Template, 4, 0, "tr", 32)(120, AppointmentListComponent_tr_120_Template, 34, 18, "tr", 33)(121, AppointmentListComponent_tr_121_Template, 7, 2, "tr", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "div", 34)(123, "span");
      \u0275\u0275text(124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 35)(126, "button", 36);
      \u0275\u0275text(127, " \u2039 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "button", 37);
      \u0275\u0275text(129, " 1 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "button");
      \u0275\u0275text(131, " 2 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "button");
      \u0275\u0275text(133, " 3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "button");
      \u0275\u0275text(135, " \u203A ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(136, AppointmentListComponent_div_136_Template, 1, 0, "div", 38)(137, AppointmentListComponent_div_137_Template, 17, 4, "div", 39);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", !ctx.filterStatus);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.totalAppointments);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filterStatus === "Consulted");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.consultedCount);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filterStatus === "Waiting");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.waitingCount);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filterStatus === "Cancelled");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.cancelledCount);
      \u0275\u0275advance(39);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterId);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterToken);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterPatient);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterMobile);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDepartment);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDoctor);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDate);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterTime);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredAppointments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredAppointments.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Showing 1\u2013", ctx.filteredAppointments.length, " of ", ctx.filteredAppointments.length, " ");
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.confirmCancelItem);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmCancelItem);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #102052;\n}\n.appointment-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071555;\n  font-size: 28px;\n  font-weight: 700;\n}\n.list-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #536998;\n  font-size: 15px;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 13px;\n  margin-bottom: 15px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 82px;\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 13px 16px;\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: .2s;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  border-color: #0879e8;\n  box-shadow: 0 0 0 2px rgba(8, 121, 232, .08);\n}\n.summary-card.active[_ngcontent-%COMP%] {\n  border-color: #0879e8;\n  box-shadow: 0 0 0 2px rgba(8, 121, 232, .15);\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.summary-icon.blue[_ngcontent-%COMP%] {\n  background: #eaf4ff;\n  color: #0879e8;\n}\n.summary-icon.green[_ngcontent-%COMP%] {\n  background: #eaf9f2;\n  color: #079765;\n}\n.summary-icon.orange[_ngcontent-%COMP%] {\n  background: #fff5e5;\n  color: #ed9700;\n}\n.summary-icon.red[_ngcontent-%COMP%] {\n  background: #fff0f1;\n  color: #ed424d;\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #617394;\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102054;\n  font-size: 24px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.table-header[_ngcontent-%COMP%] {\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 17px;\n  border-bottom: 1px solid #e5ebf3;\n}\n.table-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0a1855;\n  font-size: 19px;\n}\n.table-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71809d;\n  font-size: 13px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.header-actions[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%], \n.header-actions[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  height: 36px;\n  padding: 0 14px;\n  border: 1px solid #d5e0ed;\n  border-radius: 6px;\n  background: white;\n  color: #1c3768;\n  font-size: 14px;\n  cursor: pointer;\n}\n.header-actions[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%]:hover, \n.header-actions[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  background: #f4f8fd;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1380px;\n  border-collapse: collapse;\n}\nthead[_ngcontent-%COMP%] {\n  background: #f7faff;\n}\nth[_ngcontent-%COMP%] {\n  height: 43px;\n  padding: 0 10px;\n  color: #23345e;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  white-space: nowrap;\n}\n.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 8px 10px;\n  border-top: 1px solid #e6edf6;\n}\n.filter-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 32px;\n  padding: 0 8px;\n  border: 1px solid #d6e0ed;\n  border-radius: 5px;\n  background: white;\n  color: #24355f;\n  font-size: 12px;\n  outline: none;\n}\n.filter-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa8bf;\n}\n.filter-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filter-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #0879e8;\n  box-shadow: 0 0 0 2px rgba(8, 121, 232, .07);\n}\ntd[_ngcontent-%COMP%] {\n  height: 59px;\n  padding: 0 10px;\n  border-top: 1px solid #edf1f6;\n  color: #334365;\n  font-size: 14px;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fbfdff;\n}\n.patient-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.patient-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #142658;\n  font-size: 14px;\n  font-weight: 600;\n}\n.patient-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #8190aa;\n  font-size: 12px;\n}\n.appointment-id[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-weight: 600;\n}\n.mobile[_ngcontent-%COMP%], \n.time[_ngcontent-%COMP%] {\n  color: #344a73;\n}\n.token-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 42px;\n  height: 25px;\n  padding: 0 8px;\n  border-radius: 5px;\n  background: #edf5ff;\n  color: #0879e8;\n  font-size: 13px;\n  font-weight: 600;\n}\n.type-badge[_ngcontent-%COMP%], \n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 58px;\n  height: 25px;\n  padding: 0 9px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.type-badge.online[_ngcontent-%COMP%] {\n  background: #e7f3ff;\n  color: #0879e8;\n}\n.type-badge.walkin[_ngcontent-%COMP%] {\n  background: #eee8ff;\n  color: #6643d9;\n}\n.status-badge.confirmed[_ngcontent-%COMP%] {\n  background: #ddf5e9;\n  color: #078e5d;\n}\n.status-badge.waiting[_ngcontent-%COMP%] {\n  background: #fff0d8;\n  color: #e79400;\n}\n.status-badge.consulted[_ngcontent-%COMP%] {\n  background: #e4f0ff;\n  color: #277fdf;\n}\n.status-badge.cancelled[_ngcontent-%COMP%] {\n  background: #ffe1e4;\n  color: #ed3d49;\n}\n.actions[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 29px;\n  height: 29px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 5px;\n  background: transparent;\n  color: #50668d;\n  cursor: pointer;\n  font-size: 17px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #edf5ff;\n  color: #0879e8;\n}\n.action-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 2px);\n  right: 0;\n  min-width: 150px;\n  padding: 4px;\n  border: 1px solid #d5e0ed;\n  border-radius: 6px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, .15);\n  z-index: 70;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  padding: 8px 10px;\n  border-radius: 4px;\n  color: #b4232a;\n  font-size: 12px;\n  text-align: left;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff0f1;\n  color: #b4232a;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: #9aa8bb;\n  cursor: not-allowed;\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .45);\n  z-index: 600;\n}\n.cancel-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  max-width: calc(100vw - 32px);\n  padding: 30px 26px 24px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, .25);\n  text-align: center;\n  z-index: 601;\n}\n.dialog-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: #eef3f8;\n  color: #5b7195;\n  cursor: pointer;\n}\n.dialog-close[_ngcontent-%COMP%]:hover {\n  background: #e2eaf3;\n}\n.cancel-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ef3e49,\n      #b4232a);\n  color: white;\n  font-size: 30px;\n  box-shadow: 0 8px 20px rgba(239, 62, 73, .35);\n}\n.cancel-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #102054;\n  font-size: 19px;\n  font-weight: 700;\n}\n.cancel-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #617394;\n  font-size: 14px;\n}\n.cancel-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.cancel-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 18px;\n}\n.cancel-no[_ngcontent-%COMP%], \n.cancel-yes[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 43px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.cancel-no[_ngcontent-%COMP%] {\n  border: 1px solid #d5e0ed;\n  background: white;\n  color: #1c3768;\n}\n.cancel-yes[_ngcontent-%COMP%] {\n  border: none;\n  background: #ef3e49;\n  color: white;\n}\n.cancel-yes[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d92f3b;\n}\n.cancel-no[_ngcontent-%COMP%]:disabled, \n.cancel-yes[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n.empty-state[_ngcontent-%COMP%] {\n  height: 230px;\n  text-align: center;\n  vertical-align: middle;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 10px;\n  border-radius: 10px;\n  background: #edf5ff;\n  color: #0879e8;\n  font-size: 22px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #15275a;\n  font-size: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #7b8aa5;\n  font-size: 13px;\n}\n.pagination[_ngcontent-%COMP%] {\n  min-height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 17px;\n  border-top: 1px solid #e6ecf3;\n}\n.pagination[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #75839c;\n  font-size: 13px;\n}\n.pagination-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  border: 1px solid #dbe4ef;\n  border-radius: 5px;\n  background: white;\n  color: #3a5077;\n  font-size: 13px;\n  cursor: pointer;\n}\n.pagination-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0879e8;\n  border-color: #0879e8;\n  color: white;\n}\n.pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .45;\n  cursor: not-allowed;\n}\n@media (max-width: 1200px) {\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    padding-top: 14px;\n    padding-bottom: 14px;\n  }\n}\n@media (max-width: 800px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .list-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 15px;\n    flex-direction: column;\n  }\n}\n@media (max-width: 550px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=appointment-list-component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppointmentListComponent, { className: "AppointmentListComponent" });
})();
export {
  AppointmentListComponent
};
//# sourceMappingURL=chunk-LBCL4FZV.js.map
