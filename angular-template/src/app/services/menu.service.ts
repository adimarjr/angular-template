import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../menu/menuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  
  getMenuItems(): Observable<MenuItem[]> {
    return of([
      { name: 'Home', route: '/', icon: 'home' },
      { name: 'Account', route: 'account', icon: 'supervisor_account' },
      { name: 'Items', icon: 'dvr', children: [
        { name: 'Items', route: 'items' },
        { name: 'Categorias', route: 'categorias', icon: 'label', children: [
          { name: 'Sub-Categorias', route: 'subcategorias', icon: 'adb' }
        ] }
      ]},
      { name: 'Devices', route: 'devices', icon: 'devices' },
    ]);
  }
}
