import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}
  menuItems = MENUITEMS
  ngOnInit(): void {}
  backHomePage(){
    this.router.navigate(["/"])
  }
}
