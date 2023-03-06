import { DataService } from './../../service/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route,Router } from '@angular/router';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {
 
  @Input()price:any
  @Input()count=0
  price2:any
  constructor(private route:ActivatedRoute,private router:Router,private http:DataService) { 
    this.route.snapshot
   console.log( this.route.snapshot.url[0].path);
   
 }

path=this.route.snapshot.url[0].path

    
  



  

  
rot(){
  if(this.path=='platform'){
    this.router.navigateByUrl('foundation')
  }
  if(this.path=='foundation'){
    this.router.navigateByUrl('fuunctionatities')
  }
  if(this.path=='fuunctionatities'){
    this.router.navigateByUrl('details')
  }
  if(this.path=='details'){
   
    this.router.navigateByUrl('projcetdetails')
    
  }
 
}
  ngOnInit(): void {
  }

}
