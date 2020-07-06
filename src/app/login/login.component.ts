import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router'
import { authRequest } from '../authRequest';
import { AuthService as auth } from '../auth.service';
import {SocialUser,AuthService, GoogleLoginProvider} from 'angularx-social-login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new authRequest("","");
  currentUser:User;
  validOrNot: boolean=false;
  socialuser: any = SocialUser;
  InvalidCredentials: boolean=false;
  constructor(private loginService:LoginServiceService,private router:Router, private authService:auth, private socialAuthService: AuthService) {}

    
  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.validate();
    }
  }

  googleSignin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      this.socialuser = data;
      console.log(this.socialuser);
      this.loginByGoogle();
    })
  }

  loginByGoogle(){
    const googleSignUser:User= new User(this.socialuser.name,"",this.socialuser.email,false,"","")
    console.log(googleSignUser);
    this.loginService.loginByGoogle(googleSignUser).subscribe((data)=>{
      this.currentUser=data;
      console.log(this.currentUser);
      localStorage.removeItem("token");
      localStorage.setItem("token",this.currentUser["jwt"]);
      this.validate();
    })

   }


  onSubmit(){
    console.log(this.user)
   this.loginService.loginRequest(this.user).subscribe((data)=> {
     this.currentUser=data;
     console.log(this.currentUser["jwt"]);
     localStorage.removeItem("token");
      localStorage.setItem("token",this.currentUser["jwt"]);
      console.log(localStorage.getItem("token"))
      this.validate();
  }, (error)=>{
    console.log(error)
    if(error.status == 500){
      console.log("invalid username and passwod")
      this.InvalidCredentials = true
    }
  }
  );
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
