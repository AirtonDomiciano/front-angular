import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private authGuard: AuthGuardService) {}

  // Function to set authentication status
  setAuthenticationStatus(accessToken: string) {
    this.authGuard.setAuthenticationStatus(accessToken);
    if (accessToken) {
      this.router.navigate(['/private/home']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  // Function to logout the user
  logout() {
    this.setAuthenticationStatus('');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);

    if (token && token?.length > 0) return true;

    return false;
  }
}
