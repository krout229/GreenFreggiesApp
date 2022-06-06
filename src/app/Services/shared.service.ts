import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'; //used to handle asnyc requests and responses
import { UserDetails } from '../Models/sign-up.model';
import { Product } from '../Models/product.model';
import {feedback } from '../Models/feedback.model';
import cart from '../Models/cart.model';
import order from '../Models/order.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userService:UserDetails;
  public products:Product[];
  public cart:cart[];
  public order:order[];
readonly APIUrl ="https://localhost:44307/api"
  constructor(private http:HttpClient) { }

getAllVegetable():Observable<Product[]>{
  return this.http.get<Product[]>(this.APIUrl+'/Vegetable/GetAllVegetables()')
}
addVegetable(val:any){
  return this.http.post<Product[]>(this.APIUrl+'/Vegetable/SaveVegetable',val);
}

updateVegetable(val:any){
  return this.http.put<Product[]>(this.APIUrl+'/Vegetable/UpdateVegetable',val);
}

deleteVegetable(id:number){
  return this.http.delete<Product[]>(this.APIUrl+'/Vegetable/DeleteVegetable?VegetableID='+id);
}
GetVegetable(val:any){
  return this.http.post(this.APIUrl+'/Vegetable/GetVegetable',val);
}

    //return this.http.post<feedback>(this.APIUrl+'/UserDetails/SaveFeedDetails',val)
addToCart(val:any){
  return this.http.post<cart>(this.APIUrl+'/Cart/SaveCart',val,);
}
GetAllCart():Observable<cart[]>
{
return this.http.get<cart[]>(this.APIUrl+'/Cart/GetAllCart')
}
addUserDetails(val:any){
  console.log(val);
  return this.http.post<UserDetails>(this.APIUrl+'/UserDetails/SaveUserDetails',val)
}
getAllUserDetails():Observable<any[]>{
return this.http.get<any[]>(this.APIUrl+'/UserDetails/GetAllUserDetails()')
}
GetAllOrderDetails():Observable<order[]>
{
  return this.http.get<order[]>(this.APIUrl+'/OrderDetails/GetAllOrderDetails()')
}
GetAllFeedDetails():Observable<feedback[]>
{
 return this.http.get<feedback[]>(this.APIUrl+'/Feedback/GetAllFeedDetails()')
}
addFeedDetails(val:any){
  console.log(val);
  //return this.http.post<UserDetails>(this.APIUrl+'/UserDetails/SaveUserDetails',val)
  return this.http.post<feedback>(this.APIUrl+'/Feedback/SaveFeedDetails',val)

}
DeleteFromCart(id:number)
{ return this.http.delete<cart[]>(this.APIUrl+'/Cart/DeleteCart?CartId='+id)
}
addOrderDetails(val:any){
  console.log(val);
  return this.http.post<order[]>(this.APIUrl+'/OrderDetails/SaveOrderDetails',val)
}
}



