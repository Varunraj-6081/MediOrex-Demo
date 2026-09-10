import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import {
  DateRange,
  DateRangePickerComponent,
} from "../../shared/date-range-picker/date-range-picker.component";
import {
  ApiPatientReport,
  ApiTokenReport,
  ReportSummaryResponse,
  ReportsService,
} from "./reports.service";
import { ApiBill, ViewBillsService } from "../../Billing/View/view.service";

export type ReportsTab = "analytics" | "patients" | "tokens" | "bills";

export interface PatientReportRow {
  registrationId: string;
  name: string;
  age: number | null;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
  mobile: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  emergencyMobile: string;
  patientStatus: string;
  registeredOn: string;
}

export interface TokenReportRow {
  token: string;
  appointmentNo: string;
  patient: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  type: "Online" | "Walk-in";
  status: string;
}

export interface BillReportRow {
  billNo: string;
  date: string;
  patient: string;
  department: string;
  doctor: string;
  amount: number;
  paymentMode: string;
  status: string;
}

@Component({
  selector: "app-reports-analytics",
  standalone: true,
  imports: [CommonModule, FormsModule, DateRangePickerComponent],
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.css"],
})
export class ReportsAnalyticsComponent implements OnInit {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly viewBillsService: ViewBillsService,
  ) {}

  ngOnInit(): void {
    this.startDate = this.formatDate(this.reportStartDate);
    this.endDate = this.formatDate(this.reportEndDate);
    this.loadPatients();
    this.loadTokens();
    this.loadBills();
    this.loadSummary();
  }

  activeTab: ReportsTab = "analytics";

  tabs: { id: ReportsTab; label: string; icon: string }[] = [
    { id: "analytics", label: "Reports and Analytics", icon: "analytics" },
    { id: "patients", label: "Patient Report", icon: "group" },
    { id: "tokens", label: "Token Report", icon: "confirmation_number" },
    { id: "bills", label: "Bill Report", icon: "receipt_long" },
  ];

  // Per-tab ranges: last 30 days by default.
  patientStart = this.daysAgo(29);
  patientEnd = this.todayDate();
  tokenStart = this.daysAgo(29);
  tokenEnd = this.todayDate();
  billStart = this.daysAgo(29);
  billEnd = this.todayDate();

  patientSearch = "";
  tokenSearch = "";
  billSearch = "";

  pageSizeOptions = [10, 20, 50];

  patientPage = 1;
  patientPageSize = 10;

  tokenPage = 1;
  tokenPageSize = 10;

  billPage = 1;
  billPageSize = 10;

  patientRows: PatientReportRow[] = [];
  tokenRows: TokenReportRow[] = [];
  billRows: BillReportRow[] = [];

  isLoadingPatients = false;
  isLoadingTokens = false;
  isLoadingBills = false;
  patientError = "";
  tokenError = "";
  billError = "";
  summaryError = "";

  startDate = "";

  endDate = "";

  reportStartDate = this.daysAgo(29);

  reportEndDate = this.todayDate();

  completionRate = 86;

  /* =====================================================
       REPORT DATA
       ===================================================== */

  reportData = {
    totalAppointments: 0,

    totalCancelledAppointments: 0,

    completed: 728,

    waiting: 86,

    cancelled: 28,

    noShow: 18,

    totalPatients: 0,

    totalBills: 0,

    totalCancelledBills: 0,

    totalBillAmount: 0,

    averageWaitingTime: 15,

    newPatients: 214,

    existingPatients: 404,
  };

  appointmentStatus = { completed: 0, waiting: 0, cancelled: 0, noShow: 0 };
  paymentMethods = { cash: 0, card: 0, online: 0, credit: 0 };

  loadSummary(): void {
    this.summaryError = "";
    this.reportsService
      .getSummary(
        this.toISODate(this.reportStartDate),
        this.toISODate(this.reportEndDate),
      )
      .subscribe({
        next: (response: ReportSummaryResponse) => {
          this.reportData = {
            ...this.reportData,
            totalPatients: Number(response.totalPatients) || 0,
            totalAppointments: Number(response.totalAppointments) || 0,
            totalCancelledAppointments:
              Number(response.totalCancelledAppointments) || 0,
            totalBills: Number(response.totalBills) || 0,
            totalCancelledBills: Number(response.totalCancelledBills) || 0,
            totalBillAmount: Number(response.totalBillAmount) || 0,
          };
          this.appointmentStatus =
            response.appointmentStatus || this.appointmentStatus;
          this.paymentMethods = response.paymentMethods || this.paymentMethods;
        },
        error: (error: HttpErrorResponse) => {
          this.summaryError =
            error.error?.message || "Unable to load report summary.";
        },
      });
  }

  formatBillAmount(amount: number): string {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  percentage(value: number, total: number): number {
    return total ? Math.round((value / total) * 100) : 0;
  }

  appointmentStatusTotal(): number {
    return Object.values(this.appointmentStatus).reduce(
      (total, value) => total + value,
      0,
    );
  }

  paymentMethodTotal(): number {
    return Object.values(this.paymentMethods).reduce(
      (total, value) => total + value,
      0,
    );
  }

  paymentDonutStyle(): string {
    const total = this.paymentMethodTotal() || 1;
    const cash = (this.paymentMethods.cash / total) * 360;
    const card = cash + (this.paymentMethods.card / total) * 360;
    const online = card + (this.paymentMethods.online / total) * 360;
    return `conic-gradient(#07925e 0deg ${cash}deg, #0879e8 ${cash}deg ${card}deg, #7041dd ${card}deg ${online}deg, #ec9500 ${online}deg 360deg)`;
  }

  /* =====================================================
       EXPORT
       ===================================================== */

  exportReport(): void {
    console.log("Exporting Reports & Analytics");

    const report = {
      period: {
        start: this.startDate,
        end: this.endDate,
      },

      metrics: this.reportData,
    };

    console.log(report);

    alert("Report export started.");
  }

  refreshReport(): void {
    this.onDateRangeChange({
      startDate: this.reportStartDate,
      endDate: this.reportEndDate,
    });
  }

  /* =====================================================
       TABS
       ===================================================== */

  selectTab(tab: ReportsTab): void {
    this.activeTab = tab;
    if (tab === "patients") {
      this.patientPage = 1;
      this.loadPatients();
    } else if (tab === "tokens") {
      this.tokenPage = 1;
      this.loadTokens();
    } else if (tab === "bills") {
      this.billPage = 1;
      this.loadBills();
    }
  }

  private toISODate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  loadPatients(): void {
    this.isLoadingPatients = true;
    this.patientError = "";
    this.reportsService
      .getPatientReport(
        this.toISODate(this.patientStart),
        this.toISODate(this.patientEnd),
      )
      .subscribe({
        next: (response) => {
          this.isLoadingPatients = false;
          this.patientRows = (response?.patients || []).map((item) =>
            this.toPatientRow(item),
          );
        },
        error: (error: HttpErrorResponse) => {
          this.isLoadingPatients = false;
          this.patientRows = [];
          this.patientError =
            error.error?.message || "Unable to load patient report.";
        },
      });
  }

  loadTokens(): void {
    this.isLoadingTokens = true;
    this.tokenError = "";
    this.reportsService
      .getTokenReport(
        this.toISODate(this.tokenStart),
        this.toISODate(this.tokenEnd),
      )
      .subscribe({
        next: (response) => {
          this.isLoadingTokens = false;
          this.tokenRows = (response?.tokens || []).map((item) =>
            this.toTokenRow(item),
          );
        },
        error: (error: HttpErrorResponse) => {
          this.isLoadingTokens = false;
          this.tokenRows = [];
          this.tokenError =
            error.error?.message || "Unable to load token report.";
        },
      });
  }

  loadBills(): void {
    this.isLoadingBills = true;
    this.billError = "";
    this.viewBillsService
      .getBills(this.toISODate(this.billStart), this.toISODate(this.billEnd))
      .subscribe({
        next: (response) => {
          this.isLoadingBills = false;
          this.billRows = (response?.bills || []).map((item) =>
            this.toBillRow(item),
          );
        },
        error: (error: HttpErrorResponse) => {
          this.isLoadingBills = false;
          this.billRows = [];
          this.billError =
            error.error?.message || "Unable to load bill report.";
        },
      });
  }

  private toPatientRow(item: ApiPatientReport): PatientReportRow {
    return {
      registrationId: item.registrationId || "",
      name: item.name || "—",
      age: item.age ?? null,
      gender: item.gender || "",
      dateOfBirth: item.dateOfBirth || "",
      bloodGroup: item.bloodGroup || "",
      mobile: item.mobile || "",
      email: item.email || "",
      address: item.address || "",
      address2: item.address2 || "",
      city: item.city || "",
      state: item.state || "",
      pincode: item.pincode || "",
      emergencyMobile: item.emergencyMobile || "",
      patientStatus: item.patientStatus || "",
      registeredOn: item.registeredOn || "",
    };
  }

  private toTokenRow(item: ApiTokenReport): TokenReportRow {
    const validTypes = ["Online", "Walk-in"];
    return {
      token: item.token || "",
      appointmentNo: item.appointmentNo || "",
      patient: item.patient || "—",
      department: item.department || "",
      doctor: item.doctor || "",
      date: item.date || "",
      time: item.time || "",
      type: (validTypes.includes(item.type) ? item.type : "Walk-in") as
        | "Online"
        | "Walk-in",
      status: item.status || "",
    };
  }

  private toBillRow(item: ApiBill): BillReportRow {
    return {
      billNo: item.billNo || "",
      date: item.date || "",
      patient: item.patientName || "—",
      department: item.department || "",
      doctor: item.doctor || "",
      amount: Number(item.amount) || 0,
      paymentMode: item.paymentMode || "",
      status: item.status || "",
    };
  }

  private todayDate(): Date {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }

  private monthStart(): Date {
    const now = this.todayDate();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  private daysAgo(days: number): Date {
    const date = this.todayDate();
    date.setDate(date.getDate() - days);
    return date;
  }
  get filteredPatients(): PatientReportRow[] {
    const search = this.patientSearch.trim().toLowerCase();
    if (!search) {
      return this.patientRows;
    }
    return this.patientRows.filter((row) =>
      `${row.registrationId} ${row.name} ${row.mobile} ${row.city}`
        .toLowerCase()
        .includes(search),
    );
  }

  get filteredTokens(): TokenReportRow[] {
    const search = this.tokenSearch.trim().toLowerCase();
    if (!search) {
      return this.tokenRows;
    }
    return this.tokenRows.filter((row) =>
      `${row.token} ${row.appointmentNo} ${row.patient} ${row.department} ${row.doctor}`
        .toLowerCase()
        .includes(search),
    );
  }

  get filteredBills(): BillReportRow[] {
    const search = this.billSearch.trim().toLowerCase();
    if (!search) {
      return this.billRows;
    }
    return this.billRows.filter((row) =>
      `${row.billNo} ${row.patient} ${row.department} ${row.doctor}`
        .toLowerCase()
        .includes(search),
    );
  }

  /* =====================================================
       PAGINATION (client-side over the loaded rows)
       ===================================================== */

  patientSortKey = "";
  patientSortDir: "asc" | "desc" = "asc";

  tokenSortKey = "";
  tokenSortDir: "asc" | "desc" = "asc";

  billSortKey = "";
  billSortDir: "asc" | "desc" = "asc";

  sortPatients(key: string): void {
    if (this.patientSortKey === key) {
      this.patientSortDir = this.patientSortDir === "asc" ? "desc" : "asc";
    } else {
      this.patientSortKey = key;
      this.patientSortDir = "asc";
    }
    this.patientPage = 1;
  }

  sortTokens(key: string): void {
    if (this.tokenSortKey === key) {
      this.tokenSortDir = this.tokenSortDir === "asc" ? "desc" : "asc";
    } else {
      this.tokenSortKey = key;
      this.tokenSortDir = "asc";
    }
    this.tokenPage = 1;
  }

  sortBills(key: string): void {
    if (this.billSortKey === key) {
      this.billSortDir = this.billSortDir === "asc" ? "desc" : "asc";
    } else {
      this.billSortKey = key;
      this.billSortDir = "asc";
    }
    this.billPage = 1;
  }

  sortIcon(activeKey: string, key: string, dir: "asc" | "desc"): string {
    if (activeKey !== key) {
      return "unfold_more";
    }
    return dir === "asc" ? "arrow_upward" : "arrow_downward";
  }

  private sortRows<T>(rows: T[], key: string, dir: "asc" | "desc"): T[] {
    if (!key) {
      return rows;
    }
    const multiplier = dir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const aValue = (a as Record<string, unknown>)[key];
      const bValue = (b as Record<string, unknown>)[key];
      if (aValue === bValue) {
        return 0;
      }
      if (aValue === null || aValue === undefined || aValue === "") {
        return 1;
      }
      if (bValue === null || bValue === undefined || bValue === "") {
        return -1;
      }
      if (typeof aValue === "number" && typeof bValue === "number") {
        return (aValue - bValue) * multiplier;
      }
      return (
        `${aValue}`.localeCompare(`${bValue}`, undefined, { numeric: true }) *
        multiplier
      );
    });
  }

  get sortedPatients(): PatientReportRow[] {
    return this.sortRows(
      this.filteredPatients,
      this.patientSortKey,
      this.patientSortDir,
    );
  }

  get sortedTokens(): TokenReportRow[] {
    return this.sortRows(
      this.filteredTokens,
      this.tokenSortKey,
      this.tokenSortDir,
    );
  }

  get sortedBills(): BillReportRow[] {
    return this.sortRows(
      this.filteredBills,
      this.billSortKey,
      this.billSortDir,
    );
  }

  get patientPagedRows(): PatientReportRow[] {
    return this.paginate(
      this.sortedPatients,
      this.patientPage,
      this.patientPageSize,
    );
  }

  get tokenPagedRows(): TokenReportRow[] {
    return this.paginate(this.sortedTokens, this.tokenPage, this.tokenPageSize);
  }

  get billPagedRows(): BillReportRow[] {
    return this.paginate(this.sortedBills, this.billPage, this.billPageSize);
  }

  private paginate<T>(rows: T[], page: number, pageSize: number): T[] {
    const start = (Math.max(page, 1) - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }

  patientTotalPages(): number {
    return Math.max(
      1,
      Math.ceil(this.filteredPatients.length / this.patientPageSize),
    );
  }

  tokenTotalPages(): number {
    return Math.max(
      1,
      Math.ceil(this.filteredTokens.length / this.tokenPageSize),
    );
  }

  billTotalPages(): number {
    return Math.max(
      1,
      Math.ceil(this.filteredBills.length / this.billPageSize),
    );
  }

  patientRangeLabel(): string {
    return this.rangeLabel(
      this.filteredPatients.length,
      this.patientPage,
      this.patientPageSize,
    );
  }

  tokenRangeLabel(): string {
    return this.rangeLabel(
      this.filteredTokens.length,
      this.tokenPage,
      this.tokenPageSize,
    );
  }

  billRangeLabel(): string {
    return this.rangeLabel(
      this.filteredBills.length,
      this.billPage,
      this.billPageSize,
    );
  }

  private rangeLabel(total: number, page: number, pageSize: number): string {
    if (total === 0) {
      return "Showing 0 of 0";
    }
    const start = (page - 1) * pageSize + 1;
    const end = Math.min(page * pageSize, total);
    return `Showing ${start}–${end} of ${total}`;
  }

  patientPrevPage(): void {
    if (this.patientPage > 1) {
      this.patientPage -= 1;
    }
  }

  patientNextPage(): void {
    if (this.patientPage < this.patientTotalPages()) {
      this.patientPage += 1;
    }
  }

  tokenPrevPage(): void {
    if (this.tokenPage > 1) {
      this.tokenPage -= 1;
    }
  }

  tokenNextPage(): void {
    if (this.tokenPage < this.tokenTotalPages()) {
      this.tokenPage += 1;
    }
  }

  billPrevPage(): void {
    if (this.billPage > 1) {
      this.billPage -= 1;
    }
  }

  billNextPage(): void {
    if (this.billPage < this.billTotalPages()) {
      this.billPage += 1;
    }
  }

  onPatientPageSizeChange(): void {
    this.patientPage = 1;
  }

  onTokenPageSizeChange(): void {
    this.tokenPage = 1;
  }

  onBillPageSizeChange(): void {
    this.billPage = 1;
  }

  /* =====================================================
       DATE RANGE
       ===================================================== */

  changeDateRange(start: string, end: string): void {
    this.startDate = start;

    this.endDate = end;
  }

  onDateRangeChange(range: DateRange): void {
    this.reportStartDate = range.startDate;

    this.reportEndDate = range.endDate;

    this.startDate = this.formatDate(range.startDate);

    this.endDate = this.formatDate(range.endDate);

    this.loadSummary();
  }

  onPatientDateRangeChange(range: DateRange): void {
    this.patientStart = range.startDate;
    this.patientEnd = range.endDate;
    this.patientPage = 1;
    this.loadPatients();
  }

  onTokenDateRangeChange(range: DateRange): void {
    this.tokenStart = range.startDate;
    this.tokenEnd = range.endDate;
    this.tokenPage = 1;
    this.loadTokens();
  }

  onBillDateRangeChange(range: DateRange): void {
    this.billStart = range.startDate;
    this.billEnd = range.endDate;
    this.billPage = 1;
    this.loadBills();
  }

  exportPatients(): void {
    const rows = this.filteredPatients;
    if (!rows.length) {
      alert("No patient records to export.");
      return;
    }
    this.downloadExcel(
      `patient-report-${this.toISODate(this.patientStart)}-to-${this.toISODate(this.patientEnd)}.xls`,
      [
        "Registration ID",
        "Patient Name",
        "Age",
        "Sex",
        "Date of Birth",
        "Blood Group",
        "Mobile Number",
        "Email",
        "Address 1",
        "Address 2",
        "City",
        "State",
        "Pincode",
        "Emergency Contact",
        "Status",
        "Registered On",
      ],
      rows.map((row) => [
        row.registrationId,
        row.name,
        row.age ?? "",
        row.gender,
        row.dateOfBirth,
        row.bloodGroup,
        row.mobile,
        row.email,
        row.address,
        row.address2,
        row.city,
        row.state,
        row.pincode,
        row.emergencyMobile,
        row.patientStatus,
        row.registeredOn,
      ]),
    );
  }

  exportTokens(): void {
    const rows = this.filteredTokens;
    if (!rows.length) {
      alert("No token records to export.");
      return;
    }
    this.downloadExcel(
      `token-report-${this.toISODate(this.tokenStart)}-to-${this.toISODate(this.tokenEnd)}.xls`,
      [
        "Token",
        "Appointment No",
        "Patient",
        "Department",
        "Doctor",
        "Date",
        "Time",
        "Type",
        "Status",
      ],
      rows.map((row) => [
        row.token,
        row.appointmentNo,
        row.patient,
        row.department,
        row.doctor,
        row.date,
        row.time,
        row.type,
        row.status,
      ]),
    );
  }

  exportBills(): void {
    const rows = this.filteredBills;
    if (!rows.length) {
      alert("No bill records to export.");
      return;
    }
    this.downloadExcel(
      `bill-report-${this.toISODate(this.billStart)}-to-${this.toISODate(this.billEnd)}.xls`,
      [
        "Bill No",
        "Date",
        "Patient",
        "Department",
        "Doctor",
        "Amount (₹)",
        "Payment",
        "Status",
      ],
      rows.map((row) => [
        row.billNo,
        row.date,
        row.patient,
        row.department,
        row.doctor,
        row.amount,
        row.paymentMode,
        row.status,
      ]),
    );
  }

  private downloadExcel(
    filename: string,
    headers: string[],
    rows: (string | number)[][],
  ): void {
    const escapeHtml = (value: string | number): string => {
      return `${value ?? ""}`
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    };
    const headerRow = `<tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr>`;
    const bodyRows = rows
      .map(
        (row) =>
          `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`,
      )
      .join("");
    const html =
      `<html xmlns:o="urn:schemas-microsoft-com:office:office" ` +
      `xmlns:x="urn:schemas-microsoft-com:office:excel" ` +
      `xmlns="http://www.w3.org/TR/REC-html40">` +
      `<head><meta charset="UTF-8"></head>` +
      `<body><table>${headerRow}${bodyRows}</table></body></html>`;
    const blob = new Blob(["\ufeff", html], {
      type: "application/vnd.ms-excel;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
}
