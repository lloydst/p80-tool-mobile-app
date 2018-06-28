import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '~/services/data.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    moduleId: module.id,
    selector: 'app-channel-content',
    templateUrl: './channel-content.component.html',
    styleUrls: ['./channel-content.component.scss']
})
export class ChannelContentComponent implements OnInit {
    
    currentChannel
      
      channelData
      
      preloadPath
      
      form: FormGroup;
      channel = new FormControl();
    
  
    constructor(
      private fb: FormBuilder,
      private data: DataService,
      private router: Router,
      private routerExtensions: RouterExtensions
    ) {
      this.createForm()
    }
    createForm() {
      this.form = this.fb.group({
        channel: this.fb.group({}),
        path: this.fb.array([])
      });
    }
    
    getCurrentChannel(){
      var url =this.router.url.split("/")
      this.currentChannel = url[2]
    }
    
    reloadData() {
      this.data.getChannel(this.currentChannel).subscribe(res=> {
          this.channelData = res;
          this.preloadPath = res[0].path // loads all 'paths'
          for(let path of this.preloadPath){
              //console.log(path)
              this.preaddPath(path)
            }
      })
    }
    delete(obj) {
        this.data.deleteChannel(obj).subscribe(()=>{
          
          this.navigate('/channels')
        })
      }
      navigate(link) {
        // app logic here ...
        this.routerExtensions.navigate([link]);
    }
    initSection(path) {
      if (!path) {
        var newpath = {
          pathurl: "",
          description: "",
          delay: 20000,
          componentName: ""
        }
      }
      // console.log(path.pathurl)
      return new FormGroup({
          pathurl: new FormControl(path.pathurl),
          description: new FormControl(path.description),
          delay: new FormControl(path.delay),
          componentName:new FormControl(path.componentName)
      });
    }
    
    ngOnInit() {
      this.getCurrentChannel()
      
      this.form = this.fb.group({
          channel: [this.currentChannel],
          path: this.fb.array([])
      }); 
      this.reloadData()
      }
      
      preaddPath(path) {
          const control = <FormArray>this.form.get('path');;
          control.push(this.initSection(path));
        }
  
      initPath() {
          // initialize our address
          return this.fb.group({
              pathurl: [''],
              description: [''],
              componentName:[''],
              delay:[20000]
          });
      }
      
  addPath() {
      // add address to the list
      const control = <FormArray>this.form.controls['path'];
      control.push(this.initPath());
  }
  
  removePath(i: number) {
      // remove address from the list
      const control = <FormArray>this.form.controls['path'];
      control.removeAt(i);
  }
  
    save(channel_to_Update) {
      
      this.data.saveContent(this.form.value).subscribe(()=>{})
      return {message: 'Saved'}
    }
    get path(): FormArray {
      return this.form.get('path') as FormArray;
    };
    revert(){
      this.form.reset({
        channel: [this.currentChannel],
        path: this.fb.array([])
    });  
      this.reloadData()
    }
  }

/**
 * webversion
 * import { Component, OnInit, Inject,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { DataService } from '../../../services/data.service';


@Component({
    selector: 'app-channel-content',
    templateUrl: './channel-content.component.html'
  })
  export class ChannelContentComponent implements OnInit {
    
    currentChannel
      
      channelData
      
      preloadPath
      
      form: FormGroup;
      channel = new FormControl();
    
  
    constructor(
      private fb: FormBuilder,
      private data: DataService,
      private router: Router
    ) {
      this.createForm()
    }
    createForm() {
      this.form = this.fb.group({
        channel: this.fb.group({}),
        path: this.fb.array([])
      });
    }
    
    getCurrentChannel(){
      var url =this.router.url.split("/")
      this.currentChannel = url[3]
    }
    
    reloadData() {
      this.data.getChannel(this.currentChannel).subscribe(res=> {
          this.channelData = res;
          this.preloadPath = res[0].path // loads all 'paths'
          for(let path of this.preloadPath){
              //console.log(path)
              this.preaddPath(path)
            }
      })
    }
    
    initSection(path) {
      if (!path) {
        var newpath = {
          pathurl: "",
          description: "",
          delay: 20000,
          componentName: ""
        }
      }
      // console.log(path.pathurl)
      return new FormGroup({
          pathurl: new FormControl(path.pathurl),
          description: new FormControl(path.description),
          delay: new FormControl(path.delay),
          componentName:new FormControl(path.componentName)
      });
    }
    
    ngOnInit() {
      this.getCurrentChannel()
      
      this.form = this.fb.group({
          channel: [this.currentChannel],
          path: this.fb.array([])
      }); 
      this.reloadData()
      }
      
      preaddPath(path) {
          const control = <FormArray>this.form.get('path');;
          control.push(this.initSection(path));
        }
  
      initPath() {
          // initialize our address
          return this.fb.group({
              pathurl: [''],
              description: [''],
              componentName:[''],
              delay:[20000]
          });
      }
      
  addPath() {
      // add address to the list
      const control = <FormArray>this.form.controls['path'];
      control.push(this.initPath());
  }
  
  removePath(i: number) {
      // remove address from the list
      const control = <FormArray>this.form.controls['path'];
      control.removeAt(i);
  }
  
    save(channel_to_Update) {
      
      this.data.saveContent(this.form.value).subscribe(()=>{})
      return {message: 'Saved'}
    }
    get path(): FormArray {
      return this.form.get('path') as FormArray;
    };
    revert(){
      this.form.reset({
        channel: [this.currentChannel],
        path: this.fb.array([])
    });  
      this.reloadData()
    }
  }
  
 */