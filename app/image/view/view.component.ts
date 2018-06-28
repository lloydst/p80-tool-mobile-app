import { Component, OnInit } from '@angular/core';
import { FileService } from '~/services/file.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  moduleId: module.id,
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  /**
   * binding
   */
  image;
  /**
   * constructor
   * @param fileService gets files (images) from the db
   */
    constructor(
        private fileService: FileService,
        private routerExtensions: RouterExtensions
    ) { }
  /**
   * on load
   */
    ngOnInit() {
      this.getAllImages()
    }
    /**
     * gets all the images
     */
    getAllImages() {
      this.fileService.getImages().subscribe(images=>{
        this.image = images
      })
    }
    /**
     * deletes a img
     * @param delete_me filename of image too delete
     */
    deleteImg(delete_me) {
      let done = false
      this.fileService.deleteImg(delete_me).subscribe(()=>{
        
      })
      this.navigate('/upload/upload')
    }
    navigate(link) {
        // app logic here ...
        this.routerExtensions.navigate([link]);
    }
}
