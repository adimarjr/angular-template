import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appName: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.appName = environment.appName;
  }

  login(loginForm: NgForm){
    console.log(loginForm);
    if(loginForm.valid)
      this.router.navigate(['/']);
  }
}
