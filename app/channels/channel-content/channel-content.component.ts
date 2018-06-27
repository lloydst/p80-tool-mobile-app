import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '~/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-channel-content',
  templateUrl: './channel-content.component.html',
  styleUrls: ['./channel-content.component.scss']
})
export class ChannelContentComponent implements OnInit {
    current = this.router.url.split('/')[2]
    channelData
  constructor(
        private router: Router,
        private data: DataService
    ) { }

  ngOnInit() { 
      this.getCurrentChannel()
  }
  getCurrentChannel() {
    this.data.getChannel(this.current).subscribe(channel=>{
        this.channelData =channel
    })
  }
}
