import { NgModule } from "@angular/core";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  exports: [
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzCardModule,
    NzImageModule,
    NzCarouselModule
  ]
})
export class ZorroAntdModule {}
