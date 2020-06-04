import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { CandidatesComponent } from './candidates/candidates.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dummyComponent: any= CandidatesComponent;
  constructor(private login:LoginServiceService) { }

  ngOnInit(): void {
  }

  logout(){
    this.login.logout();
  }

  assignComp(choice:string){
    if(choice==="Candidates"){
      this.dummyComponent= CandidatesComponent}
    else if(choice==="Assessments"){
      this.dummyComponent= AssignmentsComponent;
    }
    else if(choice==="Profile"){
      this.dummyComponent=UserProfileComponent;
    }
  }
}
