import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceRoutes } from './introduce.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IntroduceRoutes,
    SharedModule
  ],
  declarations: [],
})
export class IntroduceModule { }
