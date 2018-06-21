import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  moduleId: module.id,
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss']
})
export class AdminEventComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() { }
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

}
