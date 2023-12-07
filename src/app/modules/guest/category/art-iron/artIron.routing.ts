import { Routes, RouterModule } from '@angular/router';
import { ArtIronLstComponent } from './pages/art-iron-lst/art-iron-lst.component';
import { GateComponent } from './pages/gate/gate.component';
import { CategoryPageLayoutComponent } from 'src/app/layouts/category-page-layout/category-page-layout.component';
import { RoofComponent } from './pages/roof/roof.component';
import { HandrailComponent } from './pages/handrail/handrail.component';
import { StairComponent } from './pages/stair/stair.component';

const routes: Routes = [
  {
    path: '',
    component:CategoryPageLayoutComponent,
    children: [
      { path: '', component: ArtIronLstComponent },
    ]
  },
  {
    path: 'gate',
    component: GateComponent,
  },
  {
    path: 'roof',
    component: RoofComponent
  },
  {
    path: 'handrail',
    component: HandrailComponent
  },
  {
    path: 'stair',
    component: StairComponent
  }
]

export const ArtIronRoutes = RouterModule.forChild(routes);
