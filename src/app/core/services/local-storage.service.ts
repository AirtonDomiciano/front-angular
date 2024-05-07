import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveLogin(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));

    localStorage.setItem('name', user.name);
    localStorage.setItem('token', user.token);
  }

  getLogin(): { user: any } | null {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      return null;
    }

    const user = JSON.parse(storedUser);

    if (user.token) {
      return { user };
    } else {
      return null;
    }
  }

  clearLogin() {
    localStorage.clear();
  }
}
