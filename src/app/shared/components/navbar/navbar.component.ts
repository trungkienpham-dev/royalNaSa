import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router
  ){}
  menuItems = MENUITEMS
  ngOnInit(): void {}
  onClickItem(item: any) {
    this.router.navigate([`${item.path}`])
  }
  onSelectGrandChild(item: any) {
    this.router.navigate([`category/${item.path}`])
  }

}
