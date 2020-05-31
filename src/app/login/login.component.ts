import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User("","",'',false);
  currentUser:User;
  validOrNot: boolean=false;
  constructor(private loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
   this.loginService.loginRequest(this.user).subscribe((data)=> {
     this.currentUser=data;
     console.log(this.currentUser);
     this.validate();
  });
  }

  validate(){
    if(this.currentUser){
        console.log("successful")
        if (this.currentUser.admin) {
          this.router.navigate(["/admin"]);
        }
        else{
          this.router.navigate(["/search"])
        }

  }
}
}
