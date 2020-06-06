import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MenuItem } from '../menuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(-90deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
    trigger('openClose', [
      state('true', style({ opacity: '1', height: '*' })),
      state('*', style({ opacity: '0', height: '0px' })),
      transition('* <=> true', animate('200ms'))
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  @Input()
  item: MenuItem;
  @Input()
  depth: number = 0;
  
  expanded: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toogle() {
    this.expanded = !this.expanded;
  }
}
