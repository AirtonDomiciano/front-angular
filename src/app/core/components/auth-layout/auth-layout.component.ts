import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../guards/auth.service';

@Component({
  selector: 'auth-layout',
  template: ` <div>
    <div id="content">
      <div>
        <router-outlet></router-outlet>
      </div>
      <!-- <app-footer></app-footer> -->
    </div>
  </div>`,
})
export class AuthLayoutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = (localStorage.getItem('access_token') as string) || '';
    if (token?.length > 0) {
      this, this.authService.setAuthenticationStatus(token);
      // this.router.navigate(['/private/home']);
    }
  }
}
