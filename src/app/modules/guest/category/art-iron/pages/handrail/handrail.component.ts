import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-handrail',
  templateUrl: './handrail.component.html',
  styleUrls: ['./handrail.component.scss']
})
export class HandrailComponent {
  images = [
    {path: 'https://i.pinimg.com/474x/7b/f3/4b/7bf34b42dfba782b02239ffcd2614d48.jpg'},
    {path: 'https://i.pinimg.com/474x/99/7d/56/997d5617761ee90484086ffe05ee335d.jpg'},
    {path: 'https://i.pinimg.com/474x/de/53/80/de53805c3488bffa2816a95bcd4d0d64.jpg'},
    {path: 'https://i.pinimg.com/474x/8f/40/d6/8f40d6e32de5143dfe79e896f3f96461.jpg'},
    {path: 'https://i.pinimg.com/474x/80/1d/46/801d466c65a17a7c264e2aee6e5cb909.jpg'},
    {path: 'https://i.pinimg.com/474x/81/7b/40/817b40987643a5f8dd417d7d4547635a.jpg'}
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
