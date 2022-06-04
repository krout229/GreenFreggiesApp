import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
Vegetableform = new FormGroup({
    vegetablename: new FormControl(),
    vegetableprice: new FormControl(),
    vegetableimage: new FormControl(),
    
  });
  constructor(private service:SharedService) { }

 

  ngOnInit(): void {
   
  }

onSubmit(){
    this.service.addUserDetails(this.Vegetableform.value).subscribe(data=>{ 
    })
  }

 
}