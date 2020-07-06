import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CurrentUser:any;

  constructor(private jwt:JwtHelperService, private userSevice:UserService) { }

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
    if (localStorage.getItem("token")){
      console.log(this.CurrentUser);
      this.isAutenticated();
      return this.CurrentUser["id"];}
      else{
        return 0;
      }

  }

  public isGivenIdAdminOrNot(id:number):Promise<any>{
    let admin:any;
    this.userSevice.getById(id).subscribe((data)=>{
      admin=data["admin"];
      console.log(admin)
    })

    return of(admin).toPromise();
  }
}
