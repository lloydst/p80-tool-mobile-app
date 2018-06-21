import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { UploadRoutes } from './upload.routes';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    UploadRoutes
  ],
  declarations: [
  UploadComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class UploadModule { }
