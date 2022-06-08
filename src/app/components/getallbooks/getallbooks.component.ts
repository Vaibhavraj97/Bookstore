import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import {  DataService } from "../../services/data.service";
@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  BookList: any;
  bookCount: any;
  book: any;
  searchword: any;
  constructor(private bookService: BookService, private activatedroute: ActivatedRoute, private router: Router,private dataservice:DataService) { }

  ngOnInit(): void {
    
    this.getAllBook();
     this.dataservice.receiveData.subscribe((response: any) => { 
      console.log(response)
      this.searchword = response;
      console.log(this.searchword);

    });
  }

  getAllBook() {
    this.bookService.usergetallbooks().subscribe((response: any) => {
      console.log(response);
      this.BookList = response.result;
    

    })
  }
  
  flashview(book: any) {
    localStorage.setItem('bookId', book._id);
    this.router.navigateByUrl('/dashboard/flashview/' + book._id)
 }
 addtobag(book:any) {
  this.bookService.useraddtobag(book._id).subscribe((response: any) => {
    console.log(response);
    console.log("productID", book._id);
})
 }
 addtowishlist(book: any) {
  this.bookService.useraddtowishlist(book._id).subscribe((response: any) => {
    console.log(response);

  })
}
}