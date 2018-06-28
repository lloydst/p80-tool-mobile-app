import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import * as app from "application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from 'nativescript-angular';
import { DataService } from '~/services/data.service';
import { Router, NavigationEnd } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'app-channels',
    templateUrl: './channels.component.html',
    styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
    
    channels
    public titleAndIcon: any = { title: "Icon", iconSource: "res://icon" };

    public onIndexChanged(args) {
        let tabView = <TabView>args.object;
        console.log("Selected index changed! New index: " + tabView.selectedIndex);
    }
   

    ngOnInit() {
        
        this.getChannels()
        this._router.routeReuseStrategy.shouldReuseRoute = function(){
            return false;
        };
        
        this._router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this._router.navigated = false;
                
            }
        });
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    constructor(
        private routerExtensions: RouterExtensions,
        private data: DataService,
        private _router: Router
    ) { }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            //transition: {
            //    name: "fade"
            //}
        });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
    getChannels() {
        
        this.data.getChannelContent().subscribe(channelList => {
            this.channels = channelList
            
        })
    }
    navigate(link) {
        // app logic here ...
        this.routerExtensions.navigate([link]);
    }

}
