import { RouterModule, Routes } from "@angular/router";
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";

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
]

export const AppRoutes = RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always'
});
