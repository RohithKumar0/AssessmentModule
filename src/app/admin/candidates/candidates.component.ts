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

  constructor(private userService :UserService, private router:Router ) { 

      this.columnDefs = [
    {headerName: 'ID', field: 'id' },
    {headerName: 'Name', field: 'name' },  
    {headerName: 'Email', field: 'email' }
];
  }

  ngOnInit(): void {
  }


  ongridReady(params){
    // this.gridApi = params.api;
    // this.gridColumnApi= params.columnApi;
    this.userService.getAll().subscribe((data)=>{params.api.setRowData(data)});
  
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
