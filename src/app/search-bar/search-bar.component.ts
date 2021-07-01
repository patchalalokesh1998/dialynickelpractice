import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  products:any;
  searchtext:String;
  location:String;
  searcharray:any=[];
  
  // locations:any=[
  //   {
  //     location:"Hyderabad",
  //     products:["hproduct1", "hproduct2", "hproduct3"]
  //   },
  //   {
  //     location:"vizag",
  //     products:["vproduct1", "vproduct2", "vproduct3"]
  //   },
  //   {
  //     location:"banglore",
  //     products:["bproduct1", "bproduct2", "bproduct3"]
  //   }

  // ];
  // locationarray:any=[
  //  "Vijawada","Guntur"
  // ]
  locationarray:any=[];

  constructor() {

   } 

  ngOnInit(): void {
  }
  addsearchterm()
  {
    if(this.searchtext)
    {
      if(!this.searcharray.includes(this.searchtext))
    {
      this.searcharray.unshift(this.searchtext);
    }
    
    this.searcharray=this.searcharray.slice(0,5);
    }
  

    //console.log('clicked');
   
    //console.log(this.searcharray)
  }

  addlocations()
  {
    console.log('inside');

    if(this.location)
    { 
      if(!this.locationarray.includes(this.location))
    {
      this.locationarray.unshift(this.location);
     
    }
    this.locationarray=this.locationarray.slice(0,4);
    }
   


  }

  // findproducts(i)
  // {
  //   console.log(i);
  //   this.products=this.locations[i].products
  // }



}
