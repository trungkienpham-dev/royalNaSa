import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutes } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutes,
    SharedModule
  ],
  declarations: [
    ContactPageComponent
  ],
})
export class ContactModule { }
