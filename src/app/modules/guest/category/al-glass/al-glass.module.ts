import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlGlassLstComponent } from './pages/al-glass-lst/al-glass-lst.component';
import { AlGlassRoutes } from './al-glass.routing';
import { AlGlassService } from './servies/all-glass.service';
import { HydraulicComponent } from './pages/hydraulic/hydraulic.component';
import { SlidingComponent } from './pages/sliding/sliding.component';
import { RotatingComponent } from './pages/rotating/rotating.component';
import { SwingComponent } from './pages/swing/swing.component';

@NgModule({
  imports: [
    CommonModule,
    AlGlassRoutes,
    SharedModule
  ],
  declarations: [
    AlGlassLstComponent,
    HydraulicComponent,
    SlidingComponent,
    RotatingComponent,
    SwingComponent
  ],
  providers: [AlGlassService]
})
export class AlGlassModule { }
