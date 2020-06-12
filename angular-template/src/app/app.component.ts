import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { MenuService } from './shared/services/menu.service';
import { MenuItem } from './shared/components/menu/menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Simple Template';

  constructor() {}

  ngOnInit() {}
}
