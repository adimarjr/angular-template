import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from './shared/components/menu/menu.module';
import { MaterialModule } from './shared/modules/material.module';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthContainerComponent } from './auth/components/auth-container/auth-container.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { SharedModule } from './shared/shared.module';

import { MsalModule } from '@azure/msal-angular';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthContainerComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    MaterialModule,
    MenuModule,
    SharedModule,
    MsalModule.forRoot({
      auth: {
          clientId: "bbd03772-6678-4b2e-9cad-e003bfa6a302",
          redirectUri: "http://localhost:4200"
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      },
    }, {
      popUp: !isIE,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      unprotectedResources: [],
      protectedResourceMap: [
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ],
      extraQueryParameters: {}
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
