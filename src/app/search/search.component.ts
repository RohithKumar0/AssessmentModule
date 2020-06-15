import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:string = "";
  constructor(private log:LoginServiceService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(text){
    this.search=text;
    console.log("search selected"+ this.search)

  }

  profile(){

  const id = this.auth.getUserId();
  console.log(id)
  this.router.navigate(['/profile/', id]);

  }

  logout(){
   this.log.logout()
  }

}
