import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-swing',
  templateUrl: './swing.component.html',
  styleUrls: ['./swing.component.scss']
})
export class SwingComponent {
  images = [
    {path: 'https://tostemvietnam.com/wp-content/uploads/2023/03/cua-di-mo-lua-mo-quay-7.png'},
    {path: 'https://tostemvietnam.com/wp-content/uploads/2023/03/cua-di-mo-lua-mo-quay.png'},
    {path: 'https://tostemvietnam.com/wp-content/uploads/2023/03/cua-di-mo-lua-mo-quay-6.png'},
    {path: 'https://tostemvietnam.com/wp-content/uploads/2023/03/cua-di-mo-lua-mo-quay-5.png'},
    {path: 'https://tostemvietnam.com/wp-content/uploads/2023/03/cua-di-mo-lua-mo-quay-2.png'},
  ]
  constructor(
    private router: Router
  ) {}
  menuItems = MENUITEMS;
  category = this.menuItems.find(obj => obj.id === '3');
  productLst = this.category?.children;

  ngOnInit(): void {}
  selectChild(parent: any,child: any){
    if(parent.path === '/sat-my-thuat'){
      this.router.navigate([`category/sat-my-thuat/${child.path}`])
    }
    if(parent.path === '/nhom-kinh'){
      this.router.navigate([`category/nhom-kinh/${child.path}`])
    }
  }
}
