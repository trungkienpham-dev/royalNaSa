import { Routes, RouterModule } from '@angular/router';
import { GateLstComponent } from './pages/gate-lst/gate-lst.component';

const routes: Routes = [
  {
    path: '',
    component:GateLstComponent
  },
]

export const GateRoutes = RouterModule.forChild(routes);
