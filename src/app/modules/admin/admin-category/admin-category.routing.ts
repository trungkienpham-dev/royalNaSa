import { Routes, RouterModule } from '@angular/router';
import { AdminGateComponent } from './pages/admin-gate/admin-gate.component';
import { AdminRoofComponent } from './pages/admin-roof/admin-roof.component';
import { AdminHandrailComponent } from './pages/admin-handrail/admin-handrail.component';
import { AdminStairComponent } from './pages/admin-stair/admin-stair.component';

const routes: Routes = [
  {
    path: 'gate',
    component: AdminGateComponent
  },
  {
    path: 'roof',
    component: AdminRoofComponent
  },
  {
    path: 'handrail',
    component: AdminHandrailComponent
  },
  {
    path: 'stair',
    component: AdminStairComponent
  },
]

export const AdminCategoryRoutes = RouterModule.forChild(routes);
