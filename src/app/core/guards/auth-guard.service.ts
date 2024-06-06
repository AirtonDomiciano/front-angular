import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private isAuthenticated: boolean = false;
  private accessToken: string = '';

  constructor(private router: Router) {}

  setAuthenticationStatus(accessToken: string) {
    this.accessToken = accessToken;

    this.isAuthenticated = accessToken.length > 0;

    // const isTokenExpired = !this.jwtHelper.isTokenExpired(accessToken);
    // this.isAuthenticated = accessToken?.length > 0 && isTokenExpired;
  }

  canActivate() {
    const token = (localStorage.getItem('access_token') as string) || '';
    this.setAuthenticationStatus(token);
    if (!this.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
