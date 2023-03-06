import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { platform } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  url="http://10.5.63.65:3000/details/"
  constructor (private http:HttpClient) {
    
  }

//  platforms=localStorage.getItem("platform")
 
//   actions=localStorage.getItem("action")
 
}
