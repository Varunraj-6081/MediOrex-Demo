import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SidebarStateService } from '../sidebar/sidebar-state.service';

@Component({
    selector: 'app-toolbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
    profileMenuOpen = false;

    constructor(
        private router: Router,
        protected readonly authService: AuthService,
        private sidebarState: SidebarStateService,
    ) {}

    get displayName(): string {
        return this.displayNameSignal();
    }

    get roleName(): string {
        return this.roleNameSignal();
    }

    get avatarInitial(): string {
        return this.avatarInitialSignal();
    }

    private readonly displayNameSignal = computed(() => {
        return this.authService.user()?.username || 'User';
    });

    private readonly roleNameSignal = computed(() => {
        return this.authService.user()?.role_name ?? '—';
    });

    private readonly avatarInitialSignal = computed(() => {
        const initial = this.displayNameSignal().trim().charAt(0);
        return (initial || 'U').toUpperCase();
    });

    toggleSidebar(): void {
        // Mobile: sidebar is an overlay menu. All other modes: collapse toggle.
        if (window.matchMedia('(max-width: 550px)').matches) {
            this.sidebarState.toggleMobile();
            return;
        }
        this.sidebarState.toggle();
    }

    toggleProfileMenu(): void {
        this.profileMenuOpen = !this.profileMenuOpen;
    }

    signOut(event: Event): void {
        event.stopPropagation();
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
