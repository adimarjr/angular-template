import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';



@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    RouterModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
