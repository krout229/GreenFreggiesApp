import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavbarServiceService, public fs: FooterService) { }

  ngOnInit():void {
   this.nav.show();
   this.nav.doSomethingElseUseful();
   this.fs.show();
   this.fs.doSomethingElseUseful();
  }
  
}
