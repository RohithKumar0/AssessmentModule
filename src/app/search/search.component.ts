import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(text){
    this.search=text;
    console.log("search selected"+ this.search)

  }

}
