import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../Services/shared.service';
import { feedback } from '../Models/feedback.model';
import { HttpClient } from '@angular/common/http';
import { FooterService } from '../Services/footer.service';
import order  from '../Models/order.model';
import { Injectable } from '@angular/core';
import Cart from '../Models/cart.model';
//import cart from '../Models/cart.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public cart:Cart[];
  constructor(public nav: NavbarServiceService,public fs: FooterService,private shared:SharedService ,public http :HttpClient) { }

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

}