import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cart from '../Models/cart.model';
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';
import { SharedService } from '../Services/shared.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Cart[];
  constructor(public nav: NavbarServiceService,public fs: FooterService,private shared:SharedService ,public http :HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
   this.nav.doSomethingElseUseful();
   this.fs.show();
   this.fs.doSomethingElseUseful();
    this.refreshCartList();
  }
  refreshCartList(){
  this.shared.GetAllCart().subscribe(data=>{
    this.cart=data;
    console.log(this.cart)
  });

  }
  DeleteCart(id:number){
    if(confirm('Are you sure?')){
      this.shared.DeleteFromCart(id).subscribe(data=>{
        console.log(data);
      });
      location.reload();
    }
}
addOrder(){
  this.shared.addOrderDetails(this.cart).subscribe(res=>{

  });
  alert('Order successful!');
  this.router.navigate(['order']);
}
}
