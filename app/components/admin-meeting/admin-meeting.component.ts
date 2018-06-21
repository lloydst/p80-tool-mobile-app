import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  moduleId: module.id,
  selector: 'app-admin-meeting',
  templateUrl: './admin-meeting.component.html',
  styleUrls: ['./admin-meeting.component.scss']
})
export class AdminMeetingComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) { }
    navigate(link) {
      // app logic here ...
      this.routerExtensions.navigate([link], {
          transition: {
              name: "flip",
              duration: 2000,
              curve: "linear"
          }
      });
      }
  ngOnInit() { }

}
