import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {

  url="http://10.5.63.65:3000/function"
  constructor (private http:HttpClient) { }
  addaction(credentials:any){
    return this.http.post(this.url  ,credentials)
  }
  getAllaction(){
    return this.http.get(this.url  )
  }
  getaction(id:any){
    return this.http.get(this.url+'feature/'  +id)
  }
  deleteaction(id:any){
    return this.http.delete(this.url  +id)
  }
}
