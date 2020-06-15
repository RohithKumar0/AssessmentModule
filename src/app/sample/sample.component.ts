import { Component, OnInit } from '@angular/core';
import { authRequest } from '../authRequest';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  auth: authRequest = new authRequest("rohith","PASSWORD")
  constructor() { }

  ngOnInit(): void {
  }

  submit(value:any){
    console.log(this.auth)
    console.log(value)
  }

}
