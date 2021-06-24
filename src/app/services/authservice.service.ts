import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
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
   return this.http.post(this.url+"/register",{"username":body.username, "password":body.password}).pipe(map(data=>{localStorage.setItem("user",JSON.stringify(data));this.user$.next(data);
   return data}))
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
