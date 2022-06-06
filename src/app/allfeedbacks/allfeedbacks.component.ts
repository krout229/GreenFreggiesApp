import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../Services/shared.service';
import { feedback } from '../Models/feedback.model';
import { HttpClient } from '@angular/common/http';
import { FooterService } from '../Services/footer.service';

@Component({
  selector: 'app-allfeedbacks',
  templateUrl: './allfeedbacks.component.html',
  styleUrls: ['./allfeedbacks.component.css']
})
export class AllfeedbacksComponent implements OnInit {
public feedback:feedback[];
  constructor(public nav: NavbarServiceService,private shared:SharedService,public fs: FooterService) { }

  ngOnInit(): void {
    this.nav.show();
   this.nav.doSomethingElseUseful();
   this.fs.show();
   this.fs.doSomethingElseUseful();
    this.refreshFeedList();
  }
  refreshFeedList(){
    this.shared.GetAllFeedDetails().subscribe(data=>{
      this.feedback=data;
      console.log(this.feedback)
    });
  }
}
