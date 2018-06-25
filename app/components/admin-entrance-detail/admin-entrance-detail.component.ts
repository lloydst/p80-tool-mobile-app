import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '~/services/data.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    moduleId: module.id,
    selector: 'app-admin-entrance-detail',
    templateUrl: './admin-entrance-detail.component.html',
    styleUrls: ['./admin-entrance-detail.component.scss']
})
export class AdminEntranceDetailComponent implements OnInit {
    current = this.router.url.split('/')[3]
    website: any= {
        name: '',
        url: '',
        visable: false
    }
    
    constructor(
        private router: Router,
        private data: DataService,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit() {
        this.getWebsite()
    }
    getWebsite() {
        this.data.getWebsite(this.current).subscribe(doc=> {
            this.website = doc
            console.log(this.website)
        })
    }
    updateData(object) {
        this.data.updateWebsite(this.current, object).subscribe(()=>{
                this.onNav('/components/entrance')
            })
      }
      onNav(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}
