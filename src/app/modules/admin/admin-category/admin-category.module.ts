import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminCategoryRoutes } from './admin-category.routing';
import { AdminGateComponent } from './pages/admin-gate/admin-gate.component';
import { AdminRoofComponent } from './pages/admin-roof/admin-roof.component';
import { AdminHandrailComponent } from './pages/admin-handrail/admin-handrail.component';
import { AdminStairComponent } from './pages/admin-stair/admin-stair.component';

@NgModule({
  imports: [AdminCategoryRoutes, SharedModule],
  declarations: [
    AdminGateComponent,
    AdminRoofComponent,
    AdminHandrailComponent,
    AdminStairComponent
  ],
})
export class AdminCategoryModule {}
