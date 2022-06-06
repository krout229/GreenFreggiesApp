import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable,} from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';
import { NavbarServiceService } from 'src/app/navbar-service.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  
  readonly APIUrl='https://localhost:44307/api/';
  public products:Product[];
  ModalTitle:string;
  
  router: any;
  modalInput: number;
  constructor(private service:SharedService,private http:HttpClient, public nav:NavbarServiceService ) {
  }
  
  ActivateAddEditProd:boolean=false;
  veg:any;
  ngOnInit(): void {
    this.nav.hide();
    this.refreshVegList();
  }

  

delete(id:number){
  if(confirm('Are you sure?')){
    this.service.deleteVegetable(id).subscribe(data=>{
      console.log(data);
      this.refreshVegList();
    });
    location.reload();
  }
  
} 
  
  displayStyle = "none";
  
  openPopup1() {
    this.displayStyle = "block";
    this.ModalTitle="Add Vegetable";
   
  }
  openPopup() {
    this.displayStyle = "block";
    this.ModalTitle="Add vegetable";
   
  }
  
  closePopup() {
    this.displayStyle = "none";
    location.reload();
  }
  refreshVegList(){
    this.service.getAllVegetable().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    });
    
  }
  editClick(id:number){
    this.displayStyle = "block";
    console.log(id);
    
    this.ModalTitle="Edit Vegetables";
   
  }
}
