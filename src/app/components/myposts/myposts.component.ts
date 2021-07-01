import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  products:any;
  constructor() { 

    this.products=[
      {
       productname:"product1",
       price:"30",
       hours:"10",
       likescount:3,
       place:"place1"
      },
      {
        productname:"product2",
        price:"20",
        hours:"5",
        likescount:3,
        place:"place1"
      },
      {
        productname:"product3",
        price:"10",
        hours:"2",
        likescount:3,
        place:"place1"
      },
      {
        productname:"product1",
        price:"30",
        hours:"10",
        likescount:3,
        place:"place1"
       },
       {
         productname:"product2",
         price:"20",
         hours:"5",
         likescount:3,
         place:"place1"
       },
       {
         productname:"product3",
         price:"10",
         likescount:3,
         hours:"2",
         place:"place1"
       }
    ]
  }

  ngOnInit(): void {
  }

}
