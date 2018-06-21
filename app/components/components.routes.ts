import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
// app

import { AdminMeetingComponent } from "~/components/admin-meeting/admin-meeting.component";
import { AdminEventDetailComponent } from "~/components/admin-event-detail/admin-event-detail.component";
import { AdminEventComponent } from "~/components/admin-event/admin-event.component";
import { AdminEntranceDetailComponent } from "~/components/admin-entrance-detail/admin-entrance-detail.component";
import { AdminEntranceComponent } from "~/components/admin-entrance/admin-entrance.component";
import { ComponentsComponent } from "~/components/components/components.component";

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
          {path: 'entrance', component: AdminEntranceComponent},
          {path: 'entrance/:id', component: AdminEntranceDetailComponent},
          {path: 'events', component: AdminEventComponent},
          {path: 'events/:id', component: AdminEventDetailComponent},
          {path: 'meeting', component: AdminMeetingComponent}
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ComponentsRoutes {}