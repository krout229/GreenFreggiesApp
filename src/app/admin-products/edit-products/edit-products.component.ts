import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { NavbarServiceService } from 'src/app/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  public products:Product[];
  VegetableForm = new FormGroup({
    VegetableName : new FormControl('', Validators.required),
    VegetablePrice : new FormControl('',Validators.required),
    VegetableImage : new FormControl('',Validators.required),
    
  });
  submitted=false;
 
  get VegetableName() {
    return this.VegetableForm.get('VegetableName');
  }
  get VegetablePrice() {
    return this.VegetableForm.get('VegetablePrice');
  }
  get VegetableImage() {
    return this.VegetableForm.get('VegetableImage');
  }
  constructor( public shared:SharedService,public nav:NavbarServiceService,public fs:FooterService,private router:Router) { }

  ngOnInit(): void {
    this.nav.hide();
    this.fs.show();
  }
  addVegetable(){
    this.submitted = true;
     if (this.VegetableForm.invalid) {
       return;

      }
   this.shared.addVegetable(this.VegetableForm.value).subscribe((result)=>{
   
    });
    alert("Vegetable Added Successfully");
    this.VegetableForm.reset();
    location.reload();
    this.router.navigate(['/admin-products']);
  
  }
}
