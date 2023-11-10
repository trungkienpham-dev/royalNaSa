import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from 'src/app/layout/sidebar-menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems = MENUITEMS
  ngOnInit(): void {

  }
  onClickMenu(item: any) {
    console.log('item', item);

  }
}
