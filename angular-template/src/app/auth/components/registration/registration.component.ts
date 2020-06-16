import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserStoreService } from 'src/app/store/user/user-store.service';
import { UserService } from '../../services/user.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email], [this.validateEmail.bind(this)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
  });

  constructor(
    private store: UserStoreService, 
    private userService: UserService,
    private toaster: ToasterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    if(this.form.valid) {
      this.store.add({
        id: '',
        fullName: this.form.value.fullName,
        email: this.form.value.email,
        password: this.form.value.password
      });
      this.toaster.success('User registered');
      this.router.navigate(['/login']);
    }
  }

  validateEmail(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.isEmailRegistered(control.value).pipe(
      tap(isTaken => console.log(isTaken)),
      map(isTaken => isTaken ? { 'emailRegistered' : true } : null),
      catchError(() => of(null))
    );
  }
}
