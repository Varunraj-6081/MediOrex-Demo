import {
  AuthService
} from "./chunk-R4WLTVLJ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-4V2D7BB2.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  computed,
  signal,
  timer,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BLZA3SWA.js";

// src/app/shared/sidebar/sidebar-state.service.ts
var SidebarStateService = class _SidebarStateService {
  collapsed = signal(false);
  mobileOpen = signal(false);
  toggle() {
    this.collapsed.update((collapsed) => !collapsed);
  }
  toggleMobile() {
    this.mobileOpen.update((open) => !open);
  }
  closeMobile() {
    this.mobileOpen.set(false);
  }
  static \u0275fac = function SidebarStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarStateService, factory: _SidebarStateService.\u0275fac, providedIn: "root" });
};

// src/app/shared/sidebar/sidebar.component.ts
var _c0 = () => ({ exact: true });
var _c1 = () => ({ exact: false });
function SidebarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function SidebarComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarState.closeMobile());
    });
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_13_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r4.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down");
  }
}
function SidebarComponent_div_13_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20)(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    \u0275\u0275classProp("active", child_r5.active);
    \u0275\u0275property("routerLink", child_r5.route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r5.label);
  }
}
function SidebarComponent_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, SidebarComponent_div_13_div_7_a_1_Template, 5, 7, "a", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", menu_r4.children);
  }
}
function SidebarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "a", 12);
    \u0275\u0275listener("click", function SidebarComponent_div_13_Template_a_click_1_listener() {
      const menu_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMenu(menu_r4));
    });
    \u0275\u0275elementStart(2, "i", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_div_13_span_6_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SidebarComponent_div_13_div_7_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("active", menu_r4.active);
    \u0275\u0275property("routerLink", menu_r4.route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r4.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r4.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r4.expanded);
  }
}
var SidebarComponent = class _SidebarComponent {
  sidebarState;
  router;
  routerSubscription = null;
  constructor(sidebarState, router) {
    this.sidebarState = sidebarState;
    this.router = router;
  }
  menuItems = [
    {
      label: "Home",
      icon: "home",
      route: "/home"
    },
    {
      label: "Patient Management",
      icon: "person",
      expanded: false,
      children: [
        {
          label: "Patient Registration",
          icon: "person_add",
          route: "/patient/register"
        },
        { label: "View Patients", icon: "list_alt", route: "/patient/view" }
      ]
    },
    {
      label: "Booking Management",
      icon: "event_note",
      expanded: false,
      children: [
        // { label: 'Dashboard', icon: 'dashboard' },
        {
          label: "Booking & Appointment",
          icon: "event_available",
          route: "/booking"
        },
        { label: "Queue", icon: "queue", route: "/queue" },
        { label: "Reports & Analytics", icon: "bar_chart", route: "/reports" }
      ]
    },
    {
      label: "Billing Management",
      icon: "receipt_long",
      expanded: false,
      children: [
        {
          label: "Generate Bill",
          icon: "receipt_long",
          route: "/billing/generate"
        },
        { label: "View Bills", icon: "list_alt", route: "/billing/view" }
      ]
    },
    {
      label: "Settings",
      icon: "settings",
      route: "/settings"
    }
  ];
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  ngOnInit() {
    this.syncExpandedWithRoute();
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.syncExpandedWithRoute();
        this.sidebarState.closeMobile();
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }
  selectMenu(item) {
    this.menuItems.forEach((menu) => menu.active = false);
    if (item.children) {
      const willExpand = !item.expanded;
      this.menuItems.forEach((menu) => {
        if (menu !== item && menu.children) {
          menu.expanded = false;
        }
      });
      item.expanded = willExpand;
      return;
    }
    item.active = true;
  }
  syncExpandedWithRoute() {
    const url = this.router.url;
    this.menuItems.forEach((menu) => {
      if (!menu.children) {
        return;
      }
      menu.expanded = menu.children.some((child) => !!child.route && url.startsWith(child.route));
    });
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(SidebarStateService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 7, consts: [["class", "sidebar-backdrop", 3, "click", 4, "ngIf"], [1, "sidebar"], [1, "sidebar-logo"], ["src", "assets/mediorex_logo.png", "alt", "MediOrEx logo", 1, "logo-image"], [1, "logo-name"], [1, "brand-light"], [1, "brand-dark"], [1, "logo-tagline"], [1, "sidebar-nav"], [4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "sidebar-backdrop", 3, "click"], ["routerLinkActive", "active", 1, "menu-item", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "material-icons", "nav-icon"], [1, "menu-label"], ["class", "material-icons menu-arrow", 4, "ngIf"], ["class", "submenu", 4, "ngIf"], [1, "material-icons", "menu-arrow"], [1, "submenu"], ["class", "submenu-item", "routerLinkActive", "active", 3, "active", "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "submenu-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "material-icons", "submenu-icon"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SidebarComponent_div_0_Template, 1, 0, "div", 0);
      \u0275\u0275elementStart(1, "aside", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "div")(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7, "Medi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "Orex");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11, "Care Today\xA0 Healthier Tomorrow");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "nav", 8);
      \u0275\u0275template(13, SidebarComponent_div_13_Template, 8, 9, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "div");
      \u0275\u0275text(16, "MediOrex v1.0.0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.sidebarState.mobileOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("collapsed", ctx.sidebarState.collapsed())("mobile-open", ctx.sidebarState.mobileOpen());
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Orextechnologies. All rights reserved");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 251px;\n  min-width: 251px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      180deg,\n      #102c44 0%,\n      #0d253c 100%);\n  color: white;\n  overflow: hidden;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 88px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 6px;\n}\n.logo-image[_ngcontent-%COMP%] {\n  height: 70px;\n  width: auto;\n  transform: translateY(5px);\n  object-fit: contain;\n}\n.logo-name[_ngcontent-%COMP%] {\n  font-size: 27px;\n  line-height: 1;\n  font-weight: 700;\n  color: white;\n  transform: translateY(3px);\n}\n.sidebar-logo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  transform: translateY(5px);\n}\n.logo-name[_ngcontent-%COMP%]   .brand-light[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0ec2ff,\n      #37a9e8);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.logo-name[_ngcontent-%COMP%]   .brand-dark[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #9ae7f5d9,\n      #24cf99);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.logo-tagline[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  transform: translateY(3px);\n  white-space: nowrap;\n  font-size: 8px;\n  color: #c6d5e5;\n  letter-spacing: .15px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  padding: 16px 9px 8px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  height: 46px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  gap: 12px;\n  padding: 0 17px;\n  color: #f2f6fb;\n  text-decoration: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: .2s;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n}\n.menu-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #087de8,\n      #0877e3);\n  color: white;\n  box-shadow: 0 5px 15px rgba(0, 115, 235, .2);\n}\n.menu-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%], \n.menu-item.active[_ngcontent-%COMP%]   .menu-arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.menu-arrow[_ngcontent-%COMP%] {\n  margin-left: 0;\n  flex: 0 0 20px;\n  text-align: center;\n  font-size: 20px;\n  line-height: 1;\n  color: #26d3c4;\n}\n.menu-label[_ngcontent-%COMP%] {\n  flex: 0 0 145px;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  line-height: 1;\n  color: #26d3c4;\n}\n.submenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 6px 0 4px 16px;\n  padding-left: 14px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n}\n.submenu-item[_ngcontent-%COMP%] {\n  height: 42px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 12px;\n  color: #b9c9dd;\n  text-decoration: none;\n  border-radius: 7px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: .2s;\n}\n.submenu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .06);\n  color: white;\n}\n.submenu-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #087de8,\n      #0877e3);\n  color: white;\n  box-shadow: 0 5px 15px rgba(0, 115, 235, .2);\n}\n.submenu-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 1;\n  color: #f2f8ff;\n}\n.submenu-item.active[_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n  color: #c3d1e0;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 76px;\n  min-width: 76px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 15px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child, \n.sidebar.collapsed[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .menu-arrow[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0;\n}\n@media (max-width: 1350px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 220px;\n    min-width: 220px;\n  }\n}\n@media (max-width: 1100px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 76px;\n    min-width: 76px;\n  }\n  .sidebar-logo[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 15px;\n  }\n  .sidebar-logo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .menu-item[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0;\n  }\n  .menu-label[_ngcontent-%COMP%], \n   .menu-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .submenu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 550px) {\n  .sidebar-backdrop[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, .45);\n    z-index: 600;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 251px;\n    min-width: 251px;\n    transform: translateX(-105%);\n    transition: transform .25s ease;\n    z-index: 601;\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%] {\n    width: 251px;\n    min-width: 251px;\n    transform: translateX(0);\n    box-shadow: 0 20px 60px rgba(15, 23, 42, .35);\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding: 15px 6px;\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child, \n   .sidebar.mobile-open[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%], \n   .sidebar.mobile-open[_ngcontent-%COMP%]   .menu-arrow[_ngcontent-%COMP%], \n   .sidebar.mobile-open[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%], \n   .sidebar.mobile-open[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    display: revert;\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding: 0 17px;\n  }\n}\n@media (min-width: 551px) and (max-width: 1100px) {\n  .sidebar[_ngcontent-%COMP%]:not(.collapsed) {\n    width: 251px;\n    min-width: 251px;\n  }\n  .sidebar[_ngcontent-%COMP%]:not(.collapsed)   .sidebar-logo[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding: 15px 6px;\n  }\n  .sidebar[_ngcontent-%COMP%]:not(.collapsed)   .sidebar-logo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child, \n   .sidebar[_ngcontent-%COMP%]:not(.collapsed)   .menu-label[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%]:not(.collapsed)   .menu-arrow[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%]:not(.collapsed)   .submenu[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%]:not(.collapsed)   .sidebar-footer[_ngcontent-%COMP%] {\n    display: revert;\n  }\n  .sidebar[_ngcontent-%COMP%]:not(.collapsed)   .menu-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding: 0 17px;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent" });
})();

// src/app/shared/toolbar/toolbar.component.ts
function ToolbarComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function ToolbarComponent_div_24_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signOut($event));
    });
    \u0275\u0275elementStart(2, "i", 2);
    \u0275\u0275text(3, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Sign out ");
    \u0275\u0275elementEnd()();
  }
}
var ToolbarComponent = class _ToolbarComponent {
  router;
  authService;
  sidebarState;
  profileMenuOpen = false;
  constructor(router, authService, sidebarState) {
    this.router = router;
    this.authService = authService;
    this.sidebarState = sidebarState;
  }
  get displayName() {
    return this.displayNameSignal();
  }
  get roleName() {
    return this.roleNameSignal();
  }
  get avatarInitial() {
    return this.avatarInitialSignal();
  }
  displayNameSignal = computed(() => {
    return this.authService.user()?.username || "User";
  });
  roleNameSignal = computed(() => {
    return this.authService.user()?.role_name ?? "\u2014";
  });
  avatarInitialSignal = computed(() => {
    const initial = this.displayNameSignal().trim().charAt(0);
    return (initial || "U").toUpperCase();
  });
  toggleSidebar() {
    if (window.matchMedia("(max-width: 550px)").matches) {
      this.sidebarState.toggleMobile();
      return;
    }
    this.sidebarState.toggle();
  }
  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen;
  }
  signOut(event) {
    event.stopPropagation();
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  static \u0275fac = function ToolbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolbarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SidebarStateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolbarComponent, selectors: [["app-toolbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 5, consts: [[1, "top-header"], ["type", "button", "aria-label", "Toggle sidebar", 1, "menu-button", 3, "click"], [1, "material-icons"], [1, "global-search"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Search by patient name, mobile number, token, or appointment ID..."], [1, "header-right"], [1, "notification"], [1, "profile-menu-wrapper"], ["type", "button", "aria-label", "Open profile menu", 1, "user-profile", 3, "click"], [1, "avatar"], [1, "user-info"], [1, "material-icons", "profile-arrow"], ["class", "profile-dropdown", 4, "ngIf"], [1, "profile-dropdown"], ["type", "button", 1, "sign-out-button", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ToolbarComponent_Template_button_click_1_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementStart(2, "i", 2);
      \u0275\u0275text(3, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "i", 4);
      \u0275\u0275text(6, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "i", 2);
      \u0275\u0275text(11, "notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function ToolbarComponent_Template_button_click_13_listener() {
        return ctx.toggleProfileMenu();
      });
      \u0275\u0275elementStart(14, "div", 10)(15, "span");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "strong");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "i", 12);
      \u0275\u0275text(23, "keyboard_arrow_down");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, ToolbarComponent_div_24_Template, 5, 0, "div", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275attribute("aria-expanded", ctx.profileMenuOpen);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.avatarInitial);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.displayName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.roleName);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.profileMenuOpen);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.top-header[_ngcontent-%COMP%] {\n  height: 70px;\n  display: flex;\n  align-items: center;\n  gap: 34px;\n  padding: 0 25px;\n  background: rgba(255, 255, 255, .92);\n  border-bottom: 1px solid #e2eaf4;\n}\n.menu-button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #4c648d;\n  font-size: 27px;\n  line-height: 1;\n  cursor: pointer;\n}\n.menu-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.global-search[_ngcontent-%COMP%] {\n  width: min(585px, 50%);\n  height: 43px;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 0 17px;\n  border-radius: 10px;\n  background: #edf4fb;\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: #40608f;\n  font-size: 22px;\n  line-height: 1;\n}\n.global-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: #263d69;\n  font-size: 14px;\n}\n.global-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #62779c;\n}\n.header-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 27px;\n}\n.notification[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: #34517e;\n  font-size: 27px;\n  line-height: 1;\n  cursor: pointer;\n}\n.notification[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n.user-profile[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: transparent;\n  cursor: pointer;\n}\n.profile-menu-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.profile-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  z-index: 10;\n  min-width: 200px;\n  padding: 6px;\n  border: 1px solid #e0e8f2;\n  border-radius: 8px;\n  background: white;\n  box-shadow: 0 8px 20px rgba(22, 47, 84, .12);\n}\n.sign-out-button[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 12px 14px;\n  border: 1px solid #ef6871;\n  border-radius: 6px;\n  background: white;\n  color: #d93442;\n  font: inherit;\n  font-size: 14px;\n  text-align: left;\n  cursor: pointer;\n}\n.sign-out-button[_ngcontent-%COMP%]:hover {\n  background: #fff0f2;\n}\n.sign-out-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e2edf8,\n      #c8d8eb);\n  color: #176cc6;\n  font-size: 17px;\n  font-weight: 700;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #101b50;\n}\n.user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4f6692;\n}\n.profile-arrow[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  color: #34517e;\n  font-size: 20px;\n  line-height: 1;\n}\n@media (max-width: 800px) {\n  .global-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 550px) {\n  .top-header[_ngcontent-%COMP%] {\n    gap: 10px;\n    padding: 0 12px;\n  }\n}\n/*# sourceMappingURL=toolbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolbarComponent, { className: "ToolbarComponent" });
})();

