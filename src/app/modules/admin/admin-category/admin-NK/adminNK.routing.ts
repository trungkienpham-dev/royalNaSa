import { Routes, RouterModule } from '@angular/router';
import { NkLstComponent } from './pages/nk-lst/nk-lst.component';
import { NkDetailComponent } from './pages/nk-detail/nk-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NkLstComponent
  },
  {
    path: ':name',
    component: NkDetailComponent
  }
]

export const AdminNKRoutes = RouterModule.forChild(routes);
