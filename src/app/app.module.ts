import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryPageLayoutComponent } from './layouts/category-page-layout/category-page-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    CategoryPageLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    // CKEditorModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
