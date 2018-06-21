import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * dataservice
 */
@Injectable()

export class DataService {
    url = 'https://p80-internship.herokuapp.com'
 /**
  * for http calls
  * @param http http
  */
  constructor(private http: HttpClient) { }
  /**
   * returns a single object or "website"
   */
  getWebsite(id: String) {
    return this.http.get(this.url +'/api/websites/'+id+'');
  }
  /**
   * updates a single "website" document
   * @param id identifier for what document to update
   * @param newContent content that should replace the old content 
   * 
   */
  updateWebsite(id: String, newContent: Object) {
    return this.http.put(this.url +'/api/websites/'+id+'', newContent);
  }
  /**
   * returns all "websites" from the db
   */
  getAllWebsites(){
    return this.http.get(this.url +'/api/websites');
  }
  /**
   * creates a new "website document"
   * @param newPage contents of the new document
   */
  createWebsite(newPage){
    return this.http.post(this.url +'/api/websites', newPage);
  }
  /**
   * deletes a website
   * @param id selector for what "website" to delete from the collection
   * 
   */
  deleteWebsite(id: String) {
    return this.http.delete(this.url +'/api/websites/' + id)
  }

  /**
   * returns a single message
   * @param id selector for the "message to return"
   * 
   */
  getMessage(id: String) {
    return this.http.get(this.url +'/api/messages/'+id+'');
  }
  /**
   * updates a single message
   * @param id message to update
   * @param newContent content to update it with
   * 
   */
  updateMessage(id: String, newContent: Object) {
    return this.http.put(this.url +'/api/messages/'+id+'', newContent);
  }
  /**
   * returns all messages
   */
  getAllMessage(){
    return this.http.get(this.url +'/api/messages');
  }
  /**
   * creates a new message document
   * @param newPage content that the new message will contain
   */
  createMessage(newPage){
    return this.http.post(this.url +'/api/messages', newPage);
  }
  /**
   * deletes a single message
   * @param id selector for the message you want to delete
   */
  deleteMessage(id) {
    return this.http.delete(this.url +'/api/messages/' + id)
  }
  // temp uses mail since my personal calendar = empty usually
  /**
   * gets calendar info
   */
  getCalendar() {
    return this.http.get(this.url +'/api/calendar')
  }
  /**
   * checks if logged in if not it displays a button that allows you too
   */
  getLoggedIn() {
    return this.http.get(this.url +'/api/login')
  }
  /**
   * logout of graph
   */
  logOut(){
    return this.http.get(this.url +'/api/authorize/signout')
    
  }
  /**
   * gets all channels
   */
  getChannelContent() {
    return this.http.get(this.url +'/api/content')
  }
  /**
   * saves/ updates the object
   */
  saveContent(obj) {
    return this.http.put(this.url +'/api/content', obj)
  }
  /**
   * gets a single channel
   */
  getChannel(channel) {
    return this.http.get(this.url +'api/content/'+ channel)
  }
  /**
   * deletes a single channel
   */
  deleteChannel(channelobj) {
    return this.http.delete(this.url +'api/content/'+ channelobj.channel)
  }
}