import { Component, OnInit } from '@angular/core';
import { Assignment1 } from 'src/app/assignment';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newAssign: Assignment1= new Assignment1("",null,null);
  id: any;
  constructor(private assign:AssignmentService, private activatedRouter:ActivatedRoute, private auth:AuthService) { }

  ngOnInit(): void {
    this.id= this.auth.getUserId();
    
  }


  create(){
    console.log(this.newAssign);
this.assign.addAssignment(this.newAssign,this.id).subscribe((data)=>{
  console.log(data)
})
  }
}
