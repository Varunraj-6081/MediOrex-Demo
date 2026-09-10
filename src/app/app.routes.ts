import { Routes } from "@angular/router";
import { authGuard } from "./shared/auth/auth.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./login/login.component").then((m) => m.LoginComponent),
  },
  {
    path: "home",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./Home/home-layout.component").then((m) => m.HomeLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./Home/home.component").then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: "patient",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./PatientManagement/PatientLayout/patient-layout.component").then(
        (m) => m.PatientLayoutComponent,
      ),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "register",
      },
      {
        path: "register",
        loadComponent: () =>
          import("./PatientManagement/PatientRegistration/patient-registration").then(
            (m) => m.PatientRegistrationComponent,
          ),
      },
      {
        path: "view",
        loadComponent: () =>
          import("./PatientManagement/PatientView/patient-view").then(
            (m) => m.PatientViewComponent,
          ),
      },
    ],
  },
  {
    path: "booking",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./BookingManagement/Booking/BookingLayout/booking-layout.component").then(
        (m) => m.BookingLayoutComponent,
      ),
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./BookingManagement/Booking/booking-appointment.component").then(
            (m) => m.BookingAppointmentComponent,
          ),
      },
      {
        path: "appointment-list",
        loadComponent: () =>
          import("./BookingManagement/Booking/appointment-list/appointment-list-component").then(
            (m) => m.AppointmentListComponent,
          ),
      },
    ],
  },
  {
    path: "queue",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./BookingManagement/Queue/QueueLayout/queue-layout.component").then(
        (m) => m.QueueLayoutComponent,
      ),
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./BookingManagement/Queue/queue-component").then(
            (m) => m.QueueManagementComponent,
          ),
      },
    ],
  },
  {
    path: "reports",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./BookingManagement/Reports/ReportsLayout/reports-layout.component").then(
        (m) => m.ReportsLayoutComponent,
      ),
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./BookingManagement/Reports/reports.component").then(
            (m) => m.ReportsAnalyticsComponent,
          ),
      },
    ],
  },
  {
    path: "billing",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./Billing/BillingLayout/billing-layout.component").then(
        (m) => m.BillingLayoutComponent,
      ),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "generate",
      },
      {
        path: "generate",
        loadComponent: () =>
          import("./Billing/Generate/generate.component").then(
            (m) => m.GenerateBillComponent,
          ),
      },
      {
        path: "view",
        loadComponent: () =>
          import("./Billing/View/view.component").then(
            (m) => m.ViewBillsComponent,
          ),
      },
    ],
  },
  {
    path: "settings",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./settings/settings-layout.component").then(
        (m) => m.SettingsLayoutComponent,
      ),
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () =>
          import("./settings/settings.component").then(
            (m) => m.SettingsComponent,
          ),
      },
    ],
  },
  { path: "**", redirectTo: "" },
];
