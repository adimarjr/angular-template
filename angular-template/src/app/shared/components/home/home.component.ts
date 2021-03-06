import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menuItem';
import { MenuService } from '../../services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
