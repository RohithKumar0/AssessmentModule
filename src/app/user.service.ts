import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './User';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = "http://localhost:5005/users"

  test:any;
  constructor(private http: HttpClient) { }

  getAll():Observable<User>{
    // const token = localStorage.getItem("token")
    // const headers = new HttpHeaders({ Authorization: 'Bearer ' + token});
     return this.http.get<any>(this.baseURL);
  }

  add(user: User):Observable<string>{
    return this.http.post<any>(this.baseURL+'/add', user);
  }

  getById(id:any){
    const url = this.baseURL+"/"+id;
    console.log(url);
    return this.http.get<any>( this.baseURL+"/"+id)
  }

  getAssignments(id:any):Observable<any>{
    const url = this.baseURL+"/"+id+"/myAssignments";
    return this.http.get<any>(url);
  }
}
