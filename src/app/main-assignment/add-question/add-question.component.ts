import { Component, OnInit } from '@angular/core';
import { Mcq } from 'src/app/mcq';
import { AssignmentService } from 'src/app/assignment.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  newUser:Mcq = new Mcq('','','',"","","");
  id: any;
  constructor(private assignService :AssignmentService, private http:HttpClient, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")

  }

  add(){
    console.log(this.newUser)
    this.assignService.addMcq(this.newUser,this.id).subscribe((data)=>{
      const message = data;
      console.log(message);
    })


  }
}
