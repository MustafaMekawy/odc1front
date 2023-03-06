import { Component, OnInit } from '@angular/core';
import { FunctionalitiesService } from 'src/app/service/functionalities.service';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.css']
})
export class FunctionalitiesComponent implements OnInit {
 
  model={
    hur:20,
    price:5000
  }
  time:any[]=[
    100,200,300,400,500
  ]
  money:number[]=[
    5000,10000,15000,20000,25000,30000
  ]
  prog:any[]=[
   

  ]
  Features:any[]=[
    
  ]
  count=0
  price:any
  price2:any 
  hour:any
  h:any
  x:any
  box:any[]=[]
  styleFlag :boolean= false
  bgClass = "bg-dark"
  textbreak="text-break"
  Ngclass ='activ'
  constructor( private http:FunctionalitiesService) { 
   this.price2=localStorage.getItem('price')
  this.x=(parseInt(this.price2));
  this.price=this.x
  this.hour=localStorage.getItem('hur')
  this.h=(parseInt(this.hour));
  this.count=this.h
  
  }
  selectFunction(action:any){
    this.box.push(action)
    localStorage.setItem('functions',JSON.stringify( this.box))
   }
  getfunctionalities(){
    return this.http.getAllaction().subscribe({
      next:(res:any)=>{
this.prog=res.data
      }
    })
  }
  getfeature(id:any){
    this.http.getaction(id).subscribe({
      next:(res:any)=>{
        console.log(res.data);
        this.Features=res.data
      }
    })
  }
 
  
  in(index:number){
    console.log(index);
    
    if(this.styleFlag==false){
     
     
           this.count=this.count+this.model.hur
   this.price=this.price+this.model.price
  
   localStorage.setItem('price',this.price.toString())
   localStorage.setItem('hur',this.count.toString())
   this.styleFlag=true
   
        
   
  
    }else if(this.styleFlag==true){
      
        this.count=this.count-this.model.hur
     this.price=this.price-this.model.price
    
     localStorage.setItem('price',this.price.toString())
     localStorage.setItem('hur',this.count.toString())
     this.styleFlag=false
      
    }
    
   
   
   }

  ngOnInit(): void {
    this.getfunctionalities()
  }

}
