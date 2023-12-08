import { RouterModule, Routes } from "@angular/router";
import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/guest/guest.module').then(
            (m) => m.GuestModule
          )
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/admin/admin.module').then(
            (m) => m.AdminModule
          )
      },
    ]
  }
]

export const AppRoutes = RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always'
});
