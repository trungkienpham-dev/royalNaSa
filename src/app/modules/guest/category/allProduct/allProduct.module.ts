import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductRoutes } from './allProduct.routing';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AllProductRoutes,
  ],
  declarations: [
    // ProductListComponent
  ],
  providers: []
})
export class AllProductModule { }
