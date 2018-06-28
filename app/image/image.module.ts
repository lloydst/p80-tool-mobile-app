import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { ImageRoutes } from './image.routes';
import { ImageComponent } from './image/image.component';
import { UploadComponent } from '~/image/upload/upload.component';
import { ViewComponent } from '~/image/view/view.component';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>ImageRoutes)
  ],
  declarations: [
  ImageComponent,
  UploadComponent,
  ViewComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ImageModule { }
