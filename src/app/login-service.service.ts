import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './User';
import { Router } from '@angular/router'
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { authRequest } from './authRequest';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  message:any;
  url= "http://localhost:5005/authenticate";

  constructor(private http: HttpClient, private router:Router) { }

  loginRequest(user:authRequest): Observable<User>{
    // localStorage.setItem("token",this.adminToken);
    ///localStorage.removeItem("token");
    console.log("login request");
    return this.http.post<any>(this.url, user);
  }
  
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}

