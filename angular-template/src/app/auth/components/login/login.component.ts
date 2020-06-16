import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { UserService } from '../../services/user.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

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
    private userService: UserService) { }

  ngOnInit(): void {
    this.appName = environment.appName;
  }

  login(loginForm: NgForm){
    console.log(loginForm);
    if(loginForm.valid) {
      this.userService.login(loginForm.value.email, loginForm.value.password)
      .subscribe(result => result ? this.router.navigate(['/']) : this.toaster.success('Invalid e-mail/password') 
      );
    }
  }
}
