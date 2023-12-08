import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent
  },
]

export const ContactRoutes = RouterModule.forChild(routes);
