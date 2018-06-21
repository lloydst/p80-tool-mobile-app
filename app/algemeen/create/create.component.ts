import { Component, OnInit } from '@angular/core';
import { IpService } from '~/services/ip.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  moduleId: module.id,
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
autoscreen = {
    ip: '',
    channel: '',
    name: ''
}
  constructor(private ip: IpService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() { }
    submit() {
        this.ip.addIp(this.autoscreen).subscribe(()=>{
            this.onNavItemTap('/algemeen')
            
        })
        
    }
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        
    }
}
