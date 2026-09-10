import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-GFRD3CSB.js";
import {
  API_BASE_URL
} from "./chunk-OCZWZWFA.js";
import {
  AuthService
} from "./chunk-R4WLTVLJ.js";
import {
  CommonModule,
  EventEmitter,
  HttpClient,
  NgClass,
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
  ɵɵsanitizeUrl,
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

// src/app/settings/about-system/about-system.component.ts
var AboutSystemComponent = class _AboutSystemComponent {
  static \u0275fac = function AboutSystemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutSystemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutSystemComponent, selectors: [["app-about-system"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 77, vars: 0, consts: [[1, "about-system-page"], [1, "about-hero"], [1, "about-logo"], [1, "material-icons"], [1, "eyebrow"], [1, "system-details-card"], [1, "details-heading"], [1, "section-icon"], [1, "details-grid"], [1, "detail-item"], ["href", "tel:+919876543210", 1, "detail-item"], ["href", "mailto:info@mediorex.com", 1, "detail-item"]], template: function AboutSystemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "i", 3);
      \u0275\u0275text(4, "local_hospital");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div")(6, "p", 4);
      \u0275\u0275text(7, "Application Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h2");
      \u0275\u0275text(9, "MediOrex");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "section", 5)(11, "div", 6)(12, "div", 7)(13, "i", 3);
      \u0275\u0275text(14, "info");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div")(16, "h3");
      \u0275\u0275text(17, "Orextechnology Company Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Application and licensing information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 8)(21, "div", 9)(22, "i", 3);
      \u0275\u0275text(23, "business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "span");
      \u0275\u0275text(26, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "strong");
      \u0275\u0275text(28, "Orextechnology");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "a", 10)(30, "i", 3);
      \u0275\u0275text(31, "phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "span");
      \u0275\u0275text(34, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "strong");
      \u0275\u0275text(36, "+91 80 4567 8900");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "a", 10)(38, "i", 3);
      \u0275\u0275text(39, "smartphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div")(41, "span");
      \u0275\u0275text(42, "Mobile Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "strong");
      \u0275\u0275text(44, "+91 98765 43210");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "a", 11)(46, "i", 3);
      \u0275\u0275text(47, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div")(49, "span");
      \u0275\u0275text(50, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "strong");
      \u0275\u0275text(52, "info@mediorex.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 9)(54, "i", 3);
      \u0275\u0275text(55, "verified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div")(57, "span");
      \u0275\u0275text(58, "License Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "strong");
      \u0275\u0275text(60, "Enterprise License");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 9)(62, "i", 3);
      \u0275\u0275text(63, "apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div")(65, "span");
      \u0275\u0275text(66, "Application Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "strong");
      \u0275\u0275text(68, "Web Application");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 9)(70, "i", 3);
      \u0275\u0275text(71, "new_releases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div")(73, "span");
      \u0275\u0275text(74, "Application Version");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "strong");
      \u0275\u0275text(76, "Version 1.0.0");
      \u0275\u0275elementEnd()()()()()();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.about-system-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.about-hero[_ngcontent-%COMP%], \n.system-details-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5eaf2;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(25, 50, 90, 0.03);\n}\n.about-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n}\n.about-logo[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  flex: 0 0 auto;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8f2ff;\n  color: #1677ff;\n}\n.about-logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #0879e8;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.about-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #12244a;\n  font-size: 26px;\n}\n.about-description[_ngcontent-%COMP%] {\n  max-width: 620px;\n  margin: 7px 0 0;\n  color: #697791;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.system-details-card[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.details-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #edf0f5;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex: 0 0 auto;\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #edf5ff;\n  color: #1677ff;\n}\n.section-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.details-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #12244a;\n  font-size: 19px;\n}\n.details-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #71809a;\n  font-size: 13px;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1px;\n  margin-top: 20px;\n  overflow: hidden;\n  border: 1px solid #edf0f5;\n  border-radius: 9px;\n  background: #edf0f5;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  min-width: 0;\n  padding: 17px;\n  background: white;\n  color: #12244a;\n  text-decoration: none;\n}\n.detail-item[_ngcontent-%COMP%]:hover {\n  background: #f8fbff;\n}\n.detail-item[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #1677ff;\n  font-size: 22px;\n}\n.detail-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.detail-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  color: #71809a;\n  font-size: 12px;\n}\n.detail-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #25385d;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .about-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: 20px;\n  }\n  .about-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .system-details-card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=about-system.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutSystemComponent, { className: "AboutSystemComponent" });
})();

// src/app/settings/users/users.service.ts
var UsersService = class _UsersService {
  http;
  endpoint = `${API_BASE_URL}/users`;
  constructor(http) {
    this.http = http;
  }
  getUsers() {
    return this.http.get(this.endpoint);
  }
  getRoles() {
    return this.http.get(`${this.endpoint}/roles`);
  }
  createUser(payload) {
    return this.http.post(this.endpoint, payload);
  }
  updateUser(payload) {
    return this.http.put(`${this.endpoint}/${payload.userId}`, payload);
  }
  deleteUser(userId) {
    return this.http.delete(`${this.endpoint}/${userId}`);
  }
  static \u0275fac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
};

// src/app/settings/users/users.component.ts
function SettingsUsersComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1, "Loading users...");
    \u0275\u0275elementEnd();
  }
}
function SettingsUsersComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadError, " ");
  }
}
function SettingsUsersComponent_tr_60_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function SettingsUsersComponent_tr_60_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editUser(user_r4));
    });
    \u0275\u0275elementStart(1, "i", 8);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function SettingsUsersComponent_tr_60_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function SettingsUsersComponent_tr_60_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r4));
    });
    \u0275\u0275elementStart(1, "i", 8);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function SettingsUsersComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 58)(5, "div", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 61);
    \u0275\u0275text(19, "********");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "span", 62);
    \u0275\u0275element(22, "i");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 63);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 64);
    \u0275\u0275template(29, SettingsUsersComponent_tr_60_button_29_Template, 3, 0, "button", 65)(30, SettingsUsersComponent_tr_60_button_30_Template, 3, 0, "button", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", user_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.initials, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.designation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r4.username, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r4.role.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.role, " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active-status", user_r4.status === "Active")("inactive-status", user_r4.status !== "Active");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r4.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r4.lastLogin, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isProtectedUser(user_r4) || ctx_r1.isSuperAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isProtectedUser(user_r4));
  }
}
function SettingsUsersComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "i", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function SettingsUsersComponent_option_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    \u0275\u0275property("value", role_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r7, " ");
  }
}
function SettingsUsersComponent_small_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.rolesError);
  }
}
function SettingsUsersComponent_p_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function SettingsUsersComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function SettingsUsersComponent_div_159_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd();
  }
}
function SettingsUsersComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "i", 8);
    \u0275\u0275text(3, "delete_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Delete User?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " Do you want to delete ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 75)(12, "button", 51);
    \u0275\u0275listener("click", function SettingsUsersComponent_div_160_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(13, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 76);
    \u0275\u0275listener("click", function SettingsUsersComponent_div_160_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(15, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.userPendingDelete == null ? null : ctx_r1.userPendingDelete.name);
  }
}
function SettingsUsersComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function SettingsUsersComponent_div_161_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function SettingsUsersComponent_div_162_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "button", 78);
    \u0275\u0275listener("click", function SettingsUsersComponent_div_162_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275elementStart(2, "i", 8);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 79)(5, "i", 8);
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "User details have been saved successfully.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 80);
    \u0275\u0275listener("click", function SettingsUsersComponent_div_162_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275text(12, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.successDialogMessage);
  }
}
var SettingsUsersComponent = class _SettingsUsersComponent {
  usersService;
  authService;
  tabChange = new EventEmitter();
  constructor(usersService, authService) {
    this.usersService = usersService;
    this.authService = authService;
    this.loadUsers();
    this.loadRoles();
  }
  activeTab = "users";
  searchText = "";
  selectedRole = "";
  selectedStatus = "";
  showPassword = false;
  showConfirmPassword = false;
  editingUserId = null;
  users = [];
  roles = [];
  loading = true;
  loadError = "";
  rolesError = "";
  successMessage = "";
  errorMessage = "";
  showSuccessDialog = false;
  successDialogMessage = "";
  showDeleteDialog = false;
  userPendingDelete = null;
  get isSuperAdmin() {
    const currentUser = this.authService.user();
    const role = currentUser?.role_name || "";
    const username = currentUser?.username || "";
    return this.normalizeRole(role) === "superadmin" || username.trim().toLowerCase() === "superadmin";
  }
  newUser = {
    firstName: "",
    lastName: "",
    role: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    active: true
  };
  loadRoles() {
    this.usersService.getRoles().subscribe({
      next: (response) => {
        this.roles = response.roles.map((role) => role.roleName);
      },
      error: () => {
        this.rolesError = "Unable to load roles.";
      }
    });
  }
  loadUsers() {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response.users.map((user, index) => {
          const name = [user.firstName, user.lastName].filter(Boolean).join(" ");
          const role = user.roles[0] || "Staff";
          const normalizedStatus = user.status.toLowerCase();
          return {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName || "",
            name: name || user.username,
            username: user.username,
            phone: user.mobileNumber || "",
            initials: this.initials(name || user.username),
            designation: role,
            role: this.displayRole(role),
            email: user.email || "-",
            status: normalizedStatus === "active" ? "Active" : "Inactive",
            lastLogin: this.formatLastLogin(user.lastLoginAt),
            color: ["#3b82f6", "#2496ed", "#6366f1", "#10b981", "#ef476f"][index % 5]
          };
        });
        this.loading = false;
      },
      error: () => {
        this.loadError = "Unable to load users. Please try again.";
        this.loading = false;
      }
    });
  }
  initials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0].toUpperCase()).join("");
  }
  displayRole(role) {
    return role.toLowerCase().split(" ").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  }
  normalizeRole(role) {
    return role.toLowerCase().replace(/[^a-z]/g, "");
  }
  isProtectedUser(user) {
    return user.username.toLowerCase() === "superadmin" || this.normalizeRole(user.role) === "superadmin";
  }
  formatLastLogin(value) {
    if (!value) {
      return "Never";
    }
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  }
  get filteredUsers() {
    return this.users.filter((user) => {
      const search = this.searchText.toLowerCase();
      const matchesSearch = !search || user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search) || user.role.toLowerCase().includes(search);
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      const matchesStatus = !this.selectedStatus || user.status === this.selectedStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }
  get passwordsDoNotMatch() {
    return (!!this.newUser.password || !!this.newUser.confirmPassword) && this.newUser.password !== this.newUser.confirmPassword;
  }
  selectTab(tab) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
  openCreateUser() {
    document.querySelector(".create-user-card")?.scrollIntoView({
      behavior: "smooth"
    });
  }
  createUser() {
    this.successMessage = "";
    this.errorMessage = "";
    if (!this.newUser.firstName.trim() || !this.newUser.lastName.trim() || !this.newUser.role || !this.newUser.phone.trim() || !this.newUser.username || !this.newUser.password) {
      if (!this.newUser.password) {
        this.errorMessage = "Password is required.";
      }
      return;
    }
    const username = this.newUser.username.trim().toLowerCase();
    const userAlreadyExists = this.users.some((user) => user.userId !== this.editingUserId && user.username.trim().toLowerCase() === username);
    if (userAlreadyExists) {
      this.errorMessage = "User already exists";
      return;
    }
    if (this.newUser.password !== this.newUser.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }
    const payload = {
      firstName: this.newUser.firstName.trim(),
      lastName: this.newUser.lastName.trim(),
      phone: this.newUser.phone.trim(),
      email: this.newUser.email.trim() || null,
      role: this.newUser.role,
      username: this.newUser.username.trim(),
      password: this.newUser.password,
      active: this.newUser.active
    };
    const request = this.editingUserId ? this.usersService.updateUser(__spreadProps(__spreadValues({}, payload), { userId: this.editingUserId })) : this.usersService.createUser(payload);
    request.subscribe({
      next: () => {
        this.successDialogMessage = this.editingUserId ? "User updated successfully" : "User created successfully";
        this.showSuccessDialog = true;
        this.resetForm();
        this.loadUsers();
      },
      error: (error) => {
        this.errorMessage = error.status === 409 ? "User already exists" : error.error?.message || "Unable to save user details";
      }
    });
  }
  closeSuccessDialog() {
    this.showSuccessDialog = false;
  }
  editUser(user) {
    this.editingUserId = user.userId;
    this.newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.designation,
      phone: user.phone,
      email: user.email === "-" ? "" : user.email,
      username: user.username,
      password: "",
      confirmPassword: "",
      active: user.status === "Active"
    };
    this.openCreateUser();
  }
  deleteUser(user) {
    this.userPendingDelete = user;
    this.showDeleteDialog = true;
  }
  cancelDelete() {
    this.showDeleteDialog = false;
    this.userPendingDelete = null;
  }
  confirmDelete() {
    const user = this.userPendingDelete;
    if (!user) {
      return;
    }
    this.showDeleteDialog = false;
    this.userPendingDelete = null;
    this.usersService.deleteUser(user.userId).subscribe({
      next: () => {
        this.successDialogMessage = "User deleted successfully";
        this.showSuccessDialog = true;
        this.loadUsers();
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "Unable to delete user details";
      }
    });
  }
  resetFilters() {
    this.searchText = "";
    this.selectedRole = "";
    this.selectedStatus = "";
  }
  resetForm() {
    this.editingUserId = null;
    this.newUser = {
      firstName: "",
      lastName: "",
      role: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      active: true
    };
    this.showPassword = false;
    this.showConfirmPassword = false;
  }
  static \u0275fac = function SettingsUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsUsersComponent)(\u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsUsersComponent, selectors: [["app-settings-users"]], outputs: { tabChange: "tabChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 163, vars: 33, consts: [["userForm", "ngForm"], [1, "settings-page"], [1, "users-layout"], [1, "left-content"], [1, "card", "user-management"], [1, "section-header"], [1, "section-title"], [1, "section-icon"], [1, "material-icons"], ["class", "users-message", 4, "ngIf"], ["class", "users-message error", 4, "ngIf"], [1, "filters"], [1, "search-box"], ["type", "text", "placeholder", "Search by name, email or role...", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Admin"], ["value", "Doctor"], ["value", "Staff"], ["value", "Active"], ["value", "Inactive"], [1, "reset-btn", 3, "click"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "pagination"], [1, "current"], [1, "create-user-card"], [1, "create-header"], [1, "create-icon"], [3, "ngSubmit"], [1, "form-group"], [1, "required-marker"], ["type", "text", "name", "firstName", "placeholder", "Enter first name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "placeholder", "Enter last name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", "placeholder", "Enter mobile number", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Enter email address", 3, "ngModelChange", "ngModel"], ["name", "role", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "field-error", 4, "ngIf"], ["type", "text", "name", "username", "placeholder", "Enter username", "required", "", 3, "ngModelChange", "ngModel"], [1, "password-field"], ["name", "password", "placeholder", "Enter new password", "required", "", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 3, "click"], ["name", "confirmPassword", "placeholder", "Confirm new password", "required", "", 3, "ngModelChange", "type", "ngModel"], ["class", "field-error password-error", 4, "ngIf"], [1, "active-user"], [1, "switch"], ["type", "checkbox", "name", "active", 3, "ngModelChange", "ngModel"], [1, "slider"], [1, "form-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["class", "confirm-dialog", "role", "alertdialog", "aria-modal", "true", "aria-label", "Confirm user deletion", 4, "ngIf"], ["class", "success-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "User save success", 4, "ngIf"], [1, "users-message"], [1, "users-message", "error"], [1, "user-cell"], [1, "avatar"], [1, "role-badge", 3, "ngClass"], [1, "masked-password"], [1, "status"], [1, "last-login"], [1, "actions"], ["class", "edit-action", 3, "click", 4, "ngIf"], ["class", "delete-action", 3, "click", 4, "ngIf"], [1, "edit-action", 3, "click"], [1, "delete-action", 3, "click"], [3, "value"], [1, "field-error"], [1, "field-error", "password-error"], [1, "dialog-overlay", 3, "click"], ["role", "alertdialog", "aria-modal", "true", "aria-label", "Confirm user deletion", 1, "confirm-dialog"], [1, "confirm-icon"], [1, "confirm-actions"], ["type", "button", 1, "delete-confirm-btn", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "User save success", 1, "success-dialog"], ["type", "button", "aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "success-icon"], ["type", "button", 1, "success-done", 3, "click"]], template: function SettingsUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "section", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "i", 8);
      \u0275\u0275text(8, "group");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div")(10, "h2");
      \u0275\u0275text(11, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "Create, view and manage system users.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(14, SettingsUsersComponent_p_14_Template, 2, 0, "p", 9)(15, SettingsUsersComponent_p_15_Template, 2, 1, "p", 10);
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "i", 8);
      \u0275\u0275text(19, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedRole, $event) || (ctx.selectedRole = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(22, "option", 15);
      \u0275\u0275text(23, "All Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 16);
      \u0275\u0275text(25, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 17);
      \u0275\u0275text(27, "Doctor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 18);
      \u0275\u0275text(29, "Staff");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_select_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(31, "option", 15);
      \u0275\u0275text(32, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 19);
      \u0275\u0275text(34, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 20);
      \u0275\u0275text(36, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "button", 21);
      \u0275\u0275listener("click", function SettingsUsersComponent_Template_button_click_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275text(38, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 22)(40, "table")(41, "thead")(42, "tr")(43, "th");
      \u0275\u0275text(44, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th");
      \u0275\u0275text(46, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th");
      \u0275\u0275text(50, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th");
      \u0275\u0275text(52, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56, "Last Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th");
      \u0275\u0275text(58, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "tbody");
      \u0275\u0275template(60, SettingsUsersComponent_tr_60_Template, 31, 17, "tr", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 24)(62, "span");
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 25)(65, "button")(66, "i", 8);
      \u0275\u0275text(67, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "button", 26);
      \u0275\u0275text(69, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button")(71, "i", 8);
      \u0275\u0275text(72, "chevron_right");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(73, "aside", 27)(74, "div", 28)(75, "div", 29)(76, "i", 8);
      \u0275\u0275text(77, "person_add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div")(79, "h2");
      \u0275\u0275text(80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(83, SettingsUsersComponent_div_83_Template, 4, 1, "div", 10);
      \u0275\u0275elementStart(84, "form", 30, 0);
      \u0275\u0275listener("ngSubmit", function SettingsUsersComponent_Template_form_ngSubmit_84_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createUser());
      });
      \u0275\u0275elementStart(86, "div", 31)(87, "label");
      \u0275\u0275text(88, "First Name ");
      \u0275\u0275elementStart(89, "span", 32);
      \u0275\u0275text(90, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_91_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.firstName, $event) || (ctx.newUser.firstName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 31)(93, "label");
      \u0275\u0275text(94, "Last Name ");
      \u0275\u0275elementStart(95, "span", 32);
      \u0275\u0275text(96, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_97_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.lastName, $event) || (ctx.newUser.lastName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 31)(99, "label");
      \u0275\u0275text(100, "Mobile Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_101_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.phone, $event) || (ctx.newUser.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 31)(103, "label");
      \u0275\u0275text(104, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_105_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.email, $event) || (ctx.newUser.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 31)(107, "label");
      \u0275\u0275text(108, "Role ");
      \u0275\u0275elementStart(109, "span", 32);
      \u0275\u0275text(110, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "select", 37);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_select_ngModelChange_111_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.role, $event) || (ctx.newUser.role = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(112, "option", 15);
      \u0275\u0275text(113, "Select role");
      \u0275\u0275elementEnd();
      \u0275\u0275template(114, SettingsUsersComponent_option_114_Template, 2, 2, "option", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(115, SettingsUsersComponent_small_115_Template, 2, 1, "small", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 31)(117, "label");
      \u0275\u0275text(118, "Username ");
      \u0275\u0275elementStart(119, "span", 32);
      \u0275\u0275text(120, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_121_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.username, $event) || (ctx.newUser.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 31)(123, "label");
      \u0275\u0275text(124, " Password ");
      \u0275\u0275elementStart(125, "span", 32);
      \u0275\u0275text(126, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 41)(128, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_128_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.password, $event) || (ctx.newUser.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "button", 43);
      \u0275\u0275listener("click", function SettingsUsersComponent_Template_button_click_129_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showPassword = !ctx.showPassword);
      });
      \u0275\u0275elementStart(130, "i", 8);
      \u0275\u0275text(131);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(132, "div", 31)(133, "label");
      \u0275\u0275text(134, " Confirm Password ");
      \u0275\u0275elementStart(135, "span", 32);
      \u0275\u0275text(136, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 41)(138, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_138_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.confirmPassword, $event) || (ctx.newUser.confirmPassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 43);
      \u0275\u0275listener("click", function SettingsUsersComponent_Template_button_click_139_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showConfirmPassword = !ctx.showConfirmPassword);
      });
      \u0275\u0275elementStart(140, "i", 8);
      \u0275\u0275text(141);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(142, SettingsUsersComponent_p_142_Template, 2, 0, "p", 45);
      \u0275\u0275elementStart(143, "div", 46)(144, "label", 47)(145, "input", 48);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsUsersComponent_Template_input_ngModelChange_145_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newUser.active, $event) || (ctx.newUser.active = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "span", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div")(148, "strong");
      \u0275\u0275text(149, "Active User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "small");
      \u0275\u0275text(151, "User will be able to login to the system.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "div", 50)(153, "button", 51);
      \u0275\u0275listener("click", function SettingsUsersComponent_Template_button_click_153_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetForm());
      });
      \u0275\u0275text(154, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "button", 52)(156, "i", 8);
      \u0275\u0275text(157, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(158);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(159, SettingsUsersComponent_div_159_Template, 1, 0, "div", 53)(160, SettingsUsersComponent_div_160_Template, 16, 1, "div", 54)(161, SettingsUsersComponent_div_161_Template, 1, 0, "div", 53)(162, SettingsUsersComponent_div_162_Template, 13, 1, "div", 55);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const userForm_r12 = \u0275\u0275reference(85);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.loadError);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedRole);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(30);
      \u0275\u0275property("ngForOf", ctx.filteredUsers);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Showing 1 to ", ctx.filteredUsers.length, " of ", ctx.users.length, " users ");
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.editingUserId ? "Edit User" : "Create New User");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.editingUserId ? "Update user details and enter a new password if needed." : "Add a new user to the system.", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.firstName);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.lastName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.email);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.role);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.rolesError);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.username);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.password);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.showPassword ? "visibility" : "visibility_off");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.confirmPassword);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.showConfirmPassword ? "visibility" : "visibility_off");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.passwordsDoNotMatch);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.newUser.active);
      \u0275\u0275advance(10);
      \u0275\u0275property("disabled", !userForm_r12.valid);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.editingUserId ? "Update User" : "Create User", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessDialog);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.settings-page[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #13264a;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 24px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 14px;\n  background: #e8f2ff;\n  color: #1478f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 30px;\n  font-weight: 700;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #71809a;\n  font-size: 14px;\n}\n.settings-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 17px;\n}\n.settings-tab[_ngcontent-%COMP%] {\n  height: 44px;\n  padding: 0 35px;\n  border: 1px solid #e2e8f2;\n  border-radius: 8px;\n  background: #fff;\n  color: #182b4c;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.settings-tab[_ngcontent-%COMP%]:hover {\n  border-color: #1976f3;\n  color: #1976f3;\n}\n.settings-tab.active[_ngcontent-%COMP%] {\n  background: #147cf3;\n  border-color: #147cf3;\n  color: #fff;\n}\n.users-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 450px;\n  gap: 14px;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%], \n.create-user-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e3e9f2;\n  border-radius: 11px;\n  box-shadow: 0 2px 7px rgba(30, 55, 90, 0.03);\n}\n.user-management[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.section-header[_ngcontent-%COMP%] {\n  padding: 17px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #edf1f6;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: #e9f3ff;\n  color: #147cf3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 23px;\n}\n.section-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.roles-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.create-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 23px;\n  line-height: 1;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 19px;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #71809a;\n}\n.create-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  flex-shrink: 0;\n  padding: 0 18px;\n  border: none;\n  border-radius: 7px;\n  background: #147cf3;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  white-space: nowrap;\n}\n.create-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.security-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.submit-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.create-btn[_ngcontent-%COMP%]:hover {\n  background: #086be0;\n}\n.users-message[_ngcontent-%COMP%] {\n  margin: 14px 18px 0;\n  color: #62728c;\n  font-size: 13px;\n}\n.users-message.error[_ngcontent-%COMP%] {\n  color: #d83c4d;\n}\n.users-message[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(15, 31, 56, 0.42);\n}\n.success-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 1001;\n  width: min(390px, calc(100vw - 32px));\n  box-sizing: border-box;\n  padding: 30px 28px 24px;\n  transform: translate(-50%, -50%);\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 18px 55px rgba(15, 31, 56, 0.22);\n  text-align: center;\n}\n.dialog-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: 0;\n  background: transparent;\n  color: #71809a;\n  cursor: pointer;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  margin: 0 auto 15px;\n  border-radius: 50%;\n  background: #dcfce7;\n  color: #16a34a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.success-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.success-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e2e4b;\n  font-size: 18px;\n}\n.success-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 20px;\n  color: #71809a;\n  font-size: 13px;\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 1001;\n  width: min(390px, calc(100vw - 32px));\n  box-sizing: border-box;\n  padding: 28px 26px 22px;\n  transform: translate(-50%, -50%);\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 18px 55px rgba(15, 31, 56, 0.22);\n  text-align: center;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  margin: 0 auto 15px;\n  border-radius: 50%;\n  background: #fff1f2;\n  color: #d9364f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.confirm-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.confirm-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e2e4b;\n  font-size: 18px;\n}\n.confirm-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 20px;\n  color: #71809a;\n  font-size: 13px;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.confirm-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 92px;\n  padding: 9px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n}\n.delete-confirm-btn[_ngcontent-%COMP%] {\n  border: 1px solid #d9364f;\n  background: #d9364f;\n  color: #fff;\n}\n.success-done[_ngcontent-%COMP%] {\n  min-width: 100px;\n  padding: 9px 18px;\n  border: 0;\n  border-radius: 6px;\n  background: #147cf3;\n  color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n}\n.filters[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  display: grid;\n  grid-template-columns: 1.8fr 1fr 1fr auto;\n  gap: 10px;\n}\n.search-box[_ngcontent-%COMP%] {\n  height: 38px;\n  border: 1px solid #dfe6ef;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  padding: 0 11px;\n}\n.search-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #61718a;\n  font-size: 21px;\n  margin-right: 7px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #61718a;\n  font-size: 20px;\n  margin-right: 7px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #263957;\n}\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.reset-btn[_ngcontent-%COMP%] {\n  height: 38px;\n  border: 1px solid #dfe6ef;\n  border-radius: 7px;\n  background: #fff;\n  padding: 0 11px;\n  color: #263957;\n  font-size: 12px;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  padding: 0 17px;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%] {\n  padding: 0 18px;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 780px;\n  border-collapse: collapse;\n}\nthead[_ngcontent-%COMP%] {\n  background: #f5f8fc;\n}\nth[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 9px;\n  color: #52627b;\n  font-size: 11px;\n  font-weight: 600;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 11px 9px;\n  border-bottom: 1px solid #edf1f5;\n  color: #41516c;\n  font-size: 12px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n}\n.user-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #1b2c4b;\n  font-size: 12px;\n}\n.user-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #76839a;\n  font-size: 10px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  border-radius: 5px;\n  font-size: 10px;\n  font-weight: 600;\n}\n.role-badge.admin[_ngcontent-%COMP%] {\n  background: #e5ebff;\n  color: #3455d5;\n}\n.role-badge.doctor[_ngcontent-%COMP%] {\n  background: #dff8ed;\n  color: #06956a;\n}\n.role-badge.staff[_ngcontent-%COMP%] {\n  background: #fff0d6;\n  color: #d98500;\n}\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #12b77a;\n}\n.active-status[_ngcontent-%COMP%] {\n  color: #0aa870;\n}\n.inactive-status[_ngcontent-%COMP%] {\n  color: #d83c4d;\n}\n.inactive-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #ef4051;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 15px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.edit-action[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dce5f1;\n  color: #147cf3;\n}\n.delete-action[_ngcontent-%COMP%] {\n  background: #fff0f1;\n  border: 1px solid #ffd5d9;\n  color: #ef4051;\n}\n.table-footer[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #62728c;\n  font-size: 12px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 1px solid #e0e7f0;\n  border-radius: 7px;\n  background: #fff;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  background: #147cf3;\n  color: #fff;\n  border-color: #147cf3;\n}\n.roles-card[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding: 16px 18px;\n  border: 1px solid #cfe2fb;\n  border-radius: 9px;\n  background: #f1f7ff;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.roles-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  background: #e1efff;\n  color: #147cf3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 23px;\n}\n.roles-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.roles-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n}\n.roles-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #65758e;\n  font-size: 12px;\n}\n.security-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 20px;\n  border: 1px solid #147cf3;\n  border-radius: 7px;\n  background: #fff;\n  color: #147cf3;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.create-user-card[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.create-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 13px;\n  align-items: center;\n  padding-bottom: 17px;\n  border-bottom: 1px solid #edf1f6;\n  margin-bottom: 12px;\n}\n.create-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: #e8f3ff;\n  color: #147cf3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.create-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 19px;\n}\n.create-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #71809a;\n  font-size: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #263754;\n  font-size: 12px;\n  font-weight: 600;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ed4051;\n}\n.required-marker[_ngcontent-%COMP%] {\n  display: inline;\n  color: #ed4051;\n  visibility: visible;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 37px;\n  box-sizing: border-box;\n  padding: 0 11px;\n  border: 1px solid #dce4ef;\n  border-radius: 7px;\n  background: #fff;\n  outline: none;\n  color: #2a3c59;\n  font-size: 12px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #147cf3;\n  box-shadow: 0 0 0 3px rgba(20, 124, 243, 0.08);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa6b8;\n}\n.password-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 42px;\n}\n.password-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: #71809a;\n}\n.password-error[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #d9364f;\n  font-size: 11px;\n  font-weight: 600;\n}\n.active-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  margin-top: 5px;\n  margin-bottom: 17px;\n}\n.active-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n.active-user[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #76839a;\n  font-size: 10px;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #c9d2df;\n  border-radius: 30px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.slider[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 3px;\n  top: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background: #147cf3;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(18px);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 4px;\n}\n.cancel-btn[_ngcontent-%COMP%], \n.submit-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 18px;\n  border-radius: 7px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  border: 1px solid #dce4ef;\n  background: #fff;\n  color: #1e2e4b;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #147cf3;\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.users-layout[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.create-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.create-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.roles-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.create-btn[_ngcontent-%COMP%], \n.security-btn[_ngcontent-%COMP%], \n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.reset-btn[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\nth[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\ntd[_ngcontent-%COMP%], \n.user-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.active-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.masked-password[_ngcontent-%COMP%] {\n  color: #71809a;\n  letter-spacing: 0.08em;\n}\n.user-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.active-user[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.table-footer[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.roles-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 1250px) {\n  .users-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .create-user-card[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n@media (max-width: 800px) {\n  .settings-page[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .settings-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .settings-tab[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    padding: 0 20px;\n  }\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .roles-card[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .password-error[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    margin-top: 6px;\n    margin-bottom: 8px;\n  }\n}\n/*# sourceMappingURL=users.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsUsersComponent, { className: "SettingsUsersComponent" });
})();

