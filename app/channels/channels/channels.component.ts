import { Component, OnInit } from '@angular/core';
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import * as app from "application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  moduleId: module.id,
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

    public titleAndIcon: any = { title: "Icon", iconSource: "res://icon" };

    public onIndexChanged(args) {
        let tabView = <TabView>args.object;
        console.log("Selected index changed! New index: " + tabView.selectedIndex);
    }
  constructor() { }

  ngOnInit() { }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
