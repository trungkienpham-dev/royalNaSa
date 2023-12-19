import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminNKRoutes } from './adminNK.routing';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { NkLstComponent } from './pages/nk-lst/nk-lst.component';
import { NkDetailComponent } from './pages/nk-detail/nk-detail.component';
import { AdminNkService } from './services/adminNk.service';

@NgModule({
  imports: [
    CommonModule,
    AdminNKRoutes,
    SharedModule,
    CKEditorModule,
    FormsModule
  ],
  declarations: [
    NkLstComponent,
    NkDetailComponent
  ],
  providers: [AdminNkService]
})
export class AdminNKModule {}
