import { Component, OnInit } from '@angular/core';
import Cart from '../Models/cart.model';
import { Product } from '../Models/product.model';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products: Product[];
public carts:Cart;
  constructor(private service:SharedService,public nav:NavbarServiceService,public fs:FooterService) { }

  ngOnInit(): void {
    this.refreshVegList();
    this.nav.show();
    this.fs.show();
  }
  refreshVegList(){
    this.service.getAllVegetable().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    });
  }
  addToCart(products:Product){
    
    console.log(products);
    
      this.service.addToCart(products).subscribe(val=>{
        
      });
      alert("Added to Cart!");
    
  
  }

}