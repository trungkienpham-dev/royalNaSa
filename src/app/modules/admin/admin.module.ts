import { NgModule } from '@angular/core';
import { AdminRoutes } from './admin.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultPageComponent } from './admin-home/pages/default-page/default-page.component';

@NgModule({
  imports: [AdminRoutes, SharedModule],
  declarations: [
    DefaultPageComponent
  ],
})
export class AdminModule {}
