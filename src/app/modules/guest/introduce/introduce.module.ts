import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceRoutes } from './introduce.routing';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommitComponent } from './pages/commit/commit.component';

@NgModule({
  imports: [
    CommonModule,
    IntroduceRoutes,
    SharedModule
  ],
  declarations: [
    IntroPageComponent,
    CommitComponent
  ],
})
export class IntroduceModule { }
