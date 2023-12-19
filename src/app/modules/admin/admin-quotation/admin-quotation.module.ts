import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminQuotationRoutes } from './admin-quotation.routing';
import { AdminQuotaionComponent } from './pages/admin-quotaion/admin-quotaion.component';
import { AdminQuotationService } from './services/adminQuotation.service';
import { AdminQuotaionDetailComponent } from './pages/admin-quotaion-detail/admin-quotaion-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AdminQuotationRoutes,
    SharedModule
  ],
  declarations: [
    AdminQuotaionComponent,
    AdminQuotaionDetailComponent
  ],
  providers: [
    AdminQuotationService]
})
export class AdminQuotationModule { }
