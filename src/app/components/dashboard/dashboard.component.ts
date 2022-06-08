import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BookService } from "../../services/book.service";
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 

  constructor(private router:Router,private bookService:BookService,private dataservice:DataService) { }

  ngOnInit(): void {
    
  }
  cart(){
    this.bookService.usergetcartlist().subscribe((response:any)=>{
      console.log(response.result);
    })
    this.router.navigateByUrl('/dashboard/cart')
  }
  wishlist() {
    this.router.navigateByUrl("/dashboard/wishlist")
  }
  Logout() {
    
    this.router.navigateByUrl('/login')
  }
  searchBook(search: any) { 
    console.log(search);  
    this.dataservice.sendData(search) 
  }
   
}

