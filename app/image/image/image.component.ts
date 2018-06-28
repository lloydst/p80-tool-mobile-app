import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    moduleId: module.id,
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

    constructor(
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit() { }
    navigate(link) {
        // app logic here ...
        this.routerExtensions.navigate([link]);
    }
}
