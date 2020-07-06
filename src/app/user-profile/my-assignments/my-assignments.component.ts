import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  columnDefsAdmin: any;
  isAdmin: boolean= false;
  defaultColDef: { flex: number; sortable: boolean; autoHeight: boolean; filter: boolean; };

  constructor(private userService:UserService, private activatedRouter:ActivatedRoute ,private auth: AuthService, private assignService: AssignmentService, private router:Router) { 
    this.columnDefs = [
      {headerName: 'Assign_name', field: 'assign_name' },
      {headerName: 'Author Name', field: 'author_name' },  
      {headerName: 'Mcq', field: 'mcq' },
      {headerName: 'Project', field: 'project' },
      {headerName: 'Quiz', field: 'quiz' },
      {headerName: 'Total', field: 'total' }
  ];
  this.columnDefsAdmin = [
    {headerName: 'Author', field: 'author_name' },
    {headerName: 'ID', field: 'id' },
      {headerName: 'Name', field: 'name' },  
      {headerName: 'Duration', field: 'duration' }
];

  }

  ngOnInit(): void {
    if(this.activatedRouter.snapshot.paramMap.get("id")){
      this.id = this.activatedRouter.snapshot.paramMap.get("id")
    }
    else{
      this.isAdmin=true
      this.id =this.auth.getUserId()
    }

  }


  ongridReady(params){
    console.log(this.isAdmin +this.id)
     this.userService.getAssignments(this.id).subscribe((data)=>{console.log(data);
      params.api.setRowData(data)});
  
  }
  ongridReadyadmin(params){
    console.log(this.id + this.isAdmin)
     this.assignService.getAllOfAdmin(this.id).subscribe((data)=>{console.log(data);
      params.api.setRowData(data)});
  
  }

  getAssignProfile(params){
    console.log(params)
    const id =params.data.id;
    this.router.navigate(['/assignmentProfile/', id]);
  }

}
