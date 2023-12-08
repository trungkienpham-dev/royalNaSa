import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
]

export const AllProductRoutes = RouterModule.forChild(routes);
