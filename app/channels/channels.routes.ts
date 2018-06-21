import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
// app
import { ChannelsComponent } from './channels/channels.component';
import { ChannelNewComponent } from "~/channels/channel-new/channel-new.component";
import { ChannelContentComponent } from "~/channels/channel-content/channel-content.component";

 const routes: Routes = [
    {
        path: '',
        component: ChannelsComponent, children: [
            // these need to become content specific
            {
              path: '',
              redirectTo:'new',
              pathMatch: 'full'
            }, // default
            {path: 'new', component: ChannelNewComponent},
            {path: ':channel', component: ChannelContentComponent}
            
          ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChannelsRoutes {}
