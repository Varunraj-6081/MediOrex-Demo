import {
  BillPdfService
} from "./chunk-ASDZ4Q6P.js";
import {
  BookingAppointmentService
} from "./chunk-VGG7MSJA.js";
import "./chunk-MI5K3SR6.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GFRD3CSB.js";
import {
  API_BASE_URL,
  CLIENT_CODE
} from "./chunk-OCZWZWFA.js";
import {
  AuthService
} from "./chunk-R4WLTVLJ.js";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BLZA3SWA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/Billing/Generate/generate.service.ts
var GenerateBillService = class _GenerateBillService {
  http;
  endpoint = `${API_BASE_URL}/billing`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }
  lookup(search) {
    const value = (search || "").trim();
    let params = new HttpParams();
    if (/^TK/i.test(value)) {
      params = params.set("token", value.toUpperCase());
    } else {
      params = params.set("mobile", value.replace(/\D/g, "").slice(-10));
    }
    return this.http.get(`${this.endpoint}/lookup`, {
      headers: this.headers(),
      params
    });
  }
  searchPatient(search) {
    return this.http.get(`${API_BASE_URL}/patients`, { params: { search } });
  }
  createBill(payload) {
    return this.http.post(this.endpoint, payload, {
      headers: this.headers()
    });
  }
  static \u0275fac = function GenerateBillService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenerateBillService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GenerateBillService, factory: _GenerateBillService.\u0275fac, providedIn: "root" });
};

