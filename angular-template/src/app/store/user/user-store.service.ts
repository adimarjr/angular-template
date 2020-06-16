import { Injectable } from '@angular/core';
import { BaseStoreService } from '../base-store.service';
import { User } from 'src/app/shared/core/entities/user';
import { UserLocalService } from './user-local.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService extends BaseStoreService<User, UserLocalService> {

  constructor(service: UserLocalService) {
    super(service);
  }
}
