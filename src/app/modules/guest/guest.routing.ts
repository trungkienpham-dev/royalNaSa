import { Routes, RouterModule } from '@angular/router';
import { CategoryPageLayoutComponent } from 'src/app/layouts/category-page-layout/category-page-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../guest/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule)
  },
  {
    path: 'introduce',
    loadChildren: () =>
      import('./introduce/introduce.module').then((m) => m.IntroduceModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule)
  }
]

export const GuestRoutes = RouterModule.forChild(routes);
