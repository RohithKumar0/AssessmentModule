import { Component, OnInit, Input } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() public AssignmentId;
  id:any;
  columnDefs:any;
  constructor(private asignService:AssignmentService,private activatedRouter:ActivatedRoute) { 
    this.columnDefs = [
      {headerName: 'ID', field: 'id' },
      {headerName: 'Question', field: 'question' },  
      {headerName: 'A', field: 'a' },
      {headerName: 'B', field: 'b' },
      {headerName: 'C', field: 'c' },
      {headerName: 'D', field: 'd' },
      {headerName: 'Answer', field: 'answer' }
  ];
  }

  ngOnInit(): void {
   this.id = this.activatedRouter.snapshot.paramMap.get("id")
  }
  
  ongridReady(params){
    // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
    console.log(this.id+"gotit");
     this.asignService.getMcqs(this.id).subscribe((data)=>{params.api.setRowData(data)});
  
  }

  
}
