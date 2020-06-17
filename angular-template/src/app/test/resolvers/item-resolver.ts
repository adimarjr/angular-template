import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from 'src/app/shared/core/entities/item';
import { ItemStoreService } from 'src/app/store/item/item-store.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {

  constructor(private itemStore: ItemStoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Item | import("rxjs").Observable<Item> | Promise<Item> {
    return this.itemStore.getItem(route.paramMap.get('id'));
  }
}
