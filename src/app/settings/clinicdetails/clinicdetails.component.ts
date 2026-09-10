import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  ClinicDetails,
  ClinicDetailsService,
  OrganizationDetails,
} from "./clinicdetails.service";

@Component({
  selector: "app-clinic-details",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./clinicdetails.component.html",
  styleUrls: ["./clinicdetails.component.css"],
})
export class ClinicDetailsComponent implements OnInit {
  constructor(private readonly clinicDetailsService: ClinicDetailsService) {}

  ngOnInit(): void {
    this.loadDetails();
  }

  loading = true;
  saving = false;
  loadError = "";
  showSuccessDialog = false;
  successDialogMessage = "";

  clinic: ClinicDetails = {
    name: "",
    shortName: "",
    type: "",
    tagline: "",
    website: "",
    email: "",
    phone: "",
    alternatePhone: "",
    registrationNumber: "",
    licenseNumber: "",
    establishedYear: null,
    timeZone: "",
    slotDuration: "",
    lunchStart: "",
    lunchEnd: "",
    timeFormat: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    description: "",
  };

  organization: OrganizationDetails = {
    id: 0,
    code: "",
    name: "",
    type: "",
    email: "",
    phone: "",
    address: "",
    status: "",
  };

  workingHours = [
    {
      day: "Monday",
      start: "",
      end: "",
      closed: false,
    },

    {
      day: "Tuesday",
      start: "",
      end: "",
      closed: false,
    },

    {
      day: "Wednesday",
      start: "",
      end: "",
      closed: false,
    },

    {
      day: "Thursday",
      start: "",
      end: "",
      closed: false,
    },

    {
      day: "Friday",
      start: "",
      end: "",
      closed: false,
    },

    {
      day: "Saturday",
      start: "",
      end: "",
      closed: false,
    },

    {
      day: "Sunday",
      start: "",
      end: "",
      closed: true,
    },
  ];

  private loadDetails(): void {
    this.clinicDetailsService.getDetails().subscribe({
      next: (response) => {
        this.clinic = response.clinic;
        this.organization = response.organization;

        response.workingHours.forEach((hours) => {
          const day = this.workingHours[hours.dayOfWeek - 1];
          if (day) {
            day.start = hours.start;
            day.end = hours.end;
            day.closed = hours.closed;
          }
        });

        this.loading = false;
      },
      error: () => {
        this.loadError = "Unable to load clinic details.";
        this.loading = false;
      },
    });
  }

  facilities: string[] = [];

  selectTab(tab: string): void {
    console.log("Navigate to:", tab);
  }

  uploadLogo(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    if (file.size > 2 * 1024 * 1024) {
      alert("Logo size must be less than 2MB");
      return;
    }

    console.log("Logo selected:", file);
  }

  addFacility(): void {
    const facility = prompt("Enter facility name");

    if (facility && facility.trim()) {
      this.facilities.push(facility.trim());
    }
  }

  removeFacility(facility: string): void {
    this.facilities = this.facilities.filter((item) => item !== facility);
  }

  saveChanges(): void {
    this.saving = true;

    this.clinicDetailsService
      .saveDetails({
        clinic: this.clinic,
        organization: this.organization,
        workingHours: this.workingHours.map((day, index) => ({
          dayOfWeek: index + 1,
          start: day.start,
          end: day.end,
          closed: day.closed,
        })),
      })
      .subscribe({
        next: (response) => {
          this.saving = false;
          this.successDialogMessage = response.message;
          this.showSuccessDialog = true;
        },
        error: (error) => {
          this.saving = false;
          alert(error.error?.message || "Unable to save clinic details.");
        },
      });
  }

  closeSuccessDialog(): void {
    this.showSuccessDialog = false;
  }

  cancel(): void {
    console.log("Cancel changes");
  }
}
