import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-rotating',
  templateUrl: './rotating.component.html',
  styleUrls: ['./rotating.component.scss']
})
export class RotatingComponent {
  images = [
    {path: 'https://i.pinimg.com/474x/a9/28/40/a9284082a0fe4ff73b9cc3e6867e41f0.jpg'},
    {path: 'https://i.pinimg.com/474x/89/ce/82/89ce8222cab8d60f24d12752487fe7b7.jpg'},
    {path: 'https://i.pinimg.com/474x/74/85/63/74856365b65a46ca1bb671a972b05642.jpg'},
    {path: 'https://i.pinimg.com/474x/56/22/1e/56221e683f73ffb3192d04217c145136.jpg'},
    {path: 'https://i.pinimg.com/474x/e0/1b/86/e01b86de6cd013f1dd5577146e9e0653.jpg'},
    {path: 'https://i.pinimg.com/474x/8e/db/fa/8edbfa02193ede7d80e34c52a644fd6d.jpg'}
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
