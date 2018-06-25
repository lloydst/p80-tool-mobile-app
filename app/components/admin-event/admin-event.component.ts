import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { DataService } from '~/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss']
})
export class AdminEventComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions,
    private data: DataService    
) { }
messages;
  ngOnInit() {
      this.getMessages() 
    }
  navigate(link) {
    // app logic here ...
    this.routerExtensions.navigate([link]);
    }
    getMessages() {
        this.data.getAllMessage().subscribe(doc=>{
            this.messages =doc
        })
    }
    deleteMessage(id){
        this.data.deleteMessage(id).subscribe(()=>{
            this.getMessages()
        })
    }
}
