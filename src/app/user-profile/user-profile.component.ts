import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { CandidatePerformanceComponent } from '../main-assignment/candidate-performance/candidate-performance.component';
import { MyAssignmentsComponent } from './my-assignments/my-assignments.component';
import { ResultsComponent } from './results/results.component';
import { OverviewComponent } from './overview/overview.component';
import { AdminAssessmentsComponent } from '../my-assignments/admin-assessments/admin-assessments.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser:User;
  id :any
  IsAdmin: boolean
  isDataLoaded : boolean= false;
  constructor(private userService:UserService, private auth:AuthService, private router:Router, private activatedRouter: ActivatedRoute) { }

  dummyComponent: any= OverviewComponent;
  ngOnInit(): void {
    this.IsAdmin = this.auth.isAutenticated();
    console.log(this.IsAdmin)
    if(this.IsAdmin){
      if(this.activatedRouter.snapshot.paramMap.get("id")){
        this.id = this.activatedRouter.snapshot.paramMap.get("id")
        console.log("parammap")
      }
      else{
        this.id =this.auth.getUserId();
      }

      this.getCurrentUser();
      this.isDataLoaded=true
      }
    else if (Number(this.activatedRouter.snapshot.paramMap.get("id"))==this.auth.getUserId()){
      console.log("number")
      this.id=this.activatedRouter.snapshot.paramMap.get("id")
        this.getCurrentUser()
        this.isDataLoaded=true


    }
    else{
      this.router.navigate([""])
    }
  }

  setComp(choice:string){
    if (choice=="Password"){
      this.dummyComponent= null;
    }
    if (choice=="Assignments"){

      this.dummyComponent= MyAssignmentsComponent;
    }
    if (choice=="Overview"){
      this.dummyComponent= OverviewComponent;
    }
    if (choice=="result"){
      this.dummyComponent= ResultsComponent;
    }

  }

  getCurrentUser(){
    this.userService.getById(this.id).subscribe(data=>{
      this.currentUser=data;
      console.log(this.currentUser);
    })
    
  }

  admin(){
    this.userService.admin(this.id).subscribe((data)=>{
      console.log("made admin")
      this.router.navigate(["/admin"])
    })

  }


}