// src/app/settings/clinicdetails/clinicdetails.service.ts
var ClinicDetailsService = class _ClinicDetailsService {
  http;
  endpoint = `${API_BASE_URL}/clinic`;
  constructor(http) {
    this.http = http;
  }
  getDetails() {
    return this.http.get(this.endpoint);
  }
  saveDetails(payload) {
    return this.http.put(this.endpoint, payload);
  }
  static \u0275fac = function ClinicDetailsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClinicDetailsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClinicDetailsService, factory: _ClinicDetailsService.\u0275fac, providedIn: "root" });
};

// src/app/settings/clinicdetails/clinicdetails.component.ts
function ClinicDetailsComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadError);
  }
}
function ClinicDetailsComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_div_103_Template_input_ngModelChange_3_listener($event) {
      const day_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(day_r4.start, $event) || (day_r4.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_div_103_Template_input_ngModelChange_6_listener($event) {
      const day_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(day_r4.end, $event) || (day_r4.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", day_r4.day, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", day_r4.start);
    \u0275\u0275property("disabled", day_r4.closed);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", day_r4.end);
    \u0275\u0275property("disabled", day_r4.closed);
  }
}
function ClinicDetailsComponent_span_242_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 56);
    \u0275\u0275listener("click", function ClinicDetailsComponent_span_242_Template_button_click_2_listener() {
      const facility_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFacility(facility_r7));
    });
    \u0275\u0275text(3, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const facility_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", facility_r7, " ");
  }
}
function ClinicDetailsComponent_div_254_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function ClinicDetailsComponent_div_254_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function ClinicDetailsComponent_div_255_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "button", 59);
    \u0275\u0275listener("click", function ClinicDetailsComponent_div_255_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275elementStart(2, "i", 8);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 60)(5, "i", 8);
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Clinic Details Saved Successfully");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 61);
    \u0275\u0275listener("click", function ClinicDetailsComponent_div_255_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessDialog());
    });
    \u0275\u0275text(12, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.successDialogMessage);
  }
}
var ClinicDetailsComponent = class _ClinicDetailsComponent {
  clinicDetailsService;
  constructor(clinicDetailsService) {
    this.clinicDetailsService = clinicDetailsService;
  }
  ngOnInit() {
    this.loadDetails();
  }
  loading = true;
  saving = false;
  loadError = "";
  showSuccessDialog = false;
  successDialogMessage = "";
  clinic = {
    name: "",
    shortName: "",
    type: "",
    tagline: "",
    website: "",
    email: "",
    phone: "",
    alternatePhone: "",
    registrationNumber: "",
    licenseNumber: "",
    establishedYear: null,
    timeZone: "",
    slotDuration: "",
    lunchStart: "",
    lunchEnd: "",
    timeFormat: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    description: ""
  };
  organization = {
    id: 0,
    code: "",
    name: "",
    type: "",
    email: "",
    phone: "",
    address: "",
    status: ""
  };
  workingHours = [
    {
      day: "Monday",
      start: "",
      end: "",
      closed: false
    },
    {
      day: "Tuesday",
      start: "",
      end: "",
      closed: false
    },
    {
      day: "Wednesday",
      start: "",
      end: "",
      closed: false
    },
    {
      day: "Thursday",
      start: "",
      end: "",
      closed: false
    },
    {
      day: "Friday",
      start: "",
      end: "",
      closed: false
    },
    {
      day: "Saturday",
      start: "",
      end: "",
      closed: false
    },
    {
      day: "Sunday",
      start: "",
      end: "",
      closed: true
    }
  ];
  loadDetails() {
    this.clinicDetailsService.getDetails().subscribe({
      next: (response) => {
        this.clinic = response.clinic;
        this.organization = response.organization;
        response.workingHours.forEach((hours) => {
          const day = this.workingHours[hours.dayOfWeek - 1];
          if (day) {
            day.start = hours.start;
            day.end = hours.end;
            day.closed = hours.closed;
          }
        });
        this.loading = false;
      },
      error: () => {
        this.loadError = "Unable to load clinic details.";
        this.loading = false;
      }
    });
  }
  facilities = [];
  selectTab(tab) {
    console.log("Navigate to:", tab);
  }
  uploadLogo(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const file = input.files[0];
    if (file.size > 2 * 1024 * 1024) {
      alert("Logo size must be less than 2MB");
      return;
    }
    console.log("Logo selected:", file);
  }
  addFacility() {
    const facility = prompt("Enter facility name");
    if (facility && facility.trim()) {
      this.facilities.push(facility.trim());
    }
  }
  removeFacility(facility) {
    this.facilities = this.facilities.filter((item) => item !== facility);
  }
  saveChanges() {
    this.saving = true;
    this.clinicDetailsService.saveDetails({
      clinic: this.clinic,
      organization: this.organization,
      workingHours: this.workingHours.map((day, index) => ({
        dayOfWeek: index + 1,
        start: day.start,
        end: day.end,
        closed: day.closed
      }))
    }).subscribe({
      next: (response) => {
        this.saving = false;
        this.successDialogMessage = response.message;
        this.showSuccessDialog = true;
      },
      error: (error) => {
        this.saving = false;
        alert(error.error?.message || "Unable to save clinic details.");
      }
    });
  }
  closeSuccessDialog() {
    this.showSuccessDialog = false;
  }
  cancel() {
    console.log("Cancel changes");
  }
  static \u0275fac = function ClinicDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClinicDetailsComponent)(\u0275\u0275directiveInject(ClinicDetailsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClinicDetailsComponent, selectors: [["app-clinic-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 256, vars: 31, consts: [["logoInput", ""], [1, "clinic-details-page"], ["class", "clinic-message error", 4, "ngIf"], [1, "clinic-grid"], [1, "left-column"], [1, "card"], [1, "card-header"], [1, "card-icon", "blue"], [1, "material-icons"], [1, "form-grid"], [1, "form-group"], ["type", "text", "placeholder", "Enter hospital name", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter tagline", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter short name", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "https://example.com", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["type", "email", "placeholder", "Enter email", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter registration number", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter phone number", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter license number", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter alternate phone", 3, "ngModelChange", "ngModel"], ["type", "number", 3, "ngModelChange", "ngModel"], [1, "card", "working-hours-card"], [1, "working-hours"], [1, "days"], ["class", "day-row", 4, "ngFor", "ngForOf"], [1, "working-settings"], [1, "time-range"], ["type", "time", 3, "ngModelChange", "ngModel"], [1, "time-format"], [1, "radio-options"], ["type", "radio", "name", "timeFormat", "value", "12", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "timeFormat", "value", "24", 3, "ngModelChange", "ngModel"], [1, "right-column"], [1, "branding-content"], [1, "logo-upload", 3, "click"], [1, "hospital-logo"], ["type", "file", "hidden", "", "accept", "image/png,image/jpeg", 3, "change"], ["type", "text", "placeholder", "Enter address", 3, "ngModelChange", "ngModel"], [1, "address-grid"], ["type", "text", 3, "ngModelChange", "ngModel"], [1, "card", "additional-card"], ["rows", "3", "placeholder", "Enter description", 3, "ngModelChange", "ngModel"], [1, "facility-tags"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "add-facility", 3, "click"], [1, "page-actions"], [1, "cancel-btn", 3, "click"], [1, "save-btn", 3, "click", "disabled"], ["class", "dialog-overlay", 3, "click", 4, "ngIf"], ["class", "success-dialog", "role", "dialog", "aria-modal", "true", "aria-label", "Clinic details save success", 4, "ngIf"], [1, "clinic-message", "error"], [1, "day-row"], [1, "day-name"], ["type", "time", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", 3, "click"], [1, "dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Clinic details save success", 1, "success-dialog"], ["type", "button", "aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "success-icon"], ["type", "button", 1, "success-done", 3, "click"]], template: function ClinicDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, ClinicDetailsComponent_p_1_Template, 2, 1, "p", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "section", 5)(5, "div", 6)(6, "div", 7)(7, "i", 8);
      \u0275\u0275text(8, "business");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div")(10, "h2");
      \u0275\u0275text(11, "Basic Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "Update your clinic/hospital details and branding information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "label");
      \u0275\u0275text(17, " Hospital/Clinic Name ");
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.name, $event) || (ctx.clinic.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "label");
      \u0275\u0275text(23, "Tagline / Motto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.tagline, $event) || (ctx.clinic.tagline = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "label");
      \u0275\u0275text(27, " Short Name ");
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.shortName, $event) || (ctx.clinic.shortName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 10)(32, "label");
      \u0275\u0275text(33, "Website");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.website, $event) || (ctx.clinic.website = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 10)(36, "label");
      \u0275\u0275text(37, " Hospital Type ");
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_select_ngModelChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.type, $event) || (ctx.clinic.type = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(41, "option", 16);
      \u0275\u0275text(42, "Select type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option");
      \u0275\u0275text(44, "Multi-Speciality Hospital");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option");
      \u0275\u0275text(46, "General Hospital");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option");
      \u0275\u0275text(48, "Speciality Hospital");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option");
      \u0275\u0275text(50, "Clinic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option");
      \u0275\u0275text(52, "Diagnostic Center");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 10)(54, "label");
      \u0275\u0275text(55, " Email Address ");
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_58_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.email, $event) || (ctx.clinic.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 10)(60, "label");
      \u0275\u0275text(61, "Registration Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.registrationNumber, $event) || (ctx.clinic.registrationNumber = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 10)(64, "label");
      \u0275\u0275text(65, " Phone Number ");
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_68_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.phone, $event) || (ctx.clinic.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 10)(70, "label");
      \u0275\u0275text(71, "License Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_72_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.licenseNumber, $event) || (ctx.clinic.licenseNumber = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 10)(74, "label");
      \u0275\u0275text(75, "Alternate Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.alternatePhone, $event) || (ctx.clinic.alternatePhone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 10)(78, "label");
      \u0275\u0275text(79, "Established Year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.establishedYear, $event) || (ctx.clinic.establishedYear = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 10)(82, "label");
      \u0275\u0275text(83, "Time Zone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_select_ngModelChange_84_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.timeZone, $event) || (ctx.clinic.timeZone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(85, "option");
      \u0275\u0275text(86, "(GMT+05:30) India Standard Time (IST)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "option");
      \u0275\u0275text(88, "(GMT+00:00) Greenwich Mean Time (GMT)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option");
      \u0275\u0275text(90, "(GMT-05:00) Eastern Standard Time (EST)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(91, "section", 23)(92, "div", 6)(93, "div", 7)(94, "i", 8);
      \u0275\u0275text(95, "schedule");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div")(97, "h2");
      \u0275\u0275text(98, "Working Hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, "Set your hospital/clinic working hours.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 24)(102, "div", 25);
      \u0275\u0275template(103, ClinicDetailsComponent_div_103_Template, 7, 5, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 27)(105, "div", 10)(106, "label");
      \u0275\u0275text(107, "Consultation Slot Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_select_ngModelChange_108_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.slotDuration, $event) || (ctx.clinic.slotDuration = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(109, "option");
      \u0275\u0275text(110, "10 minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "option");
      \u0275\u0275text(112, "15 minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "option");
      \u0275\u0275text(114, "20 minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "option");
      \u0275\u0275text(116, "30 minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "option");
      \u0275\u0275text(118, "45 minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "option");
      \u0275\u0275text(120, "60 minutes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 10)(122, "label");
      \u0275\u0275text(123, "Lunch Break");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 28)(125, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_125_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.lunchStart, $event) || (ctx.clinic.lunchStart = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span");
      \u0275\u0275text(127, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_128_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.lunchEnd, $event) || (ctx.clinic.lunchEnd = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 30)(130, "label");
      \u0275\u0275text(131, "Time Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 31)(133, "label")(134, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_134_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.timeFormat, $event) || (ctx.clinic.timeFormat = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "12 Hour (AM/PM)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "label")(138, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_138_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.timeFormat, $event) || (ctx.clinic.timeFormat = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "span");
      \u0275\u0275text(140, "24 Hour");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(141, "div", 34)(142, "section", 5)(143, "div", 6)(144, "div", 7)(145, "i", 8);
      \u0275\u0275text(146, "palette");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div")(148, "h2");
      \u0275\u0275text(149, "Hospital Logo & Branding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p");
      \u0275\u0275text(151, "Upload your hospital logo and set brand preferences.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "div", 35)(153, "div", 36);
      \u0275\u0275listener("click", function ClinicDetailsComponent_Template_div_click_153_listener() {
        \u0275\u0275restoreView(_r1);
        const logoInput_r5 = \u0275\u0275reference(162);
        return \u0275\u0275resetView(logoInput_r5.click());
      });
      \u0275\u0275elementStart(154, "div", 37)(155, "i", 8);
      \u0275\u0275text(156, "local_hospital");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "strong");
      \u0275\u0275text(158, "Click to upload logo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "span");
      \u0275\u0275text(160, "PNG, JPG (Max 2MB)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "input", 38, 0);
      \u0275\u0275listener("change", function ClinicDetailsComponent_Template_input_change_161_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.uploadLogo($event));
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(163, "section", 5)(164, "div", 6)(165, "div", 7)(166, "i", 8);
      \u0275\u0275text(167, "location_on");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div")(169, "h2");
      \u0275\u0275text(170, "Address Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p");
      \u0275\u0275text(172, "Update your clinic/hospital address details.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 10)(174, "label");
      \u0275\u0275text(175, " Address Line 1 ");
      \u0275\u0275elementStart(176, "span");
      \u0275\u0275text(177, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_178_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.address1, $event) || (ctx.clinic.address1 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 10)(180, "label");
      \u0275\u0275text(181, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_182_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.address2, $event) || (ctx.clinic.address2 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 40)(184, "div", 10)(185, "label");
      \u0275\u0275text(186, "City ");
      \u0275\u0275elementStart(187, "span");
      \u0275\u0275text(188, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_189_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.city, $event) || (ctx.clinic.city = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "div", 10)(191, "label");
      \u0275\u0275text(192, "State ");
      \u0275\u0275elementStart(193, "span");
      \u0275\u0275text(194, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_select_ngModelChange_195_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.state, $event) || (ctx.clinic.state = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(196, "option");
      \u0275\u0275text(197, "Tamil Nadu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "option");
      \u0275\u0275text(199, "Kerala");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "option");
      \u0275\u0275text(201, "Karnataka");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "option");
      \u0275\u0275text(203, "Andhra Pradesh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "option");
      \u0275\u0275text(205, "Telangana");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(206, "div", 10)(207, "label");
      \u0275\u0275text(208, "Pincode ");
      \u0275\u0275elementStart(209, "span");
      \u0275\u0275text(210, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_input_ngModelChange_211_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.pincode, $event) || (ctx.clinic.pincode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 10)(213, "label");
      \u0275\u0275text(214, "Country ");
      \u0275\u0275elementStart(215, "span");
      \u0275\u0275text(216, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_select_ngModelChange_217_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.country, $event) || (ctx.clinic.country = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(218, "option");
      \u0275\u0275text(219, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "option");
      \u0275\u0275text(221, "Singapore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "option");
      \u0275\u0275text(223, "United Arab Emirates");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(224, "section", 42)(225, "div", 6)(226, "div", 7);
      \u0275\u0275text(227, "\u25A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div")(229, "h2");
      \u0275\u0275text(230, "Additional Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "p");
      \u0275\u0275text(232, "Other important details about your clinic/hospital.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(233, "div", 10)(234, "label");
      \u0275\u0275text(235, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "textarea", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ClinicDetailsComponent_Template_textarea_ngModelChange_236_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clinic.description, $event) || (ctx.clinic.description = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275text(237, "          ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div", 10)(239, "label");
      \u0275\u0275text(240, "Facilities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 44);
      \u0275\u0275template(242, ClinicDetailsComponent_span_242_Template, 4, 1, "span", 45);
      \u0275\u0275elementStart(243, "button", 46);
      \u0275\u0275listener("click", function ClinicDetailsComponent_Template_button_click_243_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addFacility());
      });
      \u0275\u0275elementStart(244, "i", 8);
      \u0275\u0275text(245, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(246, " Add Facility ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(247, "div", 47)(248, "button", 48);
      \u0275\u0275listener("click", function ClinicDetailsComponent_Template_button_click_248_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancel());
      });
      \u0275\u0275text(249, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "button", 49);
      \u0275\u0275listener("click", function ClinicDetailsComponent_Template_button_click_250_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveChanges());
      });
      \u0275\u0275elementStart(251, "i", 8);
      \u0275\u0275text(252, "save");
      \u0275\u0275elementEnd();
      \u0275\u0275text(253);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(254, ClinicDetailsComponent_div_254_Template, 1, 0, "div", 50)(255, ClinicDetailsComponent_div_255_Template, 13, 1, "div", 51);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadError);
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.tagline);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.shortName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.website);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.type);
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.registrationNumber);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.licenseNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.alternatePhone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.establishedYear);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.timeZone);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.workingHours);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.slotDuration);
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.lunchStart);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.lunchEnd);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.timeFormat);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.timeFormat);
      \u0275\u0275advance(40);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.address1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.address2);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.city);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.state);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.pincode);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.country);
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.clinic.description);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.facilities);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.saving || ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Saving..." : "Save Changes", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessDialog);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.clinic-details-page[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #14284b;\n}\n.clinic-message[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 13px;\n}\n.clinic-message.error[_ngcontent-%COMP%] {\n  color: #d83c4d;\n}\n.dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(15, 31, 56, 0.42);\n}\n.success-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 1001;\n  width: min(390px, calc(100vw - 32px));\n  box-sizing: border-box;\n  padding: 30px 28px 24px;\n  transform: translate(-50%, -50%);\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 18px 55px rgba(15, 31, 56, 0.22);\n  text-align: center;\n}\n.dialog-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: 0;\n  background: transparent;\n  color: #71809a;\n  cursor: pointer;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  margin: 0 auto 15px;\n  border-radius: 50%;\n  background: #dcfce7;\n  color: #16a34a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.success-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.success-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e2e4b;\n  font-size: 18px;\n}\n.success-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 20px;\n  color: #71809a;\n  font-size: 13px;\n}\n.success-done[_ngcontent-%COMP%] {\n  min-width: 100px;\n  padding: 9px 18px;\n  border: 0;\n  border-radius: 6px;\n  background: #147cf3;\n  color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 23px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 14px;\n  background: #e8f2ff;\n  color: #1677ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 29px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 30px;\n  font-weight: 700;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #71809a;\n  font-size: 14px;\n}\n.settings-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 11px;\n  margin-bottom: 17px;\n}\n.settings-tab[_ngcontent-%COMP%] {\n  height: 43px;\n  min-width: 145px;\n  padding: 0 25px;\n  border: 1px solid #e1e8f1;\n  border-radius: 8px;\n  background: #fff;\n  color: #182b4b;\n  font-size: 13px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.settings-tab[_ngcontent-%COMP%]:hover {\n  border-color: #1677ff;\n  color: #1677ff;\n}\n.settings-tab.active[_ngcontent-%COMP%] {\n  background: #1677ff;\n  color: white;\n  border-color: #1677ff;\n}\n.clinic-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(430px, 0.95fr);\n  gap: 13px;\n  align-items: start;\n}\n.left-column[_ngcontent-%COMP%], \n.right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 13px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f1;\n  border-radius: 10px;\n  box-shadow: 0 2px 7px rgba(25, 55, 95, 0.03);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 15px 17px;\n  border-bottom: 1px solid #edf1f6;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 21px;\n}\n.card-icon.blue[_ngcontent-%COMP%] {\n  background: #e8f2ff;\n  color: #1677ff;\n}\n.card-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 21px;\n  line-height: 1;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: #71809a;\n  font-size: 11px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 20px;\n  padding: 15px 17px 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #1f3150;\n  font-size: 11px;\n  font-weight: 600;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ed4050;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #dce4ef;\n  border-radius: 6px;\n  background: #fff;\n  outline: none;\n  color: #263958;\n  font-size: 11px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  resize: vertical;\n  line-height: 1.5;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1677ff;\n  box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.07);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9aa7b8;\n}\n.working-hours-card[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\n.working-hours[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 28px;\n  padding: 13px 17px;\n}\n.days[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.day-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 78px 1fr 13px 1fr;\n  align-items: center;\n  gap: 7px;\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #243654;\n}\n.day-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 31px;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #dce4ef;\n  border-radius: 6px;\n  padding: 0 8px;\n  font-size: 11px;\n  color: #263958;\n}\n.day-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: #f1f4f8;\n  color: #a5afbe;\n}\n.working-settings[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.time-range[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 15px 1fr;\n  align-items: center;\n  gap: 7px;\n}\n.time-range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 34px;\n  border: 1px solid #dce4ef;\n  border-radius: 6px;\n  padding: 0 8px;\n  font-size: 11px;\n}\n.time-format[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.time-format[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.radio-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.radio-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #52617a;\n  font-size: 11px;\n}\n.radio-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #1677ff;\n}\n.branding-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 17px;\n  padding: 15px 17px;\n}\n.logo-upload[_ngcontent-%COMP%] {\n  min-height: 141px;\n  border: 1px dashed #b9c8dc;\n  border-radius: 7px;\n  background: #fbfdff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n}\n.hospital-logo[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  margin-bottom: 8px;\n  color: #1677ff;\n  font-size: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hospital-logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 45px;\n  line-height: 1;\n}\n.logo-upload[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #233654;\n}\n.logo-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 10px;\n  color: #8290a6;\n}\n.brand-colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n}\n.color-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.color-input[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  gap: 6px;\n}\n.color-input[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  padding: 2px;\n  border: 1px solid #dce4ef;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.color-input[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 30px;\n  box-sizing: border-box;\n  border: 1px solid #dce4ef;\n  border-radius: 6px;\n  padding: 0 8px;\n  font-size: 11px;\n}\n.right-column[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:nth-child(2) {\n  padding-bottom: 5px;\n}\n.right-column[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:nth-child(2)   .form-group[_ngcontent-%COMP%] {\n  margin-left: 17px;\n  margin-right: 17px;\n}\n.address-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.1fr 0.9fr 1fr;\n  gap: 9px;\n  padding: 0 17px;\n}\n.additional-card[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n.additional-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-left: 17px;\n  margin-right: 17px;\n}\n.facility-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.facility-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 9px;\n  border: 1px solid #73b1ff;\n  border-radius: 15px;\n  background: #f5faff;\n  color: #1475e9;\n  font-size: 10px;\n}\n.facility-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #1475e9;\n  cursor: pointer;\n  padding: 0;\n  font-size: 13px;\n}\n.add-facility[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: 1px dashed #79b5ff;\n  border-radius: 15px;\n  background: #fff;\n  color: #1475e9;\n  font-size: 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.add-facility[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1;\n}\n.page-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 0 0;\n}\n.cancel-btn[_ngcontent-%COMP%], \n.save-btn[_ngcontent-%COMP%] {\n  height: 39px;\n  padding: 0 20px;\n  border-radius: 7px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  border: 1px solid #dce4ef;\n  background: #fff;\n  color: #1d2f4c;\n}\n.save-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #1677ff;\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  white-space: nowrap;\n}\n.save-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background: #086be5;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.day-name[_ngcontent-%COMP%], \n.day-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.time-range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.time-format[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], \n.radio-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.color-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.color-input[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.logo-upload[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%], \n.save-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.logo-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.facility-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.add-facility[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.clinic-details-page[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.day-name[_ngcontent-%COMP%], \n.day-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.time-range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.time-format[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], \n.radio-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.logo-upload[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%], \n.save-btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.logo-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.facility-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.add-facility[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media (max-width: 1200px) {\n  .clinic-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .right-column[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .right-column[_ngcontent-%COMP%]   .additional-card[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 850px) {\n  .clinic-details-page[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .settings-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .settings-tab[_ngcontent-%COMP%] {\n    min-width: 125px;\n    flex-shrink: 0;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .working-hours[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .branding-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .address-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .right-column[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 550px) {\n  .address-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancel-btn[_ngcontent-%COMP%], \n   .save-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=clinicdetails.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClinicDetailsComponent, { className: "ClinicDetailsComponent" });
})();

