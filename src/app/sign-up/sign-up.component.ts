import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { UserDetails } from '../Models/sign-up.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SuccessComponent } from '../success/success.component';
import { SharedService } from '../Services/shared.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit  {
  //public userService:UserDetails;
//readonly APIUrl ="https://localhost:44307/api"
  SignUpform = new FormGroup({
    username : new FormControl('', Validators.required),
    emailid : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    mobilenumber : new FormControl('' , Validators.required),
    password : new FormControl('',Validators.required)
    
  });
  submitted=false;
  get username() {
    return this.SignUpform.get('username');
  }
  get emailid() {
    return this.SignUpform.get('emailid');
  }
  get address() {
    return this.SignUpform.get('address');
  }
  get mobilenumber() {
    return this.SignUpform.get('mobilenumber');
  }
  get password() {
    return this.SignUpform.get('password');
  }


  constructor(public nav: NavbarServiceService,private shared:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.nav.show()
    this.nav.doSomethingElseUseful()
  }

  onSubmit() {
    this.submitted = true;
    if (this.SignUpform.invalid) {
      return;
  }
  this.shared.addUserDetails(this.SignUpform.value).subscribe((result)=>{
   
});
}
  
}

