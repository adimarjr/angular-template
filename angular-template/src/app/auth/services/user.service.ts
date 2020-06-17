import { Injectable } from '@angular/core';
import { UserStoreService } from 'src/app/store/user/user-store.service';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: UserStoreService) { }

  isEmailRegistered(email: string): Observable<boolean> {
    return this.store.items$.pipe(
      map(users => users.filter(user => user.email.toLowerCase()==email.toLowerCase())),
      map(users => users.length > 0),
      first()
    );
  }
}
