import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';
import { ToolbarComponent } from '../../../shared/toolbar/toolbar.component';
import { DateTimeComponent } from '../../../shared/date-time/date-time.component';

@Component({
    selector: 'app-queue-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent, ToolbarComponent, DateTimeComponent],
    templateUrl: './queue-layout.component.html',
    styleUrls: ['./queue-layout.component.css']
})
export class QueueLayoutComponent {}
