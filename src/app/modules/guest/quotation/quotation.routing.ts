import { Routes, RouterModule } from '@angular/router';
import { QuotaionComponent } from './quotation-page/pages/quotaion/quotaion.component';

const routes: Routes = [
  {
    path: '',
    component: QuotaionComponent
  }
]

export const QuotationRoutes = RouterModule.forChild(routes);
