import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './home.routing';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './pages/banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule
  ],
  declarations: [
    HomepageComponent,
    BannerComponent
  ],
})
export class HomeModule { }
