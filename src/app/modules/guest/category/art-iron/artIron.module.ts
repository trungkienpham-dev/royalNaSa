import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtIronRoutes } from './artIron.routing';
import { ArtIronLstComponent } from './pages/art-iron-lst/art-iron-lst.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GateComponent } from './pages/gate/gate.component';
import { RoofComponent } from './pages/roof/roof.component';
import { HandrailComponent } from './pages/handrail/handrail.component';
import { StairComponent } from './pages/stair/stair.component';

@NgModule({
  imports: [
    CommonModule,
    ArtIronRoutes,
    SharedModule
  ],
  declarations: [
    ArtIronLstComponent,
    GateComponent,
    RoofComponent,
    HandrailComponent,
    StairComponent
  ],
  providers: []
})
export class ArtIronModule { }
