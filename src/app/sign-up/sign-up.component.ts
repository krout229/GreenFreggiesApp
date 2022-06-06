import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../Services/shared.service';
import { UserDetails } from '../Models/sign-up.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit  {
    SignUpform = new FormGroup({
    username : new FormControl('', Validators.required),
    emailid : new FormControl('',[Validators.required , Validators.email]),
    address : new FormControl('',Validators.required),
    mobilenumber : new FormControl('' , [Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
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


  constructor(public nav: NavbarServiceService,private shared:SharedService, private router:Router) { }

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
alert("Sign Up Successful");
  this.SignUpform.reset();
  this.router.navigate(['login']);
}
  
}