import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IpService } from '~/services/ip.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  moduleId: module.id,
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
current = this.router.url.split('/')[3]
dataIp: any= {
    name: '',
    channel: '',
    ip: ''
}
  constructor(
        private router: Router,
        private ipData:IpService,
        private routerExtensions: RouterExtensions
    ) { }

  ngOnInit() { 
      this.getData()
  }
  getData() {
    
    console.log(this.current)
    this.ipData.selectByIp(this.current).subscribe(ip =>{
        this.dataIp = ip
        console.log(this.dataIp)
    })
  }
  updateData() {
       
    this.ipData.updateIp(this.current, {ip: this.dataIp.ip, name: this.dataIp.name, channel: this.dataIp.channel}).subscribe(()=>{
            this.onNav('/algemeen')
            this.getData()
        }) // if the ip gets changed it does trow an error have to change this serverside
  }
  deleteData() {
    
    this.ipData.deleteIp(this.current).subscribe(err => {
        if(err) {
            console.log(err)
        }
    },result =>{
        this.onNav('/algemeen')
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
