import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';
import { ToolbarComponent } from '../../../shared/toolbar/toolbar.component';
import { DateTimeComponent } from '../../../shared/date-time/date-time.component';

@Component({
    selector: 'app-booking-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent, ToolbarComponent, DateTimeComponent],
    templateUrl: './booking-layout.component.html',
    styleUrls: ['./booking-layout.component.css']
})
export class BookingLayoutComponent implements OnInit, OnDestroy {

    childTitle = 'Book Appointment';

    private routerSubscription: Subscription | null = null;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.updateCrumb();
        this.routerSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.updateCrumb();
            }
        });
    }

    ngOnDestroy(): void {
        this.routerSubscription?.unsubscribe();
    }

    private updateCrumb(): void {

        if (this.router.url.includes('appointment-list')) {
            this.childTitle = 'Appointment List';
        } else {
            this.childTitle = 'Book Appointment';
        }

    }
}
