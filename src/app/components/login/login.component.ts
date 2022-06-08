import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from "@angular/forms";
import { UserService } from "src/app/services/userservice/user.service";
import {  ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  submitted: boolean=false;
  users='1';
  
  constructor(private formbuilder:FormBuilder,private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) { 
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password:new FormControl()
    })
  }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.users) 

  }
  onSubmit(){
this.submitted= true;
    let reqData ={
      email:this.loginForm.value.email,
      password : this.loginForm.value.password
    }

    this.userService.loginUser(reqData).subscribe((response:any)=>{

      console.log(response);
      localStorage.setItem("token",response.result.accessToken)
      this.router.navigateByUrl('/dashboard')
      localStorage.setItem('userId',response.userId)
    },(error)=>{console.log(error)})
  }
  
}