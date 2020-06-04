import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CurrentUser:any;

  constructor(private jwt:JwtHelperService) { }

  public isAutenticated(): boolean{
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(this.jwt.isTokenExpired(token));
    if(!this.jwt.isTokenExpired(token)){

      this.CurrentUser= this.jwt.decodeToken(token);
      console.log(this.CurrentUser);
      if (this.CurrentUser["admin"]){
        return true; //for admin
      }
      return false; 
    }
    return false;
  }

  public getToken(){
    return localStorage.getItem("token");
  }

  public getUserdetails(){
    this.isAutenticated();
    return this.CurrentUser;
  }

  public getUserId():number{
    return this.CurrentUser["id"];
  }
}
