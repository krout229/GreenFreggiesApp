import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormControl,AbstractControl } from '@angular/forms';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = this.fb.group({​​​​​
  email: ['',[Validators.required,Validators.email]], 
  password: ['', Validators.required]});
  submitted = false;
  constructor(private fb:FormBuilder,public nav: NavbarServiceService, public fs:FooterService) { }

  ngOnInit() {
    this.nav.show();
   this.nav.doSomethingElseUseful()
   this.fs.show();
}
get password(){
  return this.LoginForm.get('password');
}
get email(){
	return this.LoginForm.get('email');
  }
get f() { return this.LoginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
  }

    
  }
}
