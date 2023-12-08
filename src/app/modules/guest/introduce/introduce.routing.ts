import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent
  },
]

export const IntroduceRoutes = RouterModule.forChild(routes);
