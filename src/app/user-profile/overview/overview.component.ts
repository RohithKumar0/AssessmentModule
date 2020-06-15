import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import * as shape from 'd3-shape';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  total:number=0;
  IsEdit: boolean = true;
  id: any;
  currentUser:any;
  percentile:any;
  count:number=0;
  stackedVertical: any[]=[
  ]
  VerticalBar:any[]=[]

  viewstcked: any[] = [450, 300];
  viewpie: any[] = [250, 200];
  view: any[] = [450, 300];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Assignments';
  yAxisLabel: string = 'Score';
  timeline: boolean = false;
  isdataloaded=false;
  autoScale=true
  // curve: any =  shape.line().curve(shape.curveBundle.beta(0.5));
  curve: any = shape.line ;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  colorSchemestacked = {
    domain: ['#aae3f5','#a8385d','#fcd303','#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5'  ]
  };
  
  constructor(private userSevice:UserService, private activatedRouter:ActivatedRoute, private auth: AuthService) {
    
   }

  ngOnInit(): void {
    if(this.activatedRouter.snapshot.paramMap.get("id")){
      this.id = this.activatedRouter.snapshot.paramMap.get("id")
    }
    else{
      this.id =this.auth.getUserId()
    }
    this.userSevice.getById(this.id).subscribe((data)=>{this.currentUser = data})
    this.userSevice.getAssignments(this.id).subscribe((data)=>{
      
      for (let d of data){
        this.total=this.total+d.total;
        this.VerticalBar.push({name:d.assign_name,value:d.total})

        this.stackedVertical.push({
          name: d.assign_name,
          series:[{
            name:"mcq",
            value:d.mcq
          },
          // {
          //   name:"assignment",
          //   value:d.assignment
          // },
          {
            name:"quiz",
            value:d.quiz
          },
          {
            name:"project",
            value:d.project
          }]
        })
        console.log(this.total)
        this.count=this.count+1
      }
      this.total=this.total/this.count
      console.log(this.total)
      console.log(this.stackedVertical)
      this.percentile=[
        {
          "name": "Percentile",
          "value": this.total
        },
      ]
      this.isdataloaded=true
    })
  }

  onSelect(event) {
    console.log(event);
  }

  edit(){
    this.IsEdit=false
  }

  save(){
    console.log(this.currentUser)
    const user = new User(this.currentUser.name, this.currentUser.password,this.currentUser.email,this.currentUser.admin, this.currentUser.location, this.currentUser.number);
    console.log(user)
    this.userSevice.updateUser(this.id,user).subscribe((data)=>{
      console.log(data["jwt"])
    })
  }
}
