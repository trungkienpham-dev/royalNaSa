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
    component: CategoryPageLayoutComponent,
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule)
  }
]

export const GuestRoutes = RouterModule.forChild(routes);
