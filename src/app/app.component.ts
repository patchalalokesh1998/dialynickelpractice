import { Component } from '@angular/core';
import {AuthserviceService} from './services/authservice.service';
import {ProductsService} from './services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialynickelpractice';
   num=0;
  constructor(private service:AuthserviceService, private productdetailservice:ProductsService)
  {

  }
  ngOnInit()
  {
    alert('hi')
    this.num=this.num+1;
    console.log(this.num)
    this.service.setuser();
    this.productdetailservice.getproducts();
  }

}
