import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { EAuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { AlertifyService } from './_services/alertify.service';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { EqualValidator } from './register/equal-validator.directive';

// Google and Facebook configurations

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1059279997568-5qnsr4tgk34qafk0c0icdv728mei897p.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('584372748574112')
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ForbiddenValidatorDirective,
    EqualValidator 
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [EAuthService,
  AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
