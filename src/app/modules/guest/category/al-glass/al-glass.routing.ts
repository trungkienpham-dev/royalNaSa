import { Routes, RouterModule } from '@angular/router';
import { AlGlassLstComponent } from './pages/al-glass-lst/al-glass-lst.component';
import { CategoryPageLayoutComponent } from 'src/app/layouts/category-page-layout/category-page-layout.component';
import { AlGlassDetailComponent } from './pages/al-glass-detail/al-glass-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageLayoutComponent,
    children: [
      { path: '', component: AlGlassLstComponent },
    ]
  },
  {
    path: ':name',
    component: AlGlassDetailComponent
  }
]

export const AlGlassRoutes = RouterModule.forChild(routes);
