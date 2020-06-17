import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItemStoreService } from 'src/app/store/item/item-store.service';
import { Item } from 'src/app/shared/core/entities/item';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  subs: Subscription;
  item: Item;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('')
  });

  constructor(
    private itemStore: ItemStoreService, 
    private router: Router,
    private toaster: ToasterService) { }

  ngOnInit(): void {
    this.subs = this.itemStore.item$
      .pipe(
        tap((itemReceived: Item) => {
          this.item = itemReceived;
          if (itemReceived) {
            this.form.controls.name.setValue(this.item.name);
            this.form.controls.description.setValue(this.item.description);
          }
        }),
        tap(item => console.log(item))
      ).subscribe();
  }

  save() {
    if(this.form.valid) {
      if (!!this.item) {
        this.item.name = this.form.controls.name.value;
        this.item.description = this.form.controls.description.value;
        this.itemStore.update(this.item);
      } else {
        this.itemStore.add({
          id: '',
          name: this.form.controls.name.value,
          description: this.form.controls.description.value
        });
      }
      this.router.navigateByUrl('/item');
    } else {
      this.toaster.error('Fill all required fields');
    }
  }

}
