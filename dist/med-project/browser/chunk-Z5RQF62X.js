import {
  DateTimeComponent,
  SidebarComponent,
  ToolbarComponent
} from "./chunk-FXSBPB2W.js";
import "./chunk-R4WLTVLJ.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-4V2D7BB2.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/settings/settings-layout.component.ts
var SettingsLayoutComponent = class _SettingsLayoutComponent {
  static \u0275fac = function SettingsLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsLayoutComponent, selectors: [["app-settings-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 0, consts: [[1, "app-shell"], [1, "main-content"], [1, "page-container"], [1, "breadcrumb"], [1, "breadcrumb-arrow"]], template: function SettingsLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "app-toolbar");
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 3)(6, "span");
      \u0275\u0275text(7, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "app-date-time");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    SidebarComponent,
    ToolbarComponent,
    DateTimeComponent
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #101b55;\n}\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background: #f5f9fe;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 100vh;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff 0%,\n      #f3f8fd 100%);\n}\n.page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 70px);\n  padding: 16px 27px 18px;\n  overflow-y: auto;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  height: 28px;\n  color: #415b88;\n  font-size: 14px;\n}\n.breadcrumb-arrow[_ngcontent-%COMP%] {\n  color: #8da0bc;\n  font-size: 22px;\n}\n@media (max-width: 800px) {\n  .breadcrumb[_ngcontent-%COMP%]   app-date-time[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=settings-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsLayoutComponent, { className: "SettingsLayoutComponent" });
})();
export {
  SettingsLayoutComponent
};
//# sourceMappingURL=chunk-Z5RQF62X.js.map
