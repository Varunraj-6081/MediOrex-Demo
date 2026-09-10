import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { Subscription } from "rxjs";
import { SidebarStateService } from "./sidebar-state.service";

interface SubMenuItem {
  label: string;
  icon: string;
  route?: string;
  active?: boolean;
}

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: SubMenuItem[];
  expanded?: boolean;
  active?: boolean;
}

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription | null = null;

  constructor(
    public sidebarState: SidebarStateService,
    private router: Router,
  ) {}

  menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: "home",
      route: "/home",
    },
    {
      label: "Patient Management",
      icon: "person",
      expanded: false,
      children: [
        {
          label: "Patient Registration",
          icon: "person_add",
          route: "/patient/register",
        },
        { label: "View Patients", icon: "list_alt", route: "/patient/view" },
      ],
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
          route: "/booking",
        },
        { label: "Queue", icon: "queue", route: "/queue" },
        { label: "Reports & Analytics", icon: "bar_chart", route: "/reports" },
      ],
    },
    {
      label: "Billing Management",
      icon: "receipt_long",
      expanded: false,
      children: [
        {
          label: "Generate Bill",
          icon: "receipt_long",
          route: "/billing/generate",
        },
        { label: "View Bills", icon: "list_alt", route: "/billing/view" },
      ],
    },
    {
      label: "Settings",
      icon: "settings",
      route: "/settings",
    },
  ];

  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {
    this.syncExpandedWithRoute();
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.syncExpandedWithRoute();
        // Mobile overlay menu hides after navigating to another page.
        this.sidebarState.closeMobile();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  selectMenu(item: MenuItem): void {
    this.menuItems.forEach((menu) => (menu.active = false));

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

  private syncExpandedWithRoute(): void {
    const url = this.router.url;

    this.menuItems.forEach((menu) => {
      if (!menu.children) {
        return;
      }

      menu.expanded = menu.children.some(
        (child) => !!child.route && url.startsWith(child.route),
      );
    });
  }
}
