import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //used to handle asnyc requests and responses
import { UserDetails } from '../Models/sign-up.model';
import { Product } from '../Models/product.model';
import {feedback } from '../Models/feedback.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userService:UserDetails;
  public products:Product[];
readonly APIUrl ="https://localhost:44307/api"
  constructor(private http:HttpClient) { }
  addUserDetails(val:any){
    console.log(val);
    return this.http.post<UserDetails>(this.APIUrl+'/UserDetails/SaveUserDetails',val)

}

getAllVegetable():Observable<Product[]>{
  return this.http.get<Product[]>(this.APIUrl+'/Vegetable/GetAllVegetables()')
}
addVegetable(val:any){
  return this.http.post<Product[]>(this.APIUrl+'/Vegetable/SaveVegetable',val);
}

updateVegetable(val:any){
  return this.http.post<Product[]>(this.APIUrl+'/Vegetable/UpdateVegetable',val);
}

deleteVegetable(val:any){
  return this.http.delete<Product[]>(this.APIUrl+'Vegetable/DeleteVegetable?VegetableID='+val);
}
GetVegetable(val:any){
  return this.http.post(this.APIUrl+'/Vegetable/GetVegetable',val);
}

    //return this.http.post<feedback>(this.APIUrl+'/UserDetails/SaveFeedDetails',val)
addFeedDetails(val:any){

}
}


