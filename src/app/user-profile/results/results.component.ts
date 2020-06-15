import { Component, OnInit } from '@angular/core';
import { result, split } from 'src/app/result';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  splitup = new split(null,null,null)
  newResult = new result(null,null,null,null,null, null)
  id: any;
  constructor(private assignService:AssignmentService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")
  }

  onAdd(){
    const project = Number(this.splitup.build)+Number(this.splitup.process)+Number(this.splitup.testing)
    this.newResult.project=project
    const total = (Number(this.newResult.mcq)+Number(this.newResult.project)+Number(this.newResult.quiz)+Number(this.newResult.assignment))/4;
    this.newResult.total=total
    console.log(this.newResult)
    console.log(this.splitup)
    this.assignService.addResult(this.newResult,this.id,this.newResult.assignment_id).subscribe((data)=>{
      console.log(data["jwt"])
    })
  }
}
