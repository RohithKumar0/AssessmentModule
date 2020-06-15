import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from 'src/app/assignment.service';
import {formatDate} from '@angular/common'

@Component({
  selector: 'app-about-assignment',
  templateUrl: './about-assignment.component.html',
  styleUrls: ['./about-assignment.component.css']
})
export class AboutAssignmentComponent implements OnInit {
  id: any;

  currentAssignment:any;
  jstoday: string;
  constructor(private activatedRouter: ActivatedRoute, private asignService: AssignmentService) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")
    this.asignService.getById(this.id).subscribe((data)=>{console.log(data);this.currentAssignment=data;console.log(this.currentAssignment)})
    this.jstoday = formatDate(Date.now(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    console.log(this.jstoday)
  }

  save():void{
    console.log(this.currentAssignment)
    this.asignService.updateAssignment(this.id,this.currentAssignment).subscribe((data)=>{
      console.log("update successful");
      console.log(data)
    })

  }
  
}
