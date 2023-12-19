import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUADMINITEMS } from '../sidebar-admin-page';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  constructor(
    private router: Router
  ) { }
  menuItems = MENUADMINITEMS;

  ngOnInit(): void {

  }

  onClick(item: any) {
    this.router.navigate([`admin/category/${item.path}`]);
  }
  onClickItem(item: any) {
    this.router.navigate([`${item.path}`]);

  }
}
