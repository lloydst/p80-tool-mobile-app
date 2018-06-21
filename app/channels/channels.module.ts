import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { ChannelsRoutes } from './channels.routes';
import { ChannelsComponent } from './channels/channels.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
   
    NativeScriptFormsModule,
    ChannelsRoutes
  ],
  declarations: [
  ChannelsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ChannelsModule { }
