import {  PlatForms } from './../../intrface/platform.interface';
import { PlatformService } from './../../service/platform.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
platforms:any[]=[]
platform:PlatForms={}
selectplatform=false


  constructor(private platformservice:PlatformService,private route:ActivatedRoute) {
     this.route.snapshot
    console.log( this.route.snapshot.url[0].path);

  }
  checkflag=false

path=this.route.snapshot.url[0].path



  getAllplatform(){
    this.platformservice.getAllplatform().subscribe({
      next:(res:any)=>{
        console.log(res);

this.platforms=res.data
this.platforms.forEach(p=>{
  p.isSelected=false
})
console.log(this.platforms);
      }
    })
  }
  getplatform(id:any){
    this.platformservice.getplatform(id).subscribe({
      next:(res:any)=>{
        console.log(res);

this.platform=res.data
// // if(this.platformFlag==false){
// //   this.test(this.platform)
// }
      }
    })
  }


  // e(i:any){
  //   if(this.platform.id==i){
  //     console.log(this.platform.id);

  //
  //   }
  // }


 deletplatform(id:any){
    this.platformservice.deleteplatform(id).subscribe({
      next:(res:any)=>{
this.platform=res.data

      }
    })
  }
 updateplatform(id:any,data:any){
    this.platformservice.update(id,data).subscribe({
      next:(res:any)=>{
this.platform=res

      }
    })
  }
  @Output() sendData=new EventEmitter
  model={
    hur:20,
    price:5000,
    index:1
  }
  count=0
  price=0
  data:any[] = [];
  styleFlag :boolean= false
  bgClass = "bg-dark"
  textbreak="text-break"
  Ngclass ='activ'
  submit(){
    const obj={
      name:this.model.hur,
      age:this.model.hur
    }
    this.sendData.emit(obj)
  }
  /*
  1)اول مرة هدوس هحط الايتم فلوكال ستورج
  2)تانى مرة دوس علنفس الايتم يشله من اللوكال
  */
 selected(platform:any){
  this.data.push(platform)
    localStorage.setItem('platform', JSON.stringify(this.data))
    platform.isSelected=true;
 }
 notselected(platform:any){
  const newData=this.data.filter(item=>item.id!=platform.id)
  this.data=newData
    localStorage.setItem('platform', JSON.stringify(this.data))
    platform.isSelected=false;
 }

test(platform:any){

  // console.log(this.selectplatform);

  if(this.data.length==0) {
    this.data.push(platform)
    localStorage.setItem('platform', JSON.stringify(this.data))
  }
  console.log(this.data);
  //data = web
  //data= web,ios
  if(this.data.length!=0){
    this.data.forEach((p,i)=>{
      if(p.id!=platform.id){
        this.data.push(platform)
        localStorage.setItem('platform', JSON.stringify(this.data))
      }else if(p.id==platform.id){
        console.log("ddd");
         this.data.splice(this.data.indexOf(p),1)
        // this.data.pop()
         localStorage.setItem('platform', JSON.stringify(this.data))
      }
      // console.log( platform.id)
    })
  console.log(this.data);


  }







// this.platformFlag==true
}

  in(index:any,i:any){
    console.log(this.platforms);
    // this.platforms
    let x=-1;
    for(let i=0;i<this.platforms.length;i++){
      x+=1
      if(this.platforms[i].id==index){
        break
      }

    }
    console.log(x);

    this.platform.id=index
    console.log( index);


    if(this.styleFlag==false){
      // console.log(platform[0].id===index);
      console.log( i ,x);
       if(i==x){


      this.count=this.platforms[x].hours
   this.price=this.price+this.platforms[x].price

   localStorage.setItem('price',this.price.toString())
   localStorage.setItem('hur',this.count.toString())

   this.styleFlag=true
    }
  }else if(this.styleFlag==true){
    if(i==x){


      this.count=this.count-this.platforms[x].hours
   this.price=this.price-this.platforms[x].price


   localStorage.setItem('price',this.price.toString())
   localStorage.setItem('hur',this.count.toString())

   this.styleFlag=false
    }
  }

}

  ngOnInit(): void {
    this.getAllplatform()
  }

}
