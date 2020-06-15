import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AssignmentService } from 'src/app/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  columnDefs:any;
  constructor(private assignService: AssignmentService, private router:Router ) {
    this.columnDefs = [
      {headerName: 'ID', field: 'id' },
      {headerName: 'Name', field: 'name' },  
      {headerName: 'Author', field: 'author_name' },
      {headerName: 'Duration', field: 'duration' }
  ];
   }

  ngOnInit(): void {
  }


  ongridReady(params){
    // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
    console.log("kadkjsj");
    this.assignService.getAll().subscribe((data)=>{params.api.setRowData(data);console.log(data[0])});
  
  }

  getAssignProfile(params){
    const id =params.data.id;
    this.router.navigate(['/assignmentProfile/', id]);
  }
}
