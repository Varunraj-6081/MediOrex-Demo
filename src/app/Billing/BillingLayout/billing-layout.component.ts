import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { DateTimeComponent } from '../../shared/date-time/date-time.component';

@Component({
    selector: 'app-billing-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent, ToolbarComponent, DateTimeComponent],
    templateUrl: './billing-layout.component.html',
    styleUrls: ['./billing-layout.component.css']
})
export class BillingLayoutComponent implements OnInit, OnDestroy {
    childTitle = 'Generate Bill';
    private routerSubscription: Subscription | null = null;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.updateCrumb();
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.updateCrumb();
            }
        });
    }

    ngOnDestroy(): void {
        this.routerSubscription?.unsubscribe();
    }

    private updateCrumb(): void {
        this.childTitle = this.router.url.includes('/view')
            ? 'View Bills'
            : 'Generate Bill';
    }
}
