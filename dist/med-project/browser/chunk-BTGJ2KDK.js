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
  Router
} from "./chunk-4V2D7BB2.js";
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/PatientManagement/PatientView/patient-view.service.ts
var PatientViewService = class _PatientViewService {
  http;
  endpoint = `${API_BASE_URL}/patients`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    return new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
  }
  getPatients(filters) {
    let params = new HttpParams().set("from", filters.from).set("to", filters.to).set("page", String(filters.page)).set("pageSize", String(filters.pageSize));
    if (filters.search?.trim()) {
      params = params.set("search", filters.search.trim());
    }
    return this.http.get(this.endpoint, {
      headers: this.headers(),
      params
    });
  }
  static \u0275fac = function PatientViewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientViewService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PatientViewService, factory: _PatientViewService.\u0275fac, providedIn: "root" });
};

// src/app/PatientManagement/PatientView/patient-view.ts
function PatientViewComponent_table_29_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
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
    \u0275\u0275elementStart(21, "td")(22, "div", 30)(23, "button", 31);
    \u0275\u0275listener("click", function PatientViewComponent_table_29_tr_26_Template_button_click_23_listener() {
      const patient_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewPatient(patient_r3));
    });
    \u0275\u0275elementStart(24, "i", 5);
    \u0275\u0275text(25, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 32);
    \u0275\u0275listener("click", function PatientViewComponent_table_29_tr_26_Template_button_click_26_listener() {
      const patient_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editPatient(patient_r3));
    });
    \u0275\u0275elementStart(27, "i", 5);
    \u0275\u0275text(28, "edit");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const patient_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.patientId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.registrationDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.mobile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.bloodGroup);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.city);
  }
}
function PatientViewComponent_table_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Patient ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Reg Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Blood Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, PatientViewComponent_table_29_tr_26_Template, 29, 10, "tr", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r3.filteredPatients);
  }
}
function PatientViewComponent_div_30_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", size_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", size_r7, " / page");
  }
}
function PatientViewComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "button", 35);
    \u0275\u0275listener("click", function PatientViewComponent_div_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(5, " \u2039 Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275listener("click", function PatientViewComponent_div_30_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(9, " Next \u203A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PatientViewComponent_div_30_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.pageSize, $event) || (ctx_r3.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PatientViewComponent_div_30_Template_select_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageSizeChange());
    });
    \u0275\u0275template(11, PatientViewComponent_div_30_option_11_Template, 2, 2, "option", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r3.rangeStart, " to ", ctx_r3.rangeEnd, " of ", ctx_r3.total, " patients ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r3.page, " of ", ctx_r3.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.page >= ctx_r3.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.pageSizeOptions);
  }
}
function PatientViewComponent_ng_template_31_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Loading patients...");
    \u0275\u0275elementEnd();
  }
}
function PatientViewComponent_ng_template_31_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.loadError);
  }
}
function PatientViewComponent_ng_template_31_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No patients found.");
    \u0275\u0275elementEnd();
  }
}
function PatientViewComponent_ng_template_31_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Try a different date range or search, or register a new patient.");
    \u0275\u0275elementEnd();
  }
}
function PatientViewComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "i", 5);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PatientViewComponent_ng_template_31_p_3_Template, 2, 0, "p", 41)(4, PatientViewComponent_ng_template_31_p_4_Template, 2, 1, "p", 41)(5, PatientViewComponent_ng_template_31_p_5_Template, 2, 0, "p", 41)(6, PatientViewComponent_ng_template_31_span_6_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading && ctx_r3.loadError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading && !ctx_r3.loadError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading && !ctx_r3.loadError);
  }
}
function PatientViewComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function PatientViewComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDetails());
    });
    \u0275\u0275elementEnd();
  }
}
function PatientViewComponent_div_44_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.selectedPatient.registrationType, " \xB7 ");
  }
}
function PatientViewComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 47);
    \u0275\u0275template(9, PatientViewComponent_div_44_span_9_Template, 2, 1, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 48)(12, "div", 49)(13, "div", 50)(14, "div", 51)(15, "i", 5);
    \u0275\u0275text(16, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "h4");
    \u0275\u0275text(19, "Personal Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Enter patient's basic information");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 52)(23, "div")(24, "span");
    \u0275\u0275text(25, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "span");
    \u0275\u0275text(30, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "span");
    \u0275\u0275text(35, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "span");
    \u0275\u0275text(40, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "span");
    \u0275\u0275text(45, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "span");
    \u0275\u0275text(50, "Blood Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div")(54, "span");
    \u0275\u0275text(55, "Marital Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div")(59, "span");
    \u0275\u0275text(60, "Occupation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div")(64, "span");
    \u0275\u0275text(65, "Govt ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 48)(69, "div", 49)(70, "div", 50)(71, "div", 53)(72, "i", 5);
    \u0275\u0275text(73, "phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div")(75, "h4");
    \u0275\u0275text(76, "Contact Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78, "Patient's phone and communication details");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 52)(80, "div")(81, "span");
    \u0275\u0275text(82, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "strong");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div")(86, "span");
    \u0275\u0275text(87, "Alternate Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "strong");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div")(91, "span");
    \u0275\u0275text(92, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "strong");
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "div", 48)(96, "div", 49)(97, "div", 50)(98, "div", 54)(99, "i", 5);
    \u0275\u0275text(100, "home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div")(102, "h4");
    \u0275\u0275text(103, "Address Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span");
    \u0275\u0275text(105, "Patient's residential address");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(106, "div", 52)(107, "div")(108, "span");
    \u0275\u0275text(109, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "strong");
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div")(113, "span");
    \u0275\u0275text(114, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "strong");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div")(118, "span");
    \u0275\u0275text(119, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "strong");
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div")(123, "span");
    \u0275\u0275text(124, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "strong");
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div")(128, "span");
    \u0275\u0275text(129, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "strong");
    \u0275\u0275text(131);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(132, "div", 48)(133, "div", 49)(134, "div", 50)(135, "div", 55)(136, "i", 5);
    \u0275\u0275text(137, "emergency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div")(139, "h4");
    \u0275\u0275text(140, "Emergency Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "span");
    \u0275\u0275text(142, "Contact person in case of emergency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(143, "div", 52)(144, "div")(145, "span");
    \u0275\u0275text(146, "Contact Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "strong");
    \u0275\u0275text(148);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div")(150, "span");
    \u0275\u0275text(151, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "strong");
    \u0275\u0275text(153);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "div")(155, "span");
    \u0275\u0275text(156, "Contact Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "strong");
    \u0275\u0275text(158);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(159, "div", 48)(160, "div", 49)(161, "div", 50)(162, "div", 56)(163, "i", 5);
    \u0275\u0275text(164, "health_and_safety");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "div")(166, "h4");
    \u0275\u0275text(167, "Insurance Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "span");
    \u0275\u0275text(169, "Insurance and coverage information");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(170, "div", 52)(171, "div")(172, "span");
    \u0275\u0275text(173, "Has Insurance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "strong");
    \u0275\u0275text(175);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "div")(177, "span");
    \u0275\u0275text(178, "Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "strong");
    \u0275\u0275text(180);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "div")(182, "span");
    \u0275\u0275text(183, "Policy Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "strong");
    \u0275\u0275text(185);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "div")(187, "span");
    \u0275\u0275text(188, "Policy Expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "strong");
    \u0275\u0275text(190);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(191, "div", 48)(192, "div", 49)(193, "div", 50)(194, "div", 51)(195, "i", 5);
    \u0275\u0275text(196, "notifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(197, "div")(198, "h4");
    \u0275\u0275text(199, "Communication Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "span");
    \u0275\u0275text(201, "Select how the patient receives notifications");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(202, "div", 52)(203, "div")(204, "span");
    \u0275\u0275text(205, "SMS Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "strong");
    \u0275\u0275text(207);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(208, "div")(209, "span");
    \u0275\u0275text(210, "WhatsApp Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "strong");
    \u0275\u0275text(212);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div")(214, "span");
    \u0275\u0275text(215, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "strong");
    \u0275\u0275text(217);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getInitials(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.patientId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedPatient.registrationType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.registrationDate);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.firstName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.lastName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.dateOfBirth);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.age);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.gender);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.bloodGroup);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.maritalStatus);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.occupation || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.govtId || "\u2014");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.mobile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.alternateMobile || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.email);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.addressLine1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.addressLine2 || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.city);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.state);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.pincode);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.emergencyName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.emergencyRelation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.emergencyMobile);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.hasInsurance ? "Yes" : "No");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.insuranceProvider || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.policyNumber || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.policyExpiry || "\u2014");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.smsNotification ? "Yes" : "No");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.whatsappNotification ? "Yes" : "No");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedPatient.emailNotification ? "Yes" : "No");
  }
}
var PatientViewComponent = class _PatientViewComponent {
  patientViewService;
  router;
  startDate = this.currentMonthStart();
  endDate = /* @__PURE__ */ new Date();
  searchText = "";
  page = 1;
  pageSize = 20;
  total = 0;
  pageSizeOptions = [10, 20, 50];
  patients = [];
  filteredPatients = [];
  selectedPatient = null;
  showPatientDetails = false;
  isLoading = false;
  loadError = "";
  constructor(patientViewService, router) {
    this.patientViewService = patientViewService;
    this.router = router;
  }
  ngOnInit() {
    this.loadPatients();
  }
  loadPatients() {
    this.isLoading = true;
    this.loadError = "";
    this.selectedPatient = null;
    this.showPatientDetails = false;
    this.patientViewService.getPatients({
      from: this.toISODate(this.startDate),
      to: this.toISODate(this.endDate),
      search: this.searchText,
      page: this.page,
      pageSize: this.pageSize
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.patients = (response.patients || []).map((item) => this.toRow(item));
        this.filteredPatients = [...this.patients];
        this.total = response.total || 0;
        this.page = response.page || this.page;
        this.pageSize = response.pageSize || this.pageSize;
      },
      error: (error) => {
        this.isLoading = false;
        this.patients = [];
        this.filteredPatients = [];
        this.total = 0;
        this.loadError = error.error?.message || "Unable to load patients. Please try again.";
      }
    });
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }
  get rangeStart() {
    return this.total === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
  }
  get rangeEnd() {
    return Math.min(this.page * this.pageSize, this.total);
  }
  prevPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.loadPatients();
    }
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.page += 1;
      this.loadPatients();
    }
  }
  onPageSizeChange() {
    this.page = 1;
    this.loadPatients();
  }
  applySearch() {
    this.page = 1;
    this.loadPatients();
  }
  applyFilters() {
    this.page = 1;
    this.loadPatients();
  }
  resetFilters() {
    this.startDate = this.currentMonthStart();
    this.endDate = /* @__PURE__ */ new Date();
    this.searchText = "";
    this.page = 1;
    this.loadPatients();
  }
  onDateRangeChange(range) {
    this.startDate = range.startDate;
    this.endDate = range.endDate;
    this.page = 1;
    this.loadPatients();
  }
  currentMonthStart() {
    const now = /* @__PURE__ */ new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }
  toRow(item) {
    const firstName = item.firstName || "";
    const lastName = item.lastName || "";
    const name = `${firstName} ${lastName}`.trim() || "\u2014";
    return {
      patientId: item.patientRegistrationId || "",
      registrationType: "",
      firstName,
      lastName,
      name,
      age: item.age ?? 0,
      gender: item.gender || "",
      mobile: item.mobile || "",
      alternateMobile: item.alternateMobile || "",
      email: item.email || "",
      city: item.city || "",
      state: item.state || "",
      pincode: item.pincode || "",
      addressLine1: item.addressLine1 || "",
      addressLine2: item.addressLine2 || "",
      dateOfBirth: (item.dateOfBirth || "").slice(0, 10),
      bloodGroup: item.bloodGroup || "",
      maritalStatus: item.maritalStatus || "",
      occupation: item.occupation || "",
      govtId: item.govtId || "",
      emergencyName: item.emergencyName || "",
      emergencyRelation: item.emergencyRelation || "",
      emergencyMobile: item.emergencyMobile || "",
      hasInsurance: !!item.hasInsurance,
      insuranceProvider: item.insuranceProvider || "",
      policyNumber: item.policyNumber || "",
      policyExpiry: (item.policyExpiry || "").slice(0, 10),
      smsNotification: !!item.smsNotification,
      whatsappNotification: !!item.whatsappNotification,
      emailNotification: !!item.emailNotification,
      registrationDate: (item.registeredAt || "").slice(0, 10)
    };
  }
  toISODate(date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  viewPatient(patient) {
    this.selectedPatient = patient;
    this.showPatientDetails = true;
  }
  editPatient(patient) {
    this.router.navigate(["/patient/register"], {
      state: { editPatient: patient }
    });
  }
  closeDetails() {
    this.selectedPatient = null;
    this.showPatientDetails = false;
  }
  getInitials() {
    if (!this.selectedPatient) {
      return "NP";
    }
    const parts = this.selectedPatient.name.split(" ").filter(Boolean);
    const initials = parts.slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join("");
    return initials || "NP";
  }
  static \u0275fac = function PatientViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientViewComponent)(\u0275\u0275directiveInject(PatientViewService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientViewComponent, selectors: [["app-patient-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 10, consts: [["emptyState", ""], [1, "patient-view"], [1, "view-header"], [1, "header-content"], [1, "header-icon"], [1, "material-icons"], [1, "filter-card"], [1, "filter-field", "search-field"], [1, "search-wrapper"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Search by name, ID, mobile, email or city...", 3, "ngModelChange", "ngModel"], [1, "filter-field", "date-field"], [3, "dateRangeChange", "startDate", "endDate"], [1, "filter-actions"], ["type", "button", 1, "search-btn", 3, "click"], ["type", "button", 1, "secondary-btn", 3, "click"], [1, "list-card"], [4, "ngIf", "ngIfElse"], ["class", "pagination", 4, "ngIf"], ["class", "drawer-overlay", 3, "click", 4, "ngIf"], [1, "patient-drawer"], [1, "drawer-header"], ["type", "button", 1, "close-btn", 3, "click"], [1, "drawer-tabs"], ["type", "button", 1, "active"], ["class", "drawer-body", 4, "ngIf"], [1, "drawer-footer"], ["type", "button", 1, "drawer-primary", 3, "click"], [4, "ngFor", "ngForOf"], [1, "patient-id"], [1, "action-buttons"], ["type", "button", "title", "View", 3, "click"], ["type", "button", "title", "Edit", 3, "click"], [1, "pagination"], [1, "pages"], ["type", "button", 3, "click", "disabled"], [1, "page-info"], ["aria-label", "Rows per page", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "empty-state"], [4, "ngIf"], [1, "drawer-overlay", 3, "click"], [1, "drawer-body"], [1, "patient-preview"], [1, "large-avatar"], [1, "preview-id"], [1, "preview-meta"], [1, "preview-section"], [1, "section-heading"], [1, "section-heading-left"], [1, "section-icon", "blue"], [1, "preview-details"], [1, "section-icon", "green"], [1, "section-icon", "purple"], [1, "section-icon", "orange"], [1, "section-icon", "cyan"]], template: function PatientViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "i", 5);
      \u0275\u0275text(5, "list_alt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h2");
      \u0275\u0275text(8, "View Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Search and view registered patient information. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "label");
      \u0275\u0275text(14, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "i", 9);
      \u0275\u0275text(17, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PatientViewComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function PatientViewComponent_Template_input_ngModelChange_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applySearch());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 11)(20, "label");
      \u0275\u0275text(21, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "app-date-range-picker", 12);
      \u0275\u0275listener("dateRangeChange", function PatientViewComponent_Template_app_date_range_picker_dateRangeChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDateRangeChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 13)(24, "button", 14);
      \u0275\u0275listener("click", function PatientViewComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275text(25, " Search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 15);
      \u0275\u0275listener("click", function PatientViewComponent_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275text(27, " Reset ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 16);
      \u0275\u0275template(29, PatientViewComponent_table_29_Template, 27, 1, "table", 17)(30, PatientViewComponent_div_30_Template, 12, 9, "div", 18)(31, PatientViewComponent_ng_template_31_Template, 7, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, PatientViewComponent_div_33_Template, 1, 0, "div", 19);
      \u0275\u0275elementStart(34, "aside", 20)(35, "div", 21)(36, "h2");
      \u0275\u0275text(37, "Patient Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 22);
      \u0275\u0275listener("click", function PatientViewComponent_Template_button_click_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDetails());
      });
      \u0275\u0275elementStart(39, "i", 5);
      \u0275\u0275text(40, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 23)(42, "button", 24);
      \u0275\u0275text(43, " Patient Preview ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(44, PatientViewComponent_div_44_Template, 218, 32, "div", 25);
      \u0275\u0275elementStart(45, "div", 26)(46, "button", 27);
      \u0275\u0275listener("click", function PatientViewComponent_Template_button_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDetails());
      });
      \u0275\u0275text(47, " Close ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const emptyState_r9 = \u0275\u0275reference(32);
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(4);
      \u0275\u0275property("startDate", ctx.startDate)("endDate", ctx.endDate);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredPatients.length > 0)("ngIfElse", emptyState_r9);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.total > 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showPatientDetails);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showPatientDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.selectedPatient);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DateRangePickerComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #142454;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.view-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #087ff0,\n      #126fe0);\n  color: white;\n  font-size: 24px;\n}\n.header-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 26px;\n  font-weight: 700;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #536998;\n  font-size: 15px;\n}\n.filter-card[_ngcontent-%COMP%], \n.list-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e8f3;\n  border-radius: 10px;\n  box-shadow: 0 2px 7px rgba(40, 75, 115, .04);\n}\n.filter-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 14px;\n  margin-bottom: 15px;\n}\n.filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 170px;\n}\n.filter-field.search-field[_ngcontent-%COMP%] {\n  flex: 1 1 380px;\n  min-width: 280px;\n}\n.filter-field.date-field[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 200px;\n}\n.filter-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #5b7195;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  height: 36px;\n  border-radius: 8px;\n  background: #edf4fb;\n}\n.filter-field[_ngcontent-%COMP%]   app-date-range-picker[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.filter-field.date-field[_ngcontent-%COMP%]     .date-picker-btn {\n  width: 100%;\n  min-width: 200px;\n  height: 36px;\n  padding: 0 12px;\n  justify-content: space-between;\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: #40608f;\n  font-size: 22px;\n}\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: #263d69;\n  font-size: 14px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-left: auto;\n}\n.search-btn[_ngcontent-%COMP%] {\n  height: 36px;\n  padding: 0 20px;\n  border: 1px solid #0879e8;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 14px;\n  cursor: pointer;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n.secondary-btn[_ngcontent-%COMP%] {\n  height: 36px;\n  padding: 0 18px;\n  border: 1px solid #d8e2ee;\n  border-radius: 6px;\n  background: white;\n  color: #233866;\n  font-size: 14px;\n  cursor: pointer;\n}\n.list-card[_ngcontent-%COMP%] {\n  padding: 8px 16px 16px;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e6edf5;\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%] {\n  color: #5b7195;\n  font-weight: 600;\n}\ntd[_ngcontent-%COMP%] {\n  color: #1b2c55;\n}\n.patient-id[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0879e8;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d8e2ee;\n  border-radius: 6px;\n  background: white;\n  color: #40608f;\n  cursor: pointer;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #edf4fb;\n}\n.action-buttons[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 12px 4px 4px;\n  color: #5b7195;\n  font-size: 13px;\n}\n.pages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 12px;\n  border: 1px solid #d8e2ee;\n  border-radius: 6px;\n  background: white;\n  color: #233866;\n  font-size: 13px;\n  cursor: pointer;\n}\n.pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #edf4fb;\n}\n.page-info[_ngcontent-%COMP%] {\n  min-width: 90px;\n  text-align: center;\n}\n.pages[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 8px;\n  border: 1px solid #d8e2ee;\n  border-radius: 6px;\n  background: white;\n  color: #233866;\n  font-size: 13px;\n}\n.details-card[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  background: white;\n  border: 1px solid #e0e8f3;\n  border-radius: 10px;\n  box-shadow: 0 2px 7px rgba(40, 75, 115, .04);\n  padding: 16px;\n}\n.details-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.details-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  color: #071554;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d8e2ee;\n  border-radius: 6px;\n  background: white;\n  color: #40608f;\n  cursor: pointer;\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .28);\n  z-index: 400;\n}\n.patient-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -520px;\n  bottom: 0;\n  width: 520px;\n  max-width: 92vw;\n  background: #ffffff;\n  z-index: 500;\n  box-shadow: -5px 0 25px rgba(15, 23, 42, .16);\n  display: flex;\n  flex-direction: column;\n  transition: right .25s ease;\n}\n.patient-drawer.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.drawer-header[_ngcontent-%COMP%] {\n  min-height: 57px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e4eaf1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  color: #071554;\n}\n.drawer-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e4eaf1;\n}\n.drawer-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: white;\n  padding: 12px;\n  font-size: 14px;\n  color: #5b7195;\n  cursor: default;\n}\n.drawer-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-weight: 600;\n  border-bottom: 3px solid #0879e8;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n}\n.patient-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 0 16px;\n  border-bottom: 1px solid #e6edf5;\n  text-align: center;\n}\n.large-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e2edf8,\n      #c8d8eb);\n  color: #176cc6;\n  font-size: 22px;\n  font-weight: 700;\n}\n.patient-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 19px;\n  color: #071554;\n}\n.preview-id[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5b7195;\n}\n.preview-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8da0bc;\n}\n.preview-section[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #eef2f7;\n}\n.preview-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.section-heading-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  color: white;\n  font-size: 18px;\n}\n.section-icon.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #087ff0,\n      #126fe0);\n}\n.section-icon.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #15803d);\n}\n.section-icon.purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6d28d9);\n}\n.section-icon.orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #ea580c);\n}\n.section-icon.cyan[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0284c7);\n}\n.section-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: #071554;\n}\n.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #536998;\n}\n.preview-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.preview-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 9px 0;\n  border-bottom: 1px solid #eef2f7;\n}\n.preview-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.preview-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5b7195;\n}\n.preview-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1b2c55;\n  overflow-wrap: anywhere;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-top: 1px solid #e4eaf1;\n  display: flex;\n}\n.drawer-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 42px;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.drawer-primary[_ngcontent-%COMP%] {\n  border: 1px solid #0879e8;\n  background: #0879e8;\n  color: white;\n}\n.drawer-primary[_ngcontent-%COMP%]:hover {\n  background: #066fd8;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 48px 16px;\n  color: #5b7195;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #9aabc2;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #233866;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=patient-view.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientViewComponent, { className: "PatientViewComponent" });
})();
export {
  PatientViewComponent
};
//# sourceMappingURL=chunk-BTGJ2KDK.js.map
