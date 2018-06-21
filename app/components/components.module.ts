import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { ComponentsRoutes } from './components.routes';
import { ComponentsComponent } from './components/components.component';
import { AdminEntranceComponent } from '~/components/admin-entrance/admin-entrance.component';
import { AdminEntranceDetailComponent } from '~/components/admin-entrance-detail/admin-entrance-detail.component';
import { AdminEventComponent } from '~/components/admin-event/admin-event.component';
import { AdminEventDetailComponent } from '~/components/admin-event-detail/admin-event-detail.component';
import { AdminMeetingComponent } from '~/components/admin-meeting/admin-meeting.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    ComponentsRoutes
  ],
  declarations: [
  ComponentsComponent,
  AdminEntranceComponent,
  AdminEntranceDetailComponent,
  AdminEventComponent,
  AdminEventDetailComponent,
  AdminMeetingComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
