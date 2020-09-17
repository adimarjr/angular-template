import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { AutheticationService } from '../../services/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appName: string;

  constructor(
    private router: Router, 
    private toaster: ToasterService,
    private authService: AutheticationService) { }

  ngOnInit(): void {
    this.appName = environment.appName;
  }

  login(loginForm: NgForm){
    console.log(loginForm);
    if(loginForm.valid) {
      this.authService.login(loginForm.value.email, loginForm.value.password, loginForm.value.remember)
      .subscribe(result => result ? this.router.navigate(['/']) : this.toaster.success('Invalid e-mail/password') 
      );
    }
  }

  azureLogin() {
    this.authService.loginAzure();
  }
}
