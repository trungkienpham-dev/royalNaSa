import { Routes, RouterModule } from '@angular/router';
import { GateLstComponent } from './gate/pages/gate-lst/gate-lst.component';

const routes: Routes = [
  {
    path: 'gate',
    loadChildren: () =>
      import('../category/gate/gate.module').then((m) => m.GateModule),
  },
]

export const CategoryRoutes = RouterModule.forChild(routes);
