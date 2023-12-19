// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { MENUITEMS } from 'src/app/layouts/sidebar-menu';
// import { ArtIronService } from '../../services/artIron.service';

// @Component({
//   selector: 'app-gate',
//   templateUrl: './gate.component.html',
//   styleUrls: ['./gate.component.scss']
// })
// export class GateComponent {
//   images = [
//     {path: 'https://i.pinimg.com/474x/7b/f3/4b/7bf34b42dfba782b02239ffcd2614d48.jpg'},
//     {path: 'https://i.pinimg.com/474x/27/04/2f/27042fb6a1c7da3a2c65643edd595ee7.jpg'},
//     {path: 'https://i.pinimg.com/474x/15/70/90/157090604c130ceb65a526bada79af5a.jpg'},
//     {path: 'https://i.pinimg.com/474x/bf/2b/6c/bf2b6c7eba60a0efcdcc48f5372d933c.jpg'},
//     {path: 'https://i.pinimg.com/474x/6b/bb/e3/6bbbe357c37b14cfddf827899faa8012.jpg'},
//     {path: 'https://i.pinimg.com/474x/42/e8/4d/42e84d7985d52af5a5b839b7d8e95023.jpg'}
//   ]
//   constructor(
//     private router: Router,
//     private examService: ArtIronService
//   ) {}
//   menuItems = MENUITEMS;
//   category = this.menuItems.find(obj => obj.id === '3');
//   productLst = this.category?.children;

//   ngOnInit(): void {
//     this.examService
//       .find()
//       .subscribe((item: any) => {})
//   }
//   selectChild(parent: any,child: any){
//     if(parent.path === '/sat-my-thuat'){
//       this.router.navigate([`category/sat-my-thuat/${child.path}`])
//     }
//     if(parent.path === '/nhom-kinh'){
//       this.router.navigate([`category/nhom-kinh/${child.path}`])
//     }
//   }
// }
