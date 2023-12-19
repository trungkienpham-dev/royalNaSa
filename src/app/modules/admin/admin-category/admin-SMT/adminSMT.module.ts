import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminSMTRoutes } from './adminSMT.routing';
import { SmtLstComponent } from './pages/smt-lst/smt-lst.component';
import { SmtDetailComponent } from './pages/smt-detail/smt-detail.component';
import { AdminSmtService } from './services/adminSmt.service';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminSMTRoutes,
    SharedModule,
    CKEditorModule,
    FormsModule
  ],
  declarations: [
    SmtLstComponent,
    SmtDetailComponent
  ],
  providers: [AdminSmtService]
})
export class AdminSMTModule {}
