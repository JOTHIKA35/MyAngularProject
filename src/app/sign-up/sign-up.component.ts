import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  // styles:[`input.ng-invalid{border :2px solid red;} input.ng-valid{border-left:2px solid green;}`]
})
export class SignUpComponent implements OnInit{

  public signupform!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){}

  ngOnInit():void{
    this.signupform=this.formBuilder.group({
      username:['',Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9]{5,13}$")],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.([a-z]{2,})$")]],
      phone:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]],
      cpassword:['',Validators.required]
    })
  }
  signup(){
      this.http.post<any>("http://localhost:3000/registeredUser",this.signupform.value)
      .subscribe(res=>{
        alert("Regsiter Successfully");
        this.signupform.reset();
        this.router.navigate(['login']);
      },
      err=>{
        alert("Something Went Wrong");
      })
  }
}
