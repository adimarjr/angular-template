import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemResolver } from './resolvers/item-resolver';


const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'add', component: ItemEditComponent },
  { 
    path: 'edit/:id', 
    component: ItemEditComponent,
    resolve: {
      item: ItemResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
