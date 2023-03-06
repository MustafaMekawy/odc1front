import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  count=0
  price:any
  price2:any 
  hour:any
  h:any
  x:any
  action:any[]=[]
  
  actionnn:any
  functions:any[]=[]
  function:any
  constructor(
    private http:DataService
  ) { 
  console.log(this.action,   "hhgghghg");

   this.price2=localStorage.getItem('price')
  this.x=(parseInt(this.price2));
  this.price=this.x
  this.hour=localStorage.getItem('hur')
  this.h=(parseInt(this.hour));
  this.count=this.h
  this.actionnn=localStorage.getItem('action')
 this.action=JSON.parse(this.actionnn)
  console.log(this.action);
  this.function=localStorage.getItem('functions')
  this.functions=JSON.parse(this.function)
  
  }
  
  
  ngOnInit(): void {
   
  }

}
