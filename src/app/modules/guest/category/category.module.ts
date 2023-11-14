import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GateLstComponent } from './gate/pages/gate-lst/gate-lst.component';
import { CategoryRoutes } from './category.routing';
import { CardProductComponent } from './gate/pages/card-product/card-product.component';
import { HomeService } from './gate/services/home.service';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes,
    SharedModule
  ],
  declarations: [
    GateLstComponent,
    CardProductComponent
  ],
  providers: [HomeService]
})
export class CategoryModule { }
