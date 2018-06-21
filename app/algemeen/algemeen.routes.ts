import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// app
import { AlgemeenComponent } from './algemeen/algemeen.component';
import { CreateComponent } from "~/algemeen/create/create.component";
import { UpdateComponent } from "~/algemeen/update/update.component";

const routes: Routes = [
    {
        path: '',
        component: AlgemeenComponent,children:[
            {path:'add',component: CreateComponent},
            {path:'detail/:id',component: UpdateComponent}
        ]
    }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AlgemeenRoutes { }