import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import {  HttpService} from "./../services/http.service";
@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  usergetallbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('get/book', true, header)
  }

  
    useraddtobag(productID: any) {
      console.log('productID', productID)
      let header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.token
        })
      }
      return this.httpService.postService('add_cart_item/' + productID, {}, true, header)
    }
    useraddtowishlist(productID: any){
      console.log('productID', productID)
      let header ={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'x-access-token': this.token
        })
      }
      return this.httpService.postService("add_wish_list/" + productID,{},true,header)
    }
    usergetcartlist(){
      let header = {
        headers: new HttpHeaders({
          'Content-type':'application/json',
          'x-access-token': this.token
        })
      }
      return this.httpService.getService('get_cart_items', true,header);
    }
    userwishlist() {
      let header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.token
        })
      }
      return this.httpService.getService('get_wishlist_items', true, header)
    }
    addfeedbackService(productID:any, reqData:any){
      let header ={
        headers:new HttpHeaders({
         'Content-Type': 'application/json',
         'x-access-token': this.token    
        })
      }
      return this.httpService.postService('add/feedback/' +productID, reqData,true,header)
    }
  
    userremovecartitem(productID: any)
    {
        let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.deleteService('remove_cart_item/' + productID, {}, true, header)
  }
  checkOut(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService('add/order', reqData, true, headers)
  }
}
  

