import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtIronRoutes } from './artIron.routing';
import { ArtIronLstComponent } from './pages/art-iron-lst/art-iron-lst.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtIronDetailComponent } from './pages/art-iron-detail/art-iron-detail.component';
import { ArtIronService } from './services/artIron.service';

@NgModule({
  imports: [
    CommonModule,
    ArtIronRoutes,
    SharedModule,
  ],
  declarations: [
    ArtIronLstComponent,
    ArtIronDetailComponent,
  ],
  providers: [ArtIronService]
})
export class ArtIronModule { }
