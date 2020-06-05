import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-performance',
  templateUrl: './candidate-performance.component.html',
  styleUrls: ['./candidate-performance.component.css']
})
export class CandidatePerformanceComponent implements OnInit {
  id: any;
  columnDefs:any;

  constructor( private asignService:AssignmentService, private activatedRouter:ActivatedRoute) {
    this.columnDefs = [
      {headerName: 'ID', field: 'user_id' },
      {headerName: 'Name', field: 'name' },  
      {headerName: 'Marks', field: 'marks' },
      {headerName: 'Email', field: 'email' },
  ];
   }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")
  }

  ongridReady(params){
    // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
    console.log(this.id+"gotit");
     this.asignService.getCandidate(this.id).subscribe((data)=>{params.api.setRowData(data)});
  
  }
}
