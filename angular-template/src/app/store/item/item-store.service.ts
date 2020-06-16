import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from '../../shared/core/entities/item';
import { ItemLocalService } from './item-local.service';
import { BaseStoreService } from '../base-store.service';

@Injectable({
  providedIn: 'root'
})

export class ItemStoreService extends BaseStoreService<Item, ItemLocalService> {
    constructor(service: ItemLocalService) {
      super(service);
      
    }

}
