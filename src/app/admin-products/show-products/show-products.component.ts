import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/Models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  
  readonly APIUrl='https://localhost:44307/api/';
  public products:Product[];
  ModalTitle:string;
  constructor(private service:SharedService,private http:HttpClient) {
  }
  
  
  ngOnInit(): void {
    this.refreshVegList();
  }

  

 deleteClick(products:any){
    if(confirm('Are you sure??')){
      this.service.deleteVegetable(this.products.vegetableID).subscribe(data=>{
        alert(data.toString());
        this.refreshVegList();
      })
    }
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
    this.ModalTitle="Add Vegetable";
   
  }
  closePopup() {
    this.displayStyle = "none";
  }
  refreshVegList(){
    this.service.getAllVegetable().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    });
  }
}

