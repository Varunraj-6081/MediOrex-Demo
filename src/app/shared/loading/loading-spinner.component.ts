import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-overlay" *ngIf="loadingService.isLoading()" role="status" aria-live="polite">
      <div class="spinner" aria-label="Loading"></div>
    </div>
  `,
  styleUrl: './loading-spinner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {
  readonly loadingService = inject(LoadingService);
}
