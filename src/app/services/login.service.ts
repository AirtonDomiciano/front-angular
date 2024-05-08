import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../core/services/local-storage.service';
import { AuthService } from '../core/guards/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    public router: Router,
    public local: LocalStorageService,
    public override http: HttpClient,
    private authService: AuthService
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
          this.setUser(data);
          this.setToken(res.data.token);
          this.authService.setAuthenticationStatus(res.data.token);
          resolve({ status: res?.success, message: res.message });
        }

        // Caso o usuário não tenha permissão;
        resolve({ status: res?.success, message: res.message });
      });
    });
  }

  private readonly STORAGE_KEY = 'user';

  setUser(user: any): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  getUser(): any {
    const user = localStorage.getItem(this.STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  removeUser(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  removeToken(): void {
    localStorage.removeItem('access_token');
  }
}
