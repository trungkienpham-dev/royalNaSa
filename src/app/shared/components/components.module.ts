import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZorroAntdModule } from '../zorro-antd.module';

const components = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent
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
