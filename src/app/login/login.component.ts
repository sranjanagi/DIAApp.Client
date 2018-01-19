import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { EAuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private authService: EAuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  RouteRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.alertify.success ('logged in successfully');
    }, error => {
      this.alertify.error('Failed to Login');
    }, () => {
      this.router.navigate(['/home']);
    });
  }
}
