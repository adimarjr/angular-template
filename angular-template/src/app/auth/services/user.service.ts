import { Injectable } from '@angular/core';
import { UserStoreService } from 'src/app/store/user/user-store.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, first } from 'rxjs/operators';
import { User } from 'src/app/shared/core/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private store: UserStoreService) { }

  isEmailRegistered(email: string): Observable<boolean> {
    return this.store.items$.pipe(
      map(users => users.filter(user => user.email.toLowerCase()==email.toLowerCase())),
      map(users => users.length > 0),
      first()
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.store.items$.pipe(
      map(users => users.filter(user => user.email.toLowerCase()==email.toLowerCase() && user.password==password)),
      tap(users => !!users && users.length > 0 ? this.currentUser.next(users[0]) : this.currentUser.next(null)),
      map(users => users.length > 0),
      first()
    );
  }
}
