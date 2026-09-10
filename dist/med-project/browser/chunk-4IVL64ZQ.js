import {
  DateTimeComponent,
  SidebarComponent,
  ToolbarComponent
} from "./chunk-FXSBPB2W.js";
import "./chunk-R4WLTVLJ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-4V2D7BB2.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/Billing/BillingLayout/billing-layout.component.ts
var BillingLayoutComponent = class _BillingLayoutComponent {
  router;
  childTitle = "Generate Bill";
  routerSubscription = null;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.updateCrumb();
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCrumb();
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }
  updateCrumb() {
    this.childTitle = this.router.url.includes("/view") ? "View Bills" : "Generate Bill";
  }
  static \u0275fac = function BillingLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingLayoutComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingLayoutComponent, selectors: [["app-billing-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 1, consts: [[1, "app-shell"], [1, "main-content"], [1, "page-container"], [1, "breadcrumb"], [1, "breadcrumb-arrow"], [1, "breadcrumb-current"], [1, "tabs"], ["routerLink", "/billing/generate", "routerLinkActive", "active", 1, "tab"], [1, "material-icons"], ["routerLink", "/billing/view", "routerLinkActive", "active", 1, "tab"]], template: function BillingLayoutComponent_Template(rf, ctx) {
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
      \u0275\u0275text(11, "Billing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 4);
      \u0275\u0275text(13, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 5);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "app-date-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6)(18, "a", 7)(19, "i", 8);
      \u0275\u0275text(20, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Generate Bill ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 9)(23, "i", 8);
      \u0275\u0275text(24, "list_alt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " View Bills ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.childTitle);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, SidebarComponent, ToolbarComponent, DateTimeComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #101b55;\n}\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background: #f5f9fe;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 100vh;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff 0%,\n      #f3f8fd 100%);\n}\n.page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 70px);\n  padding: 16px 27px 18px;\n  overflow-y: auto;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  height: 28px;\n  color: #415b88;\n  font-size: 14px;\n}\n.breadcrumb-arrow[_ngcontent-%COMP%] {\n  color: #8da0bc;\n  font-size: 22px;\n}\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: #18285c;\n  font-weight: 600;\n}\n.date-time[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #304b78;\n  font-size: 14px;\n}\n.date-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.date-divider[_ngcontent-%COMP%] {\n  color: #9aabc2;\n}\n.tabs[_ngcontent-%COMP%] {\n  height: 58px;\n  display: flex;\n  align-items: stretch;\n  margin: 15px 0;\n  background: white;\n  border: 1px solid #e0e8f3;\n  border-radius: 7px;\n  box-shadow: 0 2px 7px rgba(40, 75, 115, .03);\n}\n.tab[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: #182858;\n  background: white;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n}\n.tab[_ngcontent-%COMP%]    + .tab[_ngcontent-%COMP%] {\n  border-left: 1px solid #e1e8f1;\n}\n.tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #4c628d;\n  font-size: 20px;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-weight: 600;\n}\n.tab.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  background: #0879e8;\n}\n@media (max-width: 800px) {\n  .date-time[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 550px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .tab[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=billing-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingLayoutComponent, { className: "BillingLayoutComponent" });
})();
export {
  BillingLayoutComponent
};
//# sourceMappingURL=chunk-4IVL64ZQ.js.map
