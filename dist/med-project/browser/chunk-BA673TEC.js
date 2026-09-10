import {
  PatientRegistrationService
} from "./chunk-KGCK5YBE.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GFRD3CSB.js";
import "./chunk-OCZWZWFA.js";
import {
  CommonModule,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/PatientManagement/PatientRegistration/patient-registration.ts
function PatientRegistrationComponent_div_30_ul_9_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 84);
    \u0275\u0275listener("mousedown", function PatientRegistrationComponent_div_30_ul_9_li_1_Template_button_mousedown_1_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSelectMatchedPatient(p_r4.patientRegistrationId || ""));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", (p_r4.patientRegistrationId || "") === ctx_r1.selectedMatchedId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMatchedLabel(p_r4), " ");
  }
}
function PatientRegistrationComponent_div_30_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 82);
    \u0275\u0275template(1, PatientRegistrationComponent_div_30_ul_9_li_1_Template, 3, 3, "li", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.matchedPatients);
  }
}
function PatientRegistrationComponent_div_30_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lookupError);
  }
}
function PatientRegistrationComponent_div_30_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lookupSuccess);
  }
}
function PatientRegistrationComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "label");
    \u0275\u0275text(3, " Search by Mobile Number ");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 74)(7, "div", 75)(8, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_div_30_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchMobile, $event) || (ctx_r1.searchMobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function PatientRegistrationComponent_div_30_Template_input_keypress_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowNumbersOnly($event));
    })("input", function PatientRegistrationComponent_div_30_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keepSearchMobileNumbersOnly($event));
    })("keyup.enter", function PatientRegistrationComponent_div_30_Template_input_keyup_enter_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchPatientByMobile());
    })("focus", function PatientRegistrationComponent_div_30_Template_input_focus_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reopenCombo());
    })("click", function PatientRegistrationComponent_div_30_Template_input_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reopenCombo());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PatientRegistrationComponent_div_30_ul_9_Template, 2, 1, "ul", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 78);
    \u0275\u0275listener("click", function PatientRegistrationComponent_div_30_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchPatientByMobile());
    });
    \u0275\u0275elementStart(11, "i", 4);
    \u0275\u0275text(12, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "small", 79);
    \u0275\u0275text(15, " Enter the patient's registered mobile number to auto-fill the details below. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PatientRegistrationComponent_div_30_span_16_Template, 2, 1, "span", 80)(17, PatientRegistrationComponent_div_30_span_17_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchMobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.comboOpen && ctx_r1.matchedPatients.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSearching || ctx_r1.searchMobile.length !== 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSearching ? "Searching..." : "Search", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.lookupError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.lookupError && ctx_r1.lookupSuccess);
  }
}
function PatientRegistrationComponent_div_264_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 19)(2, "label");
    \u0275\u0275text(3, " Insurance Provider ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_div_264_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.patient.insuranceProvider, $event) || (ctx_r1.patient.insuranceProvider = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "label");
    \u0275\u0275text(7, " Policy Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_div_264_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.patient.policyNumber, $event) || (ctx_r1.patient.policyNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "label");
    \u0275\u0275text(11, " Policy Expiry ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_div_264_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.patient.policyExpiry, $event) || (ctx_r1.patient.policyExpiry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patient.insuranceProvider);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patient.policyNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patient.policyExpiry);
  }
}
function PatientRegistrationComponent_span_290_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.submitError);
  }
}
function PatientRegistrationComponent_span_291_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.submitSuccess);
  }
}
function PatientRegistrationComponent_div_399_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function PatientRegistrationComponent_div_399_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function PatientRegistrationComponent_div_400_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "button", 94);
    \u0275\u0275listener("click", function PatientRegistrationComponent_div_400_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275elementStart(2, "i", 4);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 95)(5, "i", 4);
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 96)(12, "span");
    \u0275\u0275text(13, "Patient Registration ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 97);
    \u0275\u0275listener("click", function PatientRegistrationComponent_div_400_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275text(17, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.registrationType === "existing" ? "Patient Updated Successfully" : "Patient Registered Successfully");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.submitSuccess || "Patient details have been saved.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.savedPatientId || ctx_r1.patientId);
  }
}
var PatientRegistrationComponent = class _PatientRegistrationComponent {
  patientRegistrationService;
  registrationType = "new";
  patientId = "";
  searchMobile = "";
  isSearching = false;
  lookupError = "";
  lookupSuccess = "";
  matchedPatients = [];
  selectedMatchedId = "";
  comboOpen = false;
  lastFetchedMobile = "";
  isSubmitting = false;
  submitted = false;
  submitError = "";
  submitSuccess = "";
  showSuccessDialog = false;
  savedPatientId = "";
  constructor(patientRegistrationService) {
    this.patientRegistrationService = patientRegistrationService;
  }
  ngOnInit() {
    const editPatient = history.state?.editPatient;
    if (editPatient) {
      this.applyEditPatient(editPatient);
      history.replaceState({}, "");
      return;
    }
    this.loadLatestPatientId();
  }
  selectRegistrationType(type) {
    this.registrationType = type;
    this.submitError = "";
    this.submitSuccess = "";
    this.lookupError = "";
    this.lookupSuccess = "";
    this.lastFetchedMobile = "";
    this.matchedPatients = [];
    this.selectedMatchedId = "";
    this.comboOpen = false;
    if (type === "new") {
      this.searchMobile = "";
      this.isSearching = false;
      this.loadLatestPatientId();
    } else {
      this.patientId = "";
      this.clearForm(true);
    }
  }
  loadLatestPatientId() {
    this.patientRegistrationService.getLatestPatientRegistrationId().subscribe({
      next: (response) => {
        if (response.patientRegistrationId) {
          this.patientId = response.patientRegistrationId;
        }
      }
    });
  }
  keepSearchMobileNumbersOnly(event) {
    const input = event.target;
    if (!input) {
      return;
    }
    let cleaned = (input.value || "").replace(/[^0-9]/g, "").slice(0, 10);
    if (cleaned !== input.value) {
      input.value = cleaned;
    }
    this.searchMobile = cleaned;
    this.lookupError = "";
    this.lookupSuccess = "";
  }
  fetchPatientByMobile(mobileOverride) {
    const raw = mobileOverride ?? this.searchMobile;
    const mobile = (raw || "").replace(/[^0-9]/g, "").slice(-10);
    this.searchMobile = mobile;
    this.lookupError = "";
    this.lookupSuccess = "";
    this.submitError = "";
    this.submitSuccess = "";
    this.matchedPatients = [];
    this.selectedMatchedId = "";
    this.comboOpen = false;
    if (!/^\d{10}$/.test(mobile)) {
      this.lookupError = "Please enter a valid 10-digit mobile number.";
      return;
    }
    if (this.isSearching) {
      return;
    }
    this.lastFetchedMobile = mobile;
    this.isSearching = true;
    this.patientRegistrationService.getPatientByMobile(mobile).subscribe({
      next: (response) => {
        this.isSearching = false;
        const list = response?.patients?.length ? response.patients : response?.patient ? [response.patient] : [];
        if (list.length === 1) {
          this.matchedPatients = list;
          this.selectedMatchedId = list[0].patientRegistrationId || "";
          this.comboOpen = false;
          this.applyApiPatient(list[0]);
          this.lookupSuccess = `Patient found: ${this.patientId}. Details filled below.`;
        } else if (list.length > 1) {
          this.matchedPatients = list;
          this.selectedMatchedId = list[0].patientRegistrationId || "";
          this.comboOpen = true;
          this.applyApiPatient(list[0]);
          this.lookupSuccess = `${list.length} patients found for this mobile number. Select a patient below.`;
        } else {
          this.lookupError = "No patient found for this mobile number.";
        }
      },
      error: (error) => {
        this.isSearching = false;
        this.lookupError = error.error?.message || "No patient found for this mobile number.";
      }
    });
  }
  onSelectMatchedPatient(registrationId) {
    if (!registrationId) {
      return;
    }
    const found = this.matchedPatients.find((p) => (p.patientRegistrationId || "") === registrationId);
    if (!found) {
      return;
    }
    this.selectedMatchedId = registrationId;
    this.applyApiPatient(found);
    this.lookupSuccess = `Patient selected: ${this.patientId}. Details filled below.`;
    this.lookupError = "";
    this.comboOpen = false;
  }
  reopenCombo() {
    if (this.matchedPatients.length > 1) {
      this.comboOpen = true;
    }
  }
  getMatchedLabel(p) {
    const name = `${p.firstName || ""} ${p.lastName || ""}`.trim() || "Unknown";
    const id = p.patientRegistrationId || "\u2014";
    const extra = [p.age ? `Age ${p.age}` : "", p.gender || ""].filter(Boolean).join(" / ");
    return extra ? `${id} - ${name} - ${extra}` : `${id} - ${name}`;
  }
  applyApiPatient(api) {
    this.registrationType = "existing";
    this.patientId = api.patientRegistrationId || "";
    this.submitted = false;
    this.submitError = "";
    this.submitSuccess = "";
    this.showSuccessDialog = false;
    this.savedPatientId = "";
    const digitsOnly = (v) => (v || "").replace(/[^0-9]/g, "").slice(-10);
    this.patient = {
      firstName: api.firstName || "",
      lastName: api.lastName || "",
      dateOfBirth: (api.dateOfBirth || "").slice(0, 10),
      age: api.age ?? null,
      gender: api.gender || "",
      bloodGroup: api.bloodGroup || "",
      maritalStatus: api.maritalStatus || "",
      occupation: api.occupation || "",
      govtId: api.govtId || "",
      mobile: digitsOnly(api.mobile),
      alternateMobile: digitsOnly(api.alternateMobile),
      email: api.email || "",
      addressLine1: api.addressLine1 || "",
      addressLine2: api.addressLine2 || "",
      city: api.city || "",
      state: api.state || "",
      pincode: (api.pincode || "").replace(/[^0-9]/g, "").slice(0, 6),
      emergencyName: api.emergencyName || "",
      emergencyRelation: api.emergencyRelation || "",
      emergencyMobile: digitsOnly(api.emergencyMobile),
      hasInsurance: !!api.hasInsurance,
      insuranceProvider: api.insuranceProvider || "",
      policyNumber: api.policyNumber || "",
      policyExpiry: (api.policyExpiry || "").slice(0, 10),
      smsNotification: !!api.smsNotification,
      whatsappNotification: !!api.whatsappNotification,
      emailNotification: !!api.emailNotification
    };
  }
  applyEditPatient(editPatient) {
    this.registrationType = "existing";
    this.patientId = editPatient.patientId || "";
    this.submitted = false;
    this.submitError = "";
    this.submitSuccess = "";
    this.showSuccessDialog = false;
    this.savedPatientId = "";
    this.patient = {
      firstName: editPatient.firstName || "",
      lastName: editPatient.lastName || "",
      dateOfBirth: (editPatient.dateOfBirth || "").slice(0, 10),
      age: editPatient.age ?? null,
      gender: editPatient.gender || "",
      bloodGroup: editPatient.bloodGroup || "",
      maritalStatus: editPatient.maritalStatus || "",
      occupation: editPatient.occupation || "",
      govtId: editPatient.govtId || "",
      mobile: editPatient.mobile || "",
      alternateMobile: editPatient.alternateMobile || "",
      email: editPatient.email || "",
      addressLine1: editPatient.addressLine1 || "",
      addressLine2: editPatient.addressLine2 || "",
      city: editPatient.city || "",
      state: editPatient.state || "",
      pincode: editPatient.pincode || "",
      emergencyName: editPatient.emergencyName || "",
      emergencyRelation: editPatient.emergencyRelation || "",
      emergencyMobile: editPatient.emergencyMobile || "",
      hasInsurance: !!editPatient.hasInsurance,
      insuranceProvider: editPatient.insuranceProvider || "",
      policyNumber: editPatient.policyNumber || "",
      policyExpiry: (editPatient.policyExpiry || "").slice(0, 10),
      smsNotification: !!editPatient.smsNotification,
      whatsappNotification: !!editPatient.whatsappNotification,
      emailNotification: !!editPatient.emailNotification
    };
  }
  patient = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    age: null,
    gender: "",
    bloodGroup: "",
    maritalStatus: "",
    occupation: "",
    govtId: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyMobile: "",
    hasInsurance: false,
    insuranceProvider: "",
    policyNumber: "",
    policyExpiry: "",
    smsNotification: true,
    whatsappNotification: true,
    emailNotification: false
  };
  get todayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  get submitButtonLabel() {
    if (this.isSubmitting) {
      return this.registrationType === "existing" ? "Updating..." : "Registering...";
    }
    return this.registrationType === "existing" ? "Update Patient" : "Register Patient";
  }
  getPatientName() {
    const firstName = this.patient.firstName.trim();
    const lastName = this.patient.lastName.trim();
    const name = `${firstName} ${lastName}`.trim();
    return name || "New Patient";
  }
  allowNumbersOnly(event) {
    const navigationKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End"
    ];
    if (navigationKeys.includes(event.key)) {
      return;
    }
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }
  keepNumbersOnly(field, event, maxLength) {
    const input = event.target;
    if (!input) {
      return;
    }
    let cleaned = (input.value || "").replace(/[^0-9]/g, "");
    if (maxLength && cleaned.length > maxLength) {
      cleaned = cleaned.slice(0, maxLength);
    }
    if (cleaned !== input.value) {
      input.value = cleaned;
    }
    this.patient[field] = cleaned;
  }
  getInitials() {
    const first = this.patient.firstName?.charAt(0).toUpperCase() || "";
    const last = this.patient.lastName?.charAt(0).toUpperCase() || "";
    return first + last || "NP";
  }
  registerPatient() {
    this.submitError = "";
    this.submitSuccess = "";
    this.submitted = true;
    const isExisting = this.registrationType === "existing";
    const existingId = this.patientId.trim();
    if (isExisting && !existingId) {
      this.submitError = "No patient selected. Please choose a patient from View Patients Edit option.";
      return;
    }
    if (!this.patient.firstName || !this.patient.lastName || !this.patient.mobile || !this.patient.age || !this.patient.gender || !this.patient.addressLine1 || !this.patient.city || !this.patient.state || !this.patient.pincode) {
      return;
    }
    const payload = __spreadProps(__spreadValues({}, isExisting ? { patientRegistrationId: existingId } : {}), {
      firstName: this.patient.firstName.trim(),
      lastName: this.patient.lastName.trim(),
      dateOfBirth: this.patient.dateOfBirth,
      age: this.patient.age,
      gender: this.patient.gender,
      bloodGroup: this.patient.bloodGroup,
      maritalStatus: this.patient.maritalStatus,
      occupation: this.patient.occupation.trim(),
      govtId: this.patient.govtId.trim(),
      mobile: this.patient.mobile.trim(),
      alternateMobile: this.patient.alternateMobile.trim(),
      email: this.patient.email.trim(),
      addressLine1: this.patient.addressLine1.trim(),
      addressLine2: this.patient.addressLine2.trim(),
      city: this.patient.city.trim(),
      state: this.patient.state,
      pincode: this.patient.pincode.trim(),
      emergencyName: this.patient.emergencyName.trim(),
      emergencyRelation: this.patient.emergencyRelation,
      emergencyMobile: this.patient.emergencyMobile.trim(),
      hasInsurance: this.patient.hasInsurance,
      insuranceProvider: this.patient.insuranceProvider.trim(),
      policyNumber: this.patient.policyNumber.trim(),
      policyExpiry: this.patient.policyExpiry,
      smsNotification: this.patient.smsNotification,
      whatsappNotification: this.patient.whatsappNotification,
      emailNotification: this.patient.emailNotification
    });
    console.log("Patient Registration:", payload);
    this.isSubmitting = true;
    this.patientRegistrationService.registerPatient(payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.patientRegistrationId) {
          this.patientId = response.patientRegistrationId;
        }
        this.submitSuccess = response.message || "Patient registered successfully.";
        this.savedPatientId = this.patientId;
        this.resetPatientFields();
        this.searchMobile = "";
        this.matchedPatients = [];
        this.selectedMatchedId = "";
        this.comboOpen = false;
        this.lookupError = "";
        this.lookupSuccess = "";
        this.lastFetchedMobile = "";
        this.isSearching = false;
        this.showSuccessDialog = true;
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = error.error?.message || "Unable to register patient. Please try again.";
      }
    });
  }
  closeSuccessDialog() {
    this.showSuccessDialog = false;
  }
  resetPatientFields() {
    this.submitted = false;
    this.patient = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      age: null,
      gender: "",
      bloodGroup: "",
      maritalStatus: "",
      occupation: "",
      govtId: "",
      mobile: "",
      alternateMobile: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      emergencyName: "",
      emergencyRelation: "",
      emergencyMobile: "",
      hasInsurance: false,
      insuranceProvider: "",
      policyNumber: "",
      policyExpiry: "",
      smsNotification: true,
      whatsappNotification: true,
      emailNotification: false
    };
  }
  clearForm(keepLookupMobile = false) {
    this.submitError = "";
    this.submitSuccess = "";
    this.submitted = false;
    this.showSuccessDialog = false;
    this.savedPatientId = "";
    if (!keepLookupMobile) {
      this.searchMobile = "";
      this.lookupError = "";
      this.lookupSuccess = "";
      this.isSearching = false;
      this.lastFetchedMobile = "";
      this.matchedPatients = [];
      this.selectedMatchedId = "";
      this.comboOpen = false;
    }
    this.patient = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      age: null,
      gender: "",
      bloodGroup: "",
      maritalStatus: "",
      occupation: "",
      govtId: "",
      mobile: "",
      alternateMobile: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      emergencyName: "",
      emergencyRelation: "",
      emergencyMobile: "",
      hasInsurance: false,
      insuranceProvider: "",
      policyNumber: "",
      policyExpiry: "",
      smsNotification: true,
      whatsappNotification: true,
      emailNotification: false
    };
  }
  static \u0275fac = function PatientRegistrationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientRegistrationComponent)(\u0275\u0275directiveInject(PatientRegistrationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientRegistrationComponent, selectors: [["app-patient-registration"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 401, vars: 70, consts: [[1, "patient-registration"], [1, "registration-header"], [1, "header-content"], [1, "header-icon"], [1, "material-icons"], [1, "registration-info"], [1, "info-item"], [1, "info-label"], [1, "registration-toggle"], [3, "click"], [1, "info-item", "registration-number"], ["class", "mobile-lookup", 4, "ngIf"], [1, "registration-grid"], [1, "registration-card"], [1, "form-section"], [1, "section-heading"], [1, "section-heading-left"], [1, "section-icon", "blue"], [1, "form-grid", "three-columns"], [1, "field"], ["type", "text", "placeholder", "Enter first name", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter last name", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Age", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["type", "text", "placeholder", "Enter occupation", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter ID number", 3, "ngModelChange", "ngModel"], [1, "section-icon", "green"], ["type", "tel", "inputmode", "numeric", "maxlength", "10", "placeholder", "+91 XXXXX XXXXX", 3, "ngModelChange", "keypress", "input", "ngModel"], ["type", "email", "placeholder", "patient@email.com", 3, "ngModelChange", "ngModel"], [1, "section-icon", "purple"], [1, "form-grid"], ["type", "text", "placeholder", "House / Flat number, Street", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Area / Landmark", 3, "ngModelChange", "ngModel"], [1, "address-row"], ["type", "text", "placeholder", "City", 3, "ngModelChange", "ngModel"], ["type", "text", "inputmode", "numeric", "maxlength", "6", "placeholder", "600040", 3, "ngModelChange", "keypress", "input", "ngModel"], [1, "section-icon", "orange"], ["type", "text", "placeholder", "Enter contact name", 3, "ngModelChange", "ngModel"], [1, "section-icon", "cyan"], [1, "insurance-row"], [1, "check-option"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "form-grid three-columns insurance-fields", 4, "ngIf"], [1, "form-section", "communication-section"], [1, "communication-options"], [1, "form-actions"], ["class", "submit-message error", 4, "ngIf"], ["class", "submit-message success", 4, "ngIf"], [1, "clear-action", 3, "click"], [1, "register-action", 3, "click", "disabled"], [1, "registration-side"], [1, "preview-card"], [1, "side-card-header"], [1, "preview-icon"], [1, "patient-preview"], [1, "large-avatar"], [1, "preview-id"], [1, "preview-details"], [1, "checklist-card"], [1, "checklist"], [1, "check-item"], [1, "check-circle"], [1, "check-circle", "optional"], [1, "help-card"], [1, "help-icon"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["class", "success-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "Patient registration success", 4, "ngIf"], [1, "mobile-lookup"], [1, "lookup-field"], [1, "lookup-row"], [1, "search-input-wrap"], ["type", "tel", "inputmode", "numeric", "maxlength", "10", "placeholder", "Enter 10-digit mobile number", 3, "ngModelChange", "keypress", "input", "keyup.enter", "focus", "click", "ngModel"], ["class", "search-suggest", 4, "ngIf"], [1, "lookup-action", 3, "click", "disabled"], [1, "lookup-hint"], ["class", "lookup-message error", 4, "ngIf"], ["class", "lookup-message success", 4, "ngIf"], [1, "search-suggest"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "mousedown"], [1, "lookup-message", "error"], [1, "lookup-message", "success"], [1, "form-grid", "three-columns", "insurance-fields"], ["type", "text", "placeholder", "Provider name", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Policy number", 3, "ngModelChange", "ngModel"], [1, "submit-message", "error"], [1, "submit-message", "success"], [1, "dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Patient registration success", 1, "success-dialog"], ["type", "button", "aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "success-icon"], [1, "success-id-box"], ["type", "button", 1, "success-done", 3, "click"]], template: function PatientRegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "i", 4);
      \u0275\u0275text(5, "person_add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h2");
      \u0275\u0275text(8, "Patient Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Register new patients and maintain their personal, contact and medical information. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, " Registration Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "button", 9);
      \u0275\u0275listener("click", function PatientRegistrationComponent_Template_button_click_16_listener() {
        return ctx.selectRegistrationType("new");
      });
      \u0275\u0275text(17, " New Patient ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 9);
      \u0275\u0275listener("click", function PatientRegistrationComponent_Template_button_click_18_listener() {
        return ctx.selectRegistrationType("existing");
      });
      \u0275\u0275text(19, " Existing Patient ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 10)(21, "span", 7);
      \u0275\u0275text(22, " Patient Registration ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "strong");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 6)(26, "span", 7);
      \u0275\u0275text(27, " Registration Date ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "strong");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, PatientRegistrationComponent_div_30_Template, 18, 6, "div", 11);
      \u0275\u0275elementStart(31, "div", 12)(32, "section", 13)(33, "div", 14)(34, "div", 15)(35, "div", 16)(36, "div", 17)(37, "i", 4);
      \u0275\u0275text(38, "person");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div")(40, "h3");
      \u0275\u0275text(41, "Personal Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, " Enter patient's basic information ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 18)(45, "div", 19)(46, "label");
      \u0275\u0275text(47, " First Name ");
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.firstName, $event) || (ctx.patient.firstName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 19)(52, "label");
      \u0275\u0275text(53, " Last Name ");
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.lastName, $event) || (ctx.patient.lastName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 19)(58, "label");
      \u0275\u0275text(59, " Date of Birth ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.dateOfBirth, $event) || (ctx.patient.dateOfBirth = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 19)(62, "label");
      \u0275\u0275text(63, " Age ");
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_66_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.age, $event) || (ctx.patient.age = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 19)(68, "label");
      \u0275\u0275text(69, " Gender ");
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_select_ngModelChange_72_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.gender, $event) || (ctx.patient.gender = $event);
        return $event;
      });
      \u0275\u0275elementStart(73, "option", 25);
      \u0275\u0275text(74, " Select Gender ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "option", 26);
      \u0275\u0275text(76, " Male ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "option", 27);
      \u0275\u0275text(78, " Female ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "option", 28);
      \u0275\u0275text(80, " Other ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 19)(82, "label");
      \u0275\u0275text(83, " Blood Group ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_select_ngModelChange_84_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.bloodGroup, $event) || (ctx.patient.bloodGroup = $event);
        return $event;
      });
      \u0275\u0275elementStart(85, "option", 25);
      \u0275\u0275text(86, " Select Blood Group ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "option");
      \u0275\u0275text(88, "A+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option");
      \u0275\u0275text(90, "A-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option");
      \u0275\u0275text(92, "B+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "option");
      \u0275\u0275text(94, "B-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "option");
      \u0275\u0275text(96, "AB+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "option");
      \u0275\u0275text(98, "AB-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "option");
      \u0275\u0275text(100, "O+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "option");
      \u0275\u0275text(102, "O-");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "div", 19)(104, "label");
      \u0275\u0275text(105, " Marital Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_select_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.maritalStatus, $event) || (ctx.patient.maritalStatus = $event);
        return $event;
      });
      \u0275\u0275elementStart(107, "option", 25);
      \u0275\u0275text(108, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "option");
      \u0275\u0275text(110, "Single");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "option");
      \u0275\u0275text(112, "Married");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "option");
      \u0275\u0275text(114, "Divorced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "option");
      \u0275\u0275text(116, "Widowed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 19)(118, "label");
      \u0275\u0275text(119, " Occupation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_120_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.occupation, $event) || (ctx.patient.occupation = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 19)(122, "label");
      \u0275\u0275text(123, " Government ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_124_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.govtId, $event) || (ctx.patient.govtId = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 14)(126, "div", 15)(127, "div", 16)(128, "div", 31)(129, "i", 4);
      \u0275\u0275text(130, "phone");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div")(132, "h3");
      \u0275\u0275text(133, "Contact Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275text(135, " Patient's phone and communication details ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 18)(137, "div", 19)(138, "label");
      \u0275\u0275text(139, " Mobile Number ");
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_142_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.mobile, $event) || (ctx.patient.mobile = $event);
        return $event;
      });
      \u0275\u0275listener("keypress", function PatientRegistrationComponent_Template_input_keypress_142_listener($event) {
        return ctx.allowNumbersOnly($event);
      })("input", function PatientRegistrationComponent_Template_input_input_142_listener($event) {
        return ctx.keepNumbersOnly("mobile", $event, 10);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 19)(144, "label");
      \u0275\u0275text(145, " Alternate Number ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_146_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.alternateMobile, $event) || (ctx.patient.alternateMobile = $event);
        return $event;
      });
      \u0275\u0275listener("keypress", function PatientRegistrationComponent_Template_input_keypress_146_listener($event) {
        return ctx.allowNumbersOnly($event);
      })("input", function PatientRegistrationComponent_Template_input_input_146_listener($event) {
        return ctx.keepNumbersOnly("alternateMobile", $event, 10);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 19)(148, "label");
      \u0275\u0275text(149, " Email Address ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_150_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.email, $event) || (ctx.patient.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(151, "div", 14)(152, "div", 15)(153, "div", 16)(154, "div", 34)(155, "i", 4);
      \u0275\u0275text(156, "home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div")(158, "h3");
      \u0275\u0275text(159, "Address Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span");
      \u0275\u0275text(161, " Patient's residential address ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(162, "div", 35)(163, "div", 19)(164, "label");
      \u0275\u0275text(165, " Address Line 1 ");
      \u0275\u0275elementStart(166, "span");
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_168_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.addressLine1, $event) || (ctx.patient.addressLine1 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 19)(170, "label");
      \u0275\u0275text(171, " Address Line 2 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_172_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.addressLine2, $event) || (ctx.patient.addressLine2 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 38)(174, "div", 19)(175, "label");
      \u0275\u0275text(176, " City ");
      \u0275\u0275elementStart(177, "span");
      \u0275\u0275text(178, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_179_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.city, $event) || (ctx.patient.city = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 19)(181, "label");
      \u0275\u0275text(182, " State ");
      \u0275\u0275elementStart(183, "span");
      \u0275\u0275text(184, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_select_ngModelChange_185_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.state, $event) || (ctx.patient.state = $event);
        return $event;
      });
      \u0275\u0275elementStart(186, "option", 25);
      \u0275\u0275text(187, " Select State ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "option");
      \u0275\u0275text(189, "Tamil Nadu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "option");
      \u0275\u0275text(191, "Karnataka");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "option");
      \u0275\u0275text(193, "Kerala");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "option");
      \u0275\u0275text(195, "Andhra Pradesh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "option");
      \u0275\u0275text(197, "Telangana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "option");
      \u0275\u0275text(199, "Maharashtra");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(200, "div", 19)(201, "label");
      \u0275\u0275text(202, " Pincode ");
      \u0275\u0275elementStart(203, "span");
      \u0275\u0275text(204, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_205_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.pincode, $event) || (ctx.patient.pincode = $event);
        return $event;
      });
      \u0275\u0275listener("keypress", function PatientRegistrationComponent_Template_input_keypress_205_listener($event) {
        return ctx.allowNumbersOnly($event);
      })("input", function PatientRegistrationComponent_Template_input_input_205_listener($event) {
        return ctx.keepNumbersOnly("pincode", $event, 6);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(206, "div", 14)(207, "div", 15)(208, "div", 16)(209, "div", 41)(210, "i", 4);
      \u0275\u0275text(211, "emergency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div")(213, "h3");
      \u0275\u0275text(214, "Emergency Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "span");
      \u0275\u0275text(216, " Contact person in case of emergency ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(217, "div", 18)(218, "div", 19)(219, "label");
      \u0275\u0275text(220, " Contact Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_221_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.emergencyName, $event) || (ctx.patient.emergencyName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 19)(223, "label");
      \u0275\u0275text(224, " Relationship ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_select_ngModelChange_225_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.emergencyRelation, $event) || (ctx.patient.emergencyRelation = $event);
        return $event;
      });
      \u0275\u0275elementStart(226, "option", 25);
      \u0275\u0275text(227, " Select Relationship ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "option");
      \u0275\u0275text(229, "Father");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "option");
      \u0275\u0275text(231, "Mother");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "option");
      \u0275\u0275text(233, "Spouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "option");
      \u0275\u0275text(235, "Brother");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "option");
      \u0275\u0275text(237, "Sister");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "option");
      \u0275\u0275text(239, "Son");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "option");
      \u0275\u0275text(241, "Daughter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "option");
      \u0275\u0275text(243, "Guardian");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(244, "div", 19)(245, "label");
      \u0275\u0275text(246, " Contact Number ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_247_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.emergencyMobile, $event) || (ctx.patient.emergencyMobile = $event);
        return $event;
      });
      \u0275\u0275listener("keypress", function PatientRegistrationComponent_Template_input_keypress_247_listener($event) {
        return ctx.allowNumbersOnly($event);
      })("input", function PatientRegistrationComponent_Template_input_input_247_listener($event) {
        return ctx.keepNumbersOnly("emergencyMobile", $event, 10);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(248, "div", 14)(249, "div", 15)(250, "div", 16)(251, "div", 43)(252, "i", 4);
      \u0275\u0275text(253, "health_and_safety");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "div")(255, "h3");
      \u0275\u0275text(256, "Insurance Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "span");
      \u0275\u0275text(258, " Insurance and coverage information ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(259, "div", 44)(260, "label", 45)(261, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_261_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.hasInsurance, $event) || (ctx.patient.hasInsurance = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(262, "span");
      \u0275\u0275text(263, " Patient has insurance ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(264, PatientRegistrationComponent_div_264_Template, 13, 3, "div", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 48)(266, "div", 15)(267, "div", 16)(268, "div", 17)(269, "i", 4);
      \u0275\u0275text(270, "notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "div")(272, "h3");
      \u0275\u0275text(273, "Communication Preferences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "span");
      \u0275\u0275text(275, " Select how the patient receives notifications ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(276, "div", 49)(277, "label", 45)(278, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_278_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.smsNotification, $event) || (ctx.patient.smsNotification = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(279, "span");
      \u0275\u0275text(280, " SMS Notifications ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "label", 45)(282, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_282_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.whatsappNotification, $event) || (ctx.patient.whatsappNotification = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(283, "span");
      \u0275\u0275text(284, " WhatsApp Notifications ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "label", 45)(286, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_286_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.emailNotification, $event) || (ctx.patient.emailNotification = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(287, "span");
      \u0275\u0275text(288, " Email Notifications ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 50);
      \u0275\u0275template(290, PatientRegistrationComponent_span_290_Template, 2, 1, "span", 51)(291, PatientRegistrationComponent_span_291_Template, 2, 1, "span", 52);
      \u0275\u0275elementStart(292, "button", 53);
      \u0275\u0275listener("click", function PatientRegistrationComponent_Template_button_click_292_listener() {
        return ctx.clearForm();
      });
      \u0275\u0275text(293, " Clear Form ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "button", 54);
      \u0275\u0275listener("click", function PatientRegistrationComponent_Template_button_click_294_listener() {
        return ctx.registerPatient();
      });
      \u0275\u0275elementStart(295, "i", 4);
      \u0275\u0275text(296, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(297);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(298, "aside", 55)(299, "div", 56)(300, "div", 57)(301, "div")(302, "h3");
      \u0275\u0275text(303, "Patient Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "span");
      \u0275\u0275text(305, " Registration summary ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 58)(307, "i", 4);
      \u0275\u0275text(308, "person");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "div", 59)(310, "div", 60);
      \u0275\u0275text(311);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "h3");
      \u0275\u0275text(313);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "span", 61);
      \u0275\u0275text(315);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "div", 62)(317, "div")(318, "span");
      \u0275\u0275text(319, "Mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "strong");
      \u0275\u0275text(321);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div")(323, "span");
      \u0275\u0275text(324, "Age / Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "strong");
      \u0275\u0275text(326);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "div")(328, "span");
      \u0275\u0275text(329, "Blood Group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "strong");
      \u0275\u0275text(331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div")(333, "span");
      \u0275\u0275text(334, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "strong");
      \u0275\u0275text(336);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(337, "div", 63)(338, "div", 57)(339, "div")(340, "h3");
      \u0275\u0275text(341, "Registration Checklist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "span");
      \u0275\u0275text(343, " Required information ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(344, "div", 64)(345, "div", 65)(346, "span", 66)(347, "i", 4);
      \u0275\u0275text(348, "check");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "div")(350, "strong");
      \u0275\u0275text(351, "Personal Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "small");
      \u0275\u0275text(353, " Name and gender ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(354, "div", 65)(355, "span", 66)(356, "i", 4);
      \u0275\u0275text(357, "check");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div")(359, "strong");
      \u0275\u0275text(360, "Contact Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "small");
      \u0275\u0275text(362, " Mobile number ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(363, "div", 65)(364, "span", 66)(365, "i", 4);
      \u0275\u0275text(366, "check");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "div")(368, "strong");
      \u0275\u0275text(369, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "small");
      \u0275\u0275text(371, " Residential address ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(372, "div", 65)(373, "span", 67)(374, "i", 4);
      \u0275\u0275text(375, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "div")(377, "strong");
      \u0275\u0275text(378, "Emergency Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "small");
      \u0275\u0275text(380, " Optional ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(381, "div", 65)(382, "span", 67)(383, "i", 4);
      \u0275\u0275text(384, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(385, "div")(386, "strong");
      \u0275\u0275text(387, "Insurance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "small");
      \u0275\u0275text(389, " Optional ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(390, "div", 68)(391, "div", 69)(392, "i", 4);
      \u0275\u0275text(393, "help_outline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "div")(395, "strong");
      \u0275\u0275text(396, " Registration Help ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "span");
      \u0275\u0275text(398, " Make sure the patient's mobile number is correct for appointment notifications. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(399, PatientRegistrationComponent_div_399_Template, 1, 0, "div", 70)(400, PatientRegistrationComponent_div_400_Template, 18, 3, "div", 71);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275classProp("active", ctx.registrationType === "new");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.registrationType === "existing");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.patientId || "\u2014", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.todayLabel, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.registrationType === "existing");
      \u0275\u0275advance(20);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.firstName);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.firstName);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.lastName);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.lastName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.dateOfBirth);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.age);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.age);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.gender);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.gender);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.bloodGroup);
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.maritalStatus);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.occupation);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.govtId);
      \u0275\u0275advance(18);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.mobile);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.mobile);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.alternateMobile);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.email);
      \u0275\u0275advance(18);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.addressLine1);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.addressLine1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.addressLine2);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.city);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.city);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.state);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.state);
      \u0275\u0275advance(20);
      \u0275\u0275classProp("error", ctx.submitted && !ctx.patient.pincode);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.pincode);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.emergencyName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.emergencyRelation);
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.emergencyMobile);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.hasInsurance);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.patient.hasInsurance);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.smsNotification);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.whatsappNotification);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.emailNotification);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.submitError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitError && ctx.submitSuccess);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.submitButtonLabel, " ");
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1(" ", ctx.getInitials(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getPatientName(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.patientId || "\u2014", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.patient.mobile || "\u2014", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.patient.age || "\u2014", " / ", ctx.patient.gender || "\u2014", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.patient.bloodGroup || "\u2014", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.patient.city || "\u2014", " ");
      \u0275\u0275advance(9);
      \u0275\u0275classProp("completed", ctx.patient.firstName && ctx.patient.lastName);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("completed", ctx.patient.mobile);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("completed", ctx.patient.addressLine1 && ctx.patient.city);
      \u0275\u0275advance(36);
      \u0275\u0275property("ngIf", ctx.showSuccessDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessDialog);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #142454;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.registration-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #087ff0,\n      #126fe0);\n  color: white;\n  font-size: 24px;\n}\n.header-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 26px;\n  font-weight: 700;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #536998;\n  font-size: 15px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.secondary-btn[_ngcontent-%COMP%], \n.primary-btn[_ngcontent-%COMP%] {\n  height: 43px;\n  padding: 0 19px;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.secondary-btn[_ngcontent-%COMP%] {\n  border: 1px solid #d8e2ee;\n  background: white;\n  color: #233866;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  border: 1px solid #0879e8;\n  background: #0879e8;\n  color: white;\n}\n.primary-btn[_ngcontent-%COMP%]:hover, \n.register-action[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n.registration-info[_ngcontent-%COMP%] {\n  min-height: 66px;\n  display: grid;\n  grid-template-columns: 1.5fr 1fr 1fr;\n  align-items: center;\n  gap: 20px;\n  padding: 10px 16px;\n  margin-bottom: 15px;\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.info-label[_ngcontent-%COMP%] {\n  color: #75839e;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n}\n.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #18285a;\n  font-size: 15px;\n}\n.registration-number[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.registration-toggle[_ngcontent-%COMP%] {\n  width: fit-content;\n  display: flex;\n  border: 1px solid #d8e2ef;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.registration-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 0 14px;\n  border: none;\n  background: white;\n  color: #354a74;\n  font-size: 12px;\n  cursor: pointer;\n}\n.registration-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0879e8;\n  color: white;\n}\n.mobile-lookup[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  margin-bottom: 15px;\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n}\n.lookup-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #1b2b59;\n  font-size: 13px;\n  font-weight: 500;\n}\n.lookup-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ee4050;\n}\n.lookup-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search-suggest[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  max-height: 190px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  border: 1px solid #d6e0ed;\n  border-radius: 6px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, .15);\n  z-index: 60;\n}\n.search-suggest[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.search-suggest[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  padding: 8px 10px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  color: #253660;\n  font-size: 13px;\n  text-align: left;\n  cursor: pointer;\n}\n.search-suggest[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.search-suggest[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  background: #e3f0ff;\n  color: #0879e8;\n  font-weight: 600;\n}\n.lookup-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid #d6e0ed;\n  border-radius: 6px;\n  outline: none;\n  color: #253660;\n  font-size: 14px;\n}\n.lookup-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #0879e8;\n  box-shadow: 0 0 0 2px rgba(8, 121, 232, .07);\n}\n.lookup-action[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 130px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: none;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 14px;\n  cursor: pointer;\n}\n.lookup-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.lookup-action[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n.lookup-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  color: #7787a3;\n  font-size: 12px;\n}\n.lookup-message[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 13px;\n}\n.lookup-message.error[_ngcontent-%COMP%] {\n  color: #d93442;\n}\n.lookup-message.success[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.field-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #7787a3;\n  font-size: 12px;\n}\n.field-message[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  font-size: 12px;\n}\n.field-message.error[_ngcontent-%COMP%] {\n  color: #d93442;\n}\n.field-message.success[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.matched-select[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.matched-select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #1b2b59;\n  font-size: 13px;\n  font-weight: 500;\n}\n.matched-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  padding: 0 10px;\n  border: 1px solid #0879e8;\n  border-radius: 6px;\n  outline: none;\n  background: #f0f7ff;\n  color: #253660;\n  font-size: 13px;\n}\n.registration-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(650px, 1.65fr) minmax(280px, .65fr);\n  gap: 14px;\n  align-items: start;\n}\n.registration-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.form-section[_ngcontent-%COMP%] {\n  padding: 15px 17px;\n  border-bottom: 1px solid #e5ebf3;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.section-heading-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 19px;\n}\n.section-icon.blue[_ngcontent-%COMP%] {\n  background: #e9f4ff;\n  color: #0879e8;\n}\n.section-icon.green[_ngcontent-%COMP%] {\n  background: #e9f9f2;\n  color: #079765;\n}\n.section-icon.purple[_ngcontent-%COMP%] {\n  background: #f0ebff;\n  color: #6840db;\n}\n.section-icon.orange[_ngcontent-%COMP%] {\n  background: #fff3df;\n  color: #ec9300;\n}\n.section-icon.cyan[_ngcontent-%COMP%] {\n  background: #e8f9fb;\n  color: #0897a7;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #112052;\n  font-size: 17px;\n}\n.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #7787a3;\n  font-size: 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.three-columns[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.address-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr .8fr;\n  gap: 12px;\n}\n.field[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #1b2b59;\n  font-size: 13px;\n  font-weight: 500;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ee4050;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  padding: 0 10px;\n  border: 1px solid #d6e0ed;\n  border-radius: 6px;\n  outline: none;\n  background: white;\n  color: #253660;\n  font-size: 14px;\n  transition: .2s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #0879e8;\n  box-shadow: 0 0 0 2px rgba(8, 121, 232, .07);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8997ae;\n}\n.field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%] {\n  border-color: #e5484d;\n  box-shadow: 0 0 0 3px rgba(229, 72, 77, 0.1);\n}\n.field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%]:focus {\n  border-color: #e5484d;\n  box-shadow: 0 0 0 3px rgba(229, 72, 77, 0.12);\n}\n.insurance-row[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n}\n.insurance-fields[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.check-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #273a67;\n  font-size: 13px;\n  cursor: pointer;\n}\n.check-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n.check-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid #cbd8e8;\n  border-radius: 5px;\n  background: white;\n}\n.check-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  background: #0879e8;\n  border-color: #0879e8;\n}\n.check-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::after {\n  content: "\\2713";\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n}\n.communication-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  min-height: 69px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 12px 17px;\n}\n.clear-action[_ngcontent-%COMP%] {\n  height: 43px;\n  min-width: 130px;\n  border: 1px solid #d8e2ee;\n  border-radius: 6px;\n  background: white;\n  color: #23365f;\n  font-size: 14px;\n  cursor: pointer;\n}\n.register-action[_ngcontent-%COMP%] {\n  height: 43px;\n  min-width: 190px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  border: none;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.register-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.register-action[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n.submit-message[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-size: 13px;\n}\n.submit-message.error[_ngcontent-%COMP%] {\n  color: #d93442;\n}\n.submit-message.success[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.registration-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 13px;\n}\n.preview-card[_ngcontent-%COMP%], \n.checklist-card[_ngcontent-%COMP%], \n.help-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n}\n.preview-card[_ngcontent-%COMP%], \n.checklist-card[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.side-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.side-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #102052;\n  font-size: 17px;\n}\n.side-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #7887a3;\n  font-size: 12px;\n}\n.preview-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  background: #eaf4ff;\n  color: #0879e8;\n}\n.patient-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e7edf4;\n}\n.large-avatar[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #dff0ff,\n      #c5e2fb);\n  color: #0879e8;\n  font-size: 21px;\n  font-weight: 600;\n}\n.patient-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 9px 0 3px;\n  color: #142455;\n  font-size: 17px;\n}\n.preview-id[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-size: 12px;\n  font-weight: 600;\n}\n.preview-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 13px;\n  padding-top: 14px;\n}\n.preview-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.preview-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8794aa;\n  font-size: 11px;\n}\n.preview-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #263962;\n  font-size: 12px;\n  font-weight: 500;\n}\n.checklist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 13px;\n}\n.check-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.check-circle[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 27px;\n  border-radius: 50%;\n  background: #e9f9f1;\n  color: #079765;\n  font-size: 14px;\n  font-weight: 600;\n}\n.check-circle.optional[_ngcontent-%COMP%] {\n  background: #f1f5fa;\n  color: #8491a7;\n}\n.check-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.check-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #253660;\n  font-size: 13px;\n}\n.check-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8491a8;\n  font-size: 11px;\n}\n.help-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 11px;\n  padding: 14px;\n  background: #eff8ff;\n  border-color: #d8ebfb;\n}\n.help-icon[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 31px;\n  border-radius: 50%;\n  background: #d9edff;\n  color: #0879e8;\n  font-size: 17px;\n  font-weight: 700;\n}\n.help-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #17315c;\n  font-size: 13px;\n}\n.help-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #607596;\n  font-size: 11px;\n  line-height: 1.5;\n}\n@media (max-width: 1250px) {\n  .registration-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .registration-side[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .three-columns[_ngcontent-%COMP%], \n   .address-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .communication-options[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 15px;\n  }\n}\n@media (max-width: 650px) {\n  .registration-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 13px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .registration-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .three-columns[_ngcontent-%COMP%], \n   .address-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .registration-side[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .45);\n  z-index: 600;\n}\n.success-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  max-width: calc(100vw - 32px);\n  padding: 30px 26px 24px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, .25);\n  text-align: center;\n  z-index: 601;\n}\n.dialog-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: #eef3f8;\n  color: #5b7195;\n  cursor: pointer;\n}\n.dialog-close[_ngcontent-%COMP%]:hover {\n  background: #e2eaf3;\n}\n.dialog-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #15803d);\n  color: white;\n  box-shadow: 0 8px 20px rgba(34, 197, 94, .35);\n}\n.success-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.success-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 19px;\n  font-weight: 700;\n}\n.success-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #536998;\n  font-size: 14px;\n}\n.success-id-box[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 12px;\n  border: 1px dashed #0879e8;\n  border-radius: 8px;\n  background: #f0f7ff;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.success-id-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5b7195;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.success-id-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: .5px;\n}\n.success-done[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 43px;\n  border: none;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.success-done[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n/*# sourceMappingURL=patient-registration.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientRegistrationComponent, { className: "PatientRegistrationComponent" });
})();
export {
  PatientRegistrationComponent
};
//# sourceMappingURL=chunk-BA673TEC.js.map
