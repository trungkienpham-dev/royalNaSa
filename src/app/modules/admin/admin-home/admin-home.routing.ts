import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './pages/default-page/default-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultPageComponent
},
]

export const AdminHomeRoutes = RouterModule.forChild(routes);
