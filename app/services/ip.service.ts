import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {
 api = 'https://p80-internship.herokuapp.com/api'
  constructor(private http: HttpClient) { }
  /**
   * gets all ip's with their config that have been set from db
   */
  getIps() {                                  
    return this.http.get(this.api+'/ipconfig');
  } 
  /**
   * gets a single config based on the ip
   * @param ip 
   */
  selectByIp(ip) {                       
      return this.http.get(this.api+'/ipconfig/'+ip+'');
  }
  /**
   * updates a config based on the ip
   * @param ip 
   * @param updatedConfig 
   */
  updateIp(ip:String, updatedConfig:Object) {   //update 
      return this.http.put(this.api+'/ipconfig/'+ip+'', updatedConfig);
  }
  /**
   * adds / creates a ip with its config
   * @param newIp 
   */
  addIp(newIp: Object){                         //create
    return this.http.post(this.api+'/ipconfig', newIp)
  }
  /**
   * delete's a ip and its config
   * @param ip 
   */
  deleteIp(ip: String){
    return this.http.delete(this.api+'/ipconfig/'+ip+'')
  }
}
