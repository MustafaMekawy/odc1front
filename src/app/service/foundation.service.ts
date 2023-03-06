import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoundationService {

  url="http://10.5.63.65:3000/foundationaction/"
  constructor (private http:HttpClient) { }
  addfoundation(credentials:any){
    return this.http.post(this.url  ,credentials)
  }
  getAllfoundation(){
    return this.http.get(this.url  )
  }
  getfoundationAction(){
return this.http.get(this.url)
  }
  getfoundation(id:any){
    return this.http.get(this.url  +id)
  }
  deletefoundation(id:any){
    return this.http.delete(this.url  +id)
  }
}
