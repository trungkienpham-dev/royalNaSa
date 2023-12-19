import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlGlassLstComponent } from './pages/al-glass-lst/al-glass-lst.component';
import { AlGlassRoutes } from './al-glass.routing';
import { AlGlassService } from './servies/all-glass.service';
import { AlGlassDetailComponent } from './pages/al-glass-detail/al-glass-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AlGlassRoutes,
    SharedModule
  ],
  declarations: [
    AlGlassLstComponent,
    AlGlassDetailComponent
  ],
  providers: [AlGlassService]
})
export class AlGlassModule { }
