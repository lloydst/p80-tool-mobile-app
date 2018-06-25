import { Component, OnInit } from '@angular/core';
import { DataService } from '~/services/data.service';
import { RouterExtensions } from 'nativescript-angular';



@Component({
    moduleId: module.id,
	selector: 'app-add-website',
	templateUrl: 'add-website.component.html',
})

export class AddWebsiteComponent implements OnInit {
	model = {
        name: '',
        url:''
    }

	constructor(
        private data: DataService,
        private routerExtensions: RouterExtensions
    ) { }

	ngOnInit() {
		
    }
    addWebsite(obj) {
        this.data.createWebsite(obj).subscribe(()=>{
            this.navigate('../components/entrance')
        })
    }
    navigate(link) {
        // app logic here ...
        this.routerExtensions.navigate([link]);
        }
}