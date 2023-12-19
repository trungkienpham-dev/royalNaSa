import { Routes, RouterModule } from '@angular/router';
import { ArtIronLstComponent } from './pages/art-iron-lst/art-iron-lst.component';
import { CategoryPageLayoutComponent } from 'src/app/layouts/category-page-layout/category-page-layout.component';
import { ArtIronDetailComponent } from './pages/art-iron-detail/art-iron-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageLayoutComponent,
    children: [
      { path: '', component: ArtIronLstComponent },
    ]
  },
  {
    path: ':name',
    component: ArtIronDetailComponent
  }
]

export const ArtIronRoutes = RouterModule.forChild(routes);
