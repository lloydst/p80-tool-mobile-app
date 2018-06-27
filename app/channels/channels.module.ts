import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import {  NativeScriptFormsModule } from 'nativescript-angular/forms';

import { ChannelsRoutes } from './channels.routes';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelNewComponent } from '~/channels/channel-new/channel-new.component';
import { ChannelContentComponent } from '~/channels/channel-content/channel-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptCommonModule,
    ReactiveFormsModule,
    ChannelsRoutes
  ],
  declarations: [
  ChannelsComponent,
  ChannelNewComponent,
  ChannelContentComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ChannelsModule { }
