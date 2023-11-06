import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [
  ],
  declarations: [...components],
  exports: components
})
export class ComponentsModule {}
