import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { QARoutes } from './qa.routing';
import { QaPagesComponent } from './pages/qa-pages/qa-pages.component';
import { CommonModule } from '@angular/common';
import { QAService } from './services/qa.service';

@NgModule({
  imports: [
    CommonModule,
    QARoutes,
    SharedModule
  ],
  declarations: [
    QaPagesComponent
  ],
  providers: [QAService]
})
export class QAModule { }
