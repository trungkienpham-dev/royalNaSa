import { Routes, RouterModule } from '@angular/router';
import { QaPagesComponent } from './pages/qa-pages/qa-pages.component';

const routes: Routes = [
  {
    path: '',
    component: QaPagesComponent
  }
]

export const QARoutes = RouterModule.forChild(routes);
