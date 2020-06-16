import { Injectable } from '@angular/core';
import { BaseServiceLocalService } from 'src/app/shared/services/base-service-local.service';
import { Item } from 'src/app/shared/core/entities/item';

@Injectable({
  providedIn: 'root'
})
export class ItemLocalService extends BaseServiceLocalService<Item> {

  constructor() {
    super();
    super.storageName = "items"
  }
}
