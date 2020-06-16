import { Injectable } from '@angular/core';
import { BaseServiceLocalService } from 'src/app/shared/services/base-service-local.service';
import { User } from 'src/app/shared/core/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserLocalService extends BaseServiceLocalService<User> {
  
  constructor() {
    super();
    super.storageName = 'users';
  }
}