// src/app/Billing/Generate/generate.component.ts
function GenerateBillComponent_ul_21_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 58);
    \u0275\u0275listener("mousedown", function GenerateBillComponent_ul_21_li_1_Template_button_mousedown_1_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onSelectConsultation(ctx_r3.consultationKey(item_r3)));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r3.consultationKey(item_r3) === ctx_r3.selectedConsultationKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getConsultationLabel(item_r3), " ");
  }
}
function GenerateBillComponent_ul_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 56);
    \u0275\u0275template(1, GenerateBillComponent_ul_21_li_1_Template, 3, 3, "li", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.matchedConsultations);
  }
}
function GenerateBillComponent_small_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.searchError);
  }
}
function GenerateBillComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "span", 5);
    \u0275\u0275text(3, " person ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 62)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 63);
    \u0275\u0275listener("click", function GenerateBillComponent_div_27_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewHistory());
    });
    \u0275\u0275elementStart(10, "span", 5);
    \u0275\u0275text(11, " history ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " View History ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.patient.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", ctx_r3.patient.gender, " \xA0 | \xA0 ", ctx_r3.patient.age, " Years \xA0 | \xA0 UHID: ", ctx_r3.patient.uhid, " \xA0 | \xA0 ", ctx_r3.patient.phone, " ");
  }
}
function GenerateBillComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, " Search by mobile number or token number to select a patient. ");
    \u0275\u0275elementEnd();
  }
}
function GenerateBillComponent_option_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", doc_r6.doctorId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", doc_r6.name, "", doc_r6.qualification ? " (" + doc_r6.qualification + ")" : "", " ");
  }
}
function GenerateBillComponent_small_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.doctorsError);
  }
}
function GenerateBillComponent_div_135_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function GenerateBillComponent_div_135_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const i_r10 = \u0275\u0275nextContext().index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeService(i_r10));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, " delete ");
    \u0275\u0275elementEnd()();
  }
}
function GenerateBillComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_div_135_Template_input_ngModelChange_7_listener($event) {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(item_r8.amount, $event) || (item_r8.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function GenerateBillComponent_div_135_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.calculateTotal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, GenerateBillComponent_div_135_button_8_Template, 3, 0, "button", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r10 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8.description, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r8.amount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r10 > 0);
  }
}
function GenerateBillComponent_div_287_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function GenerateBillComponent_div_287_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBillDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function GenerateBillComponent_div_288_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bill for ", ctx_r3.savedPatientName, " has been generated.");
  }
}
function GenerateBillComponent_div_288_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Bill has been generated successfully.");
    \u0275\u0275elementEnd();
  }
}
function GenerateBillComponent_div_288_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "button", 72);
    \u0275\u0275listener("click", function GenerateBillComponent_div_288_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBillDialog());
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 73)(5, "span", 5);
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Bill Generated Successfully");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, GenerateBillComponent_div_288_p_9_Template, 2, 1, "p", 74)(10, GenerateBillComponent_div_288_p_10_Template, 2, 0, "p", 74);
    \u0275\u0275elementStart(11, "div", 75)(12, "span");
    \u0275\u0275text(13, "Bill Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 76)(17, "button", 77);
    \u0275\u0275listener("click", function GenerateBillComponent_div_288_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.dialogPrintBill());
    });
    \u0275\u0275elementStart(18, "span", 5);
    \u0275\u0275text(19, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "Print");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 77);
    \u0275\u0275listener("click", function GenerateBillComponent_div_288_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.dialogDownloadBill());
    });
    \u0275\u0275elementStart(23, "span", 5);
    \u0275\u0275text(24, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "small");
    \u0275\u0275text(26, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 77);
    \u0275\u0275listener("click", function GenerateBillComponent_div_288_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.dialogSendBill());
    });
    \u0275\u0275elementStart(28, "span", 5);
    \u0275\u0275text(29, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "small");
    \u0275\u0275text(31, "Send");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 78);
    \u0275\u0275listener("click", function GenerateBillComponent_div_288_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBillDialog());
    });
    \u0275\u0275text(33, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r3.savedPatientName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.savedPatientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.savedBillNumber);
  }
}
var GenerateBillComponent = class _GenerateBillComponent {
  bookingAppointmentService;
  generateBillService;
  authService;
  billPdfService;
  constructor(bookingAppointmentService, generateBillService, authService, billPdfService) {
    this.bookingAppointmentService = bookingAppointmentService;
    this.generateBillService = generateBillService;
    this.authService = authService;
    this.billPdfService = billPdfService;
  }
  doctors = [];
  selectedDoctorId = null;
  doctorsError = "";
  searchError = "";
  isSearching = false;
  matchedConsultations = [];
  selectedConsultationKey = "";
  consultOpen = false;
  selectedDepartmentId = null;
  selectedAppointmentId = null;
  isGenerating = false;
  showBillDialog = false;
  savedBillNumber = "";
  savedPatientName = "";
  savedPatientPhone = "";
  savedBillData = null;
  patientSearch = "";
  patient = null;
  visitDate = "";
  department = "General Medicine";
  doctor = "";
  consultationType = "In-Person";
  visitType = "New Visit";
  tokenNumber = "";
  notes = "";
  billItems = [
    {
      name: "Consultation Fee",
      description: "General Medicine Consultation",
      amount: 500
    }
  ];
  subtotal = 500;
  discount = 0;
  totalAmount = 500;
  paymentMode = "Cash";
  amountReceived = 500;
  changeAmount = 0;
  sendBill = true;
  ngOnInit() {
    this.visitDate = this.todayLocal();
    this.calculateTotal();
    this.loadDoctors();
  }
  todayLocal() {
    const now = /* @__PURE__ */ new Date();
    const pad = (num) => `${num}`.padStart(2, "0");
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }
  get visitDateDisplay() {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(this.visitDate || "");
    if (!match) {
      return this.visitDate || "\u2014";
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
    return `${match[3]}-${months[Number(match[2]) - 1]}-${match[1]}`;
  }
  loadDoctors() {
    this.doctorsError = "";
    this.bookingAppointmentService.getDoctors().subscribe({
      next: (response) => {
        this.doctors = response?.doctors || [];
        if (this.doctors.length > 0) {
          this.selectedDoctorId = this.doctors[0].doctorId;
          this.applyDoctor(this.doctors[0]);
        } else {
          this.selectedDoctorId = null;
        }
      },
      error: (error) => {
        this.doctorsError = error.error?.message || "Unable to load doctors.";
      }
    });
  }
  onDoctorChange() {
    const selected = this.doctors.find((doc) => doc.doctorId === this.selectedDoctorId);
    if (!selected) {
      return;
    }
    this.applyDoctor(selected);
  }
  applyDoctor(selected) {
    this.doctor = selected.name;
    if (selected.departmentName) {
      this.department = selected.departmentName;
    }
    const fee = Number(selected.consultationFee);
    if (!Number.isFinite(fee) || fee < 0) {
      return;
    }
    const consultationItem = this.billItems[0];
    if (consultationItem) {
      consultationItem.amount = fee;
      consultationItem.description = `${selected.departmentName || "General"} Consultation`;
    }
    this.calculateTotal();
    this.amountReceived = this.totalAmount;
  }
  // ================= PATIENT =================
  searchPatient() {
    const query = (this.patientSearch || "").trim();
    this.searchError = "";
    if (!query) {
      this.searchError = "Enter a mobile number or token number to search.";
      return;
    }
    this.isSearching = true;
    this.matchedConsultations = [];
    this.selectedConsultationKey = "";
    this.consultOpen = false;
    this.generateBillService.lookup(query).subscribe({
      next: (response) => {
        this.isSearching = false;
        const list = response?.consultations || [];
        if (list.length === 0) {
          this.matchedConsultations = [];
          this.selectedConsultationKey = "";
          this.consultOpen = false;
          this.searchError = "No Appointment details found.";
          return;
        }
        this.matchedConsultations = list;
        const first = list[0];
        this.selectedConsultationKey = this.consultationKey(first);
        this.consultOpen = list.length > 1;
        this.applyConsultation(first, response?.visitDate);
      },
      error: (error) => {
        this.isSearching = false;
        this.matchedConsultations = [];
        this.selectedConsultationKey = "";
        this.consultOpen = false;
        this.searchError = error.error?.message || "No Appointment details found.";
      }
    });
  }
  consultationKey(item) {
    return item.token?.tokenNumber || item.appointment?.appointmentNumber || "";
  }
  getConsultationLabel(item) {
    const token = this.consultationKey(item);
    const name = item.patient?.name?.trim() || "Unknown";
    const ageSex = [item.patient?.age ?? "", item.patient?.gender || ""].filter((part) => part !== "" && part !== null && part !== void 0).join("/");
    const when = `${this.formatDisplayDate(item.appointment?.date)} ${item.appointment?.displayTime || ""}`.trim();
    return [token, `${name}${ageSex ? ` - ${ageSex}` : ""}`, when].filter(Boolean).join(" - ");
  }
  onSelectConsultation(key) {
    const found = this.matchedConsultations.find((item) => this.consultationKey(item) === key);
    if (!found) {
      return;
    }
    this.selectedConsultationKey = key;
    this.applyConsultation(found);
    this.searchError = "";
    this.consultOpen = false;
  }
  reopenConsult() {
    if (this.matchedConsultations.length > 1) {
      this.consultOpen = true;
    }
  }
  applyConsultation(item, visitDate) {
    this.selectedDepartmentId = item.department?.departmentId ?? null;
    this.selectedAppointmentId = item.appointment?.appointmentId ?? null;
    this.patient = {
      name: item.patient?.name || "",
      gender: item.patient?.gender || "",
      age: item.patient?.age ?? 0,
      uhid: item.patient?.uhid || "",
      phone: item.patient?.phone || ""
    };
    if (item.department?.departmentName) {
      this.department = item.department.departmentName;
    }
    const foundDoctor = (this.doctors || []).find((doc) => doc.doctorId === item.doctor?.doctorId);
    if (foundDoctor) {
      this.selectedDoctorId = foundDoctor.doctorId;
      this.applyDoctor(foundDoctor);
    } else if (item.doctor?.name) {
      this.doctor = item.doctor.name;
    }
    if (item.token?.tokenNumber) {
      this.tokenNumber = item.token.tokenNumber;
    }
    if (item.appointment?.consultationType) {
      this.consultationType = item.appointment.consultationType === "Video" ? "Online" : "In-Person";
    }
    this.visitDate = visitDate || this.todayLocal();
  }
  formatDisplayDate(isoDate) {
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
    return `${match[3]} ${months[Number(match[2]) - 1]} ${match[1]}`;
  }
  newPatient() {
    console.log("Opening new patient registration");
  }
  viewHistory() {
    if (!this.patient) {
      return;
    }
    console.log("Opening history:", this.patient.uhid);
  }
  // ================= BILL =================
  calculateTotal() {
    this.subtotal = this.billItems.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    this.totalAmount = Math.max(this.subtotal - Number(this.discount || 0), 0);
    this.calculateChange();
  }
  addService() {
    this.billItems.push({
      name: "Additional Service",
      description: "Additional consultation service",
      amount: 0
    });
    this.calculateTotal();
  }
  removeService(index) {
    this.billItems.splice(index, 1);
    this.calculateTotal();
  }
  // ================= PAYMENT =================
  selectPayment(mode) {
    this.paymentMode = mode;
  }
  calculateChange() {
    const received = Number(this.amountReceived || 0);
    this.changeAmount = Math.max(received - this.totalAmount, 0);
  }
  // ================= GENERATE =================
  generateBill() {
    if (!this.patient) {
      alert("Please select a patient.");
      return;
    }
    if (this.totalAmount <= 0) {
      alert("Bill amount must be greater than zero.");
      return;
    }
    if (this.paymentMode !== "Insurance" && this.amountReceived < this.totalAmount) {
      alert("Amount received is less than the bill amount.");
      return;
    }
    if (this.isGenerating) {
      return;
    }
    const payload = {
      patientUhid: this.patient.uhid,
      appointmentId: this.selectedAppointmentId,
      doctorId: this.selectedDoctorId,
      departmentId: this.selectedDepartmentId,
      visitDate: this.visitDate,
      consultationType: this.consultationType,
      visitType: this.visitType,
      tokenNumber: this.tokenNumber,
      notes: this.notes,
      items: this.billItems.map((item) => ({
        name: item.name,
        description: item.description,
        amount: Number(item.amount || 0)
      })),
      discount: Number(this.discount || 0),
      paymentMode: this.paymentMode,
      amountReceived: Number(this.amountReceived || 0),
      sendBill: this.sendBill,
      generatedBy: this.authService.getUser()?.user_id ?? null
    };
    this.isGenerating = true;
    this.generateBillService.createBill(payload).subscribe({
      next: (response) => {
        this.isGenerating = false;
        const billedName = this.patient?.name || "";
        const billedPhone = this.patient?.phone || "";
        const billData = __spreadProps(__spreadValues({}, this.buildBillPdfData()), {
          billNo: response.billNumber
        });
        this.resetForm();
        this.savedBillNumber = response.billNumber;
        this.savedPatientName = billedName;
        this.savedPatientPhone = billedPhone;
        this.savedBillData = billData;
        this.showBillDialog = true;
      },
      error: (error) => {
        this.isGenerating = false;
        alert(error.error?.message || "Unable to generate bill. Please try again.");
      }
    });
  }
  closeBillDialog() {
    this.showBillDialog = false;
  }
  dialogSendBill() {
    if (!this.savedPatientPhone) {
      return;
    }
    alert(`Bill ${this.savedBillNumber} sent to ${this.savedPatientName || this.savedPatientPhone}`);
  }
  // ================= QUICK ACTIONS =================
  printBill() {
    this.billPdfService.printBillData(this.buildBillPdfData());
  }
  dialogPrintBill() {
    if (!this.savedBillData) {
      return;
    }
    this.billPdfService.printBillData(this.savedBillData);
  }
  buildBillPdfData() {
    return {
      billNo: "",
      date: this.visitDateDisplay,
      time: "",
      patientName: this.patient?.name || "",
      uhid: this.patient?.uhid || "",
      age: this.patient?.age ?? "",
      gender: this.patient?.gender || "",
      phone: this.patient?.phone || "",
      department: this.department,
      doctor: this.doctor,
      tokenNo: this.tokenNumber,
      consultationType: this.consultationType,
      visitType: this.visitType,
      items: this.billItems.map((item) => ({
        name: item.name,
        description: item.description,
        amount: Number(item.amount || 0)
      })),
      subtotal: this.subtotal,
      discount: Number(this.discount || 0),
      totalAmount: this.totalAmount,
      paymentMode: this.paymentMode,
      amountReceived: Number(this.amountReceived || 0)
    };
  }
  downloadBill() {
    this.billPdfService.downloadBillData(this.buildBillPdfData());
  }
  dialogDownloadBill() {
    if (!this.savedBillData) {
      return;
    }
    this.billPdfService.downloadBillData(this.savedBillData);
  }
  sendBillToPatient() {
    if (!this.patient) {
      return;
    }
    console.log("Send bill to:", this.patient.phone);
  }
  viewBills() {
    console.log("Navigate to View Bills");
  }
  resetForm() {
    this.patientSearch = "";
    this.searchError = "";
    this.isSearching = false;
    this.patient = null;
    this.showBillDialog = false;
    this.matchedConsultations = [];
    this.selectedConsultationKey = "";
    this.consultOpen = false;
    this.selectedDepartmentId = null;
    this.selectedAppointmentId = null;
    this.savedBillData = null;
    this.visitDate = this.todayLocal();
    this.consultationType = "In-Person";
    this.visitType = "New Visit";
    this.tokenNumber = "";
    this.notes = "";
    this.billItems = [
      {
        name: "Consultation Fee",
        description: "General Medicine Consultation",
        amount: 500
      }
    ];
    if (this.doctors.length > 0) {
      this.selectedDoctorId = this.doctors[0].doctorId;
      this.applyDoctor(this.doctors[0]);
    } else {
      this.department = "General Medicine";
      this.doctor = "Dr. Priya Sharma";
    }
    this.discount = 0;
    this.paymentMode = "Cash";
    this.amountReceived = this.totalAmount;
    this.sendBill = true;
    this.calculateTotal();
  }
  static \u0275fac = function GenerateBillComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenerateBillComponent)(\u0275\u0275directiveInject(BookingAppointmentService), \u0275\u0275directiveInject(GenerateBillService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BillPdfService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenerateBillComponent, selectors: [["app-generate-bill"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 289, vars: 54, consts: [["noPatient", ""], [1, "main-content"], [1, "page-header"], [1, "page-title"], [1, "heading-icon"], [1, "material-symbols-outlined"], [1, "billing-layout"], [1, "left-column"], [1, "card"], [1, "patient-search"], [1, "search-input"], ["type", "text", "placeholder", "Search by mobile number or token number...", 3, "ngModelChange", "keyup.enter", "focus", "click", "ngModel"], ["class", "search-suggest", 4, "ngIf"], [1, "blue-btn", 3, "click", "disabled"], ["class", "field-error", 4, "ngIf"], ["class", "selected-patient", 4, "ngIf", "ngIfElse"], [1, "form-grid", "three"], [1, "form-field"], [1, "field-icon"], ["type", "text", "readonly", "", 1, "readonly", 3, "value"], [1, "select-field"], [3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "radio-group"], ["type", "radio", "name", "consultation", "value", "In-Person", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "consultation", "value", "Online", 3, "ngModelChange", "ngModel"], [1, "token-input"], ["type", "text", "placeholder", "Token number", 3, "ngModelChange", "ngModel"], ["placeholder", "Add any notes about this visit...", 3, "ngModelChange", "ngModel"], [1, "card-heading"], [1, "add-service", 3, "click"], [1, "billing-table"], [1, "table-header"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "payment-tabs"], [3, "click"], [1, "form-grid", "two"], ["type", "number", 3, "ngModelChange", "ngModel"], ["type", "number", "readonly", "", 1, "readonly", 3, "value"], [1, "send-bill"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "bottom-actions"], [1, "cancel-btn", 3, "click"], [1, "generate-btn", 3, "click", "disabled"], [1, "right-column"], [1, "side-card", "summary-card"], [1, "summary-line"], [1, "total-box"], [1, "side-card", "patient-summary-card"], [1, "side-heading"], [1, "summary-info"], [1, "info-box"], [1, "side-card", "quick-card"], [1, "quick-actions"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["class", "bill-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "Bill generation success", 4, "ngIf"], [1, "search-suggest"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "mousedown"], [1, "field-error"], [1, "selected-patient"], [1, "patient-avatar"], [1, "patient-details"], [1, "history-btn", 3, "click"], [1, "no-patient"], [3, "ngValue"], [1, "table-row"], [1, "description"], ["class", "delete-btn", 3, "click", 4, "ngIf"], [1, "delete-btn", 3, "click"], [1, "dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Bill generation success", 1, "bill-dialog"], ["type", "button", "aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "bill-icon"], [4, "ngIf"], [1, "bill-id-box"], [1, "bill-dialog-actions"], ["type", "button", 3, "click"], ["type", "button", 1, "bill-done", 3, "click"]], template: function GenerateBillComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "main", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
      \u0275\u0275text(5, "receipt_long");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h1");
      \u0275\u0275text(8, "Generate Bill (Consultation Fee)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Create a new bill for patient consultation and additional services ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "section", 8)(14, "h2");
      \u0275\u0275text(15, "Patient Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "span", 5);
      \u0275\u0275text(19, " search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.patientSearch, $event) || (ctx.patientSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function GenerateBillComponent_Template_input_keyup_enter_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchPatient());
      })("focus", function GenerateBillComponent_Template_input_focus_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reopenConsult());
      })("click", function GenerateBillComponent_Template_input_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reopenConsult());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, GenerateBillComponent_ul_21_Template, 2, 1, "ul", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchPatient());
      });
      \u0275\u0275elementStart(23, "span", 5);
      \u0275\u0275text(24, " search ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, GenerateBillComponent_small_26_Template, 2, 1, "small", 14)(27, GenerateBillComponent_div_27_Template, 13, 5, "div", 15)(28, GenerateBillComponent_ng_template_28_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "section", 8)(31, "h2");
      \u0275\u0275text(32, "Consultation Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 16)(34, "div", 17)(35, "label");
      \u0275\u0275text(36, " Visit Date ");
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 18);
      \u0275\u0275element(40, "input", 19);
      \u0275\u0275elementStart(41, "span", 5);
      \u0275\u0275text(42, " calendar_month ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 17)(44, "label");
      \u0275\u0275text(45, " Department ");
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 20)(49, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_select_ngModelChange_49_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.department, $event) || (ctx.department = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(50, "option");
      \u0275\u0275text(51, "General Medicine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option");
      \u0275\u0275text(53, "Cardiology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option");
      \u0275\u0275text(55, "Orthopedics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option");
      \u0275\u0275text(57, "Pediatrics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option");
      \u0275\u0275text(59, "Dermatology");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "span", 5);
      \u0275\u0275text(61, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 17)(63, "label");
      \u0275\u0275text(64, " Consultant Doctor ");
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 20)(68, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_select_ngModelChange_68_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedDoctorId, $event) || (ctx.selectedDoctorId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function GenerateBillComponent_Template_select_ngModelChange_68_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDoctorChange());
      });
      \u0275\u0275template(69, GenerateBillComponent_option_69_Template, 2, 3, "option", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 5);
      \u0275\u0275text(71, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(72, GenerateBillComponent_small_72_Template, 2, 1, "small", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 16)(74, "div", 17)(75, "label");
      \u0275\u0275text(76, " Consultation Type ");
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 23)(80, "label")(81, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.consultationType, $event) || (ctx.consultationType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "In-Person");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "label")(85, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_input_ngModelChange_85_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.consultationType, $event) || (ctx.consultationType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Online");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "div", 17)(89, "label");
      \u0275\u0275text(90, " Visit Type ");
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 20)(94, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_select_ngModelChange_94_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visitType, $event) || (ctx.visitType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(95, "option");
      \u0275\u0275text(96, "New Visit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "option");
      \u0275\u0275text(98, "Follow-up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "option");
      \u0275\u0275text(100, "Review");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "span", 5);
      \u0275\u0275text(102, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "div", 17)(104, "label");
      \u0275\u0275text(105, " Token / Appointment No. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 26)(107, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_input_ngModelChange_107_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.tokenNumber, $event) || (ctx.tokenNumber = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "button")(109, "span", 5);
      \u0275\u0275text(110, " search ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(111, "div", 17)(112, "label");
      \u0275\u0275text(113, "Notes (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "textarea", 28);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_textarea_ngModelChange_114_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.notes, $event) || (ctx.notes = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "section", 8)(116, "div", 29)(117, "h2");
      \u0275\u0275text(118, "Billing Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "button", 30);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_119_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addService());
      });
      \u0275\u0275elementStart(120, "span", 5);
      \u0275\u0275text(121, " add ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(122, " Add Service ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 31)(124, "div", 32)(125, "span");
      \u0275\u0275text(126, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128, "Service Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Amount (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "Action");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(135, GenerateBillComponent_div_135_Template, 9, 5, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "section", 8)(137, "h2");
      \u0275\u0275text(138, "Payment Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 34)(140, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_140_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectPayment("Cash"));
      });
      \u0275\u0275elementStart(141, "span", 5);
      \u0275\u0275text(142, " payments ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(143, " Cash ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_144_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectPayment("Card"));
      });
      \u0275\u0275elementStart(145, "span", 5);
      \u0275\u0275text(146, " credit_card ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, " Card ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_148_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectPayment("UPI"));
      });
      \u0275\u0275elementStart(149, "span", 5);
      \u0275\u0275text(150, " qr_code_2 ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(151, " UPI ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_152_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectPayment("Wallet"));
      });
      \u0275\u0275elementStart(153, "span", 5);
      \u0275\u0275text(154, " account_balance_wallet ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(155, " Wallet ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_156_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectPayment("Insurance"));
      });
      \u0275\u0275elementStart(157, "span", 5);
      \u0275\u0275text(158, " verified_user ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, " Insurance ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 36)(161, "div", 17)(162, "label");
      \u0275\u0275text(163, " Amount Received (\u20B9) ");
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_input_ngModelChange_166_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.amountReceived, $event) || (ctx.amountReceived = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function GenerateBillComponent_Template_input_ngModelChange_166_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.calculateChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 17)(168, "label");
      \u0275\u0275text(169, "Change (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(170, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "label", 39)(172, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function GenerateBillComponent_Template_input_ngModelChange_172_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.sendBill, $event) || (ctx.sendBill = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "span");
      \u0275\u0275text(174, " Send bill copy to patient (Email/SMS/WhatsApp) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "div", 41)(176, "button", 42);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_176_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetForm());
      });
      \u0275\u0275text(177, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "button", 43);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_178_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.generateBill());
      });
      \u0275\u0275elementStart(179, "span", 5);
      \u0275\u0275text(180, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275text(181);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 44)(183, "section", 45)(184, "h2");
      \u0275\u0275text(185, "Bill Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 46)(187, "span");
      \u0275\u0275text(188, "Subtotal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "strong");
      \u0275\u0275text(190);
      \u0275\u0275pipe(191, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "div", 47)(193, "strong");
      \u0275\u0275text(194, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "strong");
      \u0275\u0275text(196);
      \u0275\u0275pipe(197, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "section", 48)(199, "div", 49)(200, "h2");
      \u0275\u0275text(201, "Patient & Visit Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "button")(203, "span", 5);
      \u0275\u0275text(204, " edit ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(205, " Edit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 50)(207, "div")(208, "span");
      \u0275\u0275text(209, "Patient Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "strong");
      \u0275\u0275text(211);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div")(213, "span");
      \u0275\u0275text(214, "UHID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "strong");
      \u0275\u0275text(216);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div")(218, "span");
      \u0275\u0275text(219, "Age / Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "strong");
      \u0275\u0275text(221);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div")(223, "span");
      \u0275\u0275text(224, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "strong");
      \u0275\u0275text(226);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(227, "hr");
      \u0275\u0275elementStart(228, "div")(229, "span");
      \u0275\u0275text(230, "Visit Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "strong");
      \u0275\u0275text(232);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div")(234, "span");
      \u0275\u0275text(235, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "strong");
      \u0275\u0275text(237);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div")(239, "span");
      \u0275\u0275text(240, "Doctor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "strong");
      \u0275\u0275text(242);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "div")(244, "span");
      \u0275\u0275text(245, "Consultation Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "strong");
      \u0275\u0275text(247);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div")(249, "span");
      \u0275\u0275text(250, "Visit Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "strong");
      \u0275\u0275text(252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div")(254, "span");
      \u0275\u0275text(255, "Token No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "strong");
      \u0275\u0275text(257);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(258, "div", 51)(259, "span", 5);
      \u0275\u0275text(260, " info ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "p");
      \u0275\u0275text(262, " A bill will be generated with a unique Bill Number. You can view, print or share the bill after generation. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "section", 52)(264, "h2");
      \u0275\u0275text(265, "Quick Actions After Billing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div", 53)(267, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_267_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.printBill());
      });
      \u0275\u0275elementStart(268, "span", 5);
      \u0275\u0275text(269, " print ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "small");
      \u0275\u0275text(271, "Print Bill");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_272_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.downloadBill());
      });
      \u0275\u0275elementStart(273, "span", 5);
      \u0275\u0275text(274, " download ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "small");
      \u0275\u0275text(276, "Download PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_277_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendBillToPatient());
      });
      \u0275\u0275elementStart(278, "span", 5);
      \u0275\u0275text(279, " send ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "small");
      \u0275\u0275text(281, "Send to Patient");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "button", 35);
      \u0275\u0275listener("click", function GenerateBillComponent_Template_button_click_282_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewBills());
      });
      \u0275\u0275elementStart(283, "span", 5);
      \u0275\u0275text(284, " list_alt ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "small");
      \u0275\u0275text(286, "View Bills");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(287, GenerateBillComponent_div_287_Template, 1, 0, "div", 54)(288, GenerateBillComponent_div_288_Template, 34, 3, "div", 55);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_33_0;
      const noPatient_r13 = \u0275\u0275reference(29);
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.patientSearch);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.matchedConsultations.length > 1 && ctx.consultOpen);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSearching);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isSearching ? "Searching..." : "Search", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.patient)("ngIfElse", noPatient_r13);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", ctx.visitDateDisplay);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.department);
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDoctorId);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.doctors);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.doctorsError);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.consultationType);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.consultationType);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.visitType);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.tokenNumber);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.notes);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.billItems);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("selected", ctx.paymentMode === "Cash");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("selected", ctx.paymentMode === "Card");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("selected", ctx.paymentMode === "UPI");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("selected", ctx.paymentMode === "Wallet");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("selected", ctx.paymentMode === "Insurance");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.amountReceived);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.changeAmount);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.sendBill);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isGenerating);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isGenerating ? "Generating..." : "Generate Bill", " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" \u20B9 ", \u0275\u0275pipeBind2(191, 48, ctx.subtotal, "1.2-2"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" \u20B9 ", \u0275\u0275pipeBind2(197, 51, ctx.totalAmount, "1.2-2"), " ");
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1(": ", (ctx.patient == null ? null : ctx.patient.name) || "\u2014", "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(": ", (ctx.patient == null ? null : ctx.patient.uhid) || "\u2014", "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" : ", (tmp_33_0 = ctx.patient == null ? null : ctx.patient.age) !== null && tmp_33_0 !== void 0 ? tmp_33_0 : "\u2014", " Years / ", (ctx.patient == null ? null : ctx.patient.gender) || "\u2014", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(": ", (ctx.patient == null ? null : ctx.patient.phone) || "\u2014", "");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(": ", ctx.visitDateDisplay, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(": ", ctx.department, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(": ", ctx.doctor, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(": ", ctx.consultationType, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(": ", ctx.visitType, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(": ", ctx.tokenNumber, "");
      \u0275\u0275advance(30);
      \u0275\u0275property("ngIf", ctx.showBillDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showBillDialog);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Icons";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n}\n.mediorex-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f5f8fc;\n  color: #172033;\n  font-family:\n    Inter,\n    "Segoe UI",\n    Arial,\n    sans-serif;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 190px;\n  right: 0;\n  height: 68px;\n  background: #ffffff;\n  border-bottom: 1px solid #e4eaf1;\n  display: flex;\n  align-items: center;\n  padding: 0 28px;\n  z-index: 100;\n}\n.top-search[_ngcontent-%COMP%] {\n  width: 470px;\n  height: 39px;\n  border: 1px solid #d8e2ee;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  background: #fbfdff;\n}\n.top-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #64748b;\n}\n.top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  margin-left: 9px;\n  font-size: 12px;\n  background: transparent;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 22px;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  position: relative;\n  color: #475569;\n  cursor: pointer;\n}\n.notification-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 15px;\n  height: 15px;\n  background: #ef4444;\n  color: #ffffff;\n  border-radius: 50%;\n  font-size: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  background: #073d89;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.profile-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.profile-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #718096;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 190px;\n  background: #0c192a;\n  color: white;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n}\n.brand[_ngcontent-%COMP%] {\n  height: 68px;\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n  gap: 9px;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  position: relative;\n}\n.logo-top[_ngcontent-%COMP%], \n.logo-left[_ngcontent-%COMP%], \n.logo-right[_ngcontent-%COMP%], \n.logo-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 5px;\n}\n.logo-top[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 17px;\n  left: 10px;\n  top: 0;\n  background: #1387ed;\n}\n.logo-left[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 11px;\n  left: 0;\n  top: 10px;\n  background: #1dcc70;\n}\n.logo-right[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 11px;\n  right: 0;\n  top: 10px;\n  background: #10a9df;\n}\n.logo-bottom[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 17px;\n  left: 10px;\n  bottom: 0;\n  background: #1fc66e;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 6px;\n  color: #aab6c5;\n  margin-top: 1px;\n}\n.sidebar-menu[_ngcontent-%COMP%] {\n  padding: 13px 8px;\n  overflow-y: auto;\n}\n.menu-item[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 10px;\n  margin-bottom: 3px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  color: #d8e1eb;\n  font-size: 12px;\n  cursor: pointer;\n}\n.menu-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .06);\n}\n.billing-parent.active[_ngcontent-%COMP%] {\n  background: #155ba8;\n}\n.menu-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 17px !important;\n}\n.submenu[_ngcontent-%COMP%] {\n  padding: 2px 0 5px 32px;\n}\n.submenu-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9px 11px;\n  color: #bdc9d8;\n  font-size: 11px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.submenu-item.active[_ngcontent-%COMP%] {\n  background: rgba(65, 125, 194, .3);\n  color: #ffffff;\n}\n.support-card[_ngcontent-%COMP%] {\n  margin: auto 13px 15px;\n  padding: 12px;\n  background: #17283f;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.support-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.support-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n}\n.support-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 9px;\n  color: #9caabd;\n  margin-top: 3px;\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding: 0;\n  max-width: none;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 21px;\n  font-weight: 700;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 12px;\n  color: #718096;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #718096;\n}\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #344054;\n}\n.breadcrumb[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.billing-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(600px, 1fr) 355px;\n  gap: 16px;\n  align-items: start;\n}\n.left-column[_ngcontent-%COMP%], \n.right-column[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.card[_ngcontent-%COMP%], \n.side-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e3e9f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, .025);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.side-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 14px;\n  font-weight: 700;\n}\n.card-heading[_ngcontent-%COMP%], \n.side-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.patient-search[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 100px;\n  gap: 8px;\n}\n.search-input[_ngcontent-%COMP%] {\n  position: relative;\n  height: 38px;\n  border: 1px solid #d7e1ec;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n}\n.search-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #718096;\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  margin-left: 8px;\n  font-size: 11px;\n}\n.search-suggest[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  max-height: 190px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  border: 1px solid #d7e1ec;\n  border-radius: 6px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, .15);\n  z-index: 60;\n}\n.search-suggest[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.search-suggest[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  padding: 8px 10px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  color: #1c2e5c;\n  font-size: 13px;\n  text-align: left;\n  cursor: pointer;\n}\n.search-suggest[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.search-suggest[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  background: #e3f0ff;\n  color: #0879e8;\n  font-weight: 600;\n}\n.blue-btn[_ngcontent-%COMP%], \n.outline-btn[_ngcontent-%COMP%] {\n  height: 38px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  cursor: pointer;\n}\n.blue-btn[_ngcontent-%COMP%] {\n  background: #1168d5;\n  border: 1px solid #1168d5;\n  color: white;\n}\n.outline-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #3982dc;\n  color: #176bd0;\n}\n.blue-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.outline-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.selected-patient[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  min-height: 61px;\n  padding: 9px 11px;\n  border: 1px solid #dbe9fa;\n  border-radius: 6px;\n  background: #f8fbff;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.no-patient[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 14px;\n  border: 1px dashed #c3d4e8;\n  border-radius: 6px;\n  background: #f8fbff;\n  color: #7e8ca4;\n  font-size: 13px;\n  text-align: center;\n}\n.patient-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e7f1ff;\n  color: #146bd3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.patient-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.patient-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.patient-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 10px;\n  color: #667085;\n}\n.history-btn[_ngcontent-%COMP%] {\n  height: 35px;\n  padding: 0 11px;\n  background: white;\n  border: 1px solid #c9ddf4;\n  border-radius: 6px;\n  color: #176bd0;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n}\n.history-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 13px;\n  margin-bottom: 14px;\n}\n.form-grid.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.form-grid.two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 1fr);\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #344054;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 11px;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d7e0ea;\n  border-radius: 6px;\n  outline: 0;\n  font-size: 11px;\n  color: #344054;\n  background: white;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 10px;\n}\n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 57px;\n  resize: vertical;\n  padding: 10px;\n}\n.field-icon[_ngcontent-%COMP%], \n.select-field[_ngcontent-%COMP%], \n.token-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.field-icon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 32px;\n}\n.field-icon[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.select-field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 9px;\n  top: 10px;\n  color: #718096;\n  font-size: 17px;\n  pointer-events: none;\n}\n.select-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  padding-right: 30px;\n}\n.radio-group[_ngcontent-%COMP%] {\n  height: 38px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 400;\n}\n.radio-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.token-input[_ngcontent-%COMP%] {\n  display: flex;\n}\n.token-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 6px 0 0 6px;\n}\n.token-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40px;\n  border: 1px solid #d7e0ea;\n  border-left: 0;\n  border-radius: 0 6px 6px 0;\n  background: #f8fafc;\n  color: #176bd0;\n  cursor: pointer;\n}\n.add-service[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #1269d5;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n}\n.add-service[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.billing-table[_ngcontent-%COMP%] {\n  border: 1px solid #e0e6ee;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.table-header[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px 1.15fr 1.7fr 100px 48px;\n  align-items: center;\n}\n.table-header[_ngcontent-%COMP%] {\n  min-height: 36px;\n  background: #f7f9fc;\n  padding: 0 9px;\n  font-size: 10px;\n  font-weight: 700;\n  color: #475467;\n}\n.table-row[_ngcontent-%COMP%] {\n  min-height: 48px;\n  padding: 5px 9px;\n  border-top: 1px solid #edf1f5;\n  font-size: 10px;\n}\n.table-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.description[_ngcontent-%COMP%] {\n  color: #667085;\n}\n.table-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 32px;\n  border: 1px solid #d4dee9;\n  border-radius: 5px;\n  padding: 0 8px;\n  outline: 0;\n  font-size: 10px;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: #fff0f0;\n  color: #ef4444;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.delete-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.payment-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border: 1px solid #d8e1eb;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.payment-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 38px;\n  border: 0;\n  border-right: 1px solid #d8e1eb;\n  background: white;\n  color: #536274;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  font-size: 10px;\n  cursor: pointer;\n}\n.payment-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.payment-tabs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  background: #126bd5;\n  color: white;\n}\n.payment-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.readonly[_ngcontent-%COMP%] {\n  background: #f0f3f7 !important;\n}\n.send-bill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 10px;\n  color: #475467;\n  cursor: pointer;\n}\n.send-bill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #f5faff);\n}\n.patient-summary-card[_ngcontent-%COMP%] {\n  min-height: 380px;\n}\n.patient-summary-card[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%] {\n  gap: 14px;\n}\n.patient-summary-card[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.summary-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 35px;\n  font-size: 11px;\n  color: #475467;\n}\n.summary-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #344054;\n}\n.discount[_ngcontent-%COMP%] {\n  height: 31px;\n  border: 1px solid #d7e0ea;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n}\n.discount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70px;\n  border: 0;\n  outline: 0;\n  text-align: right;\n  padding: 0 7px;\n  font-size: 11px;\n}\n.total-box[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  padding: 10px;\n  border-radius: 6px;\n  background: #e5faec;\n  color: #159447;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.side-heading[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n}\n.side-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.side-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #126bd5;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n}\n.side-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.summary-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.summary-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  font-size: 10px;\n}\n.summary-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #667085;\n}\n.summary-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #344054;\n}\n.summary-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  border-top: 1px solid #e5eaf0;\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin-bottom: 15px;\n  background: #e9fbef;\n  border: 1px solid #bde9c9;\n  border-radius: 7px;\n  color: #159447;\n  display: flex;\n  gap: 8px;\n}\n.info-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  line-height: 16px;\n}\n.quick-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 7px;\n}\n.quick-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 70px;\n  border: 1px solid #e2e9f1;\n  border-radius: 6px;\n  background: white;\n  color: #126bd5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.quick-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f6faff;\n}\n.quick-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.quick-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: #475467;\n  text-align: center;\n}\n.bottom-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 2px;\n  padding-bottom: 25px;\n}\n.cancel-btn[_ngcontent-%COMP%], \n.generate-btn[_ngcontent-%COMP%] {\n  height: 43px;\n  border-radius: 6px;\n  padding: 0 30px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #d7e0ea;\n  color: #344054;\n}\n.generate-btn[_ngcontent-%COMP%] {\n  background: #17ae59;\n  border: 1px solid #17ae59;\n  color: white;\n  min-width: 190px;\n}\n.generate-btn[_ngcontent-%COMP%]:hover {\n  background: #11974b;\n}\n.generate-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .45);\n  z-index: 600;\n}\n.bill-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  max-width: calc(100vw - 32px);\n  padding: 30px 26px 24px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, .25);\n  text-align: center;\n  z-index: 601;\n}\n.dialog-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: #eef3f8;\n  color: #5b7195;\n  cursor: pointer;\n}\n.dialog-close[_ngcontent-%COMP%]:hover {\n  background: #e2eaf3;\n}\n.dialog-close[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.bill-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #15803d);\n  color: white;\n  box-shadow: 0 8px 20px rgba(34, 197, 94, .35);\n}\n.bill-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.bill-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 19px;\n  font-weight: 700;\n}\n.bill-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #536998;\n  font-size: 14px;\n}\n.bill-id-box[_ngcontent-%COMP%] {\n  margin: 16px 0 10px;\n  padding: 12px;\n  border: 1px dashed #0879e8;\n  border-radius: 8px;\n  background: #f0f7ff;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.bill-id-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5b7195;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.bill-id-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: .5px;\n}\n.bill-dialog-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.bill-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 4px;\n  border: 1px solid #dbe9fa;\n  border-radius: 8px;\n  background: #f8fbff;\n  color: #344054;\n  cursor: pointer;\n}\n.bill-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #0879e8;\n  color: #0879e8;\n}\n.bill-dialog-actions[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.bill-dialog-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.bill-done[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 43px;\n  border: none;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.bill-done[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n@media (max-width: 1150px) {\n  .billing-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .right-column[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n  }\n  .right-column[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 850px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .brand[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .brand[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child, \n   .menu-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.material-symbols-outlined), \n   .submenu[_ngcontent-%COMP%], \n   .support-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-item[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .menu-arrow[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    left: 70px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 70px;\n  }\n  .right-column[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 650px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding: 84px 12px 25px;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n  .top-search[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .patient-search[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid.three[_ngcontent-%COMP%], \n   .form-grid.two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .payment-tabs[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .table-header[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    min-width: 620px;\n  }\n  .billing-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .selected-patient[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .history-btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  .bottom-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancel-btn[_ngcontent-%COMP%], \n   .generate-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.main-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n.main-content[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.heading-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #0879e8,\n      #176bd0);\n  color: white;\n  box-shadow: 0 6px 15px rgba(8, 121, 232, .15);\n}\n.heading-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.side-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.table-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.table-row[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.summary-line[_ngcontent-%COMP%], \n.summary-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.side-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.quick-actions[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.blue-btn[_ngcontent-%COMP%], \n.outline-btn[_ngcontent-%COMP%], \n.history-btn[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.patient-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.patient-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=generate.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenerateBillComponent, { className: "GenerateBillComponent" });
})();
export {
  GenerateBillComponent
};
//# sourceMappingURL=chunk-2SGIW3IG.js.map
