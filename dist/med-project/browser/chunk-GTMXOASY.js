import {
  Router
} from "./chunk-4V2D7BB2.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/Home/home.component.ts
function HomeComponent_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "i", 6);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function HomeComponent_div_22_Template_div_click_0_listener() {
      const module_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openModule(module_r2));
    });
    \u0275\u0275template(1, HomeComponent_div_22_span_1_Template, 3, 0, "span", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "i", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 21)(11, "i", 6);
    \u0275\u0275text(12, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const module_r2 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("module-card ", module_r2.color, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r2.locked);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", module_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", module_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", module_r2.description, " ");
  }
}
var HomeComponent = class _HomeComponent {
  router = inject(Router);
  modules = [
    {
      id: 1,
      name: "Patient Management",
      description: "Register, manage and track patient information",
      icon: "person",
      color: "blue",
      route: "/patient/register",
      locked: false
    },
    {
      id: 2,
      name: "Booking Management",
      description: "Manage appointments, queue and token system",
      icon: "event_available",
      color: "purple",
      route: "/booking",
      locked: false
    },
    {
      id: 13,
      name: "Billing & Revenue Management",
      description: "Manage billing, invoices and revenue",
      icon: "payments",
      color: "green",
      route: "/billing/generate",
      locked: false,
      showNumber: false
    },
    {
      id: 20,
      name: "Support Services",
      description: "Get help, guidance and technical support",
      icon: "support_agent",
      color: "purple",
      locked: false
    },
    {
      id: 3,
      name: "Doctor & Clinical Management",
      description: "Manage doctors, schedules and clinical operations",
      icon: "medical_services",
      color: "green",
      locked: true
    },
    {
      id: 4,
      name: "EMR / EHR",
      description: "Electronic medical records and patient history",
      icon: "description",
      color: "pink",
      locked: true
    },
    {
      id: 5,
      name: "OPD & IPD Management",
      description: "Manage outpatient and inpatient care",
      icon: "local_hospital",
      color: "orange",
      locked: true
    },
    {
      id: 6,
      name: "Emergency & Critical Care",
      description: "Manage emergency cases and critical care",
      icon: "emergency",
      color: "red",
      locked: true
    },
    {
      id: 7,
      name: "Laboratory Management",
      description: "Manage lab tests, samples and results",
      icon: "science",
      color: "teal",
      locked: true
    },
    {
      id: 8,
      name: "Radiology & Diagnostics",
      description: "Manage radiology, imaging and diagnostic reports",
      icon: "biotech",
      color: "blue",
      locked: true
    },
    {
      id: 9,
      name: "Pharmacy Management",
      description: "Manage pharmacy, medicines and prescriptions",
      icon: "medication",
      color: "purple",
      locked: true
    },
    {
      id: 10,
      name: "Specialty Care Management",
      description: "Manage department-wise specialty care",
      icon: "healing",
      color: "pink",
      locked: true
    },
    {
      id: 11,
      name: "Blood Bank Management",
      description: "Manage blood donors, stock and transfusions",
      icon: "bloodtype",
      color: "red",
      locked: true
    },
    {
      id: 12,
      name: "OT & Surgery Management",
      description: "Manage operation theaters, surgeries and procedures",
      icon: "medical_information",
      color: "blue",
      locked: true
    },
    {
      id: 14,
      name: "Insurance & TPA Management",
      description: "Manage insurance claims and TPA processing",
      icon: "health_and_safety",
      color: "purple",
      locked: true
    },
    {
      id: 15,
      name: "Inventory & Procurement",
      description: "Manage inventory, supplies and procurement",
      icon: "inventory_2",
      color: "orange",
      locked: true
    },
    {
      id: 16,
      name: "HR & Workforce Management",
      description: "Manage staff, attendance and payroll",
      icon: "badge",
      color: "purple",
      locked: true
    },
    {
      id: 17,
      name: "Home Healthcare & Telemedicine",
      description: "Manage home care and virtual consultations",
      icon: "video_call",
      color: "orange",
      locked: true
    },
    {
      id: 18,
      name: "Analytics & Healthcare Intelligence",
      description: "Reports, insights and data analytics",
      icon: "analytics",
      color: "blue",
      locked: true
    },
    {
      id: 19,
      name: "Integration & Digital Health Platform",
      description: "Integrate with external systems and digital health services",
      icon: "hub",
      color: "teal",
      locked: true
    }
  ];
  openModule(module) {
    if (module.locked) {
      alert("This module is locked.");
      return;
    }
    if (module.route) {
      this.router.navigate([
        module.route
      ]);
      return;
    }
    console.log("Opening module:", module.name);
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 1, consts: [[1, "mediorex-home"], [1, "welcome-section"], [1, "welcome-text"], [1, "welcome-banner"], [1, "banner-line"], [1, "hospital-shape"], [1, "material-icons"], [1, "module-grid"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "health-banner"], [1, "health-logo"], ["src", "assets/mediorex_logo.png", "alt", "MediOrEx", 1, "mediorex-logo-img"], [1, "health-text"], [1, "heartbeat"], ["viewBox", "0 0 150 40", "preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "heartbeat-svg"], ["d", "M0,20 H10 L12,32 L16,4 L20,34 L22,20 H50 L52,28 L56,12 L60,30 L62,20 H90 L94,34 L98,2 L102,36 L104,20 H130 L132,24 L136,18 L140,26 L142,20 H146", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round", "stroke-linecap", "round"], [1, "health-links"], [3, "click"], ["class", "card-lock", 4, "ngIf"], [1, "module-icon", 3, "ngClass"], [1, "module-content"], [1, "module-arrow"], [1, "card-lock"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, " Welcome to ");
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "MediOrex");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h2");
      \u0275\u0275text(8, " Your Complete Hospital Management Solution ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Access all modules to manage patients, clinical operations, staff, and more \u2014 all in one place. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 3)(12, "div")(13, "strong");
      \u0275\u0275text(14, " Better Care");
      \u0275\u0275element(15, "br");
      \u0275\u0275text(16, " Brighter Tomorrow ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 5)(19, "i", 6);
      \u0275\u0275text(20, "local_hospital");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "section", 7);
      \u0275\u0275template(22, HomeComponent_div_22_Template, 13, 8, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "section", 9)(24, "div", 10);
      \u0275\u0275element(25, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 12)(27, "h3");
      \u0275\u0275text(28, " Together for a Healthier Tomorrow ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, " Care Today. Healthier Tomorrow. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 14);
      \u0275\u0275element(33, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 16);
      \u0275\u0275text(35, " Technology\xA0\xA0 | \xA0\xA0People\xA0\xA0 | \xA0\xA0Better Care ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.modules);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  color: #101f53;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  gap: 28px;\n  padding: 0 28px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2eaf3;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border: none;\n  background: transparent;\n  color: #34547f;\n  font-size: 23px;\n  cursor: pointer;\n}\n.search-box[_ngcontent-%COMP%] {\n  width: 590px;\n  height: 43px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 0 15px;\n  border-radius: 10px;\n  background: #eef5fc;\n}\n.search-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #49678f;\n  font-size: 22px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: #233968;\n  font-size: 13px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #7285a4;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35px;\n  height: 35px;\n  border: none;\n  background: transparent;\n  color: #29466f;\n  font-size: 20px;\n  cursor: pointer;\n}\n.notification-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -4px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #ef414b;\n  color: white;\n  font-size: 9px;\n  font-weight: 700;\n}\n.profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  min-width: 210px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4e8bd7,\n      #2f67b7);\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n}\n.profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #101f53;\n  font-size: 13px;\n}\n.profile[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #617498;\n  font-size: 11px;\n}\n.profile-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #34547f;\n  font-size: 19px;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 17px 28px 25px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #334f7d;\n  font-size: 13px;\n}\n.welcome-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071554;\n  font-size: 36px;\n  line-height: 1.1;\n}\n.welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0879e8;\n}\n.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 5px;\n  color: #111e53;\n  font-size: 21px;\n}\n.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #58709a;\n  font-size: 13px;\n}\n.welcome-banner[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 108px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 25px;\n  overflow: hidden;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      100deg,\n      #e7f4ff,\n      #f2f8ff);\n  border: 1px solid #d8e8f7;\n}\n.welcome-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0879e8;\n  font-size: 20px;\n  line-height: 1.05;\n}\n.banner-line[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 3px;\n  margin-top: 11px;\n  border-radius: 5px;\n  background: #0879e8;\n}\n.hospital-shape[_ngcontent-%COMP%] {\n  opacity: .65;\n}\n.hospital-shape[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 58px;\n  line-height: 1;\n  color: #0879e8;\n}\n.module-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n}\n.module-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 124px;\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  padding: 13px;\n  overflow: hidden;\n  border: 1px solid #dce7f2;\n  border-radius: 9px;\n  background: #ffffff;\n  cursor: pointer;\n  transition:\n    transform .18s ease,\n    box-shadow .18s ease,\n    border-color .18s ease;\n}\n.module-card.blue[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      120% 120% at 0% 100%,\n      rgba(8, 121, 232, .18) 0%,\n      rgba(228, 241, 255, .10) 45%,\n      #ffffff 100%);\n}\n.module-card.purple[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      120% 120% at 0% 100%,\n      rgba(110, 59, 223, .16) 0%,\n      rgba(238, 229, 255, .10) 45%,\n      #ffffff 100%);\n}\n.module-card.green[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      120% 120% at 0% 100%,\n      rgba(7, 150, 106, .16) 0%,\n      rgba(224, 247, 238, .10) 45%,\n      #ffffff 100%);\n}\n.module-card.pink[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      120% 120% at 0% 100%,\n      rgba(213, 45, 112, .16) 0%,\n      rgba(255, 230, 240, .10) 45%,\n      #ffffff 100%);\n}\n.module-card.orange[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      120% 120% at 0% 100%,\n      rgba(232, 137, 0, .16) 0%,\n      rgba(255, 240, 215, .10) 45%,\n      #ffffff 100%);\n}\n.module-card.red[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      120% 120% at 0% 100%,\n      rgba(238, 53, 71, .16) 0%,\n      rgba(255, 229, 233, .10) 45%,\n      #ffffff 100%);\n}\n.module-card.teal[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      120% 120% at 0% 100%,\n      rgba(7, 156, 148, .16) 0%,\n      rgba(222, 247, 243, .10) 45%,\n      #ffffff 100%);\n}\n.module-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #bcd8f3;\n  box-shadow: 0 8px 22px rgba(39, 88, 137, .10);\n}\n.card-lock[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .95);\n  box-shadow: 0 3px 12px rgba(20, 40, 80, .22);\n  border: 1px solid rgba(13, 28, 85, .12);\n  z-index: 2;\n}\n.card-lock[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n  color: #5c6b8a;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .10);\n}\n.module-card[_ngcontent-%COMP%]:hover   .card-lock[_ngcontent-%COMP%] {\n  opacity: .75;\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 65px;\n  border-radius: 11px;\n}\n.module-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1;\n}\n.module-icon.blue[_ngcontent-%COMP%] {\n  background: #e4f1ff;\n  color: #0879e8;\n}\n.module-icon.purple[_ngcontent-%COMP%] {\n  background: #eee5ff;\n  color: #6e3bdf;\n}\n.module-icon.green[_ngcontent-%COMP%] {\n  background: #e0f7ee;\n  color: #07966a;\n}\n.module-icon.pink[_ngcontent-%COMP%] {\n  background: #ffe6f0;\n  color: #d52d70;\n}\n.module-icon.orange[_ngcontent-%COMP%] {\n  background: #fff0d7;\n  color: #e88900;\n}\n.module-icon.red[_ngcontent-%COMP%] {\n  background: #ffe5e9;\n  color: #ee3547;\n}\n.module-icon.teal[_ngcontent-%COMP%] {\n  background: #def7f3;\n  color: #079c94;\n}\n.module-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding-top: 7px;\n  padding-right: 26px;\n}\n.module-number[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n  color: #0d1c55;\n  font-size: 18px;\n  font-weight: 700;\n}\n.module-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 100%;\n  color: #0c1950;\n  font-size: 14px;\n  line-height: 1.25;\n  font-weight: 700;\n}\n.module-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  max-width: 100%;\n  color: #58709a;\n  font-size: 11px;\n  line-height: 1.4;\n}\n.module-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 14px;\n  color: #0879e8;\n}\n.module-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.health-banner[_ngcontent-%COMP%] {\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 15px;\n  padding: 10px 17px;\n  border: 1px solid #dce8f3;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f8ff,\n      #ffffff);\n}\n.health-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 60px;\n}\n.mediorex-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.health-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #102052;\n  font-size: 16px;\n}\n.health-text[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n}\n.health-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #5b7197;\n  font-size: 10px;\n}\n.heartbeat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 1;\n  color: #8a94a6;\n}\n.heartbeat-svg[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 32px;\n  display: block;\n}\n.health-links[_ngcontent-%COMP%] {\n  color: #58709a;\n  font-size: 11px;\n  white-space: nowrap;\n}\n@media (min-width: 1500px) {\n  .module-card[_ngcontent-%COMP%] {\n    min-height: 124px;\n  }\n  .module-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .module-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 1200px) {\n  .module-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .welcome-banner[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n@media (max-width: 900px) {\n  .topbar[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    flex: 1;\n    width: auto;\n  }\n  .profile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.avatar), \n   .profile-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .profile[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .welcome-section[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .welcome-banner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .module-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .heartbeat[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 650px) {\n  .topbar[_ngcontent-%COMP%] {\n    height: 62px;\n    gap: 10px;\n  }\n  .menu-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    height: 38px;\n  }\n  .notification-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .welcome-banner[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n  .module-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .module-card[_ngcontent-%COMP%] {\n    min-height: 120px;\n  }\n  .module-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n   .module-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .health-banner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .health-links[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-GTMXOASY.js.map