// src/app/settings/settings.component.ts
function SettingsComponent_div_32_a_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34)(1, "i", 4);
    \u0275\u0275text(2, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.hospital.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.hospital.website);
  }
}
function SettingsComponent_div_32_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 35)(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 38);
    \u0275\u0275element(23, "i");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", user_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.initials, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.designation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.username);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r3.roleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.role, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.lastLogin);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inactive-status", user_r3.status.toLowerCase() !== "active");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r3.status, " ");
  }
}
function SettingsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "section", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "i", 4);
    \u0275\u0275text(6, "business");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h2");
    \u0275\u0275text(9, "Hospital Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Quick overview of your hospital/clinic.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275listener("click", function SettingsComponent_div_32_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editHospital());
    });
    \u0275\u0275elementStart(13, "i", 4);
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "i", 4);
    \u0275\u0275text(20, "local_hospital");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "h2");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "i", 4);
    \u0275\u0275text(31, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 20)(35, "i", 4);
    \u0275\u0275text(36, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "a", 21)(40, "i", 4);
    \u0275\u0275text(41, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, SettingsComponent_div_32_a_44_Template, 5, 2, "a", 22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(45, "section", 23)(46, "div", 11)(47, "div", 12)(48, "div", 13)(49, "i", 4);
    \u0275\u0275text(50, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div")(52, "h2");
    \u0275\u0275text(53, "Latest Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55, " The five most recently logged-in users, sorted by latest login. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "button", 14);
    \u0275\u0275listener("click", function SettingsComponent_div_32_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("users"));
    });
    \u0275\u0275elementStart(57, "i", 4);
    \u0275\u0275text(58, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " Manage Users ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 24)(61, "table")(62, "thead")(63, "tr")(64, "th");
    \u0275\u0275text(65, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th");
    \u0275\u0275text(67, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "tbody");
    \u0275\u0275template(79, SettingsComponent_div_32_tr_79_Template, 25, 14, "tr", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "div", 26)(81, "div", 27)(82, "div", 28)(83, "i", 4);
    \u0275\u0275text(84, "business");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "h3");
    \u0275\u0275text(86, "Clinic / Hospital Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p");
    \u0275\u0275text(88, " View and manage complete hospital information, address, contact details, working hours and more. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 29);
    \u0275\u0275listener("click", function SettingsComponent_div_32_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("clinic"));
    });
    \u0275\u0275text(90, " View Details ");
    \u0275\u0275elementStart(91, "i", 4);
    \u0275\u0275text(92, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 27)(94, "div", 30)(95, "i", 4);
    \u0275\u0275text(96, "security");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "h3");
    \u0275\u0275text(98, "Security Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p");
    \u0275\u0275text(100, " Manage authentication, password policies, session settings and access controls. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "button", 31);
    \u0275\u0275listener("click", function SettingsComponent_div_32_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("security"));
    });
    \u0275\u0275text(102, " Configure Security ");
    \u0275\u0275elementStart(103, "i", 4);
    \u0275\u0275text(104, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 27)(106, "div", 32)(107, "i", 4);
    \u0275\u0275text(108, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "h3");
    \u0275\u0275text(110, "About System");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p");
    \u0275\u0275text(112, "View system information, version details and licenses.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "button", 33);
    \u0275\u0275listener("click", function SettingsComponent_div_32_Template_button_click_113_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("about"));
    });
    \u0275\u0275text(114, " View Details ");
    \u0275\u0275elementStart(115, "i", 4);
    \u0275\u0275text(116, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate(ctx_r1.hospital.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hospital.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hospital.tagline);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.hospital.address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hospital.phone);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + ctx_r1.hospital.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.hospital.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hospital.website);
    \u0275\u0275advance(35);
    \u0275\u0275property("ngForOf", ctx_r1.users);
  }
}
function SettingsComponent_app_settings_users_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-settings-users", 39);
    \u0275\u0275listener("tabChange", function SettingsComponent_app_settings_users_33_Template_app_settings_users_tabChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab($event));
    });
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "h2");
    \u0275\u0275text(2, "Security Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Manage authentication, password and session security.");
    \u0275\u0275elementEnd()();
  }
}
function SettingsComponent_app_clinic_details_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-clinic-details");
  }
}
function SettingsComponent_app_about_system_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-about-system");
  }
}
var SettingsComponent = class _SettingsComponent {
  usersService;
  clinicDetailsService;
  constructor(usersService, clinicDetailsService) {
    this.usersService = usersService;
    this.clinicDetailsService = clinicDetailsService;
    this.loadRecentUsers();
    this.loadHospitalDetails();
  }
  activeTab = "general";
  hospital = {
    name: "",
    type: "",
    tagline: "",
    address: "",
    phone: "",
    email: "",
    website: ""
  };
  loadHospitalDetails() {
    this.clinicDetailsService.getDetails().subscribe({
      next: (response) => {
        const clinic = response.clinic;
        const organization = response.organization;
        this.hospital = {
          name: clinic.name || organization.name,
          type: clinic.type || organization.type,
          tagline: clinic.tagline,
          address: [
            clinic.address1,
            clinic.address2,
            clinic.city,
            clinic.state,
            clinic.pincode
          ].filter(Boolean).join(", "),
          phone: clinic.phone || organization.phone,
          email: clinic.email || organization.email,
          website: clinic.website
        };
      }
    });
  }
  users = [];
  loadRecentUsers() {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response.users.slice().sort((left, right) => this.loginTimestamp(right.lastLoginAt) - this.loginTimestamp(left.lastLoginAt)).slice(0, 5).map((user, index) => {
          const name = [user.firstName, user.lastName].filter(Boolean).join(" ");
          const role = user.roles[0] || "Staff";
          return {
            name: name || user.username,
            username: user.username,
            initials: this.initials(name || user.username),
            designation: role,
            role: this.displayRole(role),
            roleClass: role.toLowerCase().replace(/\s+/g, "-"),
            email: user.email || "-",
            lastLogin: this.formatLastLogin(user.lastLoginAt),
            status: user.status,
            color: ["#3b82f6", "#2496ed", "#6366f1", "#10b981", "#ef4444"][index % 5]
          };
        });
      }
    });
  }
  loginTimestamp(value) {
    return value ? new Date(value).getTime() : 0;
  }
  initials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0].toUpperCase()).join("");
  }
  displayRole(role) {
    return role.toLowerCase().split(" ").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  }
  formatLastLogin(value) {
    if (!value) {
      return "Never";
    }
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  }
  editHospital() {
    console.log("Edit hospital clicked");
  }
  setActiveTab(tab) {
    if (tab === "general" || tab === "users" || tab === "security" || tab === "clinic" || tab === "about") {
      this.activeTab = tab;
      if (tab === "general") {
        this.loadHospitalDetails();
      }
    }
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(ClinicDetailsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 15, consts: [[1, "settings-page"], [1, "page-header"], [1, "header-title"], [1, "header-icon"], [1, "material-icons"], [1, "tabs", "settings-tabs"], [1, "tab", "settings-tab", 3, "click"], [4, "ngIf"], [3, "tabChange", 4, "ngIf"], ["class", "placeholder-page", 4, "ngIf"], [1, "card", "hospital-summary"], [1, "section-header"], [1, "section-title"], [1, "section-icon"], [1, "outline-btn", 3, "click"], [1, "summary-content"], [1, "hospital-card"], [1, "hospital-logo"], [1, "hospital-info"], [1, "hospital-contact-grid"], [1, "hospital-contact-item"], [1, "hospital-contact-item", 3, "href"], ["class", "hospital-contact-item", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], [1, "card", "users-card"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [1, "bottom-grid"], [1, "card", "bottom-card"], [1, "bottom-icon", "blue-icon"], [1, "bottom-btn", "blue-btn", 3, "click"], [1, "bottom-icon", "purple-icon"], [1, "bottom-btn", "purple-btn", 3, "click"], [1, "bottom-icon", "green-icon"], [1, "bottom-btn", "green-btn", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 1, "hospital-contact-item", 3, "href"], [1, "user-name"], [1, "avatar"], [1, "role", 3, "ngClass"], [1, "status"], [3, "tabChange"], [1, "placeholder-page"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "i", 4);
      \u0275\u0275text(5, "settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h1");
      \u0275\u0275text(8, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Manage your hospital configuration, users and system settings.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 5)(12, "button", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_12_listener() {
        return ctx.setActiveTab("general");
      });
      \u0275\u0275elementStart(13, "i", 4);
      \u0275\u0275text(14, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " General ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_16_listener() {
        return ctx.setActiveTab("clinic");
      });
      \u0275\u0275elementStart(17, "i", 4);
      \u0275\u0275text(18, "business");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Clinic Details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_20_listener() {
        return ctx.setActiveTab("users");
      });
      \u0275\u0275elementStart(21, "i", 4);
      \u0275\u0275text(22, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Users ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_24_listener() {
        return ctx.setActiveTab("security");
      });
      \u0275\u0275elementStart(25, "i", 4);
      \u0275\u0275text(26, "security");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Security ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_28_listener() {
        return ctx.setActiveTab("about");
      });
      \u0275\u0275elementStart(29, "i", 4);
      \u0275\u0275text(30, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " About System ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, SettingsComponent_div_32_Template, 117, 9, "div", 7)(33, SettingsComponent_app_settings_users_33_Template, 1, 0, "app-settings-users", 8)(34, SettingsComponent_div_34_Template, 5, 0, "div", 9)(35, SettingsComponent_app_clinic_details_35_Template, 1, 0, "app-clinic-details", 7)(36, SettingsComponent_app_about_system_36_Template, 1, 0, "app-about-system", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.activeTab === "general");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "clinic");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "users");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "security");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "about");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeTab === "general");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "users");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "security");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "clinic");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "about");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    AboutSystemComponent,
    SettingsUsersComponent,
    ClinicDetailsComponent
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.settings-page[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  color: #12244a;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 14px;\n  background: #e7f0ff;\n  color: #1677ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n}\n.header-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 1;\n}\n.header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 30px;\n  font-weight: 700;\n}\n.header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #687896;\n  font-size: 14px;\n}\n.settings-tabs[_ngcontent-%COMP%] {\n  height: 58px;\n  display: flex;\n  align-items: stretch;\n  background: white;\n  border: 1px solid #e0e8f3;\n  border-radius: 7px;\n  box-shadow: 0 2px 7px rgba(40, 75, 115, 0.03);\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.settings-tab[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  border: none;\n  background: white;\n  color: #182858;\n  font-size: 14px;\n  cursor: pointer;\n}\n.settings-tab[_ngcontent-%COMP%]    + .settings-tab[_ngcontent-%COMP%] {\n  border-left: 1px solid #e1e8f1;\n}\n.settings-tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #4c628d;\n  font-size: 20px;\n  line-height: 1;\n}\n.settings-tab.active[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-weight: 600;\n}\n.settings-tab.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.settings-tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 3px;\n  background: #0879e8;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5eaf2;\n  border-radius: 12px;\n  margin-bottom: 18px;\n  box-shadow: 0 2px 8px rgba(25, 50, 90, 0.03);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 11px;\n  background: #edf5ff;\n  color: #1677ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 23px;\n}\n.section-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 23px;\n  line-height: 1;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 19px;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #71809a;\n  font-size: 13px;\n}\n.outline-btn[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 18px;\n  border-radius: 8px;\n  border: 1px solid #1677ff;\n  background: white;\n  color: #1677ff;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.outline-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.outline-btn[_ngcontent-%COMP%]:hover {\n  background: #edf5ff;\n}\n.summary-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  padding: 0 20px 20px;\n}\n.hospital-card[_ngcontent-%COMP%] {\n  min-height: 116px;\n  border: 1px solid #e7edf5;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  padding: 15px;\n}\n.hospital-card[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n.hospital-logo[_ngcontent-%COMP%] {\n  min-width: 90px;\n  height: 90px;\n  border-radius: 12px;\n  background: #eef6ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #087cf4;\n  font-size: 48px;\n}\n.hospital-logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  line-height: 1;\n}\n.hospital-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 21px;\n}\n.hospital-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 14px;\n  color: #415577;\n}\n.hospital-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64738d;\n  font-size: 13px;\n}\n.hospital-contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 9px 22px;\n  margin-top: 15px;\n}\n.hospital-contact-item[_ngcontent-%COMP%]:nth-child(1) {\n  grid-column: 1 / -1;\n}\n.hospital-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  min-width: 0;\n  color: #415577;\n  font-size: 12px;\n  text-decoration: none;\n}\n.hospital-contact-item[_ngcontent-%COMP%]:hover {\n  color: #0879e8;\n}\n.hospital-contact-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #0879e8;\n  font-size: 17px;\n}\n.hospital-contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 20px 20px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 850px;\n}\nthead[_ngcontent-%COMP%] {\n  background: #f5f8fc;\n}\nth[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #52627c;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 12px 10px;\n}\ntd[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf0f5;\n  padding: 11px 10px;\n  color: #44536e;\n  font-size: 13px;\n}\n.user-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #1c2d4d;\n  font-size: 13px;\n}\n.user-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #75829a;\n  margin-top: 3px;\n  font-size: 11px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.role.admin[_ngcontent-%COMP%] {\n  background: #e7ecff;\n  color: #3657d5;\n}\n.role.doctor[_ngcontent-%COMP%] {\n  background: #dcf8ee;\n  color: #079566;\n}\n.role.staff[_ngcontent-%COMP%] {\n  background: #fff0d5;\n  color: #d88600;\n}\n.status[_ngcontent-%COMP%] {\n  color: #0aa76d;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #12b779;\n}\n.status.inactive-status[_ngcontent-%COMP%] {\n  color: #d83c4d;\n}\n.status.inactive-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #d83c4d;\n}\n.users-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.users-card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.users-card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.users-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.users-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.users-card[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.users-card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.bottom-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 190px;\n}\n.bottom-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  margin-bottom: 12px;\n}\n.bottom-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.blue-icon[_ngcontent-%COMP%] {\n  background: #e8f2ff;\n  color: #1677ff;\n}\n.purple-icon[_ngcontent-%COMP%] {\n  background: #f1eaff;\n  color: #8855e9;\n}\n.green-icon[_ngcontent-%COMP%] {\n  background: #e5f9f0;\n  color: #0aaa73;\n}\n.bottom-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 17px;\n}\n.bottom-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #697791;\n  font-size: 13px;\n  line-height: 1.5;\n  min-height: 42px;\n}\n.bottom-btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n  height: 40px;\n  border-radius: 7px;\n  background: white;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.bottom-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.blue-btn[_ngcontent-%COMP%] {\n  color: #1677ff;\n  border: 1px solid #8bbcff;\n}\n.purple-btn[_ngcontent-%COMP%] {\n  color: #8855e9;\n  border: 1px solid #c9aaff;\n}\n.green-btn[_ngcontent-%COMP%] {\n  color: #0aaa73;\n  border: 1px solid #88dbbd;\n}\n.placeholder-page[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5eaf2;\n  border-radius: 12px;\n  padding: 40px;\n  min-height: 300px;\n}\n.placeholder-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.placeholder-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #697791;\n}\n@media (max-width: 800px) {\n  .settings-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n  .settings-tab[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .hospital-card[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .hospital-contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 15px;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent" });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-WZHRX7LI.js.map
