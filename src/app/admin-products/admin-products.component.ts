import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(public nav: NavbarServiceService,public fs:FooterService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.fs.show();
  }

}
