import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';
import { sharaDataService } from '../../services/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private sharedService: sharaDataService
  ) { }
  menuItems: any[] = []
  ngOnInit(): void {
    this.getCategory()
  }
  backHomePage() {
    this.router.navigate(["/"])
  }

  getCategory() {
    this.sharedService
      .findCategory('CATEGORY')
      .subscribe((item: any) => {
        this.menuItems = JSON.parse(item[0].data)
        console.log(' JSON.parse(item[0].data)', this.menuItems);
      })
  }

  onClickItem(item: any) {
    this.router.navigate([`${item.path}`])
  }
  onSelectChild(item: any) {
    this.router.navigate([`category/${item.path}`])
  }
  onSelectGrandChild(child: any, grandChild: any) {
    this.router.navigate([`category/${child.path}/${grandChild.path}`])
  }
}
