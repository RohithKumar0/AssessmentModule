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
  url= "http://localhost:5005/users/login";
  adminToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9oaXRoIiwiZW1haWwiOiJyQGdtaWwuY29tIiwiYWRtaW4iOnRydWV9.T5RuGXXKBG9ocjBAnysaSrMHD0ZcGu3Eln0OJgtfYuQ"
  userToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ImZhbHNlIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.iDKa3JYcjcBRzUsLRjd8vS7QH9jgST0sN8K1c3SPDmY";

  constructor(private http: HttpClient, private router:Router) { }

  loginRequest(user:User): Observable<User>{
    localStorage.setItem("token",this.adminToken);
    ///localStorage.removeItem("token");
    console.log("login request");
    return this.http.post<any>(this.url, user);
  }
}

