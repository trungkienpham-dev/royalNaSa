import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../admin/admin-home/admin-home.module').then((m) => m.AdminHomeModule)
  },
  {
    path: 'category',
    loadChildren: () =>
      import('../admin/admin-category/admin-category.module').then((m) => m.AdminCategoryModule)
  },
]

export const AdminRoutes = RouterModule.forChild(routes);
