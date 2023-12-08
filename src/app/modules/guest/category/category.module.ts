import { NgModule } from '@angular/core';
import { CategoryRoutes } from './category.routing';
import { ArtIronService } from './art-iron/services/artIron.service';

@NgModule({
  imports: [CategoryRoutes],
  declarations: [],
  providers: [ArtIronService]
})
export class CategoryModule { }
