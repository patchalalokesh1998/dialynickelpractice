import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../services/authservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedin:boolean
  

  constructor(private service:AuthserviceService ) {
    this.service.user$.subscribe(data=>{this.loggedin=!!data;})
   }

  ngOnInit(): void {
  }

  logout()
  {
    this.service.logout();
  }

}
