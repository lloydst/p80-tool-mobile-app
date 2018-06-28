import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";



/**
 * fileservice responsible for posting the file's to the server
 */
@Injectable()

export class FileService {
    url = 'https://p80-internship.herokuapp.com'
    local = 'http://pc-64:3000'
/**
 * allows for downloads * not currentl in use
 * http property
 * @param _http http prop
 */
    constructor(private _http:HttpClient){}
/**
 * takes the file and puts it in the post request
 */
    downloadFile(file:String){
        var body = {filename:file};
        
        return this._http.post('http://localhost:3000/file/download',body,{
            responseType : 'blob',
            headers:new HttpHeaders().append('Content-Type','application/json')
        });
    }
    /**
     * gets all files(images) out of db the component has to subscribe to this
     */
    getImages() {
            return this._http.get(this.url +'/images/images-all');
    }
    /**
     * deletes a img
     * @param img filename of img to delete
     */
    deleteImg(img) {
        
            return this._http.delete(this.url +'/images/img/' + img)
    }
}