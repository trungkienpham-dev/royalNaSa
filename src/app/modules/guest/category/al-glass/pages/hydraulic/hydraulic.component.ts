import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';

@Component({
  selector: 'app-hydraulic',
  templateUrl: './hydraulic.component.html',
  styleUrls: ['./hydraulic.component.scss']
})
export class HydraulicComponent {
  images = [
    {path: 'https://i.pinimg.com/736x/eb/b9/75/ebb975b69a76d2f574be6e59d3e0795d.jpg'},
    {path: 'https://i.pinimg.com/474x/34/db/eb/34dbebb4e819bd5c778a7d572d9074b1.jpg'},
    {path: 'https://i.pinimg.com/474x/e9/be/33/e9be33d455a90b272a3bfe80af4af208.jpg'},
    {path: 'https://i.pinimg.com/474x/4e/3c/0a/4e3c0a266fb6afa14ba4a83d867ce239.jpg'},
    {path: 'https://i.pinimg.com/474x/53/b5/c7/53b5c76c0590d1f828afef1f5e164f48.jpg'},
    {path: 'https://i.pinimg.com/474x/e9/5d/24/e95d2496c44286aa0150f3b9408e7e52.jpg'}
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
