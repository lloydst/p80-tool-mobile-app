import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { IpService } from "~/services/ip.service";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-algemeen',
  templateUrl: './algemeen.component.html',
  styleUrls: ['./algemeen.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AlgemeenComponent implements OnInit {
    ipList:any;
    
    constructor(
        private ip: IpService,
        private router: Router
    ) {
        router.events.subscribe(event => {
            if(event.constructor.name === "NavigationEnd") {
                this.getIP()
            }
          });
        }
        

  ngOnInit() { 
      this.getIP()
  }
  getIP () {
    this.ip.getIps().subscribe(doc =>{

        this.ipList = doc;
        
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
    }
}
