import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/core/entities/item';
import { ItemStoreService } from 'src/app/store/item/item-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  hasItems: Observable<boolean>;
  dataSource: Observable<Item[]>;
  displayedColumns = ['name', 'description', 'actions'];

  constructor(private itemStore: ItemStoreService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = this.itemStore.items$;
    this.hasItems = this.dataSource.pipe(
      map(items => !!items && items.length > 0)
    );
  }

  delete(item: Item) {
    var dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Do you really want to delete?'
      }
    });
    dialogRef.afterClosed().subscribe(result => 
      {
        if (result)
          this.itemStore.delete(item);
      });
  }
}
