import {
  CLIENT_CODE
} from "./chunk-OCZWZWFA.js";
import {
  AuthService
} from "./chunk-R4WLTVLJ.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-4V2D7BB2.js";
import {
  CommonModule,
  NgIf,
  computed,
  finalize,
  inject,
  provideHttpClient,
  provideZoneChangeDetection,
  signal,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-BLZA3SWA.js";
import "./chunk-YP43Q66R.js";

// src/app/shared/auth/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }
  router.navigate(["/"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-4BFLRDGS.js").then((m) => m.LoginComponent)
  },
  {
    path: "home",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-GAN2CGZX.js").then((m) => m.HomeLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-GTMXOASY.js").then((m) => m.HomeComponent)
      }
    ]
  },
  {
    path: "patient",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-X3SXVMNI.js").then((m) => m.PatientLayoutComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "register"
      },
      {
        path: "register",
        loadComponent: () => import("./chunk-BA673TEC.js").then((m) => m.PatientRegistrationComponent)
      },
      {
        path: "view",
        loadComponent: () => import("./chunk-BTGJ2KDK.js").then((m) => m.PatientViewComponent)
      }
    ]
  },
  {
    path: "booking",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-AW2F3TAB.js").then((m) => m.BookingLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-DURAABKD.js").then((m) => m.BookingAppointmentComponent)
      },
      {
        path: "appointment-list",
        loadComponent: () => import("./chunk-LBCL4FZV.js").then((m) => m.AppointmentListComponent)
      }
    ]
  },
  {
    path: "queue",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-WVVIDSFE.js").then((m) => m.QueueLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-4APTX5SP.js").then((m) => m.QueueManagementComponent)
      }
    ]
  },
  {
    path: "reports",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-6H4FIBNO.js").then((m) => m.ReportsLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-R4MY3KQZ.js").then((m) => m.ReportsAnalyticsComponent)
      }
    ]
  },
  {
    path: "billing",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-4IVL64ZQ.js").then((m) => m.BillingLayoutComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "generate"
      },
      {
        path: "generate",
        loadComponent: () => import("./chunk-2SGIW3IG.js").then((m) => m.GenerateBillComponent)
      },
      {
        path: "view",
        loadComponent: () => import("./chunk-UB7QX6BJ.js").then((m) => m.ViewBillsComponent)
      }
    ]
  },
  {
    path: "settings",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-Z5RQF62X.js").then((m) => m.SettingsLayoutComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-WZHRX7LI.js").then((m) => m.SettingsComponent)
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/shared/loading/loading.service.ts
var LoadingService = class _LoadingService {
  activeRequests = signal(0);
  isLoading = computed(() => this.activeRequests() > 0);
  show() {
    this.activeRequests.update((count) => count + 1);
  }
  hide() {
    this.activeRequests.update((count) => Math.max(0, count - 1));
  }
  static \u0275fac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
};

// src/app/shared/loading/loading.interceptor.ts
var loadingInterceptor = (request, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();
  return next(request).pipe(finalize(() => loadingService.hide()));
};

// src/app/shared/client-code.interceptor.ts
var clientCodeInterceptor = (request, next) => {
  const requestWithClientCode = request.clone({
    setHeaders: {
      "X-Client-Code": CLIENT_CODE
    }
  });
  return next(requestWithClientCode);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([clientCodeInterceptor, loadingInterceptor]))
  ]
};

// src/app/shared/loading/loading-spinner.component.ts
function LoadingSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
}
var LoadingSpinnerComponent = class _LoadingSpinnerComponent {
  loadingService = inject(LoadingService);
  static \u0275fac = function LoadingSpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingSpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "loading-overlay", "role", "status", "aria-live", "polite", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "loading-overlay"], ["aria-label", "Loading", 1, "spinner"]], template: function LoadingSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoadingSpinnerComponent_div_0_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loadingService.isLoading());
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.48);\n  pointer-events: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border: 5px solid rgba(21, 89, 166, 0.2);\n  border-top-color: #1559a6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loading-spinner.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingSpinnerComponent, { className: "LoadingSpinnerComponent" });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "Med_Project";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-loading-spinner");
    }
  }, dependencies: [RouterOutlet, LoadingSpinnerComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
