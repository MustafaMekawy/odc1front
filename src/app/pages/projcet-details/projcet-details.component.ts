import { platform } from 'process';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projcet-details',
  templateUrl: './projcet-details.component.html',
  styleUrls: ['./projcet-details.component.css']
})
export class ProjcetDetailsComponent implements OnInit {
price:any
hurs:any
h:any
x:any
Ngclass ='titelend'
ngclass='rotateend'
styleFlag :boolean= false
data:any[]=[]
data2:any[]=[]
platform:any
  constructor(private router:Router) { }


getplatform(){

 this.data.push(localStorage.getItem("platform"))
 console.log(this.data);
 this.data2=JSON.parse(this.data.toString())
 console.log(this.data2);
 
}
  getprice():any {
     this.price =localStorage.getItem('price')
 console.log(this.price);
 
 this.x=(parseInt(this.price));
   
 this.hurs =localStorage.getItem('hur')
 console.log(this.hurs);
 
 this.h=(parseInt(this.hurs));
   
  }
  
 rota(){
  
     this.styleFlag=true
     setTimeout(() => this.router.navigateByUrl('platform'), 500);
 
    
 }
   
  
  ngOnInit() {

   this.getprice();
   this.getplatform()
   
  }

}
