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
import {
  API_BASE_URL,
  CLIENT_CODE
} from "./chunk-OCZWZWFA.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/BookingManagement/Queue/queue.service.ts
var QueueService = class _QueueService {
  http;
  endpoint = `${API_BASE_URL}/queue`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }
  getQueue(departmentId, date) {
    let params = new HttpParams().set("departmentId", String(departmentId));
    if (date) {
      params = params.set("date", date);
    }
    return this.http.get(this.endpoint, {
      headers: this.headers(),
      params
    });
  }
  updateToken(tokenId, action) {
    return this.http.patch(`${this.endpoint}/tokens/${tokenId}`, { action }, { headers: this.headers() });
  }
  static \u0275fac = function QueueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QueueService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QueueService, factory: _QueueService.\u0275fac, providedIn: "root" });
};

// src/app/BookingManagement/Queue/queue-component.ts
function QueueManagementComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", dept_r2.departmentId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r2.departmentName, " ");
  }
}
function QueueManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadError, " ");
  }
}
function QueueManagementComponent_tr_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 47);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 48)(20, "button", 49);
    \u0275\u0275listener("click", function QueueManagementComponent_tr_110_Template_button_click_20_listener() {
      const patient_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.callPatient(patient_r5));
    });
    \u0275\u0275elementStart(21, "i", 6);
    \u0275\u0275text(22, "campaign");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 50);
    \u0275\u0275listener("click", function QueueManagementComponent_tr_110_Template_button_click_23_listener() {
      const patient_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openActions(patient_r5));
    });
    \u0275\u0275elementStart(24, "i", 6);
    \u0275\u0275text(25, "more_vert");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const patient_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", patient_r5.token, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", patient_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", patient_r5.age, " / ", patient_r5.gender, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("online", patient_r5.type === "Online")("walkin", patient_r5.type === "Walk-in");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", patient_r5.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", patient_r5.appointmentTime, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", patient_r5.status, " ");
  }
}
function QueueManagementComponent_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51)(2, "div", 52)(3, "i", 6);
    \u0275\u0275text(4, "groups");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, " No patients in queue ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, " There are no matching patients. ");
    \u0275\u0275elementEnd()()();
  }
}
function QueueManagementComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "strong", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 57)(14, "i", 6);
    \u0275\u0275text(15, "medical_information");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Consultation in Progress ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 58)(18, "span");
    \u0275\u0275text(19, " Consultation Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, " Elapsed Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.shortToken(ctx_r2.currentPatient.token), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentPatient.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.currentPatient.age, " / ", ctx_r2.currentPatient.gender, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentPatient.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentPatient.department, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentPatient.appointmentTime, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.elapsedMinutes, " mins ");
  }
}
function QueueManagementComponent_ng_template_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, " No patient in consultation. ");
    \u0275\u0275elementEnd();
  }
}
function QueueManagementComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "strong", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 63)(14, "span");
    \u0275\u0275text(15, " Appointment Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, " Estimated Wait ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 64)(23, "button", 65);
    \u0275\u0275listener("click", function QueueManagementComponent_div_139_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.callPatient(ctx_r2.nextPatient));
    });
    \u0275\u0275elementStart(24, "i", 6);
    \u0275\u0275text(25, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Waiting ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 66);
    \u0275\u0275listener("click", function QueueManagementComponent_div_139_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markNoShow());
    });
    \u0275\u0275elementStart(28, "i", 6);
    \u0275\u0275text(29, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " No Show ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.shortToken(ctx_r2.nextPatient.token), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nextPatient.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.nextPatient.age, " / ", ctx_r2.nextPatient.gender, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nextPatient.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nextPatient.department, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nextPatient.appointmentTime, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nextPatient.waitingMinutes, " mins ");
  }
}
function QueueManagementComponent_ng_template_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, " Queue is empty. ");
    \u0275\u0275elementEnd();
  }
}
var QueueManagementComponent = class _QueueManagementComponent {
  queueService;
  bookingAppointmentService;
  constructor(queueService, bookingAppointmentService) {
    this.queueService = queueService;
    this.bookingAppointmentService = bookingAppointmentService;
  }
  ngOnInit() {
    this.loadDepartments();
  }
  departments = [];
  selectedDepartmentId = null;
  isLoading = false;
  loadError = "";
  summary = {
    waiting: 0,
    serving: 0,
    completed: 0,
    noShow: 0,
    averageWaitingMinutes: 0,
    totalAppointments: 0
  };
  elapsedMinutes = 0;
  queueFilter = "all";
  searchText = "";
  queuePaused = false;
  /* =====================================================
     CURRENT PATIENT
     ===================================================== */
  currentPatient = null;
  /* =====================================================
     QUEUE DATA
     ===================================================== */
  queue = [];
  filteredQueue = [];
  /* =====================================================
     LOAD
     ===================================================== */
  loadDepartments() {
    this.isLoading = true;
    this.bookingAppointmentService.getDepartments().subscribe({
      next: (response) => {
        this.departments = response?.departments || [];
        if (this.departments.length > 0) {
          this.selectedDepartmentId = this.departments[0].departmentId;
        } else {
          this.selectedDepartmentId = null;
        }
        this.loadQueue();
      },
      error: (error) => {
        this.isLoading = false;
        this.loadError = error.error?.message || "Unable to load departments.";
      }
    });
  }
  loadQueue() {
    if (!this.selectedDepartmentId) {
      this.queue = [];
      this.filteredQueue = [];
      this.currentPatient = null;
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    this.loadError = "";
    this.queueService.getQueue(this.selectedDepartmentId).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.queue = (response?.queue || []).map((item) => this.toRow(item));
        this.currentPatient = response?.nowServing ? this.toRow(response.nowServing) : null;
        this.elapsedMinutes = response?.nowServing?.elapsedMinutes ?? 0;
        this.summary = response?.summary || {
          waiting: 0,
          serving: 0,
          completed: 0,
          noShow: 0,
          averageWaitingMinutes: 0,
          totalAppointments: 0
        };
        this.applyFilters();
      },
      error: (error) => {
        this.isLoading = false;
        this.queue = [];
        this.filteredQueue = [];
        this.currentPatient = null;
        this.loadError = error.error?.message || "Unable to load queue.";
      }
    });
  }
  toRow(item) {
    const validStatuses = ["Waiting", "Called", "In Consultation"];
    return {
      tokenId: item.tokenId,
      token: item.token || "",
      appointmentId: item.appointmentNumber || "",
      name: item.patientName || "\u2014",
      age: item.age ?? 0,
      gender: item.gender || "",
      type: item.type === "Online" ? "Online" : "Walk-in",
      department: item.department || "",
      doctor: item.doctor || "",
      appointmentTime: item.displayAppointmentTime || item.appointmentTime || "",
      waitingMinutes: item.waitingMinutes ?? 0,
      status: validStatuses.includes(item.status) ? item.status : "Waiting"
    };
  }
  /* =====================================================
     SUMMARY
     ===================================================== */
  get waitingCount() {
    return this.summary.waiting;
  }
  get completedCount() {
    return this.summary.completed;
  }
  get noShowCount() {
    return this.summary.noShow;
  }
  get totalAppointments() {
    return this.summary.totalAppointments;
  }
  get onlineCount() {
    return this.queue.filter((patient) => patient.type === "Online").length;
  }
  get walkinCount() {
    return this.queue.filter((patient) => patient.type === "Walk-in").length;
  }
  /* =====================================================
     NEXT PATIENT
     ===================================================== */
  get nextPatient() {
    return this.filteredQueue[0] || this.queue[0] || null;
  }
  shortToken(token) {
    const match = /^TK\d{8}(\d+)$/.exec((token || "").trim());
    return match ? `TK-${match[1]}` : token || "";
  }
  /* =====================================================
     FILTER
     ===================================================== */
  setQueueFilter(filter) {
    this.queueFilter = filter;
    this.applyFilters();
  }
  applyFilters() {
    const search = this.searchText.trim().toLowerCase();
    this.filteredQueue = this.queue.filter((patient) => {
      const matchesSearch = !search || patient.name.toLowerCase().includes(search) || patient.token.toLowerCase().includes(search);
      const matchesType = this.queueFilter === "all" || this.queueFilter === "online" && patient.type === "Online" || this.queueFilter === "walkin" && patient.type === "Walk-in";
      return matchesSearch && matchesType;
    });
  }
  /* =====================================================
     DEPARTMENT
     ===================================================== */
  changeDepartment() {
    this.loadQueue();
  }
  /* =====================================================
     CALL NEXT
     ===================================================== */
  callNext() {
    if (this.queuePaused) {
      alert("Queue is currently on hold.");
      return;
    }
    const current = this.currentPatient;
    const next = this.nextPatient;
    if (!current && !next) {
      alert("No patients waiting in queue.");
      return;
    }
    if (next) {
      this.queueService.updateToken(next.tokenId, "start").subscribe({
        next: () => {
          this.loadError = "";
          this.loadQueue();
        },
        error: (error) => {
          this.loadError = error.error?.message || "Unable to call patient.";
        }
      });
      return;
    }
    if (current) {
      this.queueService.updateToken(current.tokenId, "complete").subscribe({
        next: () => {
          this.loadError = "";
          this.loadQueue();
        },
        error: (error) => {
          this.loadError = error.error?.message || "Unable to complete consultation.";
        }
      });
    }
  }
  /* =====================================================
     CALL PATIENT
     ===================================================== */
  callPatient(patient) {
    if (this.queuePaused) {
      alert("Queue is currently on hold.");
      return;
    }
    this.queueService.updateToken(patient.tokenId, "start").subscribe({
      next: () => {
        this.loadError = "";
        this.loadQueue();
      },
      error: (error) => {
        this.loadError = error.error?.message || "Unable to call patient.";
      }
    });
  }
  /* =====================================================
     RECALL
     ===================================================== */
  recallPatient() {
    if (!this.currentPatient) {
      return;
    }
    alert(`${this.currentPatient.token} - ${this.currentPatient.name} recalled.`);
  }
  /* =====================================================
     NO SHOW
     ===================================================== */
  markNoShow() {
    if (!this.nextPatient) {
      return;
    }
    this.queueService.updateToken(this.nextPatient.tokenId, "no-show").subscribe({
      next: () => {
        this.loadError = "";
        this.loadQueue();
      },
      error: (error) => {
        this.loadError = error.error?.message || "Unable to mark no-show.";
      }
    });
  }
  /* =====================================================
     HOLD / RESUME
     ===================================================== */
  toggleQueue() {
    this.queuePaused = !this.queuePaused;
  }
  /* =====================================================
     ACTION MENU
     ===================================================== */
  openActions(patient) {
    console.log("Queue actions:", patient);
  }
  static \u0275fac = function QueueManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QueueManagementComponent)(\u0275\u0275directiveInject(QueueService), \u0275\u0275directiveInject(BookingAppointmentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QueueManagementComponent, selectors: [["app-queue-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 142, vars: 26, consts: [["noServing", ""], ["noNext", ""], [1, "queue-page"], [1, "page-header"], [1, "page-heading"], [1, "heading-icon"], [1, "material-icons"], [1, "header-actions"], ["title", "Refresh queue", 1, "refresh-btn", 3, "click", "disabled"], [1, "department-select"], [3, "ngModelChange", "change", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "call-next-top", 3, "click"], ["class", "load-error", 4, "ngIf"], [1, "summary-grid"], [1, "summary-card", "waiting-card"], [1, "summary-icon"], [1, "summary-card", "completed-card"], [1, "summary-card", "noshow-card"], [1, "summary-card", "appointments-card"], [1, "queue-grid"], [1, "waiting-queue-card"], [1, "queue-title-row"], [1, "queue-toolbar"], [1, "queue-tabs"], [3, "click"], [1, "queue-search"], ["type", "text", "placeholder", "Search patient name or token...", 3, "ngModelChange", "input", "ngModel"], [1, "queue-table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "queue-footer"], [1, "pagination"], ["disabled", ""], [1, "active"], [1, "queue-side"], [1, "side-card", "now-serving"], [1, "side-card-header"], [1, "consultation-status"], ["class", "serving-body", 4, "ngIf", "ngIfElse"], [1, "side-card", "next-queue"], ["class", "next-body", 4, "ngIf", "ngIfElse"], [3, "ngValue"], [1, "load-error"], [1, "token-cell"], [1, "patient-name"], [1, "type-badge"], [1, "status-badge", "waiting"], [1, "row-actions"], ["title", "Call Patient", 1, "speaker-btn", 3, "click"], ["title", "More Actions", 1, "more-btn", 3, "click"], ["colspan", "8", 1, "empty-state"], [1, "empty-icon"], [1, "serving-body"], [1, "serving-main"], [1, "serving-token"], [1, "department-name"], [1, "consultation-button"], [1, "serving-time"], [1, "serving-empty"], [1, "next-body"], [1, "next-main"], [1, "next-token"], [1, "next-time"], [1, "next-actions"], [1, "call-now", 3, "click"], [1, "call-now", "no-show", 3, "click"]], template: function QueueManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "i", 6);
      \u0275\u0275text(5, "queue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h1");
      \u0275\u0275text(8, "Queue Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Manage live queue, call patients, and track queue status in real-time. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
      \u0275\u0275listener("click", function QueueManagementComponent_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadQueue());
      });
      \u0275\u0275elementStart(13, "i", 6);
      \u0275\u0275text(14, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "label");
      \u0275\u0275text(18, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function QueueManagementComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedDepartmentId, $event) || (ctx.selectedDepartmentId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function QueueManagementComponent_Template_select_change_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeDepartment());
      });
      \u0275\u0275template(20, QueueManagementComponent_option_20_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275listener("click", function QueueManagementComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.callNext());
      });
      \u0275\u0275elementStart(22, "i", 6);
      \u0275\u0275text(23, "campaign");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Call Next ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, QueueManagementComponent_div_25_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "i", 6);
      \u0275\u0275text(30, "groups");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div")(32, "strong");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Waiting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "small");
      \u0275\u0275text(37, "In Queue");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 17)(39, "div", 16)(40, "i", 6);
      \u0275\u0275text(41, "task_alt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div")(43, "strong");
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "small");
      \u0275\u0275text(48, "Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 18)(50, "div", 16)(51, "i", 6);
      \u0275\u0275text(52, "person_off");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div")(54, "strong");
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "No Show");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "small");
      \u0275\u0275text(59, "Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 19)(61, "div", 16)(62, "i", 6);
      \u0275\u0275text(63, "event");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div")(65, "strong");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Total Appointments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "small");
      \u0275\u0275text(70, "Today");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 20)(72, "section", 21)(73, "div", 22)(74, "div")(75, "h2");
      \u0275\u0275text(76, "Waiting Queue");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 23)(78, "div", 24)(79, "button", 25);
      \u0275\u0275listener("click", function QueueManagementComponent_Template_button_click_79_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setQueueFilter("all"));
      });
      \u0275\u0275text(80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 25);
      \u0275\u0275listener("click", function QueueManagementComponent_Template_button_click_81_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setQueueFilter("online"));
      });
      \u0275\u0275text(82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "button", 25);
      \u0275\u0275listener("click", function QueueManagementComponent_Template_button_click_83_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setQueueFilter("walkin"));
      });
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 26)(86, "i", 6);
      \u0275\u0275text(87, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function QueueManagementComponent_Template_input_ngModelChange_88_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function QueueManagementComponent_Template_input_input_88_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 28)(90, "table")(91, "thead")(92, "tr")(93, "th");
      \u0275\u0275text(94, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th");
      \u0275\u0275text(96, "Token");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th");
      \u0275\u0275text(98, "Patient Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th");
      \u0275\u0275text(100, "Age / Sex");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th");
      \u0275\u0275text(102, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th");
      \u0275\u0275text(104, "Appointment Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th");
      \u0275\u0275text(106, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th");
      \u0275\u0275text(108, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "tbody");
      \u0275\u0275template(110, QueueManagementComponent_tr_110_Template, 26, 12, "tr", 29)(111, QueueManagementComponent_tr_111_Template, 9, 0, "tr", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 31)(113, "span");
      \u0275\u0275text(114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 32)(116, "button", 33);
      \u0275\u0275text(117, " \u2039 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "button", 34);
      \u0275\u0275text(119, " 1 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "button");
      \u0275\u0275text(121, " 2 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "button");
      \u0275\u0275text(123, " \u203A ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(124, "aside", 35)(125, "div", 36)(126, "div", 37)(127, "h2");
      \u0275\u0275text(128, "Now Serving");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "span", 38);
      \u0275\u0275element(130, "i");
      \u0275\u0275text(131, " In Consultation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(132, QueueManagementComponent_div_132_Template, 26, 8, "div", 39)(133, QueueManagementComponent_ng_template_133_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 40)(136, "div", 37)(137, "h2");
      \u0275\u0275text(138, "Next in Queue");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(139, QueueManagementComponent_div_139_Template, 31, 8, "div", 41)(140, QueueManagementComponent_ng_template_140_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const noServing_r8 = \u0275\u0275reference(134);
      const noNext_r9 = \u0275\u0275reference(141);
      \u0275\u0275advance(12);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDepartmentId);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loadError);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.waitingCount);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.completedCount);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.noShowCount);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.totalAppointments);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.queueFilter === "all");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" All (", ctx.waitingCount, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.queueFilter === "online");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Online (", ctx.onlineCount, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.queueFilter === "walkin");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Walk-in (", ctx.walkinCount, ") ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.filteredQueue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredQueue.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Showing 1 to ", ctx.filteredQueue.length, " of ", ctx.waitingCount, " patients ");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", ctx.currentPatient)("ngIfElse", noServing_r8);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.nextPatient)("ngIfElse", noNext_r9);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #102052;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.heading-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #7133ef,\n      #7628ff);\n  color: white;\n  font-size: 25px;\n  box-shadow: 0 6px 15px rgba(108, 48, 229, .16);\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 26px;\n  font-weight: 700;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #536998;\n  font-size: 13px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n}\n.department-select[_ngcontent-%COMP%] {\n  width: 230px;\n}\n.department-select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #1d2b57;\n  font-size: 11px;\n}\n.department-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 0 11px;\n  border: 1px solid #d5e0ed;\n  border-radius: 6px;\n  outline: none;\n  background: white;\n  color: #1c2e5c;\n  font-size: 12px;\n}\n.call-next-top[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 150px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  border: none;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 13px;\n  cursor: pointer;\n}\n.call-next-top[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  line-height: 1;\n}\n.call-next-top[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 120px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  border: 1px solid #d5e0ed;\n  border-radius: 6px;\n  background: white;\n  color: #1c2e5c;\n  font-size: 13px;\n  cursor: pointer;\n}\n.refresh-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  line-height: 1;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f7ff;\n  border-color: #0879e8;\n  color: #0879e8;\n}\n.refresh-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 13px;\n  margin-bottom: 15px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 106px;\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 14px 16px;\n  border: 1px solid;\n  border-radius: 8px;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 42px;\n  border-radius: 10px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.summary-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 23px;\n  line-height: 1;\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.summary-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 10px;\n}\n.waiting-card[_ngcontent-%COMP%] {\n  background: #edf6ff;\n  border-color: #d9eafa;\n}\n.waiting-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #dceeff;\n  color: #0879e8;\n}\n.waiting-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.waiting-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0870d5;\n}\n.waiting-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #55749b;\n}\n.completed-card[_ngcontent-%COMP%] {\n  background: #edfaf4;\n  border-color: #d9f0e5;\n}\n.completed-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #d9f5e8;\n  color: #078e5e;\n}\n.completed-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.completed-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #07885a;\n}\n.completed-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #578b76;\n}\n.average-card[_ngcontent-%COMP%] {\n  background: #fff7e9;\n  border-color: #f5e8ce;\n}\n.average-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #fff0d3;\n  color: #e99400;\n}\n.average-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.average-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #df8c00;\n}\n.average-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9a7950;\n}\n.noshow-card[_ngcontent-%COMP%] {\n  background: #fff0f1;\n  border-color: #f3dfe2;\n}\n.noshow-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #ffe0e3;\n  color: #ec3f4b;\n}\n.noshow-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.noshow-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #e43c48;\n}\n.noshow-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9c6a70;\n}\n.appointments-card[_ngcontent-%COMP%] {\n  background: #f3edff;\n  border-color: #e6ddfa;\n}\n.appointments-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #e9ddff;\n  color: #7042dc;\n}\n.appointments-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.appointments-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6438cf;\n}\n.appointments-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #76658f;\n}\n.queue-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(650px, 1.65fr) minmax(360px, .65fr);\n  gap: 14px;\n  align-items: start;\n}\n.waiting-queue-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.queue-title-row[_ngcontent-%COMP%] {\n  padding: 16px 17px 11px;\n}\n.queue-title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0b1854;\n  font-size: 18px;\n}\n.queue-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 17px 13px;\n  gap: 15px;\n}\n.queue-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #dce5f0;\n  border-radius: 7px;\n  overflow: hidden;\n}\n.queue-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 38px;\n  min-width: 96px;\n  padding: 0 14px;\n  border: none;\n  border-right: 1px solid #dce5f0;\n  background: white;\n  color: #172a5a;\n  font-size: 12px;\n  cursor: pointer;\n}\n.queue-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.queue-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0879e8;\n  color: white;\n}\n.queue-search[_ngcontent-%COMP%] {\n  width: 275px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n  border: 1px solid #d7e1ed;\n  border-radius: 6px;\n  background: white;\n}\n.queue-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #55709a;\n  font-size: 19px;\n}\n.queue-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  color: #263962;\n  font-size: 11px;\n}\n.queue-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8b98ae;\n}\n.queue-table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 850px;\n  border-collapse: collapse;\n}\nthead[_ngcontent-%COMP%] {\n  background: #f7faff;\n}\nth[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 9px;\n  color: #22345e;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  white-space: nowrap;\n}\ntd[_ngcontent-%COMP%] {\n  height: 49px;\n  padding: 0 9px;\n  border-top: 1px solid #edf1f6;\n  color: #33466d;\n  font-size: 13px;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fbfdff;\n}\n.token-cell[_ngcontent-%COMP%] {\n  color: #12265d;\n  font-weight: 700;\n}\n.patient-name[_ngcontent-%COMP%] {\n  color: #14275b;\n  font-weight: 500;\n}\n.type-badge[_ngcontent-%COMP%], \n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 24px;\n  padding: 0 10px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.type-badge.online[_ngcontent-%COMP%] {\n  background: #e6f2ff;\n  color: #0879e8;\n}\n.type-badge.walkin[_ngcontent-%COMP%] {\n  background: #eee8ff;\n  color: #6741d8;\n}\n.status-badge.waiting[_ngcontent-%COMP%] {\n  background: #fff0d7;\n  color: #e79400;\n}\n.waiting-time[_ngcontent-%COMP%] {\n  color: #4e648a;\n  font-size: 13px;\n}\n.waiting-time.high-wait[_ngcontent-%COMP%] {\n  color: #e49300;\n  font-weight: 600;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.speaker-btn[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-size: 14px;\n}\n.speaker-btn[_ngcontent-%COMP%]:hover, \n.more-btn[_ngcontent-%COMP%]:hover {\n  background: #edf5ff;\n}\n.more-btn[_ngcontent-%COMP%] {\n  color: #34517b;\n  font-size: 18px;\n}\n.queue-footer[_ngcontent-%COMP%] {\n  min-height: 63px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 17px;\n}\n.queue-footer[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #75839e;\n  font-size: 11px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  border: 1px solid #d8e2ee;\n  border-radius: 5px;\n  background: white;\n  color: #3b527a;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: #0879e8;\n  background: #0879e8;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .45;\n  cursor: not-allowed;\n}\n.queue-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.side-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n  padding: 14px;\n  overflow: hidden;\n}\n.side-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.side-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0b1854;\n  font-size: 18px;\n}\n.consultation-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 10px;\n  border-radius: 7px;\n  background: #e3f8ee;\n  color: #07875a;\n  font-size: 10px;\n}\n.consultation-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #08a56c;\n}\n.serving-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 115px;\n  min-height: 192px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f8f0,\n      #f2fcf8);\n}\n.serving-main[_ngcontent-%COMP%] {\n  padding: 17px 18px;\n}\n.serving-token[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #07875d;\n  font-size: 34px;\n  line-height: 1;\n}\n.serving-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 4px;\n  color: #102052;\n  font-size: 16px;\n}\n.serving-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #344b72;\n  font-size: 11px;\n}\n.serving-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  color: #8ba0b8;\n}\n.department-name[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #31517b;\n  font-size: 11px;\n}\n.consultation-button[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  height: 42px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 0 15px;\n  border: 1px solid #8bd9ba;\n  border-radius: 6px;\n  background: #effcf6;\n  color: #07865a;\n  font-size: 12px;\n  cursor: default;\n}\n.consultation-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.serving-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  padding: 10px 11px;\n}\n.serving-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  color: #526887;\n  font-size: 9px;\n}\n.serving-time[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1b315f;\n  font-size: 12px;\n}\n.next-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 120px;\n  min-height: 165px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #e9f4ff,\n      #f4f9ff);\n}\n.next-main[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.next-token[_ngcontent-%COMP%] {\n  display: block;\n  color: #0874d8;\n  font-size: 34px;\n  line-height: 1;\n}\n.next-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 8px 0 4px;\n  color: #112256;\n  font-size: 16px;\n}\n.next-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #3c5073;\n  font-size: 11px;\n}\n.next-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 4px;\n  color: #91a0b8;\n}\n.next-main[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: block;\n  margin-top: 5px;\n  color: #31517b;\n  font-size: 10px;\n}\n.next-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  margin-top: 22px;\n  padding: 10px;\n}\n.next-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #526887;\n  font-size: 9px;\n}\n.next-time[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a3261;\n  font-size: 12px;\n}\n.call-now[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 43px;\n  margin-top: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  border: 1px solid #0879e8;\n  border-radius: 6px;\n  background: white;\n  color: #0879e8;\n  font-size: 12px;\n  cursor: pointer;\n}\n.next-actions[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-top: 12px;\n}\n.next-actions[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.next-actions[_ngcontent-%COMP%]   .call-now.no-show[_ngcontent-%COMP%] {\n  border-color: #ef6871;\n  color: #d93442;\n}\n.next-actions[_ngcontent-%COMP%]   .call-now.no-show[_ngcontent-%COMP%]:hover {\n  background: #fff0f2;\n  color: #d93442;\n}\n.call-now[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  line-height: 1;\n}\n.call-now[_ngcontent-%COMP%]:hover {\n  background: #0879e8;\n  color: white;\n}\n.queue-controls[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 13px;\n  color: #0b1854;\n  font-size: 16px;\n}\n.control-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.control-button[_ngcontent-%COMP%] {\n  min-height: 47px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  border: 1px solid #d9e3ee;\n  border-radius: 6px;\n  background: white;\n  color: #182b5b;\n  font-size: 11px;\n  cursor: pointer;\n}\n.control-button[_ngcontent-%COMP%]:hover {\n  background: #f3f8fd;\n}\n.control-button.call[_ngcontent-%COMP%] {\n  border-color: #0879e8;\n  background: #0879e8;\n  color: white;\n}\n.control-button.no-show[_ngcontent-%COMP%] {\n  border-color: #ff8d95;\n  color: #ef3e49;\n}\n.control-button.no-show[_ngcontent-%COMP%]:hover {\n  background: #fff1f2;\n}\n.load-error[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 10px 14px;\n  border: 1px solid #f3c2c6;\n  border-radius: 8px;\n  background: #fff0f1;\n  color: #b4232a;\n  font-size: 13px;\n}\n.serving-empty[_ngcontent-%COMP%] {\n  padding: 18px 14px;\n  text-align: center;\n  color: #7e8ca4;\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  height: 200px;\n  text-align: center;\n  vertical-align: middle;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 8px;\n  border-radius: 10px;\n  background: #edf5ff;\n  color: #0879e8;\n  font-size: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #17275a;\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #7e8ca4;\n  font-size: 10px;\n}\n@media (max-width: 1250px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .queue-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .queue-side[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .page-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .department-select[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .queue-side[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .queue-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .queue-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 600px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .department-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .queue-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .queue-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .control-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=queue-component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QueueManagementComponent, { className: "QueueManagementComponent" });
})();
export {
  QueueManagementComponent
};
//# sourceMappingURL=chunk-4APTX5SP.js.map
