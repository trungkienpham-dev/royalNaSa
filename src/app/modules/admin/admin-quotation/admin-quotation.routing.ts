import { Routes, RouterModule } from '@angular/router';
import { AdminQuotaionComponent } from './pages/admin-quotaion/admin-quotaion.component';
import { AdminQuotaionDetailComponent } from './pages/admin-quotaion-detail/admin-quotaion-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdminQuotaionComponent
  },
  {
    path: ':phoneNumber',
    component: AdminQuotaionDetailComponent
  }
]

export const AdminQuotationRoutes = RouterModule.forChild(routes);
