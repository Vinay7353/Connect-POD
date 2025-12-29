import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loggedIn = false;

  constructor() {}

  login(email: string, password: string): boolean {
    // TODO: replace with real API call
    if (email && password) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }
  
  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
