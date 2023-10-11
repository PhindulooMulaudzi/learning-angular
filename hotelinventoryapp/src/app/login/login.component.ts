import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private route: Router) {}

  login(form: NgForm) {
    if (this.username == 'admin@email.com' && this.password == 'admin') {
      alert('Login Succesful');
      this.route.navigate(['rooms', 'add']);
      this.route.navigateByUrl('/rooms/add');
    }
  }
}
