import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-my-assignments',
  templateUrl: './my-assignments.component.html',
  styleUrls: ['./my-assignments.component.css']
})
export class MyAssignmentsComponent implements OnInit {
  id: any;
  columnDefs: any;

  constructor(private userService:UserService, private activatedRouter:ActivatedRoute ) { 
    this.columnDefs = [
      {headerName: 'ID', field: 'assignment_id' },
      {headerName: 'Name', field: 'name' },  
      {headerName: 'Marks', field: 'marks' },
      {headerName: 'Expires On', field: 'expire_time' },
      {headerName: 'Author_id', field: 'author_id' },
      {headerName: 'Duration', field: 'duration' }
  ];
  }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")
  }

  ongridReady(params){
    // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
    console.log(this.id+"gotit");
     this.userService.getAssignments(this.id).subscribe((data)=>{params.api.setRowData(data)});
  
  }

}
