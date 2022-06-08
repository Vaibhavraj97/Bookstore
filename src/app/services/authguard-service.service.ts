import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }
  gettoken(){
    if (localStorage.getItem("token")){
      return true;
    }else{
      return false
    }
  }
  }

