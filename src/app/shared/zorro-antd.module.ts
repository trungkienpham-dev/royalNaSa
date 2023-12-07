import { NgModule } from "@angular/core";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  exports: [
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzCardModule,
    NzImageModule,
    NzCarouselModule,
    NzIconModule,
    IvyCarouselModule,
    NzDescriptionsModule,
    NzTableModule,
    NzSelectModule,
    NzButtonModule
  ]
})
export class ZorroAntdModule {}
