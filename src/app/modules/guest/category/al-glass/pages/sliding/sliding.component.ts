import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.component.html',
  styleUrls: ['./sliding.component.scss']
})
export class SlidingComponent {
  images = [
    {path: 'https://i.pinimg.com/474x/79/c1/37/79c137a3defbba059cf49f9d42de9d8f.jpg'},
    {path: 'https://i.pinimg.com/474x/cd/4a/f0/cd4af0d7ba76003e84285ef2e3827bd4.jpg'},
    {path: 'https://i.pinimg.com/474x/87/76/e5/8776e529438a389ad2d4fc2196aaae8d.jpg'},
    {path: 'https://i.pinimg.com/474x/40/db/3d/40db3dbec1dfcddb3bc93eb6c3960ad8.jpg'},
    {path: 'https://i.pinimg.com/474x/ca/6e/41/ca6e41131fe2c77828af301eaf2c842f.jpg'},
    {path: 'https://i.pinimg.com/474x/50/01/c1/5001c1a9fc86954b4a41bcd47d81b0c0.jpg'}
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
