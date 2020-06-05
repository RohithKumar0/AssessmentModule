import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { CandidatePerformanceComponent } from '../main-assignment/candidate-performance/candidate-performance.component';
import { MyAssignmentsComponent } from './my-assignments/my-assignments.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser:User;
  id :any
  constructor(private userService:UserService, private auth:AuthService) { }

  dummyComponent: any;
  ngOnInit(): void {
    this.id= this.auth.getUserId();
    this.getCurrentUser();
  }

  setComp(choice:string){
    if (choice=="Password"){
      this.dummyComponent= null;
    }
    if (choice=="Assignments"){
      this.dummyComponent= MyAssignmentsComponent;
    }
    if (choice=="Overview"){
      this.dummyComponent= null;
    }

  }

  getCurrentUser(){
    this.userService.getById(this.id).subscribe(data=>{
      this.currentUser=data;
      console.log(this.currentUser);
    })
    
  }


}
