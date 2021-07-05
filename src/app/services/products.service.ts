import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productdetails=new BehaviorSubject(null);

  constructor(private http:HttpClient) { }
  url="http://localhost:4200/api";

  getproducts()
  {
    let formdata=new FormData();
    formdata.append('server_key', "9f1c90293f914071950e63cc6be50e75");
    formdata.append('accesstoken', "3e6bf755a33a0aab18671b6d89720c0f3bb854014711db2d1c60d9da206cde29633e2a6c29557447e1226495c14f1a62ae17aa76c1f0d457");
       console.log(this.url,"function called");
      this.http.post<any>(this.url+"/get-products",formdata).subscribe((data)=>{this.productdetails.next(data)});
  }

  getsimilarproducts<Observable>(id)
  {
    let formdata = new FormData();
    formdata.append('server_key', "9f1c90293f914071950e63cc6be50e75");
    formdata.append('accesstoken', "3e6bf755a33a0aab18671b6d89720c0f3bb854014711db2d1c60d9da206cde29633e2a6c29557447e1226495c14f1a62ae17aa76c1f0d457");
    formdata.append('pageNo',"1");
    formdata.append('length', "25");
    formdata.append('product_id',id);
    return this.http.post<any>(this.url+"/get-similar-products", formdata)

  }



}
