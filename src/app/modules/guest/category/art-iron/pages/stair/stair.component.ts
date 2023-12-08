import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-stair',
  templateUrl: './stair.component.html',
  styleUrls: ['./stair.component.scss']
})
export class StairComponent {
  images = [
    {path: 'https://i.pinimg.com/474x/d8/a8/f0/d8a8f016cd662a161e6316fbcf002942.jpg'},
    {path: 'https://i.pinimg.com/474x/d8/a8/f0/d8a8f016cd662a161e6316fbcf002942.jpg'},
    {path: 'https://i.pinimg.com/474x/2a/55/b2/2a55b285f40cbc3d131d762e68287b84.jpg'},
    {path: 'https://i.pinimg.com/474x/18/73/f3/1873f3769ab99ad5eff17b919e3337cc.jpg'},
    {path: 'https://i.pinimg.com/474x/f1/b7/ad/f1b7ade7225f26fb9e68831f5d749e0c.jpg'},
    {path: 'https://i.pinimg.com/474x/42/ce/93/42ce93b8cf73c620d63a0264b67973b7.jpg'}
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
