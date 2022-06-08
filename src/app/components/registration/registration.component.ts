import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms"

import { UserService } from "src/app/services/userservice/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitted:boolean=false;
  registerForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private userservice:UserService) { 
    this.registerForm = new FormGroup({
      fullName: new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      mobileNo:new FormControl()
    });
  }

  ngOnInit(): void {
    
  
  }
  
  onSubmit(){
    this.submitted = true;
    
      let reqData = {
        fullName: this.registerForm.value.fullName,
        email : this.registerForm.value.email,
        password: this.registerForm.value.password,
        mobileNo : this.registerForm.value.mobileNo
      }
      this.userservice.registerUser(reqData).subscribe((response:any)=>{
        console.log(response);
      })
    }
  }

    

