import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  public columnDefs;
  private gridApi;
  private gridColumnApi;

  admin: boolean=false;
  constructor(private userService :UserService, private router:Router ) { 

      this.columnDefs = [
    {headerName: 'User ID', field: 'id' },
    {headerName: 'Name', field: 'name' },  
    {headerName: 'Email', field: 'email' },
    {headerName: 'Location', field: 'location' },
    {headerName: 'Number', field: 'number' },
];
  }

  ngOnInit(): void {
  }

  switchUser(){
    this.admin = false
  }
  switchAdmin(){
    this.admin = true
  }

  onUsers(params){
    // this.admin=false;
    // this.gridApi = params.api;
    // this.gridColumnApi= params.columnApi;
    this.userService.getAll().subscribe((data)=>{params.api.setRowData(data)});
  
  }
  onAdmin(params){
    // this.admin=true
    // this.gridApi = params.api;
    // this.gridColumnApi= params.columnApi;
    this.userService.getAllAdmin().subscribe((data)=>{params.api.setRowData(data)});
  
  }
  getUserProfile(event){
    console.log("thisis clicked"+ event.data.id)
    const id =event.data.id;
    this.userService.getById(id).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/profile/', id]);
    })
    
  }
}
