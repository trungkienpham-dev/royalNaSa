import { NZ_ICONS } from "ng-zorro-antd/icon";
import { ZorroAntdModule } from "./zorro-antd.module";
import { NgModule } from "@angular/core";
import { IconDefinition } from "@ant-design/icons-angular";
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { ComponentsModule } from "./components/components.module";
import { NgImageSliderModule } from 'ng-image-slider';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  exports: [
    ZorroAntdModule,
    ComponentsModule,
    NgImageSliderModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class SharedModule {}
