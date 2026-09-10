import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';
import { ToolbarComponent } from '../../../shared/toolbar/toolbar.component';
import { DateTimeComponent } from '../../../shared/date-time/date-time.component';

@Component({
    selector: 'app-reports-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent, ToolbarComponent, DateTimeComponent],
    templateUrl: './reports-layout.component.html',
    styleUrls: ['./reports-layout.component.css']
})
export class ReportsLayoutComponent {}