// src/app/shared/date-time/date-time.component.ts
var DateTimeComponent = class _DateTimeComponent {
  currentDate = /* @__PURE__ */ new Date();
  clockSubscription = null;
  ngOnInit() {
    this.clockSubscription = timer(0, 1e3).subscribe(() => {
      this.currentDate = /* @__PURE__ */ new Date();
    });
  }
  ngOnDestroy() {
    this.clockSubscription?.unsubscribe();
  }
  static \u0275fac = function DateTimeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateTimeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateTimeComponent, selectors: [["app-date-time"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 8, consts: [[1, "date-time"], [1, "material-icons"], [1, "date-divider"]], template: function DateTimeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "i", 1);
      \u0275\u0275text(2, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 2);
      \u0275\u0275text(7, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "date");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, ctx.currentDate, "EEE, d MMM yyyy"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 5, ctx.currentDate, "h:mm a"));
    }
  }, dependencies: [CommonModule, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: auto;\n}\n.date-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #304b78;\n  font-size: 14px;\n}\n.date-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.date-divider[_ngcontent-%COMP%] {\n  color: #9aabc2;\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n  .date-time[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=date-time.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateTimeComponent, { className: "DateTimeComponent" });
})();

export {
  SidebarComponent,
  ToolbarComponent,
  DateTimeComponent
};
//# sourceMappingURL=chunk-FXSBPB2W.js.map
