import { Routes, RouterModule } from '@angular/router';
import { GateLstComponent } from './pages/gate-lst/gate-lst.component';
import { GateDetailComponent } from './pages/gate-detail/gate-detail.component';

const routes: Routes = [
  {
    path: '',
    component:GateLstComponent
  },
  {
    path: ':id',
    component: GateDetailComponent
  }
]

export const GateRoutes = RouterModule.forChild(routes);
