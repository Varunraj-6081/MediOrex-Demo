import {
  FormsModule
} from "./chunk-GFRD3CSB.js";
import {
  CommonModule,
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BLZA3SWA.js";

// src/app/shared/date-range-picker/date-range-picker.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function DateRangePickerComponent_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function DateRangePickerComponent_Conditional_11_For_3_Template_button_click_0_listener() {
      const preset_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPreset(preset_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedPreset === preset_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r4.label, " ");
  }
}
function DateRangePickerComponent_Conditional_11_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r5);
  }
}
function DateRangePickerComponent_Conditional_11_For_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function DateRangePickerComponent_Conditional_11_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function DateRangePickerComponent_Conditional_11_For_19_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const day_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDate(day_r7));
    })("mouseenter", function DateRangePickerComponent_Conditional_11_For_19_Conditional_1_Template_button_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const day_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateHover(day_r7));
    })("mouseleave", function DateRangePickerComponent_Conditional_11_For_19_Conditional_1_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDateLeave());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today", ctx_r1.isToday(day_r7))("in-range", ctx_r1.isInRange(day_r7))("range-start", ctx_r1.isRangeStart(day_r7))("range-end", ctx_r1.isRangeEnd(day_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r7.getDate(), " ");
  }
}
function DateRangePickerComponent_Conditional_11_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DateRangePickerComponent_Conditional_11_For_19_Conditional_0_Template, 1, 0, "span", 28)(1, DateRangePickerComponent_Conditional_11_For_19_Conditional_1_Template, 2, 9, "button", 29);
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    \u0275\u0275conditional(day_r7 === null ? 0 : 1);
  }
}
function DateRangePickerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function DateRangePickerComponent_Conditional_11_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275repeaterCreate(2, DateRangePickerComponent_Conditional_11_For_3_Template, 2, 3, "button", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "button", 16);
    \u0275\u0275listener("click", function DateRangePickerComponent_Conditional_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevMonth());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 17);
    \u0275\u0275element(8, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 16);
    \u0275\u0275listener("click", function DateRangePickerComponent_Conditional_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextMonth());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 17);
    \u0275\u0275element(13, "path", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 21);
    \u0275\u0275repeaterCreate(15, DateRangePickerComponent_Conditional_11_For_16_Template, 2, 1, "span", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 23);
    \u0275\u0275repeaterCreate(18, DateRangePickerComponent_Conditional_11_For_19_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 24)(21, "span", 25);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 26);
    \u0275\u0275listener("click", function DateRangePickerComponent_Conditional_11_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDateRange());
    });
    \u0275\u0275text(24, "Apply");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.presets);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r1.calendarMonthName, " ", ctx_r1.calendarYear, "");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.weekDays);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.calendarDays);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayText, " ");
  }
}
var DateRangePickerComponent = class _DateRangePickerComponent {
  startDate = new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 29));
  endDate = /* @__PURE__ */ new Date();
  placeholder = "Select Date Range";
  dateRangeChange = new EventEmitter();
  showDropdown = false;
  selectedPreset = "Last 30 Days";
  customPendingStart = false;
  calendarMonth = /* @__PURE__ */ new Date();
  hoverDate = null;
  presets = [
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Last 7 Days", value: "Last 7 Days" },
    { label: "Last 30 Days", value: "Last 30 Days" },
    { label: "This Month", value: "This Month" },
    { label: "Last Month", value: "Last Month" },
    { label: "Custom Range", value: "Custom Range" }
  ];
  // Custom ranges are limited to 31 days (one month) max.
  maxRangeDays = 31;
  weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  get calendarYear() {
    return this.calendarMonth.getFullYear();
  }
  get calendarMonthIndex() {
    return this.calendarMonth.getMonth();
  }
  get calendarMonthName() {
    return this.calendarMonth.toLocaleString("en-US", { month: "long" });
  }
  get calendarDays() {
    const year = this.calendarYear;
    const month = this.calendarMonthIndex;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }
  get displayText() {
    const opts = {
      day: "numeric",
      month: "short",
      year: "numeric"
    };
    const s = this.startDate.toLocaleDateString("en-IN", opts);
    const e = this.endDate.toLocaleDateString("en-IN", opts);
    return `${s} - ${e}`;
  }
  toggleDropdown(event) {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown) {
      this.calendarMonth = new Date(this.startDate);
      this.customPendingStart = this.selectedPreset === "Custom Range";
      this.hoverDate = null;
    }
  }
  onDocumentClick() {
    this.showDropdown = false;
  }
  onOverlayClick(event) {
    event.stopPropagation();
  }
  selectPreset(preset) {
    const today = /* @__PURE__ */ new Date();
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
  prevMonth() {
    this.calendarMonth = new Date(this.calendarYear, this.calendarMonthIndex - 1, 1);
  }
  nextMonth() {
    this.calendarMonth = new Date(this.calendarYear, this.calendarMonthIndex + 1, 1);
  }
  isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  isToday(d) {
    return this.isSameDay(d, /* @__PURE__ */ new Date());
  }
  isInRange(d) {
    const start = this.startDate;
    const end = this.endDate;
    if (this.selectedPreset === "Custom Range" && this.customPendingStart && this.hoverDate) {
      const hStart = this.hoverDate < start ? this.hoverDate : start;
      const hEnd = this.hoverDate > start ? this.hoverDate : start;
      return d >= hStart && d <= hEnd;
    }
    return d >= start && d <= end;
  }
  isRangeStart(d) {
    return this.isSameDay(d, this.startDate);
  }
  isRangeEnd(d) {
    return this.isSameDay(d, this.endDate);
  }
  selectDate(d) {
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
  clampToMaxRange(start, end) {
    const maxEnd = new Date(start);
    maxEnd.setDate(maxEnd.getDate() + this.maxRangeDays - 1);
    return end > maxEnd ? maxEnd : new Date(end);
  }
  onDateHover(d) {
    if (this.selectedPreset === "Custom Range" && this.customPendingStart) {
      this.hoverDate = d;
    }
  }
  onDateLeave() {
    this.hoverDate = null;
  }
  applyDateRange() {
    this.showDropdown = false;
    this.emitChange();
  }
  emitChange() {
    this.dateRangeChange.emit({
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate)
    });
  }
  static \u0275fac = function DateRangePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangePickerComponent, selectors: [["app-date-range-picker"]], hostBindings: function DateRangePickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DateRangePickerComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { startDate: "startDate", endDate: "endDate", placeholder: "placeholder" }, outputs: { dateRangeChange: "dateRangeChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "date-picker-wrapper"], [1, "date-picker-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", 1, "calendar-icon"], ["x", "1", "y", "2", "width", "14", "height", "13", "rx", "2", "stroke", "currentColor", "stroke-width", "1.5", "fill", "none"], ["x1", "1", "y1", "6", "x2", "15", "y2", "6", "stroke", "currentColor", "stroke-width", "1.5"], ["x1", "5", "y1", "0.5", "x2", "5", "y2", "3.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["x1", "11", "y1", "0.5", "x2", "11", "y2", "3.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "date-text"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", 1, "chevron-icon"], ["d", "M3 4.5L6 7.5L9 4.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "dropdown-panel"], [1, "dropdown-panel", 3, "click"], [1, "preset-list"], [1, "preset-item", 3, "active"], [1, "calendar-panel"], [1, "calendar-nav"], [1, "nav-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["d", "M9 3L5 7L9 11", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "month-year"], ["d", "M5 3L9 7L5 11", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "calendar-grid"], [1, "weekday-label"], [1, "calendar-grid", "calendar-dates"], [1, "calendar-footer"], [1, "selected-range-label"], [1, "apply-btn", 3, "click"], [1, "preset-item", 3, "click"], [1, "empty-cell"], [1, "day-cell", 3, "today", "in-range", "range-start", "range-end"], [1, "day-cell", 3, "click", "mouseenter", "mouseleave"]], template: function DateRangePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function DateRangePickerComponent_Template_button_click_1_listener($event) {
        return ctx.toggleDropdown($event);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "rect", 3)(4, "line", 4)(5, "line", 5)(6, "line", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 8);
      \u0275\u0275element(10, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, DateRangePickerComponent_Conditional_11_Template, 25, 3, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.displayText);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showDropdown ? 11 : -1);
    }
  }, dependencies: [CommonModule, FormsModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.date-picker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-picker-btn[_ngcontent-%COMP%] {\n  height: 42px;\n  border-radius: 7px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  background: white;\n  border: 1px solid #dce5ea;\n  color: #243c50;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.date-picker-btn[_ngcontent-%COMP%]:hover {\n  border-color: #b0c4d1;\n  background: #f9fbfc;\n}\n.calendar-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #5a7085;\n}\n.date-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.chevron-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #6b8090;\n}\n.dropdown-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  background: white;\n  border: 1px solid #e2e8ed;\n  border-radius: 10px;\n  box-shadow: 0 8px 30px rgba(20, 40, 55, 0.12), 0 2px 8px rgba(20, 40, 55, 0.06);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_ddFadeIn 0.15s ease-out;\n}\n@keyframes _ngcontent-%COMP%_ddFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.preset-list[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 8px 0;\n  border-right: 1px solid #edf1f3;\n  flex-shrink: 0;\n}\n.preset-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 9px 16px;\n  border: none;\n  background: transparent;\n  text-align: left;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: #4a5d6e;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.preset-item[_ngcontent-%COMP%]:hover {\n  background: #f2f7f5;\n  color: #079b70;\n}\n.preset-item.active[_ngcontent-%COMP%] {\n  background: #e8f8f1;\n  color: #079b70;\n  font-weight: 700;\n}\n.calendar-panel[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  min-width: 280px;\n}\n.calendar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e4eaee;\n  border-radius: 6px;\n  background: white;\n  color: #4a5d6e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f2f7f5;\n  border-color: #b0c4d1;\n  color: #079b70;\n}\n.month-year[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #1e3a4f;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n}\n.weekday-label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #8d9daa;\n  padding: 4px 0 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.calendar-dates[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n}\n.day-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  width: 100%;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #3a4f60;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.1s;\n}\n.day-cell[_ngcontent-%COMP%]:hover {\n  background: #e8f8f1;\n  color: #079b70;\n}\n.day-cell.today[_ngcontent-%COMP%] {\n  border: 1.5px solid #079b70;\n  color: #079b70;\n  font-weight: 700;\n}\n.day-cell.in-range[_ngcontent-%COMP%] {\n  background: #e8f8f1;\n  border-radius: 4px;\n  color: #079b70;\n}\n.day-cell.range-start[_ngcontent-%COMP%], \n.day-cell.range-end[_ngcontent-%COMP%] {\n  background: #079b70;\n  color: white;\n  font-weight: 700;\n  border-radius: 8px;\n}\n.day-cell.range-start[_ngcontent-%COMP%]:hover, \n.day-cell.range-end[_ngcontent-%COMP%]:hover {\n  background: #068a64;\n}\n.calendar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #edf1f3;\n}\n.selected-range-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #6b8090;\n  font-weight: 500;\n}\n.apply-btn[_ngcontent-%COMP%] {\n  padding: 6px 18px;\n  border: none;\n  border-radius: 6px;\n  background: #079b70;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.apply-btn[_ngcontent-%COMP%]:hover {\n  background: #068a64;\n}\n/*# sourceMappingURL=date-range-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangePickerComponent, { className: "DateRangePickerComponent" });
})();

export {
  DateRangePickerComponent
};
//# sourceMappingURL=chunk-Y3YC6K6G.js.map
