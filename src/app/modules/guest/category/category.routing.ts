import { Routes, RouterModule } from '@angular/router';
import { CategoryPageLayoutComponent } from 'src/app/layouts/category-page-layout/category-page-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../category/allProduct/allProduct.module').then((m) => m.AllProductModule),
  },
  {
    path: 'sat-my-thuat',
    // component: CategoryPageLayoutComponent,
    loadChildren: () =>
      import('./art-iron/artIron.module').then((m) => m.ArtIronModule),
  },
  {
    path: 'nhom-kinh',
    // component: CategoryPageLayoutComponent,
    loadChildren: () =>
      import('./al-glass/al-glass.module').then((m) => m.AlGlassModule),
  },
]

export const CategoryRoutes = RouterModule.forChild(routes);
