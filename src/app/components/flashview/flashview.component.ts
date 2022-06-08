import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { BookService } from "./../../services/book.service";

@Component({
  selector: 'app-flashview',
  templateUrl: './flashview.component.html',
  styleUrls: ['./flashview.component.scss']
})
export class FlashviewComponent implements OnInit {
  value:any;
  bookStoreArray:any=[];
  feedback: any;
  bookdata: any;
  bookId:any;
  book:any;
  
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    console.log(this.bookId);
   this.getbookdetail();
  }
  getbookdetail(){
    this.bookService.usergetallbooks().subscribe((response:any)=>{
      response.result.forEach((element:any)=>{
        if(element._id == this.bookId){
          this.bookdata = element;
        }
      })
    })
  }
  addtobag(data:any) {
    this.bookService.useraddtobag(data._id).subscribe((response: any) => {
      console.log(response);
     
  })
   }
   addtowishlist(book: any) {
    this.bookService.useraddtowishlist(book._id).subscribe((response: any) => {
      console.log(response);
  
    })
  }
  addfeedback(){
    let reqData={
      comment:this.feedback,
      rating: this.value
    }
    this.bookService.addfeedbackService(this.bookId, reqData).subscribe((response:any)=>{
      console.log("this is the response",response);
  
  })
  }

}