import { NgModule } from '@angular/core';
import { GuestRoutes } from './guest.routing';
import { QuotaionComponent } from './quotation/quotation-page/pages/quotaion/quotaion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './home/pages/homepage/homepage.component';
import { CategoryComponent } from './home/pages/home-category/home-category.component';
import { FormComponent } from './quotation/quotation-page/pages/form/form.component';
import { CommonModule } from '@angular/common';
import { CommitComponent } from './introduce/pages/commit/commit.component';
import { IntroPageComponent } from './introduce/pages/intro-page/intro-page.component';
import { ProductListComponent } from './category/allProduct/pages/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutes,
    SharedModule
  ],
  declarations: [
    IntroPageComponent,
    CommitComponent,

    QuotaionComponent,
    HomepageComponent,
    CategoryComponent,
    FormComponent,

    ProductListComponent

  ],
})
export class GuestModule { }
