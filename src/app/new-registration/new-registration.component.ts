import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  newUser:User = new User('','','', false);
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(){
    console.log(this.newUser)
    this.userService.add(this.newUser).subscribe((data)=>{
      const message = data;
      console.log(message);
      if (message["jwt"] == "successful"){
        this.router.navigate(["/login"])
      }
    })
  }
}
