import { Routes, RouterModule } from '@angular/router';
import { SmtLstComponent } from './admin-SMT/pages/smt-lst/smt-lst.component';

const routes: Routes = [
  {
    path: 'sat-my-thuat',
    loadChildren: () =>
    import('../admin-category/admin-SMT/adminSMT.module').then((m) => m.AdminSMTModule)
  },
  {
    path: 'nhom-kinh',
    loadChildren: () =>
    import('../admin-category/admin-NK/adminNK.modules').then((m) => m.AdminNKModule)
  }
]

export const AdminCategoryRoutes = RouterModule.forChild(routes);
