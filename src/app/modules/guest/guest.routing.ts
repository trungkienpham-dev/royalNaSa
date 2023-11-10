import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../guest/home/home.module').then((m) => m.HomeModule),
  },
]

export const GuestRoutes = RouterModule.forChild(routes);
