import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// app
import { UploadComponent } from './upload/upload.component';
import { ImageViewComponent } from "~/upload/image-view/image-view.component";

const routes: Routes = [
    {
        path: '',
        component: UploadComponent
    },
    {
        path: 'view',
        component: ImageViewComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class UploadRoutes { }