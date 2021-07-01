import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../services/authservice.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedin:boolean;
  loggedinfo;
  myImage;
  

  constructor(private service:AuthserviceService, private domSanitizer: DomSanitizer) {
    this.service.user$.subscribe(data=>{this.loggedin=!!data; this.loggedinfo=data; 
      if(this.loggedinfo.image)
      {
        this.myImage = this.domSanitizer.bypassSecurityTrustStyle (`url(${'data:image/jpg;base64,' 
        + this.loggedinfo.image})`)
      }
      else
      {
        this.myImage='url("../../assets/dubai.png")'
      }
     
     });
    
    
   }

  ngOnInit(): void {
  }

  logout()
  {
    this.service.logout();
  }

}
