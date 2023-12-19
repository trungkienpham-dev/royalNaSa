import { NgModule } from '@angular/core';
import { QuotationRoutes } from './quotation.routing';
import { QuotaionComponent } from './quotation-page/pages/quotaion/quotaion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuotationService } from './quotation-page/services/quotation.service';

@NgModule({
  imports: [
    QuotationRoutes,
    SharedModule
  ],
  declarations: [
    QuotaionComponent
  ],
  providers: [QuotationService]
})
export class QuotationModule { }
