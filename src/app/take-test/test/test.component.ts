import { Component, OnInit, Input } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  mcqList:any
  currentMcq:any;
  index:number = 0
  id:any
  mark:number =0

  endReached:boolean= false
  constructor(private assignService: AssignmentService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.paramMap.get("id")
    this.assignService.getMcqs(this.id).subscribe((data)=>{
      this.mcqList=data;
      console.log(this.mcqList);
      this.test()
      
    })
  }

  test(){
    if (this.mcqList.length > 0 ){
      this.currentMcq=this.mcqList[this.index]
    }
    else{
      console.log("select a valid assessment");
      
    }
  }

  next(){
    if(this.index < this.mcqList.length){
      if(this.index == this.mcqList.length -2){
        this.endReached=true
      }
      this.index +=1
      console.log(this.index, this.mcqList.length);
      
      this.currentMcq= this.mcqList[this.index]
    }

  }

  select(value){
    console.log(value);
    if (this.currentMcq.answer == value){
      console.log("correct");
      this.mark+=1
      this.next()
    }
    else{
      console.log("wrong");
      this.next()
    }
  }

  submit(){
    const percent = (this.mark*100)/this.mcqList.length
     this.assignService.updateMark(percent)
    console.log(this.mark);
    this.router.navigate(["/takeTest",this.id]);
    
  }
}
