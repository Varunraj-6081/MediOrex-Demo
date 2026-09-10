import {
  BookingAppointmentService
} from "./chunk-VGG7MSJA.js";
import {
  PatientRegistrationService
} from "./chunk-KGCK5YBE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GFRD3CSB.js";
import "./chunk-OCZWZWFA.js";
import {
  Router
} from "./chunk-4V2D7BB2.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/BookingManagement/Booking/booking-appointment.component.ts
function BookingAppointmentComponent_ul_56_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 62);
    \u0275\u0275listener("mousedown", function BookingAppointmentComponent_ul_56_li_1_Template_button_mousedown_1_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelectMatchedPatient(p_r2.patientRegistrationId || ""));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", (p_r2.patientRegistrationId || "") === ctx_r2.selectedMatchedId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getMatchedLabel(p_r2), " ");
  }
}
function BookingAppointmentComponent_ul_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 61);
    \u0275\u0275template(1, BookingAppointmentComponent_ul_56_li_1_Template, 3, 3, "li", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.matchedPatients);
  }
}
function BookingAppointmentComponent_small_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, " Searching... ");
    \u0275\u0275elementEnd();
  }
}
function BookingAppointmentComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.lookupError);
  }
}
function BookingAppointmentComponent_div_94_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", dept_r5.departmentId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r5.departmentName, " ");
  }
}
function BookingAppointmentComponent_div_94_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
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
function BookingAppointmentComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 14)(2, "div", 15)(3, "i", 16);
    \u0275\u0275text(4, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Appointment Details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 66)(8, "div", 20)(9, "label");
    \u0275\u0275text(10, " Department ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_div_94_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.appointment.departmentId, $event) || (ctx_r2.appointment.departmentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BookingAppointmentComponent_div_94_Template_select_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDepartmentChange());
    });
    \u0275\u0275elementStart(12, "option", 68);
    \u0275\u0275text(13, " Select Department ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, BookingAppointmentComponent_div_94_option_14_Template, 2, 2, "option", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "label");
    \u0275\u0275text(17, " Doctor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_div_94_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.appointment.doctorId, $event) || (ctx_r2.appointment.doctorId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 68);
    \u0275\u0275text(20, " Select Doctor ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, BookingAppointmentComponent_div_94_option_21_Template, 2, 3, "option", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "label");
    \u0275\u0275text(24, " Appointment Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_div_94_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.appointment.date, $event) || (ctx_r2.appointment.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 20)(27, "label");
    \u0275\u0275text(28, " Time Slot ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_div_94_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.appointment.time, $event) || (ctx_r2.appointment.time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 71);
    \u0275\u0275text(31, " Select Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option");
    \u0275\u0275text(33, "09:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option");
    \u0275\u0275text(35, "10:00 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option");
    \u0275\u0275text(37, "10:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option");
    \u0275\u0275text(39, "11:00 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option");
    \u0275\u0275text(41, "11:30 AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option");
    \u0275\u0275text(43, "12:00 PM");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 72)(45, "div", 20)(46, "label");
    \u0275\u0275text(47, "Consultation Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 73)(49, "label", 32)(50, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_div_94_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.appointment.consultationType, $event) || (ctx_r2.appointment.consultationType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "span");
    \u0275\u0275text(52, " In-Person (OPD) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "label", 32)(54, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_div_94_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.appointment.consultationType, $event) || (ctx_r2.appointment.consultationType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "span");
    \u0275\u0275text(56, " Video Consultation ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 76)(58, "label");
    \u0275\u0275text(59, "Remarks (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "textarea", 77);
    \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_div_94_Template_textarea_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.appointment.remarks, $event) || (ctx_r2.appointment.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.appointment.departmentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.departments);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.appointment.doctorId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.doctors);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.appointment.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.appointment.time);
    \u0275\u0275advance(21);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.appointment.consultationType);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.appointment.consultationType);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.appointment.remarks);
  }
}
function BookingAppointmentComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.bookError);
  }
}
function BookingAppointmentComponent_tr_155_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "button", 88);
    \u0275\u0275listener("click", function BookingAppointmentComponent_tr_155_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.askCancelToken(item_r10));
    });
    \u0275\u0275elementStart(2, "i", 3);
    \u0275\u0275text(3, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Cancel Token ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canCancel(item_r10));
  }
}
function BookingAppointmentComponent_tr_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 82);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 83);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 84)(14, "button", 85);
    \u0275\u0275listener("click", function BookingAppointmentComponent_tr_155_Template_button_click_14_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMenu(i_r8));
    });
    \u0275\u0275elementStart(15, "i", 3);
    \u0275\u0275text(16, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BookingAppointmentComponent_tr_155_div_17_Template, 5, 1, "div", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r10.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r10.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("online", item_r10.type === "Online")("walkin", item_r10.type === "Walk-in");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(item_r10.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r10.token, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.openMenuIndex === i_r8);
  }
}
function BookingAppointmentComponent_tr_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, " No appointments yet. ");
    \u0275\u0275elementEnd()();
  }
}
function BookingAppointmentComponent_div_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275listener("click", function BookingAppointmentComponent_div_170_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTokenDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function BookingAppointmentComponent_div_171_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Token for ", ctx_r2.savedPatientName, " has been generated.");
  }
}
function BookingAppointmentComponent_div_171_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Token has been generated successfully.");
    \u0275\u0275elementEnd();
  }
}
function BookingAppointmentComponent_div_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "button", 92);
    \u0275\u0275listener("click", function BookingAppointmentComponent_div_171_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTokenDialog());
    });
    \u0275\u0275elementStart(2, "i", 3);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 93)(5, "i", 3);
    \u0275\u0275text(6, "confirmation_number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Token Generated Successfully");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BookingAppointmentComponent_div_171_p_9_Template, 2, 1, "p", 53)(10, BookingAppointmentComponent_div_171_p_10_Template, 2, 0, "p", 53);
    \u0275\u0275elementStart(11, "div", 94)(12, "span");
    \u0275\u0275text(13, "Token Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 95);
    \u0275\u0275listener("click", function BookingAppointmentComponent_div_171_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTokenDialog());
    });
    \u0275\u0275text(17, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.savedPatientName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.savedPatientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.savedTokenNumber);
  }
}
function BookingAppointmentComponent_div_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275listener("click", function BookingAppointmentComponent_div_172_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275elementEnd();
  }
}
function BookingAppointmentComponent_div_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "button", 92);
    \u0275\u0275listener("click", function BookingAppointmentComponent_div_173_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275elementStart(2, "i", 3);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 97)(5, "i", 3);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Cancel Token?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, " Do you want to cancel token ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 98)(15, "button", 99);
    \u0275\u0275listener("click", function BookingAppointmentComponent_div_173_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275text(16, " No ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 100);
    \u0275\u0275listener("click", function BookingAppointmentComponent_div_173_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmCancelToken());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.confirmCancelItem.token);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isCancelling);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isCancelling);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isCancelling ? "Cancelling..." : "Yes, Cancel", " ");
  }
}
var BookingAppointmentComponent = class _BookingAppointmentComponent {
  patientRegistrationService;
  bookingAppointmentService;
  router;
  bookingMode = "offline";
  patientType = "new";
  departments = [];
  doctors = [];
  isLoadingMasters = false;
  mastersError = "";
  isSearching = false;
  lookupError = "";
  matchedPatients = [];
  selectedMatchedId = "";
  comboOpen = false;
  lastFetchedMobile = "";
  // Snapshot of patient data as filled by lookup. Compared at booking
  // time so unchanged bookings send no patient fields at all.
  patientSnapshot = null;
  isBooking = false;
  bookError = "";
  showTokenDialog = false;
  savedTokenNumber = "";
  savedAppointmentNumber = "";
  savedPatientName = "";
  constructor(patientRegistrationService, bookingAppointmentService, router) {
    this.patientRegistrationService = patientRegistrationService;
    this.bookingAppointmentService = bookingAppointmentService;
    this.router = router;
  }
  ngOnInit() {
    this.appointment.date = this.todayLocal();
    this.loadDepartments();
    this.loadTodayAppointments();
  }
  loadTodayAppointments() {
    this.bookingAppointmentService.getAppointments(this.todayLocal()).subscribe({
      next: (response) => {
        const list = response?.appointments || [];
        const validStatuses = ["Confirmed", "Waiting", "Cancelled", "Consulted"];
        this.appointments = list.map((item) => ({
          appointmentId: item.appointmentId,
          name: item.patientName || "\u2014",
          time: item.displayTime || item.time || "",
          type: item.bookingMode === "Online" ? "Online" : "Walk-in",
          status: validStatuses.includes(item.status) ? item.status : "Waiting",
          token: item.token || "-"
        }));
      },
      error: () => {
        this.appointments = [];
      }
    });
  }
  loadDepartments() {
    this.isLoadingMasters = true;
    this.mastersError = "";
    this.bookingAppointmentService.getDepartments().subscribe({
      next: (response) => {
        this.isLoadingMasters = false;
        this.departments = response?.departments || [];
        if (this.departments.length > 0) {
          this.appointment.departmentId = this.departments[0].departmentId;
        } else {
          this.appointment.departmentId = null;
        }
        this.loadDoctors();
      },
      error: (error) => {
        this.isLoadingMasters = false;
        this.mastersError = error.error?.message || "Unable to load departments.";
      }
    });
  }
  loadDoctors() {
    this.bookingAppointmentService.getDoctors(this.appointment.departmentId).subscribe({
      next: (response) => {
        this.doctors = response?.doctors || [];
        if (this.doctors.length > 0) {
          this.appointment.doctorId = this.doctors[0].doctorId;
        } else {
          this.appointment.doctorId = null;
        }
      },
      error: (error) => {
        this.mastersError = error.error?.message || "Unable to load doctors.";
      }
    });
  }
  onDepartmentChange() {
    this.appointment.doctorId = null;
    this.loadDoctors();
  }
  patient = {
    name: "",
    mobile: "",
    email: "",
    age: null,
    sex: "",
    address: ""
  };
  appointment = {
    departmentId: null,
    doctorId: null,
    date: "",
    time: "",
    consultationType: "In-Person",
    remarks: ""
  };
  appointments = [];
  get totalCount() {
    return this.appointments.length;
  }
  get consultedCount() {
    return this.appointments.filter((a) => a.status === "Consulted").length;
  }
  get waitingCount() {
    return this.appointments.filter((a) => a.status === "Waiting").length;
  }
  get cancelledCount() {
    return this.appointments.filter((a) => a.status === "Cancelled").length;
  }
  get recentAppointments() {
    return this.appointments.slice(-10).reverse();
  }
  viewAll() {
    this.router.navigate(["/booking/appointment-list"]);
  }
  newAppointment() {
    this.clearForm();
    this.patientType = "new";
  }
  clearForm() {
    this.isSearching = false;
    this.lookupError = "";
    this.matchedPatients = [];
    this.selectedMatchedId = "";
    this.comboOpen = false;
    this.lastFetchedMobile = "";
    this.patientSnapshot = null;
    this.bookError = "";
    this.showTokenDialog = false;
    this.patient = {
      name: "",
      mobile: "",
      email: "",
      age: null,
      sex: "",
      address: ""
    };
    this.appointment = {
      departmentId: this.departments.length > 0 ? this.departments[0].departmentId : null,
      doctorId: null,
      date: this.todayLocal(),
      time: "",
      consultationType: "In-Person",
      remarks: ""
    };
    if (this.appointment.departmentId !== null) {
      this.loadDoctors();
    } else {
      this.doctors = [];
    }
  }
  selectPatientType(type) {
    this.patientType = type;
    this.isSearching = false;
    this.lookupError = "";
    this.matchedPatients = [];
    this.selectedMatchedId = "";
    this.comboOpen = false;
    this.lastFetchedMobile = "";
    this.patientSnapshot = null;
    if (type === "new") {
      this.clearForm();
      this.patientType = "new";
    }
  }
  onMobileInput(event) {
    const input = event.target;
    if (input) {
      const cleaned = (input.value || "").replace(/[^0-9]/g, "").slice(0, 10);
      if (cleaned !== input.value) {
        input.value = cleaned;
      }
      this.patient.mobile = cleaned;
    }
    this.lookupError = "";
    if (this.patientType !== "existing" || this.isSearching) {
      return;
    }
    const digits = (this.patient.mobile || "").replace(/[^0-9]/g, "").slice(-10);
    if (/^\d{10}$/.test(digits)) {
      if (digits !== this.lastFetchedMobile) {
        this.fetchPatientByMobile(digits);
      } else if (this.matchedPatients.length > 1) {
        this.comboOpen = true;
      }
    } else {
      this.matchedPatients = [];
      this.selectedMatchedId = "";
      this.comboOpen = false;
      this.lastFetchedMobile = "";
    }
  }
  onMobileBlur() {
    if (this.patientType !== "existing" || this.isSearching) {
      return;
    }
    if (this.comboOpen && this.matchedPatients.length > 1) {
      return;
    }
    const digits = (this.patient.mobile || "").replace(/[^0-9]/g, "").slice(-10);
    if (!/^\d{10}$/.test(digits) || digits === this.lastFetchedMobile) {
      return;
    }
    this.fetchPatientByMobile(digits);
  }
  fetchPatientByMobile(mobile) {
    const digits = (mobile || "").replace(/[^0-9]/g, "").slice(-10);
    if (!/^\d{10}$/.test(digits) || this.isSearching) {
      return;
    }
    this.lastFetchedMobile = digits;
    this.isSearching = true;
    this.lookupError = "";
    this.patientSnapshot = null;
    this.patientRegistrationService.getPatientByMobile(digits).subscribe({
      next: (response) => {
        this.isSearching = false;
        const list = response?.patients?.length ? response.patients : response?.patient ? [response.patient] : [];
        if (list.length === 0) {
          this.matchedPatients = [];
          this.selectedMatchedId = "";
          this.comboOpen = false;
          this.lookupError = "No patient found for this mobile number.";
          return;
        }
        this.matchedPatients = list;
        this.selectedMatchedId = list[0].patientRegistrationId || "";
        this.comboOpen = list.length > 1;
        this.fillRequiredFromApi(list[0]);
      },
      error: (error) => {
        this.isSearching = false;
        this.matchedPatients = [];
        this.selectedMatchedId = "";
        this.comboOpen = false;
        this.lookupError = error.error?.message || "No patient found for this mobile number.";
      }
    });
  }
  onSelectMatchedPatient(registrationId) {
    const found = this.matchedPatients.find((p) => (p.patientRegistrationId || "") === registrationId);
    if (!found) {
      return;
    }
    this.selectedMatchedId = registrationId;
    this.fillRequiredFromApi(found);
    this.lookupError = "";
    this.comboOpen = false;
  }
  reopenCombo() {
    if (this.patientType === "existing" && this.matchedPatients.length > 1) {
      this.comboOpen = true;
    }
  }
  getMatchedLabel(p) {
    const name = `${p.firstName || ""} ${p.lastName || ""}`.trim() || "Unknown";
    const id = p.patientRegistrationId || "\u2014";
    const extra = [p.age ? `Age ${p.age}` : "", p.gender || ""].filter(Boolean).join(" / ");
    return extra ? `${id} - ${name} - ${extra}` : `${id} - ${name}`;
  }
  fillRequiredFromApi(api) {
    const digitsOnly = (v) => (v || "").replace(/[^0-9]/g, "").slice(-10);
    const name = `${api.firstName || ""} ${api.lastName || ""}`.trim();
    const addressParts = [
      api.addressLine1 || "",
      api.addressLine2 || "",
      api.city || "",
      api.state || "",
      api.pincode || ""
    ].filter(Boolean);
    this.patient = {
      name,
      mobile: digitsOnly(api.mobile),
      email: this.patient.email || "",
      age: api.age ?? null,
      sex: api.gender || "",
      address: addressParts.join(", ")
    };
    this.patientSnapshot = {
      name: this.patient.name,
      mobile: this.patient.mobile,
      age: this.patient.age,
      sex: this.patient.sex,
      address: this.patient.address
    };
  }
  dirtyPatientFields() {
    const name = this.patient.name.trim();
    const mobile = (this.patient.mobile || "").replace(/[^0-9]/g, "").slice(-10);
    const snapshot = this.patientSnapshot;
    if (this.patientType !== "existing" || !snapshot) {
      return {
        name,
        mobile,
        age: this.patient.age,
        sex: this.patient.sex,
        address: (this.patient.address || "").trim()
      };
    }
    const digits = (value) => (value || "").replace(/[^0-9]/g, "").slice(-10);
    const diffs = {};
    if (name !== snapshot.name) {
      diffs.name = name;
    }
    if (digits(mobile) !== digits(snapshot.mobile)) {
      diffs.mobile = digits(mobile);
    }
    if ((this.patient.age ?? null) !== (snapshot.age ?? null)) {
      diffs.age = this.patient.age;
    }
    if (this.patient.sex !== snapshot.sex) {
      diffs.sex = this.patient.sex;
    }
    if ((this.patient.address || "").trim() !== snapshot.address) {
      diffs.address = (this.patient.address || "").trim();
    }
    return diffs;
  }
  bookAppointment() {
    this.bookError = "";
    const mobile = (this.patient.mobile || "").replace(/[^0-9]/g, "").slice(-10);
    if (!this.patient.name?.trim() || !/^\d{10}$/.test(mobile)) {
      this.bookError = "Please fill patient name and a valid 10-digit mobile number.";
      return;
    }
    if (this.patientType === "new" && (this.patient.age === null || !this.patient.sex)) {
      this.bookError = "Please fill age and sex for a new patient.";
      return;
    }
    if (this.isBooking) {
      return;
    }
    const payload = __spreadProps(__spreadValues({
      patientType: this.patientType
    }, this.patientType === "existing" ? __spreadValues(__spreadValues({}, this.selectedMatchedId ? { patientRegistrationId: this.selectedMatchedId } : { mobile }), this.dirtyPatientFields()) : {
      name: this.patient.name.trim(),
      mobile,
      age: this.patient.age,
      sex: this.patient.sex,
      address: (this.patient.address || "").trim()
    }), {
      departmentId: this.appointment.departmentId,
      doctorId: this.appointment.doctorId,
      appointmentDate: this.appointment.date || this.todayLocal(),
      appointmentTime: this.appointment.time || this.currentTime24(),
      bookingMode: this.bookingMode,
      consultationType: this.appointment.consultationType,
      remarks: (this.appointment.remarks || "").trim()
    });
    this.isBooking = true;
    this.bookingAppointmentService.createAppointment(payload).subscribe({
      next: (response) => {
        this.isBooking = false;
        const bookedName = this.patient.name.trim();
        this.clearForm();
        this.savedTokenNumber = response.tokenNumber;
        this.savedAppointmentNumber = response.appointmentNumber;
        this.savedPatientName = bookedName;
        this.bookError = "";
        this.showTokenDialog = true;
        this.loadTodayAppointments();
      },
      error: (error) => {
        this.isBooking = false;
        this.bookError = error.error?.message || "Unable to generate token. Please try again.";
      }
    });
  }
  todayLocal() {
    const now = /* @__PURE__ */ new Date();
    const pad = (num) => `${num}`.padStart(2, "0");
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }
  currentTime24() {
    const now = /* @__PURE__ */ new Date();
    const pad = (num) => `${num}`.padStart(2, "0");
    return `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }
  closeTokenDialog() {
    this.showTokenDialog = false;
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
        this.bookError = "";
        this.loadTodayAppointments();
      },
      error: (error) => {
        this.isCancelling = false;
        this.confirmCancelItem = null;
        this.bookError = error.error?.message || "Unable to cancel token. Please try again.";
      }
    });
  }
  getStatusClass(status) {
    switch (status) {
      case "Confirmed":
        return "confirmed-status";
      case "Waiting":
        return "waiting-status";
      case "Cancelled":
        return "cancelled-status";
      case "Consulted":
        return "consulted-status";
      default:
        return "";
    }
  }
  static \u0275fac = function BookingAppointmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookingAppointmentComponent)(\u0275\u0275directiveInject(PatientRegistrationService), \u0275\u0275directiveInject(BookingAppointmentService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingAppointmentComponent, selectors: [["app-booking-appointment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 174, vars: 32, consts: [[1, "page-title-row"], [1, "page-heading"], [1, "heading-icon"], [1, "material-icons"], [1, "title-actions"], [1, "secondary-button"], [1, "primary-button", 3, "click"], [1, "content-grid"], [1, "booking-card"], [1, "booking-header"], [1, "booking-type"], ["disabled", "", "aria-disabled", "true", 1, "booking-type-btn"], [1, "booking-type-btn", 3, "click"], [1, "form-section"], [1, "section-header"], [1, "section-title"], [1, "material-icons", "section-icon"], [1, "patient-switch"], [3, "click"], [1, "form-grid", "two-columns"], [1, "field"], [1, "search-input-wrap"], ["type", "tel", "inputmode", "numeric", "maxlength", "10", "placeholder", "+91 XXXXX XXXXX", 3, "ngModelChange", "input", "blur", "keyup.enter", "focus", "click", "ngModel"], ["class", "search-suggest", 4, "ngIf"], ["class", "field-hint", 4, "ngIf"], ["class", "field-error", 4, "ngIf"], ["type", "text", "placeholder", "Enter patient name", 3, "ngModelChange", "ngModel"], [1, "form-grid", "email-row"], [1, "field", "age-field"], ["type", "number", "placeholder", "Age", 3, "ngModelChange", "ngModel"], [1, "field", "sex-field"], [1, "radio-group"], [1, "radio"], ["type", "radio", "name", "sex", "value", "Male", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "sex", "value", "Female", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "sex", "value", "Other", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Enter patient address", 3, "ngModelChange", "ngModel"], ["class", "form-section appointment-section", 4, "ngIf"], ["class", "booking-message-row", 4, "ngIf"], [1, "booking-actions"], [1, "clear-button", 3, "click"], [1, "book-button", 3, "click", "disabled"], [1, "appointments-card"], [1, "appointments-header"], [1, "view-all", 3, "click"], [1, "stats-grid"], [1, "stat-card", "total"], [1, "material-icons", "stat-icon"], [1, "stat-card", "confirmed"], [1, "stat-card", "waiting"], [1, "stat-card", "cancelled"], [1, "appointment-table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "whatsapp-card"], [1, "whatsapp-icon"], [1, "whatsapp-content"], ["disabled", "", 1, "configure-button"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["class", "token-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "Token generation success", 4, "ngIf"], ["class", "cancel-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "Cancel token confirmation", 4, "ngIf"], [1, "search-suggest"], ["type", "button", 3, "mousedown"], [1, "field-hint"], [1, "field-error"], [1, "form-section", "appointment-section"], [1, "form-grid", "appointment-grid"], [3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "date", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "bottom-form-grid"], [1, "consultation-options"], ["type", "radio", "name", "consultation", "value", "In-Person", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "consultation", "value", "Video", 3, "ngModelChange", "ngModel"], [1, "field", "remarks"], ["rows", "2", "placeholder", "Enter any additional notes...", 3, "ngModelChange", "ngModel"], [1, "booking-message-row"], [1, "book-message", "error"], [1, "patient-name"], [1, "type-badge"], [1, "status-badge", 3, "ngClass"], [1, "token"], [1, "action-menu"], ["type", "button", "aria-label", "More actions", 1, "menu-toggle", 3, "click"], ["class", "action-dropdown", 4, "ngIf"], [1, "action-dropdown"], ["type", "button", 3, "click", "disabled"], ["colspan", "7", 2, "text-align", "center", "color", "#7c8dad"], [1, "dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Token generation success", 1, "token-dialog"], ["type", "button", "aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "token-icon"], [1, "token-id-box"], ["type", "button", 1, "token-done", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Cancel token confirmation", 1, "cancel-dialog"], [1, "cancel-icon"], [1, "cancel-actions"], ["type", "button", 1, "cancel-no", 3, "click", "disabled"], ["type", "button", 1, "cancel-yes", 3, "click", "disabled"]], template: function BookingAppointmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "i", 3);
      \u0275\u0275text(4, "event_note");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div")(6, "h1");
      \u0275\u0275text(7, "Booking & Appointment ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, " Manage online and offline bookings, register patients, confirm appointments and generate tokens. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 4)(11, "button", 5)(12, "i", 3);
      \u0275\u0275text(13, "storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Offline / Walk-in ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 6);
      \u0275\u0275listener("click", function BookingAppointmentComponent_Template_button_click_15_listener() {
        return ctx.newAppointment();
      });
      \u0275\u0275elementStart(16, "i", 3);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " New Appointment ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 7)(20, "section", 8)(21, "div", 9)(22, "div")(23, "h2");
      \u0275\u0275text(24, "Book Appointment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, " Fill in patient details and select department, doctor, date and time. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 10)(28, "button", 11)(29, "i", 3);
      \u0275\u0275text(30, "language");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " Online Booking ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 12);
      \u0275\u0275listener("click", function BookingAppointmentComponent_Template_button_click_32_listener() {
        return ctx.bookingMode = "offline";
      });
      \u0275\u0275elementStart(33, "i", 3);
      \u0275\u0275text(34, "storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Offline / Walk-in ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "div", 15)(39, "i", 16);
      \u0275\u0275text(40, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Patient Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 17)(44, "button", 18);
      \u0275\u0275listener("click", function BookingAppointmentComponent_Template_button_click_44_listener() {
        return ctx.selectPatientType("existing");
      });
      \u0275\u0275text(45, " Existing Patient ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 18);
      \u0275\u0275listener("click", function BookingAppointmentComponent_Template_button_click_46_listener() {
        return ctx.selectPatientType("new");
      });
      \u0275\u0275text(47, " New Patient ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 19)(49, "div", 20)(50, "label");
      \u0275\u0275text(51, " Mobile Number ");
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 21)(55, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.mobile, $event) || (ctx.patient.mobile = $event);
        return $event;
      });
      \u0275\u0275listener("input", function BookingAppointmentComponent_Template_input_input_55_listener($event) {
        return ctx.onMobileInput($event);
      })("blur", function BookingAppointmentComponent_Template_input_blur_55_listener() {
        return ctx.onMobileBlur();
      })("keyup.enter", function BookingAppointmentComponent_Template_input_keyup_enter_55_listener() {
        return ctx.onMobileBlur();
      })("focus", function BookingAppointmentComponent_Template_input_focus_55_listener() {
        return ctx.reopenCombo();
      })("click", function BookingAppointmentComponent_Template_input_click_55_listener() {
        return ctx.reopenCombo();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, BookingAppointmentComponent_ul_56_Template, 2, 1, "ul", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, BookingAppointmentComponent_small_57_Template, 2, 0, "small", 24)(58, BookingAppointmentComponent_span_58_Template, 2, 1, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 20)(60, "label");
      \u0275\u0275text(61, " Full Name ");
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_Template_input_ngModelChange_64_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.name, $event) || (ctx.patient.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 27)(66, "div", 28)(67, "label");
      \u0275\u0275text(68, " Age ");
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.age, $event) || (ctx.patient.age = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 30)(73, "label");
      \u0275\u0275text(74, " Sex ");
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 31)(78, "label", 32)(79, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_Template_input_ngModelChange_79_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.sex, $event) || (ctx.patient.sex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "span");
      \u0275\u0275text(81, " Male ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "label", 32)(83, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_Template_input_ngModelChange_83_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.sex, $event) || (ctx.patient.sex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "span");
      \u0275\u0275text(85, " Female ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "label", 32)(87, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_Template_input_ngModelChange_87_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.sex, $event) || (ctx.patient.sex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "span");
      \u0275\u0275text(89, " Other ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 20)(91, "label");
      \u0275\u0275text(92, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "textarea", 36);
      \u0275\u0275twoWayListener("ngModelChange", function BookingAppointmentComponent_Template_textarea_ngModelChange_93_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.patient.address, $event) || (ctx.patient.address = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(94, BookingAppointmentComponent_div_94_Template, 61, 11, "div", 37)(95, BookingAppointmentComponent_div_95_Template, 3, 1, "div", 38);
      \u0275\u0275elementStart(96, "div", 39)(97, "button", 40);
      \u0275\u0275listener("click", function BookingAppointmentComponent_Template_button_click_97_listener() {
        return ctx.clearForm();
      });
      \u0275\u0275text(98, " Clear ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "button", 41);
      \u0275\u0275listener("click", function BookingAppointmentComponent_Template_button_click_99_listener() {
        return ctx.bookAppointment();
      });
      \u0275\u0275elementStart(100, "i", 3);
      \u0275\u0275text(101, "confirmation_number");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "aside", 42)(104, "div", 43)(105, "h2");
      \u0275\u0275text(106, "Today's Appointments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "button", 44);
      \u0275\u0275listener("click", function BookingAppointmentComponent_Template_button_click_107_listener() {
        return ctx.viewAll();
      });
      \u0275\u0275text(108, " View All ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 45)(110, "div", 46)(111, "i", 47);
      \u0275\u0275text(112, "event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "strong");
      \u0275\u0275text(114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, "Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 48)(118, "i", 47);
      \u0275\u0275text(119, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "strong");
      \u0275\u0275text(121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Consulted");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 49)(125, "i", 47);
      \u0275\u0275text(126, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "strong");
      \u0275\u0275text(128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Waiting");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 50)(132, "i", 47);
      \u0275\u0275text(133, "cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "strong");
      \u0275\u0275text(135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "span");
      \u0275\u0275text(137, "Cancelled");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "div", 51)(139, "table")(140, "thead")(141, "tr")(142, "th");
      \u0275\u0275text(143, "Patient Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "th");
      \u0275\u0275text(145, "Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "th");
      \u0275\u0275text(147, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "th");
      \u0275\u0275text(149, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "th");
      \u0275\u0275text(151, "Token");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th");
      \u0275\u0275text(153, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "tbody");
      \u0275\u0275template(155, BookingAppointmentComponent_tr_155_Template, 18, 11, "tr", 52)(156, BookingAppointmentComponent_tr_156_Template, 3, 0, "tr", 53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "div", 54)(158, "div", 55)(159, "i", 3);
      \u0275\u0275text(160, "message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 56)(162, "strong");
      \u0275\u0275text(163, " Appointment Confirmations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, " Confirmation messages are sent via WhatsApp. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "button", 57)(167, "i", 3);
      \u0275\u0275text(168, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(169, " Configure ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(170, BookingAppointmentComponent_div_170_Template, 1, 0, "div", 58)(171, BookingAppointmentComponent_div_171_Template, 18, 3, "div", 59)(172, BookingAppointmentComponent_div_172_Template, 1, 0, "div", 58)(173, BookingAppointmentComponent_div_173_Template, 19, 4, "div", 60);
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275classProp("active", ctx.bookingMode === "online");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.bookingMode === "offline");
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.patientType === "existing");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.patientType === "new");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.mobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.patientType === "existing" && ctx.comboOpen && ctx.matchedPatients.length > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.patientType === "existing" && ctx.isSearching);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.patientType === "existing" && ctx.lookupError);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.name);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.age);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.sex);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.sex);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.sex);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.patient.address);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.bookingMode === "online");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.bookError);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isBooking);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isBooking ? "Generating..." : "Token Generate", " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.totalCount || "-");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.consultedCount || "-");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.waitingCount || "-");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.cancelledCount || "-");
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.recentAppointments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.appointments.length === 0);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.showTokenDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTokenDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmCancelItem);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmCancelItem);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #101b55;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.page-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 6px;\n  margin-bottom: 17px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.heading-icon[_ngcontent-%COMP%] {\n  width: 59px;\n  height: 59px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #7133ef,\n      #7424ff);\n  color: white;\n  font-size: 28px;\n  line-height: 1;\n  box-shadow: 0 7px 16px rgba(111, 46, 232, .16);\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071657;\n  font-size: 27px;\n  line-height: 1.2;\n  font-weight: 700;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #4d6595;\n  font-size: 14px;\n}\n.title-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n}\n.secondary-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%] {\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 20px;\n  border-radius: 7px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.secondary-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.secondary-button[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #d9e3f0;\n  color: #172757;\n}\n.primary-button[_ngcontent-%COMP%] {\n  min-width: 200px;\n  background: #0879e7;\n  border: 1px solid #0879e7;\n  color: white;\n  font-size: 15px;\n}\n.primary-button[_ngcontent-%COMP%]:hover, \n.book-button[_ngcontent-%COMP%]:hover {\n  background: #066ed5;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(620px, 1.65fr) minmax(450px, .9fr);\n  gap: 12px;\n  align-items: stretch;\n}\n.booking-card[_ngcontent-%COMP%], \n.appointments-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e1e9f3;\n  border-radius: 8px;\n  box-shadow: 0 3px 12px rgba(40, 76, 116, .035);\n}\n.booking-header[_ngcontent-%COMP%] {\n  min-height: 78px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 14px;\n  border-bottom: 1px solid #e4ebf4;\n}\n.booking-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071555;\n  font-size: 23px;\n}\n.booking-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: #506697;\n  font-size: 13px;\n}\n.booking-type[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #d9e3ef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.booking-type-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 13px;\n  border: none;\n  background: white;\n  color: #263a68;\n  font-size: 12px;\n  cursor: pointer;\n}\n.booking-type-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1;\n}\n.booking-type-btn.active[_ngcontent-%COMP%] {\n  background: #0879e8;\n  color: white;\n}\n.booking-type-btn[_ngcontent-%COMP%]:disabled {\n  background: #f1f4f8;\n  color: #9aa8bb;\n  cursor: not-allowed;\n}\n.booking-type-btn[_ngcontent-%COMP%]:disabled   .material-icons[_ngcontent-%COMP%] {\n  color: #9aa8bb;\n}\n.form-section[_ngcontent-%COMP%] {\n  padding: 9px 14px 14px;\n  border-bottom: 1px solid #e1e8f1;\n}\n.section-header[_ngcontent-%COMP%] {\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  padding: 0 0 5px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #112050;\n  font-size: 16px;\n  font-weight: 600;\n}\n.section-icon[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-size: 20px;\n  line-height: 1;\n}\n.patient-switch[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #dbe4f0;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.patient-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n  padding: 0 15px;\n  border: none;\n  background: white;\n  color: #223763;\n  font-size: 12px;\n  cursor: pointer;\n}\n.patient-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0879e8;\n  color: white;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.two-columns[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.2fr;\n}\n.email-row[_ngcontent-%COMP%] {\n  grid-template-columns: .35fr 1.1fr;\n  margin-top: 9px;\n}\n.appointment-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.1fr 1.1fr .9fr;\n}\n.bottom-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-top: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #162354;\n  font-size: 12px;\n  font-weight: 500;\n}\n.field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ed3e50;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d5e0ee;\n  border-radius: 6px;\n  outline: none;\n  background: white;\n  color: #1c2c5a;\n  font-size: 13px;\n  transition: .2s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 11px;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 66px;\n  padding: 9px 11px;\n  resize: none;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #0879e8;\n  box-shadow: 0 0 0 2px rgba(8, 121, 232, .08);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #7c8dad;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-suggest[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  max-height: 190px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  border: 1px solid #d5e0ee;\n  border-radius: 6px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, .15);\n  z-index: 60;\n}\n.search-suggest[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.search-suggest[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  padding: 8px 10px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  color: #1c2c5a;\n  font-size: 12px;\n  text-align: left;\n  cursor: pointer;\n}\n.search-suggest[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.search-suggest[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  background: #e3f0ff;\n  color: #0879e8;\n  font-weight: 600;\n}\n.field-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #506697;\n  font-size: 11px;\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #ef3e49;\n  font-size: 11px;\n}\n.radio-group[_ngcontent-%COMP%], \n.consultation-options[_ngcontent-%COMP%] {\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  gap: 22px;\n}\n.radio[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #1d2c5c;\n  font-size: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n}\n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n}\n.radio[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  position: relative;\n  flex: 0 0 19px;\n  border: 2px solid #c3d0e2;\n  border-radius: 50%;\n  background: white;\n  transition: border-color .2s;\n}\n.radio[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%] {\n  border-color: #0879e8;\n}\n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    + span[_ngcontent-%COMP%] {\n  outline: 2px solid rgba(8, 121, 232, .35);\n  outline-offset: 2px;\n}\n.radio[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 9px;\n  height: 9px;\n  background: #0879e8;\n  border-radius: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform .2s;\n}\n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  border-color: #0879e8;\n}\n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.booking-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 14px;\n}\n.clear-button[_ngcontent-%COMP%] {\n  width: 172px;\n  height: 52px;\n  border: 1px solid #dbe4ef;\n  border-radius: 7px;\n  background: white;\n  color: #152355;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.book-button[_ngcontent-%COMP%] {\n  width: 296px;\n  height: 52px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: none;\n  border-radius: 7px;\n  background: #0879e8;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: .2s;\n}\n.book-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.book-button[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n.book-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.book-message.error[_ngcontent-%COMP%] {\n  color: #ef3e49;\n}\n.book-message.success[_ngcontent-%COMP%] {\n  color: #07945f;\n}\n.booking-message-row[_ngcontent-%COMP%] {\n  padding: 11px 14px 0;\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .45);\n  z-index: 600;\n}\n.token-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  max-width: calc(100vw - 32px);\n  padding: 30px 26px 24px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, .25);\n  text-align: center;\n  z-index: 601;\n}\n.dialog-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: #eef3f8;\n  color: #5b7195;\n  cursor: pointer;\n}\n.dialog-close[_ngcontent-%COMP%]:hover {\n  background: #e2eaf3;\n}\n.dialog-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.token-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7133ef,\n      #7424ff);\n  color: white;\n  box-shadow: 0 8px 20px rgba(111, 46, 232, .35);\n}\n.token-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.token-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 19px;\n  font-weight: 700;\n}\n.token-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #4d6595;\n  font-size: 14px;\n}\n.token-id-box[_ngcontent-%COMP%] {\n  margin: 16px 0 10px;\n  padding: 12px;\n  border: 1px dashed #0879e8;\n  border-radius: 8px;\n  background: #f0f7ff;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.token-id-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5b7195;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.token-id-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: .5px;\n}\n.token-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.token-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  border: 1px solid #e1e9f3;\n  border-radius: 8px;\n  background: #f7faff;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.token-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5b7195;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.token-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #16255a;\n  font-size: 14px;\n  font-weight: 600;\n}\n.token-done[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 43px;\n  border: none;\n  border-radius: 6px;\n  background: #0879e8;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.token-done[_ngcontent-%COMP%]:hover {\n  background: #066ed5;\n}\n.cancel-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  max-width: calc(100vw - 32px);\n  padding: 30px 26px 24px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, .25);\n  text-align: center;\n  z-index: 601;\n}\n.cancel-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ef3e49,\n      #b4232a);\n  color: white;\n  box-shadow: 0 8px 20px rgba(239, 62, 73, .35);\n}\n.cancel-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.cancel-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 19px;\n  font-weight: 700;\n}\n.cancel-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #4d6595;\n  font-size: 14px;\n}\n.cancel-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.cancel-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 18px;\n}\n.cancel-no[_ngcontent-%COMP%], \n.cancel-yes[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 43px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.cancel-no[_ngcontent-%COMP%] {\n  border: 1px solid #dbe4ef;\n  background: white;\n  color: #152355;\n}\n.cancel-yes[_ngcontent-%COMP%] {\n  border: none;\n  background: #ef3e49;\n  color: white;\n}\n.cancel-yes[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d92f3b;\n}\n.cancel-no[_ngcontent-%COMP%]:disabled, \n.cancel-yes[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n.appointments-card[_ngcontent-%COMP%] {\n  padding: 18px 14px 14px;\n  overflow: hidden;\n}\n.appointments-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.appointments-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 19px;\n}\n.view-all[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #0879e8;\n  font-size: 13px;\n  cursor: pointer;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: 13px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  min-height: 82px;\n  padding: 10px 9px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1;\n}\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.1;\n}\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 11px;\n}\n.stat-card.total[_ngcontent-%COMP%] {\n  background: #edf5fc;\n  color: #0879e8;\n}\n.stat-card.confirmed[_ngcontent-%COMP%] {\n  background: #ecf9f3;\n  color: #099b69;\n}\n.stat-card.waiting[_ngcontent-%COMP%] {\n  background: #fff7e9;\n  color: #ed9400;\n}\n.stat-card.cancelled[_ngcontent-%COMP%] {\n  background: #fff0f1;\n  color: #ef414d;\n}\n.appointment-table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: auto;\n}\nthead[_ngcontent-%COMP%] {\n  background: #f7faff;\n}\nth[_ngcontent-%COMP%] {\n  height: 35px;\n  color: #122357;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: left;\n  white-space: nowrap;\n}\ntd[_ngcontent-%COMP%] {\n  height: 43px;\n  padding: 0 5px;\n  border-bottom: 1px solid #e7edf4;\n  color: #26365e;\n  font-size: 13px;\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%]:first-child, \ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 8px;\n}\n.patient-name[_ngcontent-%COMP%] {\n  color: #16255a;\n  font-weight: 500;\n}\n.token[_ngcontent-%COMP%] {\n  color: #16275d;\n  font-weight: 500;\n}\n.action-menu[_ngcontent-%COMP%] {\n  position: relative;\n  color: #20396d;\n  font-size: 20px;\n  line-height: 1;\n  text-align: center;\n  cursor: pointer;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: #20396d;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n}\n.menu-toggle[_ngcontent-%COMP%]:hover {\n  background: #eef3f8;\n}\n.menu-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.action-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 2px);\n  right: 0;\n  min-width: 150px;\n  padding: 4px;\n  border: 1px solid #d5e0ee;\n  border-radius: 6px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, .15);\n  z-index: 70;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  color: #b4232a;\n  font-size: 12px;\n  cursor: pointer;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff0f1;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: #9aa8bb;\n  cursor: not-allowed;\n}\n.action-dropdown[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.type-badge[_ngcontent-%COMP%], \n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 54px;\n  height: 25px;\n  padding: 0 9px;\n  border-radius: 14px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.type-badge.online[_ngcontent-%COMP%] {\n  background: #e8f3ff;\n  color: #0879e8;\n}\n.type-badge.walkin[_ngcontent-%COMP%] {\n  background: #f0eaff;\n  color: #6543d7;\n}\n.confirmed-status[_ngcontent-%COMP%] {\n  background: #dff6ea;\n  color: #07945f;\n}\n.waiting-status[_ngcontent-%COMP%] {\n  background: #fff1d9;\n  color: #e89500;\n}\n.cancelled-status[_ngcontent-%COMP%] {\n  background: #ffe2e5;\n  color: #ef3e49;\n}\n.consulted-status[_ngcontent-%COMP%] {\n  background: #e5f1ff;\n  color: #2780e5;\n}\n.whatsapp-card[_ngcontent-%COMP%] {\n  min-height: 85px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 13px;\n  padding: 12px 13px;\n  border-radius: 8px;\n  background: #ecfaf4;\n}\n.whatsapp-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #11a66e;\n  color: white;\n  font-size: 18px;\n  line-height: 1;\n}\n.whatsapp-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.whatsapp-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #15324b;\n  font-size: 13px;\n}\n.whatsapp-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #58708b;\n  font-size: 11px;\n}\n.configure-button[_ngcontent-%COMP%] {\n  height: 39px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 13px;\n  border: 1px solid #4ca4ef;\n  border-radius: 6px;\n  background: white;\n  color: #132b61;\n  font-size: 12px;\n  cursor: pointer;\n}\n.configure-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1;\n}\n.configure-button[_ngcontent-%COMP%]:disabled {\n  border-color: #d7e0ea;\n  background: #f4f6f8;\n  color: #9aa8bb;\n  cursor: not-allowed;\n}\n@media (max-width: 1350px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(580px, 1.5fr) minmax(400px, .9fr);\n  }\n  .appointment-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 1100px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 800px) {\n  .page-title-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .title-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .secondary-button[_ngcontent-%COMP%], \n   .primary-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .two-columns[_ngcontent-%COMP%], \n   .email-row[_ngcontent-%COMP%], \n   .appointment-grid[_ngcontent-%COMP%], \n   .bottom-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 550px) {\n  .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .heading-icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .booking-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .booking-type[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .booking-type-btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .patient-switch[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .patient-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .booking-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .clear-button[_ngcontent-%COMP%], \n   .book-button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=booking-appointment.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingAppointmentComponent, { className: "BookingAppointmentComponent" });
})();
export {
  BookingAppointmentComponent
};
//# sourceMappingURL=chunk-DURAABKD.js.map
