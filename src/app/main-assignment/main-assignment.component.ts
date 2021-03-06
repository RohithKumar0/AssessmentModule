import { Component, OnInit } from '@angular/core';
import { AboutAssignmentComponent } from './about-assignment/about-assignment.component';
import { CandidatePerformanceComponent } from './candidate-performance/candidate-performance.component';
import { QuestionsComponent } from './questions/questions.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignmentStructure';
import { AssignmentService } from '../assignment.service';
import { HttpClient } from '@angular/common/http';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-assignment',
  templateUrl: './main-assignment.component.html',
  styleUrls: ['./main-assignment.component.css']
})
export class MainAssignmentComponent implements OnInit {

  userid:any
  id:any;
  currentAssignment:any; 
  dummyComponent:any = AboutAssignmentComponent;
  constructor(private activatedRouter:ActivatedRoute, private asignService: AssignmentService,private http:HttpClient, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.id= this.activatedRouter.snapshot.paramMap.get("id")
    this.asignService.getById(this.id).subscribe((data)=>{console.log(data);this.currentAssignment=data;
    console.log(this.currentAssignment)})

    this.userid= this.auth.getUserId();
  }


  change(choice:string){
    if (choice=="about"){
      this.dummyComponent=AboutAssignmentComponent;
    }
    else if(choice=="add"){
      this.dummyComponent=AddQuestionComponent;
    }
    else if(choice=="performance"){
      this.dummyComponent=CandidatePerformanceComponent;
    }
    else if(choice=="questions"){
      this.dummyComponent= QuestionsComponent;
    }
  }
  delete(){
    this.asignService.deleteAssignment(this.userid, this.id).subscribe((data)=>{
      this.router.navigate(["/admin"])

    })
  }

}
