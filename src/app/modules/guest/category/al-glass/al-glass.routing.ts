import { Routes, RouterModule } from '@angular/router';
import { AlGlassLstComponent } from './pages/al-glass-lst/al-glass-lst.component';
import { HydraulicComponent } from './pages/hydraulic/hydraulic.component';
import { CategoryPageLayoutComponent } from 'src/app/layouts/category-page-layout/category-page-layout.component';
import { SlidingComponent } from './pages/sliding/sliding.component';
import { RotatingComponent } from './pages/rotating/rotating.component';
import { SwingComponent } from './pages/swing/swing.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageLayoutComponent,
    children: [
      { path: '', component: AlGlassLstComponent },
    ]
  },
  {
    path: 'hydraulic',
    component: HydraulicComponent,
  },
  {
    path: 'sliding',
    component: SlidingComponent,
  },
  {
    path: 'rotating',
    component: RotatingComponent,
  },
  {
    path: 'swing',
    component: SwingComponent,
  },
]

export const AlGlassRoutes = RouterModule.forChild(routes);
