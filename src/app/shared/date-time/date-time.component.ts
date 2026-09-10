import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
    selector: 'app-date-time',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './date-time.component.html',
    styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit, OnDestroy {
    currentDate = new Date();
    private clockSubscription: Subscription | null = null;

    ngOnInit(): void {
        this.clockSubscription = timer(0, 1000).subscribe(() => {
            this.currentDate = new Date();
        });
    }

    ngOnDestroy(): void {
        this.clockSubscription?.unsubscribe();
    }
}
