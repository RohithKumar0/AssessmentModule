import { Component, OnInit, Input } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  columnDefs:any;
  constructor(private assignService: AssignmentService, private router:Router , private authSerive:AuthService) {
    this.columnDefs = [
      {headerName: 'ID', field: 'id' },
      {headerName: 'Name', field: 'name' },  
      {headerName: 'Author_id', field: 'author_name' },
      {headerName: 'Duration', field: 'duration' }
  ];
   }

  ngOnInit(): void {
  }

  ongridReady(params){
    // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
    console.log("kadkjsj");
    this.assignService.getAll().subscribe((data)=>{params.api.setRowData(data)});
  
  }
  getAssignProfile(params){
    if(this.authSerive.isAutenticated()){

      const id =params.data.id;
      this.router.navigate(['/assignmentProfile/', id]);
    }
    else{
      const id =params.data.id;
      this.router.navigate(['/takeTest/', id]);
    }
  }
}
