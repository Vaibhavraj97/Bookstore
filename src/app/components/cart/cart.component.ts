import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from "@angular/router";
import { UserService } from 'src/app/services/userservice/user.service';
import {BookService} from "../../../app/services/book.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  book: any;
  cartcount: any;
  cartbooks: any = [];
  orderList: any = [];
  step = 0;
   disabled: boolean = true;
   customerForm!: FormGroup;
  formbuilder: any;
  submitted = false;
  constructor(private route:Router,private activatedroute:ActivatedRoute ,private bookService:BookService,private userService:UserService,
    private formbulder:FormBuilder) { }

  ngOnInit(): void {
   this.getcartlist();

   this.customerForm = this.formbuilder.group({
    fullName: ['', Validators.required],
    mobileNo: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
  })
}
 
  
  
 getcartlist(){
    this.bookService.usergetcartlist().subscribe((response:any)=>{
      console.log(response);
      this.cartcount = response.result.length
      this.cartbooks = response.result;
  
      
    })
  }
  removecartitem(book: any) {
    this.bookService.userremovecartitem(book._id).subscribe((response: any) => {
      console.log(response);
    })
  }
  onUpdateaddress() {
   
    if (this.customerForm.valid) {
      let data = {
        addressType: "Home",
        fullAddress: this.customerForm.value.address,
        city: this.customerForm.value.city,
        state: this.customerForm.value.state
      }
      this.userService.editAddressService(data).subscribe((response: any) => {
        console.log('edit address successfull', response);
        localStorage.setItem("token", response.result.accessToken);

      })
    }
  }
  ordersummary() {
    this.cartbooks.forEach((element: any) => {
      console.log("element", element);
      this.orderList.push(
        {
          "product_id": element.product_id._id,
          "product_name": element.product_id.bookName,
          "product_quantity": element.quantityToBuy,
          "product_price": element.product_id.price
        }
      );
    });
    console.log("orderList is this", this.orderList);

    let reqData = {
      "orders": this.orderList
    }
    this.bookService.checkOut(reqData).subscribe((response: any) => {
      console.log(response);
    })

    this.route.navigateByUrl("/dashboard/orderplaced")
  }

  step1() {
    this.step++;
  }
  step2() {
    this.step++;
  }
  step0() {
    this.step--;
  }
  _toggle() { }
}
