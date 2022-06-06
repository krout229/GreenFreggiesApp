import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../Services/shared.service';
import { feedback } from '../Models/feedback.model';
import { HttpClient } from '@angular/common/http';
import { FooterService } from '../Services/footer.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  Feedbackform = new FormGroup({
    
    Username : new FormControl('',),
    Feedback:new FormControl('',)
    
  });
  submitted=false;
  public feedbacks:feedback[];
  get username() {
    return this.Feedbackform.get('Username');
  }
  get feedback() {
    return this.Feedbackform.get('Feedback');
  }
  
  constructor(public nav: NavbarServiceService,private shared:SharedService,public fs: FooterService) { }

  ngOnInit(): void {
    this.nav.show()
    this.nav.doSomethingElseUseful()
    this.fs.show()
    this.fs.doSomethingElseUseful()
  }

  onSubmit() {
    this.submitted = true;
    if (this.Feedbackform.invalid) {
      return;
    
    }
    
  this.shared.addFeedDetails(this.Feedbackform.value).subscribe((result)=>{
   
});
  location.reload();
}


}
