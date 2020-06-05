import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Assignment } from './assignmentStructure';
import { McqStructure } from './McqStructure';
import { Mcq } from './mcq';
import { Assignment1 } from './assignment';

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

  getMcqs(id:number):Observable<any>{
    const url = "http://localhost:5005/"+id+"/mcq";
    return this.http.get<any>(url);
  }

  getCandidate(assignID:any):Observable<any>{
    const url = this.baseUrl+"/"+assignID+"/candidate";
    return this.http.get<any>(url);
  }

  addMcq(mcq:Mcq,id:any):Observable<any>{
    return this.http.post<any>("http://localhost:5005/"+id+"/mcq/add",mcq);
  }

  addAssignment(Assignment:Assignment1,id:any){
    return this.http.post<any>("http://localhost:5005/"+id+"/assignments/add",Assignment)
  }
}
