import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '~/services/data.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  moduleId: module.id,
  selector: 'app-admin-event-detail',
  templateUrl: './admin-event-detail.component.html',
  styleUrls: ['./admin-event-detail.component.scss']
})
export class AdminEventDetailComponent implements OnInit {
    current = this.router.url.split('/')[3]
    messages:any = []
    
  message:any = [{
        message: String,
        identifier: String,
        imgLink:String,
        img: Boolean,
        showFrom: String,
        showTill: String
    }]
  constructor( 
      private router:Router,
      private data:DataService,
      private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() { this.getMessage()}

    getMessage() {
        this.data.getMessage(this.current).subscribe(doc =>{
            this.messages =doc;
            console.log(this.messages)
        })
    }
    updateData(obj) {
        this.data.updateMessage(this.current, obj).subscribe(()=>{
            this.navigate('/components/events')
        })
    }
    navigate(link) {
        // app logic here ...
        this.routerExtensions.navigate([link]);
        }
}
