import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveLogin(user: any): void {
    localStorage.setItem('user', user);

    localStorage.setItem('token', user.token);
  }

  getLogin(): { user: any } | null {
    const user = localStorage.getItem('user');

    if (user) {
      return { user };
    } else {
      return null;
    }
  }

  clearLogin() {
    localStorage.clear();
  }
}
