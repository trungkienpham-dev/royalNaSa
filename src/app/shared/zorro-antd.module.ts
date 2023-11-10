import { NgModule } from "@angular/core";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from "ng-zorro-antd/menu";

@NgModule({
  exports: [
    NzLayoutModule,
    NzGridModule,
    NzMenuModule
  ]
})
export class ZorroAntdModule {}
