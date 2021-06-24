import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  products:any;
  searchtext:String;
  searcharray:any=[];
  locations:any=[
    {
      location:"Hyderabad",
      products:["hproduct1", "hproduct2", "hproduct3"]
    },
    {
      location:"vizag",
      products:["vproduct1", "vproduct2", "vproduct3"]
    },
    {
      location:"banglore",
      products:["bproduct1", "bproduct2", "bproduct3"]
    }

  ];

  constructor() {

   } 

  ngOnInit(): void {
  }
  addsearchterm()
  {
    if(!this.searcharray.includes(this.searchtext))
    {
      this.searcharray.unshift(this.searchtext);
    }
    
    this.searcharray=this.searcharray.slice(0,5);
    console.log(this.searcharray)
  }

  findproducts(i)
  {
    console.log(i);
    this.products=this.locations[i].products
  }



}
