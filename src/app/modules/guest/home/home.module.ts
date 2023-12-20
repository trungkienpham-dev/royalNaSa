import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './home.routing';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './pages/home-category/home-category.component';
import { HomeService } from './services/home.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule,
  ],
  declarations: [
    // HomepageComponent,
    // CategoryComponent,
  ],
  providers: [HomeService]
})
export class HomeModule { }
