import { HttpClient } from '@angular/common/http';
import { Component ,OnInit,Renderer2} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // styles:[`input.ng-invalid{border :2px solid red;} input.ng-valid{border-left:2px solid green;}`

})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router,private renderer:Renderer2) {
    // this.renderer.setStyle(document.body, 'background-color', 'rgb(188, 232, 255)');
  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/registeredUser")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email=== this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Successfully");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("Invalid username or password");
      }
      },err=>{
        alert("Something Went wrong");
      })
  }
}
