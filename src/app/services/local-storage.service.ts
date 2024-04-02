import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveLogin(email: string, password: string): void {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  getLogin(): { email: string; password: string } | null {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) {
      return { email, password };
    } else {
      return null;
    }
  }

  clearLogin() {
    localStorage.clear();
  }
}
