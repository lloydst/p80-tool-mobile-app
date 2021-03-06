import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { DataService } from '~/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-admin-entrance',
  templateUrl: './admin-entrance.component.html',
  styleUrls: ['./admin-entrance.component.scss']
})
export class AdminEntranceComponent implements OnInit {
    websites
  constructor(private routerExtensions: RouterExtensions,
    private data: DataService) { }
  navigate(link) {
    // app logic here ...
    this.routerExtensions.navigate([link]);
    }
  ngOnInit() { 
      this.getWebsites()
  }
  getWebsites() {
      this.data.getAllWebsites().subscribe(doc=>{
          this.websites = doc;
          
      })
  }
  update(name) {
    console.log(name)
  }
  delete(id) {
    this.data.deleteWebsite(id).subscribe(()=>{
        this.navigate('../components/entrance')
    })
  }
  
}
