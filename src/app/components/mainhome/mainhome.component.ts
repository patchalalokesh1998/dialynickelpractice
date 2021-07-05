import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {ProductsService} from '../../services/products.service';
@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit,OnDestroy {
   productdetails:any;
   productsubscription:Subscription;

  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.productsubscription=this.productservice.productdetails.subscribe((data)=>{
      if(data!=null)
      {
        this.productdetails=data.products;
        console.log(this.productdetails)
      }
      else
      {
        this.productdetails=null;
      }
      });


  }
  ngOnDestroy():void{
   this.productsubscription.unsubscribe();
  }

}
