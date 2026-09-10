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

// src/app/Home/home-layout.component.ts
var HomeLayoutComponent = class _HomeLayoutComponent {
  static \u0275fac = function HomeLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeLayoutComponent, selectors: [["app-home-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "app-shell"], [1, "main-content"], [1, "page-container"], [1, "breadcrumb"]], template: function HomeLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "app-toolbar");
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 3)(6, "span");
      \u0275\u0275text(7, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-date-time");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, SidebarComponent, ToolbarComponent, DateTimeComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #101b55;\n}\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background: #f5f9fe;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 100vh;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff 0%,\n      #f3f8fd 100%);\n}\n.page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 70px);\n  padding: 16px 27px 18px;\n  overflow-y: auto;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  color: #415b88;\n  font-size: 14px;\n  height: 28px;\n}\n.breadcrumb-arrow[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #8da0bc;\n}\n.date-time[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #304b78;\n  font-size: 14px;\n}\n.date-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.date-divider[_ngcontent-%COMP%] {\n  color: #9aabc2;\n}\n@media (max-width: 800px) {\n  .date-time[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=home-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeLayoutComponent, { className: "HomeLayoutComponent" });
})();
export {
  HomeLayoutComponent
};
//# sourceMappingURL=chunk-GAN2CGZX.js.map
