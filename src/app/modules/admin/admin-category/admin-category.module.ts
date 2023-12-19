import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminCategoryRoutes } from './admin-category.routing';

@NgModule({
  imports: [AdminCategoryRoutes, SharedModule],
  declarations: [],
})
export class AdminCategoryModule {}
