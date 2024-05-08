import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from '../core/services/local.service';
import { AuthService } from '../core/guards/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    public router: Router,
    public override http: HttpClient,
    private authService: AuthService,
    public local: LocalService
  ) {
    super(http);
  }

  // Sign in with email/password
  async SignIn(
    email: string,
    password: string
  ): Promise<{ status: boolean; message: string }> {
    const login = { email, password };

    return new Promise<{ status: boolean; message: string }>((resolve) => {
      this.post('/auth/login', login).subscribe((res: any) => {
        if (res?.success) {
          const { data } = res;
          this.local.setUser(data);
          this.local.setToken(res.data.token);
          this.authService.setAuthenticationStatus(res.data.token);
          resolve({ status: res?.success, message: res.message });
        }

        // Caso o usuário não tenha permissão;
        resolve({ status: res?.success, message: res.message });
      });
    });
  }
}
