import { Component, OnInit } from '@angular/core';
import { authRequest } from '../authRequest';
import { AssignmentService } from '../assignment.service';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  auth: authRequest = new authRequest("","")
  columnDefsAdmin:any;
  defaultColDef:any;
  gridApi: any;

  first:string= "curent"


  

  constructor(private assignService:AssignmentService) {
    this.columnDefsAdmin = [
      {headerName: 'Author', field: 'author_name',resizable: true},
      {headerName: 'ID', field: 'id' },
        {headerName: 'Name', field: 'name' },  
        {headerName: 'Duration', field: 'duration' }
  ];
  this.defaultColDef = {
    flex: 1,
    editable: true,
    sortable: true,
    autoHeight: true,
    filter: true,
    width: 1000
  };
   }

  ngOnInit(): void {
  }

  submit(value){
    value.click() 
    this.first="changed"//to click reset simaultanesouly
    if(this.auth.username=="rohith" && this.auth.password=="password"){
      console.log(" usernaem and password")
    }
    else{
      console.log(" invalid usernaem and password")
    }
  }
  rowEditingStarted(params){

    console.log(params);    
    console.log("started");    
    
  }

  rowchanged(params){
    console.log(params);
    console.log("chaged");
    
    
  }


  ongridReadyadmin(params){
    this.gridApi = params.api
    console.log(params)
     this.assignService.getAllOfAdmin(2).subscribe((data)=>{console.log(data);
      params.api.setRowData(data)});
  
  }
}
