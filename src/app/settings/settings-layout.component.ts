import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { ToolbarComponent } from "../shared/toolbar/toolbar.component";
import { DateTimeComponent } from "../shared/date-time/date-time.component";

@Component({
  selector: "app-settings-layout",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    ToolbarComponent,
    DateTimeComponent,
  ],
  templateUrl: "./settings-layout.component.html",
  styleUrls: ["./settings-layout.component.css"],
})
export class SettingsLayoutComponent {}
