import { CommonModule } from "@angular/common";
import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: "app-date-range-picker",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./date-range-picker.component.html",
  styleUrl: "./date-range-picker.component.css",
})
export class DateRangePickerComponent {
  @Input() startDate: Date = new Date(new Date().setDate(new Date().getDate() - 29));
  @Input() endDate: Date = new Date();
  @Input() placeholder = "Select Date Range";
  @Output() dateRangeChange = new EventEmitter<DateRange>();

  showDropdown = false;
  selectedPreset = "Last 30 Days";
  customPendingStart = false;

  calendarMonth: Date = new Date();
  hoverDate: Date | null = null;

  presets = [
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Last 7 Days", value: "Last 7 Days" },
    { label: "Last 30 Days", value: "Last 30 Days" },
    { label: "This Month", value: "This Month" },
    { label: "Last Month", value: "Last Month" },
    { label: "Custom Range", value: "Custom Range" },
  ];

  // Custom ranges are limited to 31 days (one month) max.
  private readonly maxRangeDays = 31;

  weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  get calendarYear(): number {
    return this.calendarMonth.getFullYear();
  }

  get calendarMonthIndex(): number {
    return this.calendarMonth.getMonth();
  }

  get calendarMonthName(): string {
    return this.calendarMonth.toLocaleString("en-US", { month: "long" });
  }

  get calendarDays(): (Date | null)[] {
    const year = this.calendarYear;
    const month = this.calendarMonthIndex;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }

  get displayText(): string {
    const opts: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    const s = this.startDate.toLocaleDateString("en-IN", opts);
    const e = this.endDate.toLocaleDateString("en-IN", opts);
    return `${s} - ${e}`;
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown) {
      this.calendarMonth = new Date(this.startDate);
      this.customPendingStart = this.selectedPreset === "Custom Range";
      this.hoverDate = null;
    }
  }

  @HostListener("document:click")
  onDocumentClick(): void {
    this.showDropdown = false;
  }

  onOverlayClick(event: Event): void {
    event.stopPropagation();
  }

  selectPreset(preset: { label: string; value: string }): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (preset.value) {
      case "Today":
        this.startDate = new Date(today);
        this.endDate = new Date(today);
        break;
      case "Yesterday": {
        const y = new Date(today);
        y.setDate(y.getDate() - 1);
        this.startDate = y;
        this.endDate = new Date(y);
        break;
      }
      case "Last 7 Days": {
        const s = new Date(today);
        s.setDate(s.getDate() - 6);
        this.startDate = s;
        this.endDate = new Date(today);
        break;
      }
      case "Last 30 Days": {
        const s = new Date(today);
        s.setDate(s.getDate() - 29);
        this.startDate = s;
        this.endDate = new Date(today);
        break;
      }
      case "This Month": {
        this.startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        this.endDate = new Date(today);
        break;
      }
      case "Last Month": {
        this.startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        this.endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      }
      case "Custom Range":
        this.selectedPreset = "Custom Range";
        this.customPendingStart = true;
        return;
    }
    this.selectedPreset = preset.label;
    if (preset.value !== "Custom Range") {
      this.customPendingStart = true;
      this.showDropdown = false;
      this.emitChange();
    }
  }

  prevMonth(): void {
    this.calendarMonth = new Date(
      this.calendarYear,
      this.calendarMonthIndex - 1,
      1
    );
  }

  nextMonth(): void {
    this.calendarMonth = new Date(
      this.calendarYear,
      this.calendarMonthIndex + 1,
      1
    );
  }

  isSameDay(a: Date, b: Date): boolean {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  isToday(d: Date): boolean {
    return this.isSameDay(d, new Date());
  }

  isInRange(d: Date): boolean {
    const start = this.startDate;
    const end = this.endDate;
    if (this.selectedPreset === "Custom Range" && this.customPendingStart && this.hoverDate) {
      const hStart = this.hoverDate < start ? this.hoverDate : start;
      const hEnd = this.hoverDate > start ? this.hoverDate : start;
      return d >= hStart && d <= hEnd;
    }
    return d >= start && d <= end;
  }

  isRangeStart(d: Date): boolean {
    return this.isSameDay(d, this.startDate);
  }

  isRangeEnd(d: Date): boolean {
    return this.isSameDay(d, this.endDate);
  }

  selectDate(d: Date): void {
    if (this.selectedPreset !== "Custom Range") {
      this.startDate = new Date(d);
      this.endDate = new Date(d);
      this.selectedPreset = "Custom Range";
      this.customPendingStart = true;
      return;
    }

    if (this.customPendingStart) {
      this.startDate = new Date(d);
      this.endDate = new Date(d);
      this.customPendingStart = false;
    } else if (d < this.startDate) {
      this.endDate = new Date(this.startDate);
      this.startDate = new Date(d);
      const minStart = new Date(this.endDate);
      minStart.setDate(minStart.getDate() - (this.maxRangeDays - 1));
      if (this.startDate < minStart) {
        this.startDate = minStart;
      }
      this.customPendingStart = true;
    } else {
      this.endDate = this.clampToMaxRange(this.startDate, d);
      this.customPendingStart = true;
    }
  }

  private clampToMaxRange(start: Date, end: Date): Date {
    const maxEnd = new Date(start);
    maxEnd.setDate(maxEnd.getDate() + this.maxRangeDays - 1);
    return end > maxEnd ? maxEnd : new Date(end);
  }

  onDateHover(d: Date): void {
    if (this.selectedPreset === "Custom Range" && this.customPendingStart) {
      this.hoverDate = d;
    }
  }

  onDateLeave(): void {
    this.hoverDate = null;
  }

  applyDateRange(): void {
    this.showDropdown = false;
    this.emitChange();
  }

  private emitChange(): void {
    this.dateRangeChange.emit({
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate),
    });
  }
}
