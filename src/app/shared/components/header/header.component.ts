import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from 'src/app/layout/sidebar-menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = MENUITEMS
  ngOnInit(): void {
      console.log('menu', this.menuItems)
  }
}
