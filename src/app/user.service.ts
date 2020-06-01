import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
     return this.http.get<any>(this.baseURL);
  }
}
