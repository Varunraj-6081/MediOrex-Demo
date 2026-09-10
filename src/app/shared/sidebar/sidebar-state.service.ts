import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarStateService {
    readonly collapsed = signal(false);
    readonly mobileOpen = signal(false);

    toggle(): void {
        this.collapsed.update((collapsed) => !collapsed);
    }

    toggleMobile(): void {
        this.mobileOpen.update((open) => !open);
    }

    closeMobile(): void {
        this.mobileOpen.set(false);
    }
}
