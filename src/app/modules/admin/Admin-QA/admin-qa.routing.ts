import { Routes, RouterModule } from '@angular/router';
import { AdminQaPagesComponent } from './pages/admin-qa-pages/admin-qa-pages.component';

const routes: Routes = [
  {
    path: '',
    component: AdminQaPagesComponent
  }
]

export const AdminQARoutes = RouterModule.forChild(routes);
