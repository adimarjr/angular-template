import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { MenuService } from './services/menu.service';
import { MenuItem } from './menu/menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Simple Template';
  opened: boolean = true;
  appName: string;
  menuItems: MenuItem[];

  constructor(private menuService: MenuService) {
    this.appName = environment.appName;
  }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(items =>
      this.menuItems = items
    ).unsubscribe();
  }
}
