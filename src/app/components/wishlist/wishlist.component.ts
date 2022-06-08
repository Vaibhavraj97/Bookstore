import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
 wishlistitem:any;
  countlist: any;
  constructor(private bookService:BookService,private activatedroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getwishlist();
  }
  getwishlist(){
    this.bookService.userwishlist().subscribe((response:any)=>{
      console.log(response);
      this.wishlistitem=response.result
      this.wishlistitem.reverse()
      this.countlist=response.result.length
      
    })
  }
}
