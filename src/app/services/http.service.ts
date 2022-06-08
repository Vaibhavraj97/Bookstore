import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import {  environment} from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl = environment.baseUrl

  constructor(private http:HttpClient) { }


  postService(url: any, reqData: any, token: boolean = false, httpOptions: any) {  
    console.log(reqData)
    return this.http.post(this.baseurl + url, reqData, token && httpOptions)
  }
  getService(url: string, token: boolean = false, httpOptions:any={}) {
    return this.http.get(this.baseurl + url, token && httpOptions)
  }
  deleteService(url: any, data: any, token: boolean = false, httpOptions: any) { 
    console.log(data)
    return this.http.delete(this.baseurl + url, token && httpOptions)
  }
  putService(url: string = '', reqPayload: any = null, token: boolean = false, httpOptions: any = {}) {
    console.log(reqPayload);
    return this.http.put(this.baseurl + url, reqPayload, token && httpOptions)


  }
}
