import { FoundationService } from './../../service/foundation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {
  model={
    hur:20,
    price:5000
  }
  foundationsactions:any[]=[]
  box:any[]=[]
  count=0
  price:any
  price2:any 
  hour:any
  h:any
  x:any
  styleFlag :boolean= false
  bgClass = "bg-dark"
  textbreak="text-break"
  Ngclass ='activ'
  constructor( private http:FoundationService) { 
   this.price2=localStorage.getItem('price')
  this.x=(parseInt(this.price2));
  this.price=this.x
  this.hour=localStorage.getItem('hur')
  this.h=(parseInt(this.hour));
  this.count=this.h
  }
  getaction(){
    return this.http.getfoundationAction().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.foundationsactions=res.data
        
      }
    })
  }
 selectAction(action:any){
  this.box.push(action)
  localStorage.setItem('action',JSON.stringify( this.box))
 }
  in(index:any,i:any){
    console.log(index ,i)
    // console.log( index.findIndex(i));
    // this.platforms

    let x=-1;
    // let check:any
    for(let j=0;j<index.length;j++){
      x+=1
      if(x==i) break
    }
    console.log(x, i)
 
// this.foundationsactions.map(a=>a.foundationsactions).forEach(a => console.log(`${a[0].id} ${a[0].ArName}`))


    // for(let i=0;i<this.foundationsactions.length;i++){
    //   x+=1
    //   if(this.foundationsactions[i].id==index){
    //     break
    //   }

    // }
    // console.log(x);

    // this.foundationsactions[x].id=index
    // console.log( index);


    if(this.styleFlag==false){
      // console.log(platform[0].id===index);
      console.log( i ,x);
       if(i==x){


      this.count=this.count+index[x].hours
   this.price=this.price+index[x].price

   localStorage.setItem('price',this.price.toString())
   localStorage.setItem('hur',this.count.toString())

   this.styleFlag=true
    }
  }else if(this.styleFlag==true){
    if(i==x){


      this.count=this.count-index[x].hours
   this.price=this.price-index[x].price

   localStorage.setItem('price',this.price.toString())
   localStorage.setItem('hur',this.count.toString())

   this.styleFlag=false
    }
  }
 
}
  ngOnInit(): void {
    this.getaction()
  }

}
