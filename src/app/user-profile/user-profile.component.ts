import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser:User;
  id :any
  constructor(private userService:UserService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.activatedRouter.snapshot.paramMap.get("id")
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.userService.getById(this.id).subscribe(data=>{
      this.currentUser=data;
      console.log(this.currentUser);
    })
    
  }


}
