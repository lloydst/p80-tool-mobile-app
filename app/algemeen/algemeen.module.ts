import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { AlgemeenRoutes } from './algemeen.routes';
import { AlgemeenComponent } from './algemeen/algemeen.component';
import { CreateComponent } from '~/algemeen/create/create.component';
import { UpdateComponent } from '~/algemeen/update/update.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    AlgemeenRoutes
  ],
  declarations: [
  AlgemeenComponent,
  CreateComponent,
  UpdateComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AlgemeenModule { }
