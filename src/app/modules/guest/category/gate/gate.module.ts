import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GateRoutes } from './gate.routing';

@NgModule({
  imports: [
    CommonModule,
    GateRoutes,
    SharedModule
  ],
  declarations: [

  ],
  providers: []
})
export class GateModule { }
