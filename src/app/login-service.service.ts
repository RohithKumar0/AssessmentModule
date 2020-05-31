import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './User';
import { Router } from '@angular/router'
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  message:any;
  url= "http://localhost:8080/users/login";
  constructor(private http: HttpClient, private router:Router) { }

  loginRequest(user:User): Observable<User>{
    console.log("login request");
    return this.http.post<any>(this.url, user);
  }
}

