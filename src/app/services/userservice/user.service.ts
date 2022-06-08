import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any


  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem('token')

  }
  registerUser(reqData: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  
      })
    }
    return this.httpService.postService('registration', reqData, false, header)
  }               

  loginUser(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  
      })
    }
    return this.httpService.postService('login', reqData, false, header)
  }     
  editAddressService(reqData:any){
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'x-access-token': this.token,
    })
  }
  return this.httpService.putService('edit_user', reqData, true, headers)
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


