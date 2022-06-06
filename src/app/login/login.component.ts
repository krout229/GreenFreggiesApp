import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormControl,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  public LoginForm = this.fb.group({​​​​​
  emailid: ['',[Validators.required,Validators.email]], 
  password: ['', Validators.required]});
  submitted = false;
  constructor(private Service:SharedService, private fb:FormBuilder,public nav: NavbarServiceService, public fs:FooterService, private Http:HttpClient, private router:Router) { }
  
  ngOnInit() {
  this.nav.show();
  this.nav.doSomethingElseUseful()
  this.fs.show();
}
get password(){
  return this.LoginForm.get('password');
}
get emailid(){
	return this.LoginForm.get('emailid');
  }
get f() { return this.LoginForm.controls; }

onSubmit() {
    this.submitted = true;
    if (this.LoginForm.invalid) {return;}
    this.Service.getAllUserDetails().subscribe(res=>{
    const user = res.find((a:any)=>{
     return a.EmailId === this.LoginForm.value.emailid && a.Password === this.LoginForm.value.password
      
    });
    if(user){
      console.log(user);
      if(user.Role==='Admin')
      {
      const a=user.Username;
      alert("Login Successful");
      this.LoginForm.reset();
      this.router.navigate(['login/admin']);
    } else{
      alert("Login Successful");
      this.LoginForm.reset();
      this.router.navigate(['login/user']);
    }
    }
    else{
      alert("User not found");
    }
    
          
      })
      
    }
  } 