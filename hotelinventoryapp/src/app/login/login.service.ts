import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() {}

  login(username: string, password: string) {
    console.log(username, password);

    if (username == 'admin@email.com' && password == 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }

    if (username == 'admin@email.com' && password == 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }

    return this.isLoggedIn;
  }
}
