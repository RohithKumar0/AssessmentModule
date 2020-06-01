import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  columnDefs = [
    {headerName: 'ID', field: 'id' },
    {headerName: 'Name', field: 'name' },  
    {headerName: 'Email', field: 'email' }
];

rowData :any;
  constructor(private userService :UserService ) { }

  ngOnInit(): void {

  }

  getAll(){
    this.userService.getAll().subscribe((data)=>{this.rowData=data});

  }

}
