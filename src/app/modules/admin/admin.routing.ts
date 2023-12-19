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
  {
    path: 'quotation',
    loadChildren: () =>
      import('../admin/admin-quotation/admin-quotation.module').then((m) => m.AdminQuotationModule)
  },
  {
    path: 'Q&A',
    loadChildren: () =>
      import('../admin/Admin-QA/admin-qa.module').then((m) => m.AdminQAModule)
  }
]

export const AdminRoutes = RouterModule.forChild(routes);
