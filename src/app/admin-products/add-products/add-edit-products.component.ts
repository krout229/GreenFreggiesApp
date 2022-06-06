import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/product.model';
import { SharedService } from 'src/app/Services/shared.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-add-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
public products:Product[];
  VegetableForm = new FormGroup({
    VegetableName : new FormControl('', Validators.required),
    VegetablePrice : new FormControl('',Validators.required),
    VegetableImage : new FormControl('',Validators.required),
    VegetableID:new FormControl('')
  });
  submitted=false;
  get VegetableID(){
    return this.VegetableForm.get('VegetableID');
  }
  get VegetableName() {
    return this.VegetableForm.get('VegetableName');
  }
  get VegetablePrice() {
    return this.VegetableForm.get('VegetablePrice');
  }
  get VegetableImage() {
    return this.VegetableForm.get('VegetableImage');
  }
 
  displayStyle = "none";

  constructor(private shared:SharedService,) { }

  ngOnInit(): void {
    
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
  
  }
  editVegetables(){
    
     this.shared.updateVegetable(this.VegetableForm.value).subscribe((result)=>{
   
     });
  }
  
}