import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-GFRD3CSB.js";
import {
  API_BASE_URL,
  CLIENT_CODE
} from "./chunk-OCZWZWFA.js";
import {
  AuthService
} from "./chunk-R4WLTVLJ.js";
import {
  Router
} from "./chunk-4V2D7BB2.js";
import {
  CommonModule,
  HttpClient,
  HttpHeaders,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/login/login.service.ts
var LoginService = class _LoginService {
  http;
  endpoint = `${API_BASE_URL}/auth`;
  constructor(http) {
    this.http = http;
  }
  login(username, password) {
    const headers = new HttpHeaders({ "X-Client-Code": CLIENT_CODE });
    return this.http.post(`${this.endpoint}/login`, {
      username,
      password
    }, { headers });
  }
  static \u0275fac = function LoginService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoginService, factory: _LoginService.\u0275fac, providedIn: "root" });
};

// src/app/login/login.component.ts
function LoginComponent_span_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 73)(2, "circle", 40);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 74)(2, "path", 75)(3, "path", 76)(4, "path", 77);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loginError);
  }
}
var LoginComponent = class _LoginComponent {
  router;
  authService;
  loginService;
  username = "";
  password = "";
  showPassword = false;
  usernameError = false;
  passwordError = false;
  loginError = "";
  isSubmitting = false;
  constructor(router, authService, loginService) {
    this.router = router;
    this.authService = authService;
    this.loginService = loginService;
  }
  signIn() {
    this.loginError = "";
    this.usernameError = this.username.trim() === "";
    this.passwordError = this.password.trim() === "";
    if (this.usernameError || this.passwordError) {
      return;
    }
    this.isSubmitting = true;
    this.loginService.login(this.username.trim(), this.password).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.authService.login(response.user);
        this.router.navigate(["/home"]);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.loginError = error.error?.message || "Unable to sign in. Please try again.";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(LoginService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 186, vars: 13, consts: [[1, "login-page"], [1, "hero-section"], [1, "hero-content"], [1, "hero-heading"], [1, "eyebrow"], [1, "hero-description"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon", "blue"], ["viewBox", "0 0 24 24"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "feature-icon", "green"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "feature-icon", "purple"], ["d", "M4.8 9.5a7 7 0 0 1 14.4 0"], ["d", "M4 10v4a2 2 0 0 0 2 2h1v-5H4z"], ["d", "M20 10v4a2 2 0 0 1-2 2h-1v-5h3z"], ["d", "M9 19h6"], ["d", "M12 16v3"], [1, "feature-icon", "orange"], ["d", "M10.5 13.5l3-3"], ["d", "M7.5 17.5l-1 1a4 4 0 0 1-5.5-5.5l4-4a4 4 0 0 1 5.5 0"], ["d", "M16.5 6.5l1-1A4 4 0 0 1 23 11l-4 4a4 4 0 0 1-5.5 0"], [1, "feature-icon", "pink"], ["d", "M9 2h6"], ["d", "M10 2v5l-6 11a3 3 0 0 0 2.7 4h10.6a3 3 0 0 0 2.7-4L14 7V2"], ["d", "M8 14h8"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "2"], [1, "feature-icon", "teal"], ["x1", "4", "y1", "19", "x2", "4", "y2", "10"], ["x1", "10", "y1", "19", "x2", "10", "y2", "5"], ["x1", "16", "y1", "19", "x2", "16", "y2", "8"], ["x1", "22", "y1", "19", "x2", "22", "y2", "3"], [1, "feature-icon", "violet"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.4 1.4-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.55V20h-2v-.08a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06-1.4-1.4.06-.06A1.7 1.7 0 0 0 8.6 15a1.7 1.7 0 0 0-1.55-1H7v-2h.08a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.4-1.4.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1-1.55V6h2v.08a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.4 1.4-.06.06A1.7 1.7 0 0 0 19.4 11a1.7 1.7 0 0 0 1.55 1H21v2h-.08a1.7 1.7 0 0 0-1.52 1z"], [1, "bottom-tagline"], [1, "hospital-image"], [1, "login-section"], [1, "login-card"], [1, "login-brand"], ["src", "/assets/mediorex_logo.png", "alt", "MediOrEx", 1, "brand-logo"], [1, "brand-light"], [1, "brand-dark"], [1, "login-subtitle"], [3, "ngSubmit"], [1, "form-group"], [1, "input-wrapper"], ["cx", "12", "cy", "8", "r", "4"], ["d", "M4 21a8 8 0 0 1 16 0"], ["type", "text", "name", "username", "placeholder", "Enter your username ", "autocomplete", "username", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["x", "4", "y", "10", "width", "16", "height", "11", "rx", "2"], ["d", "M8 10V7a4 4 0 0 1 8 0v3"], ["name", "password", "placeholder", "Enter your password", "autocomplete", "current-password", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-toggle", 3, "click"], ["viewBox", "0 0 24 24", 4, "ngIf"], ["class", "field-error login-error", 4, "ngIf"], [1, "login-options"], ["type", "button", 1, "forgot"], ["type", "submit", 1, "signin-button", 3, "disabled"], [1, "signin-arrow"], [1, "login-footer"], [1, "hospital-line-art"], ["src", "/assets/hospital_bg.png", "alt", "Hospital"], [1, "footer-copy"], [1, "field-error"], ["d", "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"], ["d", "M3 3l18 18"], ["d", "M10.6 10.6a2 2 0 0 0 2.8 2.8"], ["d", "M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-3 3.8"], ["d", "M6.2 6.2C3.5 8.2 2 12 2 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1"], [1, "field-error", "login-error"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "span");
      \u0275\u0275text(6, " COMPLETE HOSPITAL ECOSYSTEM ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2");
      \u0275\u0275text(8, " Smarter Healthcare");
      \u0275\u0275element(9, "br");
      \u0275\u0275text(10, " for a ");
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Brighter Tomorrow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 5);
      \u0275\u0275text(14, " Manage patients, streamline operations and deliver better care \u2014 all in one integrated platform. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 6)(16, "div", 7)(17, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 9);
      \u0275\u0275element(19, "path", 10)(20, "circle", 11)(21, "path", 12)(22, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div")(24, "h3");
      \u0275\u0275text(25, "Patient Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Registration, records");
      \u0275\u0275element(28, "br");
      \u0275\u0275text(29, "and patient journey");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 7)(31, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 9);
      \u0275\u0275element(33, "rect", 15)(34, "line", 16)(35, "line", 17)(36, "line", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div")(38, "h3");
      \u0275\u0275text(39, "Appointments & Queue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41, "Online & offline booking,");
      \u0275\u0275element(42, "br");
      \u0275\u0275text(43, "token management");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 7)(45, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 9);
      \u0275\u0275element(47, "path", 20)(48, "path", 21)(49, "path", 22)(50, "path", 23)(51, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "div")(53, "h3");
      \u0275\u0275text(54, "Clinical Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "OPD, IPD, consultation");
      \u0275\u0275element(57, "br");
      \u0275\u0275text(58, "and treatments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 7)(60, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 9);
      \u0275\u0275element(62, "path", 26)(63, "path", 27)(64, "path", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(65, "div")(66, "h3");
      \u0275\u0275text(67, "Pharmacy Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p");
      \u0275\u0275text(69, "Inventory, dispensing");
      \u0275\u0275element(70, "br");
      \u0275\u0275text(71, "and billing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 7)(73, "div", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 9);
      \u0275\u0275element(75, "path", 30)(76, "path", 31)(77, "path", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(78, "div")(79, "h3");
      \u0275\u0275text(80, "Laboratory Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, "Test orders, results");
      \u0275\u0275element(83, "br");
      \u0275\u0275text(84, "and reporting");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "div", 7)(86, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 9);
      \u0275\u0275element(88, "rect", 33)(89, "line", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(90, "div")(91, "h3");
      \u0275\u0275text(92, "Billing & Insurance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, "Invoicing, claims");
      \u0275\u0275element(95, "br");
      \u0275\u0275text(96, "and financial tracking");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 7)(98, "div", 34);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(99, "svg", 9);
      \u0275\u0275element(100, "line", 35)(101, "line", 36)(102, "line", 37)(103, "line", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(104, "div")(105, "h3");
      \u0275\u0275text(106, "Reports & Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p");
      \u0275\u0275text(108, "Data-driven insights");
      \u0275\u0275element(109, "br");
      \u0275\u0275text(110, "for better decisions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "div", 7)(112, "div", 39);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(113, "svg", 9);
      \u0275\u0275element(114, "circle", 40)(115, "path", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(116, "div")(117, "h3");
      \u0275\u0275text(118, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p");
      \u0275\u0275text(120, "User management,");
      \u0275\u0275element(121, "br");
      \u0275\u0275text(122, "roles and configuration");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(123, "div", 42);
      \u0275\u0275element(124, "span");
      \u0275\u0275elementStart(125, "p");
      \u0275\u0275text(126, "Better Care.");
      \u0275\u0275element(127, "br");
      \u0275\u0275text(128, "Brighter Tomorrow.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(129, "section", 43);
      \u0275\u0275elementStart(130, "section", 44)(131, "div", 45)(132, "div", 46);
      \u0275\u0275element(133, "img", 47);
      \u0275\u0275elementStart(134, "div")(135, "h1")(136, "span", 48);
      \u0275\u0275text(137, "Medi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "span", 49);
      \u0275\u0275text(139, "Orex");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "p");
      \u0275\u0275text(141, "Hospital Management System");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "h2");
      \u0275\u0275text(143, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 50);
      \u0275\u0275text(145, "Sign in to continue to MediOrex");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "form", 51);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_146_listener() {
        return ctx.signIn();
      });
      \u0275\u0275elementStart(147, "div", 52)(148, "label");
      \u0275\u0275text(149, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(151, "svg", 9);
      \u0275\u0275element(152, "circle", 54)(153, "path", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(154, "input", 56);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_154_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(155, LoginComponent_span_155_Template, 2, 0, "span", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 52)(157, "label");
      \u0275\u0275text(158, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(160, "svg", 9);
      \u0275\u0275element(161, "rect", 58)(162, "path", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(163, "input", 60);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_163_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "button", 61);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_164_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275template(165, LoginComponent__svg_svg_165_Template, 3, 0, "svg", 62)(166, LoginComponent__svg_svg_166_Template, 5, 0, "svg", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(167, LoginComponent_span_167_Template, 2, 0, "span", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275template(168, LoginComponent_span_168_Template, 2, 1, "span", 63);
      \u0275\u0275elementStart(169, "div", 64)(170, "button", 65);
      \u0275\u0275text(171, " Forgot password? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "button", 66)(173, "span");
      \u0275\u0275text(174, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "span", 67);
      \u0275\u0275text(176, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 68)(178, "div", 69);
      \u0275\u0275element(179, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "p");
      \u0275\u0275text(181, " Healthcare Innovation");
      \u0275\u0275element(182, "br");
      \u0275\u0275text(183, " for a Healthier Tomorrow ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p", 71);
      \u0275\u0275text(185, "\xA9 2026 Orextechnologies. All rights reserved.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(150);
      \u0275\u0275classProp("error", ctx.usernameError);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.usernameError);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("error", ctx.passwordError);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.passwordError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loginError);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  font-family:\n    Inter,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 42% 23% 35%;\n  overflow: hidden;\n  background-image: url(/assets/mediorex_background.png);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  min-height: 100vh;\n  padding: 4px 48px 34px 72px;\n  background: transparent;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -10%;\n  right: -16%;\n  width: 180px;\n  height: 125%;\n  border-radius: 50%;\n  border-left: 12px solid rgba(25, 166, 232, 0.15);\n  border-right: 7px solid rgba(25, 166, 232, 0.08);\n  transform: rotate(11deg);\n  pointer-events: none;\n}\n.brand[_ngcontent-%COMP%], \n.login-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n}\n.brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #11165f;\n  font-size: 36px;\n  line-height: 1;\n  margin: 0;\n  font-weight: 750;\n  letter-spacing: -1.5px;\n}\n.brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.login-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #536198;\n  font-size: 12px;\n}\n.login-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateY(10px);\n}\n.hero-heading[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  position: relative;\n  z-index: 2;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #303c81;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 4px;\n}\n.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.bottom-tagline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  height: 2px;\n  background: #087df1;\n}\n.bottom-tagline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.hero-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 19px 0 12px;\n  color: #10165f;\n  font-size: clamp(42px, 3.1vw, 57px);\n  line-height: 1.05;\n  letter-spacing: -2.2px;\n  font-weight: 750;\n}\n.hero-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #147eea,\n      #12b9b3);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero-description[_ngcontent-%COMP%] {\n  max-width: 560px;\n  color: #5c689e;\n  font-size: 18px;\n  line-height: 1.45;\n  margin: 0;\n}\n.features-grid[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(250px, 1fr));\n  gap: 20px;\n  position: relative;\n  z-index: 2;\n}\n.feature-card[_ngcontent-%COMP%] {\n  min-height: 94px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 11px;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(194, 219, 240, 0.72);\n  border-radius: 13px;\n  box-shadow: 0 8px 25px rgba(70, 127, 170, 0.06);\n  backdrop-filter: blur(8px);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  flex: 0 0 69px;\n  width: 69px;\n  height: 69px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.feature-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.feature-icon.blue[_ngcontent-%COMP%] {\n  color: #087ff1;\n  background: #e8f3ff;\n}\n.feature-icon.green[_ngcontent-%COMP%] {\n  color: #04a98e;\n  background: #e7f8f3;\n}\n.feature-icon.purple[_ngcontent-%COMP%] {\n  color: #7139ed;\n  background: #f1eaff;\n}\n.feature-icon.orange[_ngcontent-%COMP%] {\n  color: #ff930e;\n  background: #fff4e3;\n}\n.feature-icon.pink[_ngcontent-%COMP%] {\n  color: #ef3b72;\n  background: #ffebf1;\n}\n.feature-icon.teal[_ngcontent-%COMP%] {\n  color: #03aaa1;\n  background: #e5f8f5;\n}\n.feature-icon.violet[_ngcontent-%COMP%] {\n  color: #6734e8;\n  background: #f0eaff;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #11165f;\n  font-size: 15px;\n  font-weight: 700;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6170a4;\n  font-size: 13px;\n  line-height: 1.35;\n}\n.bottom-tagline[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 72px;\n  bottom: 50px;\n  z-index: 3;\n}\n.bottom-tagline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 16px 0 0;\n  color: #121861;\n  font-size: 21px;\n  line-height: 1.15;\n  font-weight: 500;\n}\n.hospital-image[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n}\n.login-section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  z-index: 5;\n  padding: 40px 36px 50px 0;\n  background: transparent;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: min(100%, 485px);\n  min-height: 620px;\n  margin: 0 auto 0 20px;\n  padding: 10px 40px 0;\n  border-radius: 21px;\n  background: rgba(255, 255, 255, 0.93);\n  box-shadow: 0 10px 50px rgba(65, 104, 145, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.login-brand[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 0;\n  transform: translateX(-24px);\n}\n.login-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #10165f;\n  font-size: 38px;\n  line-height: 1;\n  margin: 0;\n  font-weight: 750;\n  letter-spacing: -1.5px;\n  transform: translateY(10px);\n}\n.brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .brand-light[_ngcontent-%COMP%], \n.login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .brand-light[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #143368,\n      #076594);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .brand-dark[_ngcontent-%COMP%], \n.login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .brand-dark[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #3192a3,\n      #299673);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.login-card[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 38px 0 6px;\n  text-align: center;\n  color: #10165f;\n  font-size: 31px;\n  font-weight: 750;\n  letter-spacing: -1px;\n}\n.login-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 25px;\n  text-align: center;\n  color: #6874a7;\n  font-size: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 21px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #11165f;\n  font-size: 14px;\n  font-weight: 600;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  border: 1px solid #d3def0;\n  border-radius: 10px;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #1683ee;\n  box-shadow: 0 0 0 3px rgba(22, 131, 238, 0.09);\n}\n.input-wrapper.error[_ngcontent-%COMP%] {\n  border-color: #e5484d;\n  box-shadow: 0 0 0 3px rgba(229, 72, 77, 0.1);\n}\n.input-wrapper.error[_ngcontent-%COMP%]:focus-within {\n  border-color: #e5484d;\n  box-shadow: 0 0 0 3px rgba(229, 72, 77, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n  color: #e5484d;\n  font-size: 12px;\n  font-weight: 500;\n}\n.login-error[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.input-wrapper[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  margin: 0 13px;\n  fill: none;\n  stroke: #6471a4;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  border: 0;\n  outline: 0;\n  color: #18205f;\n  font-size: 14px;\n  background: transparent;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8b96bc;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  padding: 0 15px;\n  cursor: pointer;\n}\n.password-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  fill: none;\n  stroke: #6874a7;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.login-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 3px 0 25px;\n}\n.forgot[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #087ff0;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.signin-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  border: 0;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      90deg,\n      #0879e9,\n      #0a72dc);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 8px 18px rgba(8, 121, 233, 0.16);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.signin-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 11px 24px rgba(8, 121, 233, 0.23);\n}\n.signin-arrow[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.login-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding: 20px 40px 20px;\n  margin-left: -40px;\n  margin-right: -40px;\n  background:\n    radial-gradient(\n      ellipse at 20% 100%,\n      rgba(218, 242, 255, 0.75),\n      transparent 50%),\n    radial-gradient(\n      ellipse at 85% 100%,\n      rgba(214, 240, 255, 0.75),\n      transparent 50%);\n}\n.hospital-line-art[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 65%;\n  height: 100px;\n  overflow: hidden;\n}\n.hospital-line-art[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  margin: 0;\n  border-radius: 10px;\n}\n.login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  color: #5d6ca4;\n  font-size: 16px;\n  line-height: 1.25;\n}\n.login-footer[_ngcontent-%COMP%]   .footer-copy[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  color: #8a96bd;\n  font-size: 11px;\n  letter-spacing: 0.3px;\n}\n@media (max-width: 1200px) {\n  .login-page[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n  .hospital-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-section[_ngcontent-%COMP%] {\n    padding-left: 45px;\n    padding-right: 35px;\n  }\n  .login-section[_ngcontent-%COMP%] {\n    padding: 90px 35px 40px;\n  }\n  .hero-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n  .features-grid[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .feature-card[_ngcontent-%COMP%] {\n    min-height: 88px;\n  }\n}\n@media (max-width: 900px) {\n  .login-page[_ngcontent-%COMP%] {\n    display: block;\n    overflow: visible;\n  }\n  .hero-section[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 2px 35px 50px;\n  }\n  .hero-section[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .hero-heading[_ngcontent-%COMP%] {\n    margin-top: 2px;\n  }\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .bottom-tagline[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 40px;\n  }\n  .hospital-image[_ngcontent-%COMP%] {\n    display: block;\n    min-height: 280px;\n  }\n  .login-section[_ngcontent-%COMP%] {\n    min-height: 800px;\n    padding: 55px 30px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n@media (max-width: 600px) {\n  .hero-section[_ngcontent-%COMP%], \n   .hospital-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-section[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    padding: 24px 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    border-radius: 16px;\n  }\n  .login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 29px;\n  }\n  .login-card[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    margin-top: 28px;\n    font-size: 27px;\n  }\n  .login-subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 28px;\n  }\n  .login-footer[_ngcontent-%COMP%] {\n    height: 170px;\n  }\n  .login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media (max-width: 380px) {\n  .hero-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n  .login-options[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .forgot[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-4BFLRDGS.js.map
