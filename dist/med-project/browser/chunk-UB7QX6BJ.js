import {
  BillPdfService
} from "./chunk-ASDZ4Q6P.js";
import {
  ViewBillsService
} from "./chunk-XDPLEQDW.js";
import "./chunk-MI5K3SR6.js";
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
import "./chunk-OCZWZWFA.js";
import {
  AuthService
} from "./chunk-R4WLTVLJ.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
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

// src/app/Billing/View/view.component.ts
var _c0 = (a0, a1, a2) => ({ "paid": a0, "pending": a1, "cancelled": a2 });
function ViewBillsComponent_tr_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2, " Loading bills... ");
    \u0275\u0275elementEnd()();
  }
}
function ViewBillsComponent_tr_279_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "button", 85);
    \u0275\u0275listener("click", function ViewBillsComponent_tr_279_div_38_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const bill_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.askCancelBill(bill_r2));
    });
    \u0275\u0275text(2, " Cancel Bill ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bill_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canCancelBill(bill_r2));
  }
}
function ViewBillsComponent_tr_279_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 76)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275elementStart(19, "td", 77);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 78);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 79)(29, "button", 80);
    \u0275\u0275listener("click", function ViewBillsComponent_tr_279_Template_button_click_29_listener() {
      const bill_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewBill(bill_r2));
    });
    \u0275\u0275elementStart(30, "span", 3);
    \u0275\u0275text(31, " visibility ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 81);
    \u0275\u0275listener("click", function ViewBillsComponent_tr_279_Template_button_click_32_listener() {
      const bill_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.printBill(bill_r2));
    });
    \u0275\u0275elementStart(33, "span", 3);
    \u0275\u0275text(34, " print ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 82);
    \u0275\u0275listener("click", function ViewBillsComponent_tr_279_Template_button_click_35_listener() {
      const i_r4 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMenu(i_r4));
    });
    \u0275\u0275elementStart(36, "span", 3);
    \u0275\u0275text(37, " more_vert ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, ViewBillsComponent_tr_279_div_38_Template, 3, 1, "div", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bill_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", i_r4 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bill_r2.billNo, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", bill_r2.date, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bill_r2.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bill_r2.patientName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bill_r2.uhid, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bill_r2.department, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bill_r2.doctor, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 13, bill_r2.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", bill_r2.paymentMode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(16, _c0, bill_r2.status === "Paid", bill_r2.status === "Pending", bill_r2.status === "Cancelled"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bill_r2.status, " ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.openMenuIndex === i_r4);
  }
}
function ViewBillsComponent_tr_280_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadError || "No bills found. Try changing your search or filters.", " ");
  }
}
function ViewBillsComponent_div_305_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click", function ViewBillsComponent_div_305_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBillDetails());
    });
    \u0275\u0275elementEnd();
  }
}
function ViewBillsComponent_div_316_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1, " Cancelled ");
    \u0275\u0275elementEnd();
  }
}
function ViewBillsComponent_div_316_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 4, item_r7.amount, "1.2-2"), " ");
  }
}
function ViewBillsComponent_div_316_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div", 89);
    \u0275\u0275element(3, "img", 90);
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6, "MediOrex");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8, " Healthcare for a Better Tomorrow ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 91)(10, "strong");
    \u0275\u0275text(11, " MediOrex Multi-Specialty ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, " 123, Health Avenue, Anna Nagar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, " Chennai - 600040 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, " Phone: +91 44 4567 8900 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, " Email: care@mediorex.in ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(20, "div", 92);
    \u0275\u0275elementStart(21, "h2", 93);
    \u0275\u0275text(22, " Consultation Bill ");
    \u0275\u0275template(23, ViewBillsComponent_div_316_span_23_Template, 2, 0, "span", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 95)(25, "div", 96)(26, "div")(27, "span");
    \u0275\u0275text(28, "Bill No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "span");
    \u0275\u0275text(33, "Bill Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "span");
    \u0275\u0275text(38, "Patient ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "span");
    \u0275\u0275text(43, "Token No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 97)(47, "div")(48, "span");
    \u0275\u0275text(49, "Patient Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div")(53, "span");
    \u0275\u0275text(54, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div")(58, "span");
    \u0275\u0275text(59, "Age / Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div", 98)(63, "h3");
    \u0275\u0275text(64, "Consultation Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 99)(66, "div")(67, "span");
    \u0275\u0275text(68, "Doctor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "strong");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div")(72, "span");
    \u0275\u0275text(73, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "strong");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div")(77, "span");
    \u0275\u0275text(78, "Consultation Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "strong");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "div", 100)(82, "table")(83, "thead")(84, "tr")(85, "th");
    \u0275\u0275text(86, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th");
    \u0275\u0275text(88, "Service Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "th");
    \u0275\u0275text(90, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "th");
    \u0275\u0275text(92, "Amount (\u20B9)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "tbody");
    \u0275\u0275template(94, ViewBillsComponent_div_316_tr_94_Template, 10, 7, "tr", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 101)(96, "div", 102)(97, "span");
    \u0275\u0275text(98, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "strong");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(102, "div", 103)(103, "strong");
    \u0275\u0275text(104, " Thank you for choosing MediOrex! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span");
    \u0275\u0275text(106, " Your Health. Our Priority. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngIf", ctx_r2.selectedBill.status === "Cancelled");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedBill.billNo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r2.selectedBill.date, " ", ctx_r2.selectedBill.time, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedBill.uhid);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedBill.tokenNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedBill.patientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedBill.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r2.selectedBill.age, " / ", ctx_r2.selectedBill.gender, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" : ", ctx_r2.selectedBill.doctor, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" : ", ctx_r2.selectedBill.department, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" : ", ctx_r2.selectedBill.consultationType, " ");
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.selectedBill.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" \u20B9 ", \u0275\u0275pipeBind2(101, 15, ctx_r2.selectedBill.amount, "1.2-2"), " ");
  }
}
function ViewBillsComponent_div_330_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function ViewBillsComponent_div_330_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275elementEnd();
  }
}
function ViewBillsComponent_div_331_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "button", 107);
    \u0275\u0275listener("click", function ViewBillsComponent_div_331_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 108)(5, "span", 3);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Cancel Bill?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, " Do you want to cancel bill ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 109)(15, "button", 110);
    \u0275\u0275listener("click", function ViewBillsComponent_div_331_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelConfirm());
    });
    \u0275\u0275text(16, " No ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 111);
    \u0275\u0275listener("click", function ViewBillsComponent_div_331_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmCancelBill());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.confirmCancelItem.billNo);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isCancelling);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isCancelling);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isCancelling ? "Cancelling..." : "Yes, Cancel", " ");
  }
}
var ViewBillsComponent = class _ViewBillsComponent {
  authService;
  viewBillsService;
  billPdfService;
  constructor(authService, viewBillsService, billPdfService) {
    this.authService = authService;
    this.viewBillsService = viewBillsService;
    this.billPdfService = billPdfService;
  }
  get displayName() {
    const user = this.authService.getUser();
    if (!user) {
      return "User";
    }
    const fullName = `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim();
    return fullName || user.username || "User";
  }
  get roleName() {
    return this.authService.getUser()?.role_name ?? "\u2014";
  }
  get avatarInitials() {
    const parts = this.displayName.split(" ").filter(Boolean);
    const initials = parts.slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join("");
    return initials || "U";
  }
  // ================= FILTERS =================
  rangeStart = this.todayDate();
  rangeEnd = this.todayDate();
  isLoading = false;
  loadError = "";
  searchText = "";
  department = "All Departments";
  doctor = "All Doctors";
  paymentMode = "All Payment Modes";
  status = "All Status";
  pageSize = 10;
  // ================= SUMMARY =================
  get totalBills() {
    return this.bills.length;
  }
  get totalRevenue() {
    return this.bills.filter((bill) => bill.status !== "Cancelled").reduce((sum, bill) => sum + Number(bill.amount || 0), 0);
  }
  get paidBills() {
    return this.bills.filter((bill) => bill.status === "Paid").length;
  }
  get cancelledBills() {
    return this.bills.filter((bill) => bill.status === "Cancelled").length;
  }
  // ================= DRAWER =================
  showBillDetails = false;
  selectedBill = null;
  // ================= DATA =================
  bills = [];
  filteredBills = [];
  ngOnInit() {
    this.loadBills();
  }
  onDateRangeChange(range) {
    this.rangeStart = range.startDate;
    this.rangeEnd = range.endDate;
    this.loadBills();
  }
  loadBills() {
    this.isLoading = true;
    this.loadError = "";
    this.viewBillsService.getBills(this.toISODate(this.rangeStart), this.toISODate(this.rangeEnd)).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.bills = (response?.bills || []).map((item) => this.toBill(item));
        this.applyFilters();
      },
      error: (error) => {
        this.isLoading = false;
        this.bills = [];
        this.filteredBills = [];
        this.loadError = error.error?.message || "Unable to load bills.";
      }
    });
  }
  onRangeChange() {
    this.loadBills();
  }
  toBill(item) {
    const validStatuses = ["Paid", "Pending", "Cancelled"];
    return {
      billId: item.billId,
      billNo: item.billNo || "",
      date: item.date || "",
      time: item.time || "",
      patientName: item.patientName || "\u2014",
      uhid: item.uhid || "",
      age: item.age ?? 0,
      gender: item.gender || "",
      phone: item.phone || "",
      department: item.department || "",
      doctor: item.doctor || "",
      tokenNo: item.tokenNo || "-",
      consultationType: item.consultationType || "",
      visitType: item.visitType || "",
      amount: Number(item.amount) || 0,
      paymentMode: item.paymentMode || "",
      status: validStatuses.includes(item.status) ? item.status : "Pending",
      subtotal: Number(item.subtotal) || 0,
      discount: Number(item.discount) || 0,
      change: Number(item.change) || 0,
      items: (item.items || []).map((entry) => ({
        name: entry.name || "",
        description: entry.description || "",
        amount: Number(entry.amount) || 0
      }))
    };
  }
  todayDate() {
    const now = /* @__PURE__ */ new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }
  toISODate(date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // ================= FILTER =================
  applyFilters() {
    const search = this.searchText.trim().toLowerCase();
    this.filteredBills = this.bills.filter((bill) => {
      const matchesSearch = !search || bill.billNo.toLowerCase().includes(search) || bill.patientName.toLowerCase().includes(search) || bill.uhid.toLowerCase().includes(search) || bill.doctor.toLowerCase().includes(search);
      const matchesDepartment = this.department === "All Departments" || bill.department === this.department;
      const matchesDoctor = this.doctor === "All Doctors" || bill.doctor === this.doctor;
      const matchesPayment = this.paymentMode === "All Payment Modes" || bill.paymentMode === this.paymentMode;
      const matchesStatus = this.status === "All Status" || bill.status === this.status;
      return matchesSearch && matchesDepartment && matchesDoctor && matchesPayment && matchesStatus;
    });
  }
  resetFilters() {
    this.searchText = "";
    this.department = "All Departments";
    this.doctor = "All Doctors";
    this.paymentMode = "All Payment Modes";
    this.status = "All Status";
    this.rangeStart = this.todayDate();
    this.rangeEnd = this.todayDate();
    this.loadBills();
  }
  // ================= VIEW =================
  viewBill(bill) {
    this.selectedBill = bill;
    this.showBillDetails = true;
  }
  closeBillDetails() {
    this.showBillDetails = false;
  }
  // ================= ACTIONS =================
  generateNewBill() {
    console.log("Navigate to Generate Bill");
  }
  printBill(bill) {
    if (!bill) {
      return;
    }
    const invoice = document.querySelector(".bill-drawer .invoice");
    if (!invoice) {
      alert("Open the bill preview before printing.");
      return;
    }
    this.billPdfService.printInvoiceElement(invoice).catch(() => {
      alert("Unable to print bill. Please try again.");
    });
  }
  downloadBill(bill) {
    if (!bill) {
      return;
    }
    const invoice = document.querySelector(".bill-drawer .invoice");
    if (!invoice) {
      alert("Open the bill preview before downloading.");
      return;
    }
    this.billPdfService.downloadInvoiceElement(invoice, `${bill.billNo || "bill"}.pdf`).catch(() => {
      alert("Unable to download bill. Please try again.");
    });
  }
  sendToPatient(bill) {
    if (!bill) {
      return;
    }
    console.log("Sending bill to:", bill.phone);
    alert(`Bill ${bill.billNo} sent to ${bill.patientName}`);
  }
  openMenuIndex = null;
  confirmCancelItem = null;
  isCancelling = false;
  toggleMenu(index) {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }
  canCancelBill(bill) {
    return bill.status !== "Cancelled";
  }
  askCancelBill(bill) {
    this.openMenuIndex = null;
    if (!this.canCancelBill(bill)) {
      return;
    }
    this.confirmCancelItem = bill;
  }
  closeCancelConfirm() {
    if (this.isCancelling) {
      return;
    }
    this.confirmCancelItem = null;
  }
  confirmCancelBill() {
    if (!this.confirmCancelItem || this.isCancelling) {
      return;
    }
    const item = this.confirmCancelItem;
    this.isCancelling = true;
    this.viewBillsService.cancelBill(item.billId).subscribe({
      next: () => {
        this.isCancelling = false;
        this.confirmCancelItem = null;
        this.loadError = "";
        this.loadBills();
      },
      error: (error) => {
        this.isCancelling = false;
        this.confirmCancelItem = null;
        this.loadError = error.error?.message || "Unable to cancel bill. Please try again.";
      }
    });
  }
  static \u0275fac = function ViewBillsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewBillsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ViewBillsService), \u0275\u0275directiveInject(BillPdfService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewBillsComponent, selectors: [["app-view-bills"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 332, vars: 34, consts: [[1, "mediorex-page"], [1, "topbar"], [1, "top-search"], [1, "material-symbols-outlined"], ["type", "text", "placeholder", "Search patients by name, UHID, phone...", 3, "ngModelChange", "input", "ngModel"], [1, "topbar-right"], [1, "notification-btn"], [1, "notification-count"], [1, "profile"], [1, "profile-avatar"], [1, "profile-details"], [1, "sidebar"], [1, "brand"], [1, "brand-logo"], [1, "logo-top"], [1, "logo-left"], [1, "logo-right"], [1, "logo-bottom"], [1, "brand-name"], [1, "brand-subtitle"], [1, "sidebar-menu"], [1, "menu-item"], [1, "menu-group"], [1, "menu-item", "billing-parent", "active"], [1, "material-symbols-outlined", "menu-arrow"], [1, "submenu"], [1, "submenu-item"], [1, "submenu-item", "active"], [1, "support-card"], [1, "main-content"], [1, "page-header"], [1, "page-title"], [1, "heading-icon"], [1, "filter-card"], [1, "filter-row", "first-row"], [1, "filter-field", "search-field"], [1, "search-filter"], ["type", "text", "placeholder", "Search by Bill No, Patient Name, UHID, Doctor...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-field", "date-field"], [3, "dateRangeChange", "startDate", "endDate"], [1, "filter-row", "second-row"], [1, "filter-field"], [1, "input-select"], [3, "ngModelChange", "ngModel"], [1, "search-btn", 3, "click"], [1, "reset-btn", 3, "click"], [1, "summary-cards"], [1, "summary-card"], [1, "summary-icon", "blue"], [1, "summary-label"], [1, "summary-icon", "green"], [1, "summary-icon", "red"], [1, "bill-list-card"], [1, "list-header"], [1, "list-actions"], [3, "ngValue"], [1, "table-wrapper"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pages"], [1, "current"], ["class", "drawer-overlay", 3, "click", 4, "ngIf"], [1, "bill-drawer"], [1, "drawer-header"], [1, "close-btn", 3, "click"], [1, "drawer-tabs"], [1, "active"], ["class", "invoice", 4, "ngIf"], [1, "drawer-footer"], [1, "drawer-primary", 3, "click"], [1, "drawer-secondary", 3, "click"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["class", "cancel-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "Cancel bill confirmation", 4, "ngIf"], ["colspan", "11", 1, "empty-row"], [1, "bill-number"], [1, "date-time"], [1, "amount"], [1, "status", 3, "ngClass"], [1, "action-buttons"], ["title", "View", 3, "click"], ["title", "Print", 3, "click"], ["title", "More", 3, "click"], ["class", "action-dropdown", 4, "ngIf"], [1, "action-dropdown"], ["type", "button", 3, "click", "disabled"], [1, "drawer-overlay", 3, "click"], [1, "invoice"], [1, "invoice-header"], [1, "invoice-brand"], ["src", "assets/mediorex_logo.png", "alt", "MediOrex", 1, "invoice-logo-image"], [1, "clinic-details"], [1, "invoice-line"], [1, "invoice-title"], ["class", "cancelled-stamp", 4, "ngIf"], [1, "invoice-meta", "plain"], [1, "meta-left"], [1, "meta-right"], [1, "invoice-section"], [1, "invoice-info"], [1, "invoice-items"], [1, "invoice-total"], [1, "grand-total"], [1, "thank-you"], [1, "cancelled-stamp"], [1, "dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Cancel bill confirmation", 1, "cancel-dialog"], ["type", "button", "aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "cancel-icon"], [1, "cancel-actions"], ["type", "button", 1, "cancel-no", 3, "click", "disabled"], ["type", "button", 1, "cancel-yes", 3, "click", "disabled"]], template: function ViewBillsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ViewBillsComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ViewBillsComponent_Template_input_input_5_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "button", 6)(8, "span", 3);
      \u0275\u0275text(9, " notifications ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "strong");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "span", 3);
      \u0275\u0275text(21, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "aside", 11)(23, "div", 12)(24, "div", 13);
      \u0275\u0275element(25, "span", 14)(26, "span", 15)(27, "span", 16)(28, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "div", 18);
      \u0275\u0275text(31, "MediOrEx");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 19);
      \u0275\u0275text(33, " Healthcare for a Better Tomorrow ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "nav", 20)(35, "a", 21)(36, "span", 3);
      \u0275\u0275text(37, "home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "a", 21)(41, "span", 3);
      \u0275\u0275text(42, " calendar_month ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "a", 21)(46, "span", 3);
      \u0275\u0275text(47, " groups ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "Patients");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "a", 21)(51, "span", 3);
      \u0275\u0275text(52, " medical_services ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Consultation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 22)(56, "div", 23)(57, "span", 3);
      \u0275\u0275text(58, " receipt_long ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Billing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 24);
      \u0275\u0275text(62, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 25)(64, "a", 26);
      \u0275\u0275text(65, " Generate Bill ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 27);
      \u0275\u0275text(67, " View Bills ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 21)(69, "span", 3);
      \u0275\u0275text(70, " payments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 24);
      \u0275\u0275text(74, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 21)(76, "span", 3);
      \u0275\u0275text(77, " bar_chart ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 24);
      \u0275\u0275text(81, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 21)(83, "span", 3);
      \u0275\u0275text(84, " tune ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "Masters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 21)(88, "span", 3);
      \u0275\u0275text(89, " settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "Settings");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 28)(93, "span", 3);
      \u0275\u0275text(94, " headset_mic ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div")(96, "strong");
      \u0275\u0275text(97, "Need Help?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275text(99, "Contact Support");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(100, "main", 29)(101, "div", 30)(102, "div", 31)(103, "div", 32)(104, "span", 3);
      \u0275\u0275text(105, "receipt_long");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div")(107, "h1");
      \u0275\u0275text(108, "View Bills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, " Search and view all consultation bills ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(111, "section", 33)(112, "div", 34)(113, "div", 35)(114, "label");
      \u0275\u0275text(115, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 36)(117, "span", 3);
      \u0275\u0275text(118, " search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function ViewBillsComponent_Template_input_ngModelChange_119_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ViewBillsComponent_Template_input_input_119_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "div", 38)(121, "label");
      \u0275\u0275text(122, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "app-date-range-picker", 39);
      \u0275\u0275listener("dateRangeChange", function ViewBillsComponent_Template_app_date_range_picker_dateRangeChange_123_listener($event) {
        return ctx.onDateRangeChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 40)(125, "div", 41)(126, "label");
      \u0275\u0275text(127, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 42)(129, "select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewBillsComponent_Template_select_ngModelChange_129_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.department, $event) || (ctx.department = $event);
        return $event;
      });
      \u0275\u0275elementStart(130, "option");
      \u0275\u0275text(131, "All Departments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "option");
      \u0275\u0275text(133, "General Medicine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "option");
      \u0275\u0275text(135, "Cardiology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option");
      \u0275\u0275text(137, "Dermatology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option");
      \u0275\u0275text(139, "Orthopedics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "option");
      \u0275\u0275text(141, "Pediatrics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "span", 3);
      \u0275\u0275text(143, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 41)(145, "label");
      \u0275\u0275text(146, "Doctor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 42)(148, "select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewBillsComponent_Template_select_ngModelChange_148_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.doctor, $event) || (ctx.doctor = $event);
        return $event;
      });
      \u0275\u0275elementStart(149, "option");
      \u0275\u0275text(150, "All Doctors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "option");
      \u0275\u0275text(152, "Dr. Priya Sharma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "option");
      \u0275\u0275text(154, "Dr. Arun Kumar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "option");
      \u0275\u0275text(156, "Dr. Meena Devi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "option");
      \u0275\u0275text(158, "Dr. Vivek Singh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "span", 3);
      \u0275\u0275text(160, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "div", 41)(162, "label");
      \u0275\u0275text(163, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 42)(165, "select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewBillsComponent_Template_select_ngModelChange_165_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.paymentMode, $event) || (ctx.paymentMode = $event);
        return $event;
      });
      \u0275\u0275elementStart(166, "option");
      \u0275\u0275text(167, "All Payment Modes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "option");
      \u0275\u0275text(169, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "option");
      \u0275\u0275text(171, "UPI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "option");
      \u0275\u0275text(173, "Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "option");
      \u0275\u0275text(175, "Wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "option");
      \u0275\u0275text(177, "Insurance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "span", 3);
      \u0275\u0275text(179, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 41)(181, "label");
      \u0275\u0275text(182, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "div", 42)(184, "select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewBillsComponent_Template_select_ngModelChange_184_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275elementStart(185, "option");
      \u0275\u0275text(186, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "option");
      \u0275\u0275text(188, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "option");
      \u0275\u0275text(190, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "option");
      \u0275\u0275text(192, "Cancelled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "span", 3);
      \u0275\u0275text(194, " keyboard_arrow_down ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(195, "button", 44);
      \u0275\u0275listener("click", function ViewBillsComponent_Template_button_click_195_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(196, "span", 3);
      \u0275\u0275text(197, " search ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(198, " Search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 45);
      \u0275\u0275listener("click", function ViewBillsComponent_Template_button_click_199_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(200, " Reset ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(201, "section", 46)(202, "div", 47)(203, "div", 48)(204, "span", 3);
      \u0275\u0275text(205, " receipt_long ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div")(207, "span", 49);
      \u0275\u0275text(208, " Total Bills ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "strong");
      \u0275\u0275text(210);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 47)(212, "div", 50)(213, "span", 3);
      \u0275\u0275text(214, " currency_rupee ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "div")(216, "span", 49);
      \u0275\u0275text(217, " Total Revenue ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "strong");
      \u0275\u0275text(219);
      \u0275\u0275pipe(220, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 47)(222, "div", 50)(223, "span", 3);
      \u0275\u0275text(224, " check_circle ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div")(226, "span", 49);
      \u0275\u0275text(227, " Total Paid Bills ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "strong");
      \u0275\u0275text(229);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(230, "div", 47)(231, "div", 51)(232, "span", 3);
      \u0275\u0275text(233, " cancel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "div")(235, "span", 49);
      \u0275\u0275text(236, " Cancelled Bills ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "strong");
      \u0275\u0275text(238);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(239, "section", 52)(240, "div", 53)(241, "h2");
      \u0275\u0275text(242);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 54)(244, "select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewBillsComponent_Template_select_ngModelChange_244_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      });
      \u0275\u0275elementStart(245, "option", 55);
      \u0275\u0275text(246, " 10 per page ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "option", 55);
      \u0275\u0275text(248, " 25 per page ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "option", 55);
      \u0275\u0275text(250, " 50 per page ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(251, "div", 56)(252, "table")(253, "thead")(254, "tr")(255, "th");
      \u0275\u0275text(256, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "th");
      \u0275\u0275text(258, "Bill No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "th");
      \u0275\u0275text(260, "Date & Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "th");
      \u0275\u0275text(262, "Patient Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "th");
      \u0275\u0275text(264, "UHID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "th");
      \u0275\u0275text(266, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "th");
      \u0275\u0275text(268, "Doctor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "th");
      \u0275\u0275text(270, "Amount (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "th");
      \u0275\u0275text(272, "Payment Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "th");
      \u0275\u0275text(274, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "th");
      \u0275\u0275text(276, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(277, "tbody");
      \u0275\u0275template(278, ViewBillsComponent_tr_278_Template, 3, 0, "tr", 57)(279, ViewBillsComponent_tr_279_Template, 39, 20, "tr", 58)(280, ViewBillsComponent_tr_280_Template, 3, 1, "tr", 57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "div", 59)(282, "span");
      \u0275\u0275text(283);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "div", 60)(285, "button")(286, "span", 3);
      \u0275\u0275text(287, " chevron_left ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "button", 61);
      \u0275\u0275text(289, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "button");
      \u0275\u0275text(291, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "button");
      \u0275\u0275text(293, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "button");
      \u0275\u0275text(295, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "button");
      \u0275\u0275text(297, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "span");
      \u0275\u0275text(299, "...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "button");
      \u0275\u0275text(301, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "button")(303, "span", 3);
      \u0275\u0275text(304, " chevron_right ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(305, ViewBillsComponent_div_305_Template, 1, 0, "div", 62);
      \u0275\u0275elementStart(306, "aside", 63)(307, "div", 64)(308, "h2");
      \u0275\u0275text(309, "Bill Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "button", 65);
      \u0275\u0275listener("click", function ViewBillsComponent_Template_button_click_310_listener() {
        return ctx.closeBillDetails();
      });
      \u0275\u0275elementStart(311, "span", 3);
      \u0275\u0275text(312, " close ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(313, "div", 66)(314, "button", 67);
      \u0275\u0275text(315, " Bill Preview ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(316, ViewBillsComponent_div_316_Template, 107, 18, "div", 68);
      \u0275\u0275elementStart(317, "div", 69)(318, "button", 70);
      \u0275\u0275listener("click", function ViewBillsComponent_Template_button_click_318_listener() {
        return ctx.printBill(ctx.selectedBill);
      });
      \u0275\u0275elementStart(319, "span", 3);
      \u0275\u0275text(320, "print");
      \u0275\u0275elementEnd();
      \u0275\u0275text(321, " Print ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "button", 71);
      \u0275\u0275listener("click", function ViewBillsComponent_Template_button_click_322_listener() {
        return ctx.downloadBill(ctx.selectedBill);
      });
      \u0275\u0275elementStart(323, "span", 3);
      \u0275\u0275text(324, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(325, " Download PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "button", 71);
      \u0275\u0275listener("click", function ViewBillsComponent_Template_button_click_326_listener() {
        return ctx.sendToPatient(ctx.selectedBill);
      });
      \u0275\u0275elementStart(327, "span", 3);
      \u0275\u0275text(328, " send ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(329, " Send to Patient ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(330, ViewBillsComponent_div_330_Template, 1, 0, "div", 72)(331, ViewBillsComponent_div_331_Template, 19, 4, "div", 73);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.avatarInitials, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.displayName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.roleName);
      \u0275\u0275advance(100);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(4);
      \u0275\u0275property("startDate", ctx.rangeStart)("endDate", ctx.rangeEnd);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.department);
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.doctor);
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.paymentMode);
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance(26);
      \u0275\u0275textInterpolate1(" ", ctx.totalBills, " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" \u20B9 ", \u0275\u0275pipeBind2(220, 31, ctx.totalRevenue, "1.0-0"), " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.paidBills, " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.cancelledBills, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Bills List (", ctx.totalBills, ") ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 25);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 50);
      \u0275\u0275advance(29);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredBills);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBills.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Showing 1 to ", ctx.filteredBills.length, " of ", ctx.totalBills, " bills ");
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.showBillDetails);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showBillDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.selectedBill);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.confirmCancelItem);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmCancelItem);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DateRangePickerComponent], styles: ['\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Icons";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n}\n.mediorex-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f5f8fc;\n  color: #172033;\n  font-family:\n    Inter,\n    "Segoe UI",\n    Arial,\n    sans-serif;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 190px;\n  right: 0;\n  height: 68px;\n  background: #ffffff;\n  border-bottom: 1px solid #e4eaf1;\n  display: flex;\n  align-items: center;\n  padding: 0 28px;\n  z-index: 100;\n}\n.top-search[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 39px;\n  border: 1px solid #d8e2ee;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  background: #fbfdff;\n}\n.top-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #64748b;\n}\n.top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  margin-left: 8px;\n  font-size: 12px;\n  background: transparent;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 22px;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0;\n  background: transparent;\n  color: #475569;\n  cursor: pointer;\n}\n.notification-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 15px;\n  height: 15px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n}\n.profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #073d89;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.profile-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.profile-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #718096;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 190px;\n  background: #0c192a;\n  color: white;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n}\n.brand[_ngcontent-%COMP%] {\n  height: 68px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  position: relative;\n}\n.logo-top[_ngcontent-%COMP%], \n.logo-left[_ngcontent-%COMP%], \n.logo-right[_ngcontent-%COMP%], \n.logo-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 5px;\n}\n.logo-top[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 17px;\n  left: 10px;\n  top: 0;\n  background: #1387ed;\n}\n.logo-left[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 11px;\n  left: 0;\n  top: 10px;\n  background: #1dcc70;\n}\n.logo-right[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 11px;\n  right: 0;\n  top: 10px;\n  background: #10a9df;\n}\n.logo-bottom[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 17px;\n  left: 10px;\n  bottom: 0;\n  background: #1fc66e;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 6px;\n  color: #aab6c5;\n}\n.sidebar-menu[_ngcontent-%COMP%] {\n  padding: 13px 8px;\n  overflow-y: auto;\n}\n.menu-item[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 10px;\n  margin-bottom: 3px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  color: #d8e1eb;\n  font-size: 12px;\n  cursor: pointer;\n}\n.menu-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .06);\n}\n.billing-parent.active[_ngcontent-%COMP%] {\n  background: #155ba8;\n}\n.menu-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 17px !important;\n}\n.submenu[_ngcontent-%COMP%] {\n  padding: 2px 0 5px 32px;\n}\n.submenu-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9px 11px;\n  color: #bdc9d8;\n  font-size: 11px;\n  border-radius: 5px;\n}\n.submenu-item.active[_ngcontent-%COMP%] {\n  background: rgba(65, 125, 194, .3);\n  color: white;\n}\n.support-card[_ngcontent-%COMP%] {\n  margin: auto 13px 15px;\n  padding: 12px;\n  background: #17283f;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.support-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.support-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n}\n.support-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  font-size: 9px;\n  color: #9caabd;\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 190px;\n  padding: 91px 28px 30px;\n  max-width: 1500px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 18px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 21px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #718096;\n  font-size: 12px;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #718096;\n}\n.breadcrumb[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #344054;\n}\n.generate-new-btn[_ngcontent-%COMP%] {\n  height: 37px;\n  border: 0;\n  border-radius: 6px;\n  padding: 0 14px;\n  background: #126bd5;\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n}\n.generate-new-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.filter-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 14px;\n  margin-bottom: 16px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.first-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 250px;\n  margin-bottom: 11px;\n}\n.second-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr 1fr 105px 70px;\n}\n.filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #475467;\n}\n.input-select[_ngcontent-%COMP%], \n.search-filter[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #d7e0ea;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 0 9px;\n  position: relative;\n}\n.input-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  appearance: none;\n  background: transparent;\n  font-size: 10px;\n  color: #344054;\n}\n.input-select[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  position: absolute;\n  right: 7px;\n  pointer-events: none;\n  font-size: 16px;\n  color: #718096;\n}\n.input-select[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  font-size: 16px;\n  margin-right: 6px;\n  color: #64748b;\n}\n.search-filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #718096;\n}\n.search-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  margin-left: 7px;\n  font-size: 10px;\n}\n.search-btn[_ngcontent-%COMP%], \n.reset-btn[_ngcontent-%COMP%] {\n  height: 36px;\n  align-self: flex-end;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.search-btn[_ngcontent-%COMP%] {\n  border: 1px solid #126bd5;\n  background: #126bd5;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  border: 1px solid #d7e0ea;\n  background: white;\n  color: #344054;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin-bottom: 16px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 105px;\n  padding: 15px;\n  background: white;\n  border: 1px solid #e3e9f0;\n  border-radius: 8px;\n  display: flex;\n  align-items: flex-start;\n  gap: 11px;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.summary-icon.blue[_ngcontent-%COMP%] {\n  background: #edf5ff;\n  color: #126bd5;\n}\n.summary-icon.green[_ngcontent-%COMP%] {\n  background: #eaf9ef;\n  color: #1aa356;\n}\n.summary-icon.red[_ngcontent-%COMP%] {\n  background: #fff0f1;\n  color: #ed424d;\n}\n.summary-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #667085;\n  font-size: 10px;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  margin: 3px 0;\n}\n.growth[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 6px;\n  border-radius: 10px;\n  background: #e8f8ed;\n  color: #159447;\n  font-size: 9px;\n  font-weight: 600;\n}\n.vs[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #98a2b3;\n  font-size: 8px;\n}\n.bill-list-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e3e9f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.list-header[_ngcontent-%COMP%] {\n  min-height: 57px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #edf1f5;\n}\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.list-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.list-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 33px;\n  border: 1px solid #d7e0ea;\n  border-radius: 5px;\n  padding: 0 8px;\n  font-size: 10px;\n  color: #344054;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1050px;\n}\nthead[_ngcontent-%COMP%] {\n  background: #f7f9fc;\n}\nth[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 8px;\n  text-align: left;\n  white-space: nowrap;\n  color: #475467;\n  font-size: 9px;\n  font-weight: 700;\n}\ntd[_ngcontent-%COMP%] {\n  height: 49px;\n  padding: 5px 8px;\n  border-top: 1px solid #edf1f5;\n  color: #344054;\n  font-size: 9px;\n  white-space: nowrap;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #7e8ca4;\n  font-size: 12px;\n}\n.bill-number[_ngcontent-%COMP%] {\n  color: #175fbe;\n  font-weight: 600;\n}\n.date-time[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.date-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.date-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #98a2b3;\n  font-size: 8px;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  border-radius: 5px;\n  font-size: 9px;\n  font-weight: 600;\n}\n.status.paid[_ngcontent-%COMP%] {\n  background: #e5f8ea;\n  color: #149447;\n}\n.status.pending[_ngcontent-%COMP%] {\n  background: #fff5d9;\n  color: #b77900;\n}\n.status.cancelled[_ngcontent-%COMP%] {\n  background: #ffebeb;\n  color: #dc2626;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 27px;\n  border: 1px solid #dce6f1;\n  background: #f7fbff;\n  color: #126bd5;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.action-buttons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.action-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 2px);\n  right: 0;\n  min-width: 150px;\n  padding: 4px;\n  border: 1px solid #dce6f1;\n  border-radius: 6px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, .15);\n  z-index: 70;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  padding: 8px 10px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  color: #b4232a;\n  font-size: 12px;\n  text-align: left;\n  cursor: pointer;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff0f1;\n}\n.action-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: #9aa8bb;\n  cursor: not-allowed;\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .45);\n  z-index: 600;\n}\n.cancel-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  max-width: calc(100vw - 32px);\n  padding: 30px 26px 24px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, .25);\n  text-align: center;\n  z-index: 601;\n}\n.dialog-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: #eef3f8;\n  color: #5b7195;\n  cursor: pointer;\n}\n.dialog-close[_ngcontent-%COMP%]:hover {\n  background: #e2eaf3;\n}\n.cancel-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ef3e49,\n      #b4232a);\n  color: white;\n  box-shadow: 0 8px 20px rgba(239, 62, 73, .35);\n}\n.cancel-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.cancel-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #102054;\n  font-size: 19px;\n  font-weight: 700;\n}\n.cancel-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #617394;\n  font-size: 14px;\n}\n.cancel-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #126bd5;\n}\n.cancel-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 18px;\n}\n.cancel-no[_ngcontent-%COMP%], \n.cancel-yes[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 43px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.cancel-no[_ngcontent-%COMP%] {\n  border: 1px solid #d7e0ea;\n  background: white;\n  color: #344054;\n}\n.cancel-yes[_ngcontent-%COMP%] {\n  border: none;\n  background: #ef3e49;\n  color: white;\n}\n.cancel-yes[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d92f3b;\n}\n.cancel-no[_ngcontent-%COMP%]:disabled, \n.cancel-yes[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n@page {\n  size: A4;\n  margin: 12mm;\n}\n@media print {\n  .topbar[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%], \n   .main-content[_ngcontent-%COMP%], \n   .drawer-overlay[_ngcontent-%COMP%], \n   .drawer-header[_ngcontent-%COMP%], \n   .drawer-tabs[_ngcontent-%COMP%], \n   .drawer-footer[_ngcontent-%COMP%], \n   .dialog-overlay[_ngcontent-%COMP%], \n   .cancel-dialog[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .bill-drawer[_ngcontent-%COMP%] {\n    position: static;\n    width: auto;\n    box-shadow: none;\n  }\n  .invoice[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    aspect-ratio: auto;\n    max-height: none;\n    margin: 0;\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n    overflow: visible;\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  min-height: 55px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #667085;\n  font-size: 9px;\n}\n.pages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 1px solid #dce4ed;\n  background: white;\n  border-radius: 5px;\n  color: #475467;\n  font-size: 10px;\n  cursor: pointer;\n}\n.pages[_ngcontent-%COMP%]   button.current[_ngcontent-%COMP%] {\n  background: #126bd5;\n  border-color: #126bd5;\n  color: white;\n}\n.pages[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .28);\n  z-index: 400;\n}\n.bill-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -520px;\n  bottom: 0;\n  width: 520px;\n  background: #ffffff;\n  z-index: 500;\n  box-shadow: -5px 0 25px rgba(15, 23, 42, .16);\n  display: flex;\n  flex-direction: column;\n  transition: right .25s ease;\n}\n.bill-drawer.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.drawer-header[_ngcontent-%COMP%] {\n  height: 57px;\n  padding: 0 14px;\n  border-bottom: 1px solid #e4eaf1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #667085;\n  cursor: pointer;\n}\n.drawer-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 12px;\n  border: 1px solid #dce4ed;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.drawer-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 38px;\n  border: 0;\n  border-right: 1px solid #dce4ed;\n  background: white;\n  color: #526173;\n  font-size: 10px;\n  cursor: pointer;\n}\n.drawer-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.drawer-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #126bd5;\n  font-weight: 600;\n  border-bottom: 2px solid #126bd5;\n}\n.drawer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 0 12px 12px;\n}\n.drawer-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 33px;\n  padding: 0 11px;\n  border: 1px solid #c9ddf4;\n  background: white;\n  color: #126bd5;\n  border-radius: 5px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n}\n.drawer-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.invoice[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  aspect-ratio: 210 / 297;\n  max-height: 100%;\n  margin: 0 auto 12px;\n  border: 1px solid #e1e7ee;\n  border-radius: 4px;\n  padding: 22px 24px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, .18);\n  overflow-y: auto;\n}\n.invoice-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.invoice-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.invoice-logo-image[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: contain;\n}\n.invoice-brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n}\n.invoice-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #98a2b3;\n  font-size: 8px;\n}\n.clinic-details[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 10px;\n  color: #667085;\n}\n.clinic-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #344054;\n  font-size: 11px;\n}\n.invoice-line[_ngcontent-%COMP%] {\n  border-top: 1px dashed #cbd5e1;\n  margin: 13px 0;\n}\n.invoice-title[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  font-size: 17px;\n  margin: 0 0 13px;\n}\n.cancelled-stamp[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-block;\n  padding: 3px 12px;\n  border: 2px solid #ed424d;\n  border-radius: 4px;\n  color: #ed424d;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.invoice-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border: 1px solid #dce4ed;\n  margin-bottom: 15px;\n}\n.invoice-meta.plain[_ngcontent-%COMP%] {\n  border: none;\n  gap: 76px;\n}\n.invoice-meta[_ngcontent-%COMP%]   .meta-left[_ngcontent-%COMP%], \n.invoice-meta[_ngcontent-%COMP%]   .meta-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border: none;\n  padding: 0;\n  min-height: 0;\n}\n.invoice-meta[_ngcontent-%COMP%]   .meta-left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.invoice-meta[_ngcontent-%COMP%]   .meta-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 0;\n  padding: 0;\n  border: none;\n  font-size: 10px;\n}\n.invoice-meta[_ngcontent-%COMP%]   .meta-left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  grid-template-columns: 70px 1fr;\n}\n.invoice-meta[_ngcontent-%COMP%]   .meta-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  grid-template-columns: 110px 1fr;\n}\n.invoice-meta[_ngcontent-%COMP%]   .meta-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.invoice-meta[_ngcontent-%COMP%]   .meta-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #667085;\n}\n.invoice-meta[_ngcontent-%COMP%]   .meta-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.invoice-meta[_ngcontent-%COMP%]   .meta-right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #344054;\n  white-space: nowrap;\n}\n.invoice-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #667085;\n}\n.invoice-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #344054;\n}\n.invoice-section[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.invoice-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n}\n.invoice-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.invoice-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 125px 1fr;\n  font-size: 11px;\n}\n.invoice-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #667085;\n}\n.invoice-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #344054;\n}\n.invoice-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n}\n.invoice-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 31px;\n  background: #f7f9fc;\n  font-size: 10px;\n}\n.invoice-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.invoice-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.invoice-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 38px;\n  font-size: 10px;\n}\n.invoice-total[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.invoice-total[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 18px;\n  font-size: 11px;\n}\n.invoice-total[_ngcontent-%COMP%]   .grand-total[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  background: #e8f5ff;\n  color: #126bd5;\n  font-weight: 700;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.invoice-total[_ngcontent-%COMP%]   .grand-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.thank-you[_ngcontent-%COMP%] {\n  text-align: center;\n  border-top: 1px dashed #cbd5e1;\n  margin-top: 15px;\n  padding-top: 12px;\n}\n.thank-you[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n.thank-you[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #718096;\n  font-size: 10px;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-top: 1px solid #e4eaf1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 7px;\n}\n.drawer-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 37px;\n  border-radius: 5px;\n  font-size: 9px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  cursor: pointer;\n}\n.drawer-primary[_ngcontent-%COMP%] {\n  background: #126bd5;\n  border: 1px solid #126bd5;\n  color: white;\n}\n.drawer-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #cbdff6;\n  color: #126bd5;\n}\n.fullscreen-btn[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  border: 1px solid #cbdff6;\n  background: white;\n  color: #126bd5;\n}\n.drawer-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n@media (max-width: 1200px) {\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .second-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .brand[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child, \n   .menu-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.material-symbols-outlined), \n   .submenu[_ngcontent-%COMP%], \n   .support-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-item[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .menu-arrow[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    left: 70px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 70px;\n  }\n  .first-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 650px) {\n  .topbar[_ngcontent-%COMP%] {\n    left: 0;\n    padding: 0 12px;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: 85px 12px 25px;\n  }\n  .top-search[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n  .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .second-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .bill-drawer[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .drawer-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .drawer-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n    grid-column: 1 / -1;\n  }\n}\n.mediorex-page[_ngcontent-%COMP%] {\n  min-height: 0;\n  background: transparent;\n}\n.mediorex-page[_ngcontent-%COMP%]    > .topbar[_ngcontent-%COMP%], \n.mediorex-page[_ngcontent-%COMP%]    > .sidebar[_ngcontent-%COMP%] {\n  display: none;\n}\n.mediorex-page[_ngcontent-%COMP%]    > .main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin-left: 0;\n  padding: 0;\n}\n.main-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.main-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n.main-content[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.main-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.main-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.heading-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #0879e8,\n      #176bd0);\n  color: white;\n  box-shadow: 0 6px 15px rgba(8, 121, 232, .15);\n}\n.heading-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.main-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.main-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.main-content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.bill-drawer[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.drawer-tabs[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.drawer-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15px;\n}\n.drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.invoice-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.invoice-brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.invoice-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.invoice-meta[_ngcontent-%COMP%], \n.invoice-info[_ngcontent-%COMP%], \n.invoice-items[_ngcontent-%COMP%], \n.invoice-total[_ngcontent-%COMP%], \n.thank-you[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  min-height: 82px;\n  height: 82px;\n  align-items: center;\n}\n.summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  align-items: center;\n  gap: 10px;\n  white-space: nowrap;\n}\n.summary-cards[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  margin: 0;\n}\n.summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.summary-cards[_ngcontent-%COMP%]   .vs[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.summary-cards[_ngcontent-%COMP%]   .vs[_ngcontent-%COMP%] {\n  justify-self: end;\n}\n/*# sourceMappingURL=view.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewBillsComponent, { className: "ViewBillsComponent" });
})();
export {
  ViewBillsComponent
};
//# sourceMappingURL=chunk-UB7QX6BJ.js.map
