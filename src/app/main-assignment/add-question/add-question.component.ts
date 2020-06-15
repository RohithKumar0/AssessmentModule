import { Component, OnInit } from '@angular/core';
import { Mcq } from 'src/app/mcq';
import { AssignmentService } from 'src/app/assignment.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { quiz } from 'src/app/quiz';
import { project } from 'src/app/project';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  newMcq:Mcq = new Mcq('','','',"","","");
  newQuiz:quiz= new quiz("","");
  newProject: project= new project("","");
  id: any;
  constructor(private assignService :AssignmentService, private http:HttpClient, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")

  }

  add(){
    console.log(this.newMcq)
    this.assignService.addMcq(this.newMcq,this.id).subscribe((data)=>{
      const message = data;
      console.log(message);
    })
  }

  addProject(){
    console.log(this.newProject)
    this.assignService.addProject(this.newProject,this.id).subscribe((data)=>{
      const message = data;
      console.log(message);
    })
  }

  addQuiz(){
    console.log(this.newQuiz)
    this.assignService.addQuiz(this.newQuiz,this.id).subscribe((data)=>{
      const message = data;
      console.log(message);
  })
}
}