import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-roof',
  templateUrl: './roof.component.html',
  styleUrls: ['./roof.component.scss']
})
export class RoofComponent {
  images = [
    {path: 'https://i.pinimg.com/474x/fc/c8/8f/fcc88f44b444b9a2002dced22ef7eb7e.jpg'},
    {path: 'https://i.pinimg.com/474x/e7/33/9a/e7339aa58828f462f7d8c404b87751c0.jpg'},
    {path: 'https://i.pinimg.com/474x/94/c0/67/94c06742669d77fed7a0d21c9419ff81.jpg'},
    {path: 'https://i.pinimg.com/474x/9c/b4/bc/9cb4bc4ec284230318362a23c1de17e4.jpg'},
    {path: 'https://i.pinimg.com/474x/91/7e/50/917e50e56fb152f7ef4a306d3a1fc4e2.jpg'},
    {path: 'https://i.pinimg.com/474x/63/dc/0d/63dc0d0dd390e2b44d089eb8c3e8859c.jpg'}
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
