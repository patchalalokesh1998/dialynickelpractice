import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
//     this.http.post('https://swachnode.herokuapp.com/login',{
//       "email":"patchalalokesh1998123@gmail.com",
//       "name":"PatchalaLokesh",
//       "userid":"1371735784621887491"
// }).subscribe(data=>{console.log(data)})
  }

}
