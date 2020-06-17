import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';
import { ItemComponent } from './components/item/item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ItemEditComponent } from './components/item-edit/item-edit.component';


@NgModule({
  declarations: [ItemComponent, ItemEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestRoutingModule,
    FlexLayoutModule,
    SharedModule,
  ]
})
export class TestModule { }
