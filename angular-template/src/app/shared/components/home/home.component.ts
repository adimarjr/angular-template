import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menuItem';
import { MenuService } from '../../services/menu.service';
import { environment } from 'src/environments/environment';
import { MsalService } from '@azure/msal-angular';
import { AutheticationService } from 'src/app/auth/services/authetication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean = true;
  appName: string;
  menuItems: MenuItem[];

  constructor(private menuService: MenuService, private authService: AutheticationService) {
    this.appName = environment.appName;
  }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(items =>
      this.menuItems = items
    ).unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
