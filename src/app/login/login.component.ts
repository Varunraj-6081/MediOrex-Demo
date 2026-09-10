import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  showPassword = false;

  usernameError = false;
  passwordError = false;
  loginError = '';
  isSubmitting = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) { }

  signIn(): void {
    this.loginError = '';
    this.usernameError = this.username.trim() === '';
    this.passwordError = this.password.trim() === '';

    if (this.usernameError || this.passwordError) {
      return;
    }

    this.isSubmitting = true;

    this.loginService.login(this.username.trim(), this.password).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.authService.login(response.user);
        this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting = false;
        this.loginError = error.error?.message || 'Unable to sign in. Please try again.';
      },
    });
  }
}
