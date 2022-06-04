import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../Services/shared.service';
import { feedback } from '../Models/feedback.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  Feedbackform = new FormGroup({
    
    username : new FormControl('', ),
    feedback:new FormControl('',)
    
  });
  submitted=false;
  
  get username() {
    return this.Feedbackform.get('username');
  }
  get feedback() {
    return this.Feedbackform.get('feedback');
  }
  
  constructor(public nav: NavbarServiceService,private shared:SharedService) { }

  ngOnInit(): void {
    this.nav.show()
    this.nav.doSomethingElseUseful()
  }

  onSubmit() {
    this.submitted = true;
    if (this.Feedbackform.invalid) {
      return;
    
    }
    
  this.shared.addFeedDetails(this.Feedbackform.value).subscribe((result)=>{
   
});  
}
}
