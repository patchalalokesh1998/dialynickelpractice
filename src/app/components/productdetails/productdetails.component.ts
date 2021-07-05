import { Component, ElementRef, OnInit, ViewChild,OnDestroy, AfterViewInit } from '@angular/core';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute} from '@angular/router';
import { Subscription,pipe } from 'rxjs';
 import {map} from 'rxjs/operators';
 import { StarRatingComponent } from 'ng-starrating';
// import {ProductsService} from '../../services/products.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, AfterViewInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages:NgxGalleryImage[];
  element:any;
  id:string;
  subscription:Subscription;
  similarproducts:any;
  productdetail:any;
  bannerbackground:any;
 
  days=['S','M','T','W', "Th",'F','Sa' ]
  @ViewChild('panel') public scroll: ElementRef<any>;

  @ViewChild('banner') public banner: ElementRef<any>;
  
  constructor(private service:ProductsService, private route:ActivatedRoute) {
    
   }
  ngAfterViewInit():void
  {
    //console.log('worked')
    this.element=this.scroll.nativeElement;

    

   // console.log(this.element);
    
  }
  ngOnInit():void {
    this.galleryImages=[];
    this.id=this.route.snapshot.paramMap.get('id');

    console.log(this.id);
    this.subscription=this.service.productdetails.pipe(map((data)=>{if(data){
      return data.products.filter(product=>{
        return product.id==this.id;
      })}
      else
      {
        return data;
      }
    })).subscribe(data=>{
    this.productdetail=data;
   

    //console.log(this.productdetail);
    if(data!=null)
    {
      this.setgalleryoptions();
      this.getsimilarproducts(this.productdetail[0].id);
    }
   
    })
  
  //  this.service.getproducts();

    

    

  
  }

  setgalleryoptions()
  {

  //  let optobj={
  //   small: 'assets/praharsha (2).jpg',
  //   medium: 'assets/praharsha (2).jpg',
  //   big: 'assets/praharsha (2).jpg'
  //  } 
  this.galleryOptions = [
    {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
];
 // console.log(this.productdetail[0].images);
  this.productdetail[0].images.map(e=>{this.galleryImages.push({
     small:e.image,
     medium:e.image,
     big:e.image
   })
  return e;})  

    


//   this.galleryImages = [
//     {
//         small: 'assets/praharsha (2).jpg',
//         medium: 'assets/praharsha (2).jpg',
//         big: 'assets/praharsha (2).jpg'
//     },
//     {
//         small: 'assets/praharsha (2).jpg',
//         medium: 'assets/praharsha (2).jpg',
//         big: 'assets/praharsha (2).jpg'
//     },
//     {
//         small: 'assets/praharsha (2).jpg',
//         medium: 'assets/praharsha (2).jpg',
//         big: 'assets/praharsha (2).jpg'
//     }
// ];
  }

  rightmove(event)
  {
    //console.log("rightmove");
   // console.log(this.element)
    this.element.scrollLeft+= 150;

  }
  leftmove(event)
  {
   // console.log('leftmove');
    //console.log(this.element)
    this.element.scrollLeft-=150;
  }
  getdate(time)
  {

    //time = new Date().getTime();
    time=parseInt(time)
    //console.log(time);
   let date = new Date(time);
   return date
  }
  checkavilability(day)
  {
    let days=[];
   days=this.productdetail[0].days.split(',');
  // console.log(days);
   return this.days.indexOf(day);

  }
  getlat(lat)
  {
   return parseFloat(lat);
  }
  getlng(lng)
  {
    return parseFloat(lng)
  }
  getsimilarproducts(productid)
  {
    this.service.getsimilarproducts(productid).subscribe(data=>{console.log(data); this.similarproducts=data.product_details.products})
  }
  filterproduct(product)
  {
  let product1={
     "name":product.product.Product_Name,
     "location":product.product.Location_Address,
     "price":product.product.Price_Value,
     "time_text":product.product.Product_Formatted_Time,
     "likes_count":product.product.Likes_Count,
     "uri":product.product.uri
      };

      return product1
   
  }
  getratingvalue(rating)
  {
    return parseFloat(rating);
  }
}
