import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: SocialUser;
  model: any = {};
  loggedIn: boolean;
  
  constructor(private eAuthService: AuthService) { }

  ngOnInit() {
    this.eAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

}
