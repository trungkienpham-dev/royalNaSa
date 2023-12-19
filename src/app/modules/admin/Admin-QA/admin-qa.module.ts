import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminQARoutes } from './admin-qa.routing';
import { AdminQaPagesComponent } from './pages/admin-qa-pages/admin-qa-pages.component';
import { AdminQAService } from './services/adminQA.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, AdminQARoutes, SharedModule],
  declarations: [
    AdminQaPagesComponent
  ],
  providers: [AdminQAService]
})
export class AdminQAModule { }
