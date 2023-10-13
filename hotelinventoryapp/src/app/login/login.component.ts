import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private route: Router, private loginService: LoginService) {}

  login(form: NgForm) {
    if (this.loginService.login(this.username, this.password)) {
      alert('Login Succesful');
      // this.route.navigate(['rooms', 'add']);
      this.route.navigateByUrl('/rooms');
    } else {
      alert('Login Failed');
    }
  }
}
