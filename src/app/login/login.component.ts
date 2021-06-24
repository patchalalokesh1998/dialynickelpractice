import { Component, OnInit } from '@angular/core';
import{AuthserviceService} from '../services/authservice.service';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginform:any;
   show:boolean=true;
   error:any;
  constructor(private fb:FormBuilder, private service:AuthserviceService, private route:Router) { }

  ngOnInit(): void {
    this.forminit();
  }
  forminit()
  {
    this.loginform= this.fb.group({
      username:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).*$'), Validators.minLength(8)]],

   })
  }
  loginformsubmit()
  {
    console.log(this.loginform.value)
    this.service.login(this.loginform.value).subscribe((data)=>{console.log(data);this.loginform.reset();this.route.navigateByUrl('/home')},err=>{ this.error=err.error.message; setTimeout(()=>{this.error=null},3000)})
  }
  showhidebtn()
  {
    this.show?this.show=false:this.show=true;
  }



}
