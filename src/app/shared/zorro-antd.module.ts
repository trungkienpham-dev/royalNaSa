import { NgModule } from "@angular/core";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  exports: [
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzCardModule
  ]
})
export class ZorroAntdModule {}
