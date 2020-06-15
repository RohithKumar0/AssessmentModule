import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-my-assignments',
  templateUrl: './my-assignments.component.html',
  styleUrls: ['./my-assignments.component.css']
})
export class MyAssignmentsComponent implements OnInit {
  id: any;
  columnDefs: any;

  constructor(private userService:UserService, private activatedRouter:ActivatedRoute ,private auth: AuthService) { 
    this.columnDefs = [
      {headerName: 'Assign_name', field: 'assign_name' },
      {headerName: 'Author Name', field: 'author_name' },  
      {headerName: 'Mcq', field: 'mcq' },
      {headerName: 'Project', field: 'project' },
      {headerName: 'Quiz', field: 'quiz' },
      {headerName: 'Total', field: 'total' }
  ];
  }

  ngOnInit(): void {
    if(this.activatedRouter.snapshot.paramMap.get("id")){
      this.id = this.activatedRouter.snapshot.paramMap.get("id")
    }
    else{
      this.id =this.auth.getUserId()
    }
  }

  ongridReady(params){
    // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
    const ar = [];
    console.log(this.id+"gotit");
     this.userService.getAssignments(this.id).subscribe((data)=>{console.log(data);
      params.api.setRowData(data)});
  
  }

}
