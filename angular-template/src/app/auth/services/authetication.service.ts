import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/shared/core/entities/user';
import { UserStoreService } from 'src/app/store/user/user-store.service';
import { map, tap, first } from 'rxjs/operators';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private store: UserStoreService, 
    private msalService: MsalService,
    private broadcastService: BroadcastService,
    private router: Router) {
    this.currentUser.next((JSON.parse(localStorage.getItem('currentUser')) || null));

    if (this.currentUser.value == null && !!this.msalService.getAccount())
      this.fillMsAccount();

    this.broadcastService.subscribe("msal:loginSuccess", _ => {
      this.fillMsAccount();
    });
  }

  private fillMsAccount() {
    const user = new User;
    const msAccount = this.msalService.getAccount();
    user.fullName = msAccount.name;
    user.email = msAccount.userName;
    this.currentUser.next(user);
    this.router.navigate(['/']);
  }

  login(email: string, password: string, remember: boolean): Observable<boolean> {
    return this.store.items$.pipe(
      map(users => users.filter(user => user.email.toLowerCase() == email.toLowerCase() && user.password == password)),
      tap(users => {
        if (!!users && users.length > 0) {
          this.currentUser.next(users[0]);
        } else {
          this.currentUser.next(null);
        }
        if (remember) {
          localStorage.setItem('currentUser', JSON.stringify(users[0]));
        } else {
          localStorage.setItem('currentUser', null);
        }
      }),
      map(users => users.length > 0),
      first()
    );
  }

  loginAzure() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    const scopes = {
      extraScopesToConsent: ["user.read", "openid", "profile"]
    };

    if (isIE) {
      this.msalService.loginRedirect(scopes);
    } else {
      this.msalService.loginPopup(scopes);
    }
  }

  logout() {
    this.currentUser.next(null);
    localStorage.setItem('currentUser', null);
    //this.msalService.logout();
    this.router.navigate(['/','login']);
  }
}
