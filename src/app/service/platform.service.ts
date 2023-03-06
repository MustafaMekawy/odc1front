import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  url="http://10.5.63.65:3000/platform/"
  constructor (private http:HttpClient) { }
  addplatform(credentials:any){
    return this.http.post(this.url  ,credentials)
  }
  getAllplatform(){
    return this.http.get(this.url  )
  }
  getplatform(id:any){
    return this.http.get(this.url  +id)
  }
  deleteplatform(id:any){
    return this.http.delete(this.url  +id)
  }
 
  update(id:any,data:any){
    return this.http.patch(this.url +id,data)
  }
}
