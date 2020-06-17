import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/core/entities/item';
import { ItemStoreService } from 'src/app/store/item/item-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  hasItems: Observable<boolean>;
  dataSource: Observable<Item[]>;
  displayedColumns = ['name', 'description'];

  constructor(private itemStore: ItemStoreService) { }

  ngOnInit(): void {
    this.dataSource = this.itemStore.items$;
    this.hasItems = this.dataSource.pipe(
      map(items => !!items && items.length > 0)
    );
  }

}
