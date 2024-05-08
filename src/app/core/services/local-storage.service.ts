import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

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
