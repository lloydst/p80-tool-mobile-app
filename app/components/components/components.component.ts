import { Component, OnInit } from '@angular/core';
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import * as app from "application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from 'nativescript-angular';
import {Router} from '@angular/router/router'

@Component({
    moduleId: module.id,
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
    public titleAndIcon: any = { title: "Icon", iconSource: "res://icon" };

    public onIndexChanged(args) {
        let tabView = <TabView>args.object;
        console.log("Selected index changed! New index: " + tabView.selectedIndex);
    }
    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit() { }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
