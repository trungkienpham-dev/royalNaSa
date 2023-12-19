import { Routes, RouterModule } from '@angular/router';
import { SmtLstComponent } from './pages/smt-lst/smt-lst.component';
import { SmtDetailComponent } from './pages/smt-detail/smt-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SmtLstComponent
  },
  {
    path: ':name',
    component: SmtDetailComponent
  }
]

export const AdminSMTRoutes = RouterModule.forChild(routes);
