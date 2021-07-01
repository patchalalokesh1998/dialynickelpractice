import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable,BehaviorSubject, of } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user$=new BehaviorSubject(null);
 url:string="http://localhost:3000/dialynickel"
  constructor(private http:HttpClient) { }
  login(body):Observable<any>
  {
  return this.http.post(this.url+"/login",body).pipe(map(data=>{localStorage.setItem("user",JSON.stringify(data));this.user$.next(data);
  return data}))
  }
  register(body):Observable<any>
  {

   let formdata =  new FormData();
   formdata.append("username",body.username);
   formdata.append('password', body.password);
   formdata.append('image', body.image);
   console.log(formdata.get("username"))
   console.log(formdata.getAll);
  
   return this.http.post(this.url+"/register",formdata).pipe(map(data=>{localStorage.setItem("user",JSON.stringify(data));this.user$.next(data);
   return data}
   ))
  }

  logout()
  {
    localStorage.removeItem('user');
    this.user$.next(null);
  }

  setuser()
  {
    this.user$.next(JSON.parse(localStorage.getItem('user')));
  }



}
