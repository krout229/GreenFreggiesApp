import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';


@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  constructor(public nav: NavbarServiceService, public fs:FooterService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.fs.show();
  }

}