import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminHomeRoutes } from './admin-home.routing';
import { DefaultPageComponent } from './pages/default-page/default-page.component';

@NgModule({
  imports: [AdminHomeRoutes, SharedModule],
  declarations: [
    // DefaultPageComponent
  ],
})
export class AdminHomeModule {}
