import { Component } from '@angular/core';
import {AuthserviceService} from './services/authservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialynickelpractice';
  constructor(private service:AuthserviceService)
  {

  }
  ngOnInit()
  {
    this.service.setuser()
  }

}
