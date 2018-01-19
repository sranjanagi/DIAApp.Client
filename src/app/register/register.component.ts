import { Component, OnInit } from '@angular/core';
import { EAuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: SocialUser;
  model: any = {};

  private loggedIn: boolean;

  constructor(private authService: EAuthService, private alertify: AlertifyService,
    private eAuthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.eAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

    });

     }

  register() {
    this.model.LoginType = 'Email';
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success ('registration successful');
    }, error => {
      this.alertify.error (error);
    });
  }

  callRegisterAPI() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success ('registration successful');
      console.log(this.model);
    }, error => {
      this.alertify.error (error);
    });
  }



  signInWithGoogle(): void {
    this.model = {};
    this.eAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (success) => {

          this.eAuthService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
          this.model.Username = this.user.email;
          this.model.LoginType = this.user.provider;
          this.callRegisterAPI();

        });

      }).catch(
        (err) => {
          this.alertify.error(err);
        });
  }

  signInWithFB(): void {
    this.model = {};
    this.eAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (success) => {

          this.eAuthService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
          this.model.Username = this.user.email;
          this.model.LoginType = this.user.provider;
          this.callRegisterAPI();
        });

      }).catch(
        (err) => {
          this.alertify.error(err);
        });
  }
  signOut(): void {
    this.eAuthService.signOut();
  }

}
