import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  title = 'My first AGM project';
  lat:any = 17.508899890926713;
  lng:any = 82.93632142416828;
  cards:any=[{
    name:"card1",
    lat:"14.183736672938997",
    log:"79.93877708669314",
    productprice:"20",
  
  },
  {
    name:"card2",
    lat:"14.183736672938997",
    log:"79.93877708669314",
    productprice:"20",
  
  },
  {
    name:"card3",
    lat:"14.14467809015264",
    log:"79.71172641720185",
    productprice:"20",
  
  },
  {
    name:"card4",
    lat:"17.508899890926713",
    log:"82.93632142416828",
    productprice:"20",
  
  },
  {
    name:"card5",
    lat:"17.508899890926713",
    log:"82.93632142416828",
    productprice:"20",
  
  },
];
filtercards:any;


  constructor() { }

  ngOnInit(): void {
    this.filtercards=this.cards;
    this.onchooselocation({coords:{lat:this.lat,lng:this.lng}})

  }

  public onPreviousSearchPosition(): void {
    this.panel.nativeElement.scrollLeft-= 150;
  }

  public onNextSearchPosition(): void {
    this.panel.nativeElement.scrollLeft+= 150;
  }
  onchooselocation(event)
  {
    this.filtercards=this.cards;
    console.log(event);
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;
    this.filtercards=this.cards.filter(card=>{if(this. _getDistanceFromLatLonInKm(parseFloat(this.lat),parseFloat(this.lng),card.lat,card.log)<200)
    {
    return true;
    }
    })
    console.log(this.filtercards)
    // if (this. _getDistanceFromLatLonInKm(parseFloat(this.lat),parseFloat(this.lng),1,2) < 0.1)
    // {

    // }
  }

   _getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in kilometers
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in KM
    return d;
  }
  
   deg2rad(deg) {
    return deg * (Math.PI / 180)
  }


}
