import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Assignment } from './assignmentStructure';
import { McqStructure } from './McqStructure';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  baseUrl ="http://localhost:5005/6/assignments";
  constructor(private http:HttpClient) { }

  getAll():Observable<Assignment>{
    console.log("reached");
    return this.http.get<any>(this.baseUrl);
  }

  getById(id:number):Observable<Assignment>{
    return this.http.get<any>(this.baseUrl+"/"+id)
  }

  getMcqs(id:number):Observable<McqStructure>{
    const url = "http://localhost:5005/"+id+"/mcq";
    return this.http.get<any>(url);
  }

}
