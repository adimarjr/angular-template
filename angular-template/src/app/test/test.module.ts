import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
