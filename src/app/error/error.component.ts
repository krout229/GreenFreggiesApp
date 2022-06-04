import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(public nav: NavbarServiceService,public fs:FooterService) { }

  ngOnInit(): void {
    this.nav.hide();
    
    this.fs.hide();
   // this.fs.doSomethingElseUseful();

  }

}
