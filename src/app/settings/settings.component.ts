import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutSystemComponent } from "./about-system/about-system.component";
import { SettingsUsersComponent } from "./users/users.component";
import { ClinicDetailsComponent } from "./clinicdetails/clinicdetails.component";
import { ClinicDetailsService } from "./clinicdetails/clinicdetails.service";
import { UsersService } from "./users/users.service";

type SettingsTab = "general" | "users" | "security" | "clinic" | "about";

@Component({
  selector: "app-settings",
  standalone: true,
  imports: [
    CommonModule,
    AboutSystemComponent,
    SettingsUsersComponent,
    ClinicDetailsComponent,
  ],
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent {
  constructor(
    private readonly usersService: UsersService,
    private readonly clinicDetailsService: ClinicDetailsService,
  ) {
    this.loadRecentUsers();
    this.loadHospitalDetails();
  }

  activeTab: SettingsTab = "general";

  hospital = {
    name: "",
    type: "",
    tagline: "",
    address: "",
    phone: "",
    email: "",
    website: "",
  };

  private loadHospitalDetails(): void {
    this.clinicDetailsService.getDetails().subscribe({
      next: (response) => {
        const clinic = response.clinic;
        const organization = response.organization;

        this.hospital = {
          name: clinic.name || organization.name,
          type: clinic.type || organization.type,
          tagline: clinic.tagline,
          address: [
            clinic.address1,
            clinic.address2,
            clinic.city,
            clinic.state,
            clinic.pincode,
          ]
            .filter(Boolean)
            .join(", "),
          phone: clinic.phone || organization.phone,
          email: clinic.email || organization.email,
          website: clinic.website,
        };
      },
    });
  }

  users: Array<{
    name: string;
    username: string;
    initials: string;
    designation: string;
    role: string;
    roleClass: string;
    email: string;
    lastLogin: string;
    status: string;
    color: string;
  }> = [];

  private loadRecentUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response.users
          .slice()
          .sort(
            (left, right) =>
              this.loginTimestamp(right.lastLoginAt) -
              this.loginTimestamp(left.lastLoginAt),
          )
          .slice(0, 5)
          .map((user, index) => {
            const name = [user.firstName, user.lastName]
              .filter(Boolean)
              .join(" ");
            const role = user.roles[0] || "Staff";

            return {
              name: name || user.username,
              username: user.username,
              initials: this.initials(name || user.username),
              designation: role,
              role: this.displayRole(role),
              roleClass: role.toLowerCase().replace(/\s+/g, "-"),
              email: user.email || "-",
              lastLogin: this.formatLastLogin(user.lastLoginAt),
              status: user.status,
              color: ["#3b82f6", "#2496ed", "#6366f1", "#10b981", "#ef4444"][
                index % 5
              ],
            };
          });
      },
    });
  }

  private loginTimestamp(value: string | null): number {
    return value ? new Date(value).getTime() : 0;
  }

  private initials(name: string): string {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  private displayRole(role: string): string {
    return role
      .toLowerCase()
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  private formatLastLogin(value: string | null): string {
    if (!value) {
      return "Never";
    }

    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  }

  editHospital(): void {
    console.log("Edit hospital clicked");
  }

  setActiveTab(tab: string): void {
    if (
      tab === "general" ||
      tab === "users" ||
      tab === "security" ||
      tab === "clinic" ||
      tab === "about"
    ) {
      this.activeTab = tab;

      if (tab === "general") {
        this.loadHospitalDetails();
      }
    }
  }
}
