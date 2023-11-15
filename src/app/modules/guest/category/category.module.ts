import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GateLstComponent } from './gate/pages/gate-lst/gate-lst.component';
import { CategoryRoutes } from './category.routing';
import { GateService } from './gate/services/gate.service';
import { GateDetailComponent } from './gate/pages/gate-detail/gate-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes,
    SharedModule
  ],
  declarations: [
    GateLstComponent,
    GateDetailComponent
  ],
  providers: [GateService]
})
export class CategoryModule { }
