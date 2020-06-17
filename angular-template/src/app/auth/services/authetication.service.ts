import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/shared/core/entities/user';
import { UserStoreService } from 'src/app/store/user/user-store.service';
import { map, tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private store: UserStoreService) 
  {
    this.currentUser.next((JSON.parse(localStorage.getItem('currentUser')) || null));
  }

  login(email: string, password: string, remember: boolean): Observable<boolean> {
    return this.store.items$.pipe(
      map(users => users.filter(user => user.email.toLowerCase()==email.toLowerCase() && user.password==password)),
      tap(users => 
        {
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
}
