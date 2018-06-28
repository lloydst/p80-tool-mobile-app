import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "algemeen", loadChildren: "./algemeen/algemeen.module#AlgemeenModule" },
    { path: "components", loadChildren: "./components/components.module#ComponentsModule" },
    { path: "channels", loadChildren: "./channels/channels.module#ChannelsModule" },
    { path: "upload", loadChildren: "./image/image.module#ImageModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes,{ enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
