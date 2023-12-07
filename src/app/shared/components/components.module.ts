import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZorroAntdModule } from '../zorro-antd.module';
import { CategoryProductComponent } from './category-product/category-product.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TableComponent } from './table/table.component';

const components = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  CategoryProductComponent,
  BannerComponent,
  CarouselComponent,
  TableComponent
];

@NgModule({
  imports: [
    CommonModule,
    ZorroAntdModule
  ],
  declarations: [...components],
  exports: components,
})
export class ComponentsModule {}
