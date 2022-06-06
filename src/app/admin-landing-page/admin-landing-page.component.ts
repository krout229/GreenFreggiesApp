import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(public nav: NavbarServiceService, public fs:FooterService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.fs.show();
  }


}