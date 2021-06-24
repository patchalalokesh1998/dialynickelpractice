import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthserviceService} from '../services/authservice.service';
import {Router} from '@angular/router';

 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  user:any;
  constructor(private service:AuthserviceService, private route:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if(localStorage.getItem('user'))
    {
      return true;
    }
    this.route.navigateByUrl('/login')

  }
  
}
