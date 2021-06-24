import { Component, OnInit } from '@angular/core';
import{AuthserviceService} from '../services/authservice.service';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import{Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:any;
  error:any;
  constructor(private fb:FormBuilder,private service:AuthserviceService, private route:Router) { }

  ngOnInit(): void {
    this.forminit();
  }

  forminit()
  {
    this.registerform=this.fb.group({
      username:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).*$'), Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]],

    },
    {
      validator:this.mustmatch('password', 'confirmpassword')
    })
  }
  mustmatch(password, confirmpassword)
  {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmpassword];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
  }
  rigesterformsubmit()
  {
    console.log(this.registerform.value);
    this.service.register(this.registerform.value).subscribe((data)=>{console.log(data);this.registerform.reset();this.route.navigateByUrl('/home')},err=>{console.log(err.error.message); this.error=err.error.message;setTimeout(()=>{this.error=null},3000)})
 
  }
}
