import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import {NativeScriptUIDataFormModule} from 'nativescript-ui-dataform/angular'
import { NativeScriptUIListViewModule} from 'nativescript-ui-listview/angular'
import { NativeScriptHttpModule, NativeScriptFormsModule } from "nativescript-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataService } from "~/services/data.service";
import { IpService } from "~/services/ip.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FileService } from "~/services/file.service";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptHttpModule,
        NativeScriptUIDataFormModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        DataService,
        IpService,
        FileService
    ]
})
export class AppModule { }
