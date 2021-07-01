import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('image') image: ElementRef;
  constructor(private fb:FormBuilder,private service:AuthserviceService, private route:Router) {
    
   }

  ngOnInit(): void {
    this.forminit();
  }

  forminit()
  {
    this.registerform=this.fb.group({
      username:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).*$'), Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]],
      image:['']

    },
    {
      validator:[this.mustmatch('password', 'confirmpassword')],
    
    }
  )
  }
  // imagematch(image)
  // {
  //   console.log(image);
  //   return (formGroup:FormGroup)=>{
  //     const control=formGroup.controls[image];
  //     console.log(this.image);
      
      
  //   }
  // }
  imagechange(image)
  {
    console.log(image);

    if (image.target.files.length > 0) {
      const file = image.target.files[0];
      console.log(file.size);
      console.log(file.type);
     const filesize =Math.round((file.size/1024))
      if(file.type=="image/jpeg" && filesize<=1024*25)
      {
        this.registerform.patchValue({
          image: file
        });
      }
     
        let formGroup:FormGroup=this.registerform;
        
        const control = formGroup.controls['image'];
       
        if((filesize>=1024*25))
        {

          control.setErrors({filesize:true})
        }
        else
        { 
          control.setErrors({filesize:null})
        }
        if((file.type!="image/jpeg"))
        {
          console.log('inside')
          control.setErrors({filetype:true})
        }
        else{
          control.setErrors(null)
        }

        console.log(formGroup);
       
      
      // this..patchValue({
      //   fileSource: file
      // });
    }
  }
  mustmatch(password, confirmpassword)
  {

    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmpassword];
       //console.log(control);

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
