import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  isLoggedIn: boolean = false;

  login(username: string, password: string) {
    if (username == 'admin@email.com' && password == 'admin') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
