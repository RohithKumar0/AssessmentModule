import { Component, OnInit, Input } from '@angular/core';
import { AssignmentService } from 'src/app/assignment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() public AssignmentId;
  id:any;
  isMcqClicked:boolean= false
  isProjectClicked:boolean= false
  mcq:any;
  project:any;
  gridapiMcq:any;
  gridapiproject:any;
  columnDefs:any;
  columsDefsProjet:any;
  columsDefsQuiz:any;
  defaultColDef: { flex: number; sortable: boolean; autoHeight: boolean; filter: boolean; };

  constructor(private asignService:AssignmentService,private activatedRouter:ActivatedRoute) { 
    this.columnDefs = [
      {headerName: 'ID', field: 'id' },
      {headerName: 'Question', field: 'question' },  
      {headerName: 'A', field: 'a' },
      {headerName: 'B', field: 'b' },
      {headerName: 'C', field: 'c' },
      {headerName: 'D', field: 'd' },
      {headerName: 'Answer', field: 'answer' }
  ];
  this.columsDefsProjet = [
    {headerName: 'Statement', field: 'statement', width:200},
    {headerName: 'Technology', field: 'technology'}
];

this.defaultColDef = {
  flex: 1,
  sortable: true,
  autoHeight: true,
  filter: true,
  };

}

  ngOnInit(): void {
   this.id = this.activatedRouter.snapshot.paramMap.get("id")
  }

  mcqClicked(event){
    console.log(event);
    this.mcq = event.data
    console.log(this.mcq);
    this.isMcqClicked=true;
  }

  projectClicked(event){
    this.project = event.data
    this.isProjectClicked=true; 
  }
  
  ongridReady(params){
    console.log(params)
    this.gridapiMcq = params
    console.log(this.id+"gotit");
     this.asignService.getMcqs(this.id).subscribe((data)=>{params.api.setRowData(data)});
  
  }
  onprojectgridReady(params){
    this.gridapiproject = params
     this.asignService.getProject(this.id).subscribe((data)=>{params.api.setRowData(data)});
  
  }

deleteMcq(){
  this.asignService.deleteMcq(this.id,this.mcq.id).subscribe((message)=>{
    this.isMcqClicked=false
    this.asignService.getMcqs(this.id).subscribe((data)=>{
      this.gridapiMcq.api.setRowData(data)
    })
  })
}

updateMcq(){
  this.asignService.updateMcq(this.id,this.mcq.id,this.mcq).subscribe((data1)=>{
  this.isMcqClicked=false
    this.asignService.getMcqs(this.id).subscribe((data)=>{
      this.gridapiMcq.api.setRowData(data)
    })
  })
}
deleteProject(){
  this.asignService.deleteProject(this.id,this.project.id).subscribe((message)=>{console.log(message)
    this.isProjectClicked=false
    this.asignService.getProject(this.id).subscribe((data)=>{
      this.gridapiproject.api.setRowData(data)
    })
  })
}

updateProject(){
  this.asignService.updateProject(this.id,this.project.id,this.project).subscribe((data1)=>{console.log(data1);
    this.isProjectClicked=false
    this.asignService.getProject(this.id).subscribe((data)=>{
      this.gridapiproject.api.setRowData(data)
    })
  })
}

}
