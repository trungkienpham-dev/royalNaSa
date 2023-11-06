import { Component } from '@angular/core';
import { MENUITEMS } from '../sidebar-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['content-layout.component.scss']
})
export class ContentLayoutComponent {
  menuItems = MENUITEMS;
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

}
