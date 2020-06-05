import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router'
import { authRequest } from '../authRequest';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new authRequest("","");
  currentUser:User;
  validOrNot: boolean=false;
  constructor(private loginService:LoginServiceService,private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
   this.loginService.loginRequest(this.user).subscribe((data)=> {
     this.currentUser=data;
     console.log(this.currentUser["jwt"]);
     localStorage.removeItem("token");
      localStorage.setItem("token",this.currentUser["jwt"]);
      this.validate();
  });
  }

  validate(){
    if(this.authService.isAutenticated()){ 
        console.log("successful")
          this.router.navigate(["/admin"]);
        }
        else{
          console.log("search ku pooo")
          this.router.navigate(["/search"])
        }

  }

}
