import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AssignmentService } from 'src/app/assignment.service';

@Component({
  selector: 'app-admin-assessments',
  templateUrl: './admin-assessments.component.html',
  styleUrls: ['./admin-assessments.component.css']
})
export class AdminAssessmentsComponent implements OnInit {
  columnDefsAdmin: any;
  id: any;

  constructor(private userService:UserService, private activatedRouter:ActivatedRoute ,private auth: AuthService, private assignService: AssignmentService, private router:Router) { 
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
      this.id =this.auth.getUserId()
    }

  }
  ongridReadyadmin(params){
     this.assignService.getAllOfAdmin(this.id).subscribe((data)=>{console.log(data);
      params.api.setRowData(data)});
  
  }

  getAssignProfile(params){
    const id =params.data.id;
    this.router.navigate(['/assignmentProfile/', id]);
  }

}
