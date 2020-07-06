import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { result } from '../result';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  id: any;
  currentAssignment: any;
  isAboutAssessmentLoaded:boolean=false;
  author: any;
  isAuthorLoaded: boolean=false;
  marks:any
  testTaken:boolean=false
  projects:any
  isProjectLoaded: boolean=false;
  isProjectClicked: boolean=false;
  projectArray:number[] 
  currentProjectIndex:number =null
  newResult: any;
  userID: any;

  constructor(private asignService:AssignmentService,private activatedRouter:ActivatedRoute, private userService:UserService, private router:Router, private auth:AuthService, private assignService:AssignmentService) { 

  }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")
    this.userID =this.auth.getUserId()
    this.asignService.getById(this.id).subscribe((data)=>{console.log(data);this.currentAssignment=data;
    this.isAboutAssessmentLoaded=true;
    this.assignService.mcqMark.subscribe((mark)=>{
      this.marks=mark
    });
    this.assignService.TakenTest.subscribe((data)=>{
      this.testTaken=data
    })
    this.getAuthor()
    this.getProject()
  })
   }

   getAuthor(){
    this.userService.getById(this.currentAssignment.user_id).subscribe(data=>{
      this.author=data;
      this.isAuthorLoaded=true
    })
   }

   projectSubmit(value){
     this.isProjectClicked = true
     this.currentProjectIndex= value
     
    //  this.projectArray[value]=50
    //  
     
   }
   projectsplitup(p,t,b){

      this.projectArray[this.currentProjectIndex]=((Number(p)+Number(t)+Number(b))/3)
   }
   
   getProject(){
      this.asignService.getProject(this.id).subscribe((data)=>{
        this.projects=data;
        this.isProjectLoaded=true
        this.projectArray = new Array(this.projects.length);
      });
   
   }
   onAdd(){
    let projectSum=0
     this.projectArray.forEach((data)=>{
      projectSum+=data
     })
     projectSum = projectSum/this.projectArray.length
    let mcq;
    
    const total = (projectSum+mcq)/2

    this.newResult= new result(this.id,mcq,0,projectSum,0,total)
    console.log(this.newResult);
    
    // this.assignService.addResult(this.newResult,this.userID,this.id).subscribe((data)=>{
    //   console.log(data["jwt"])
    // })
  }
}
