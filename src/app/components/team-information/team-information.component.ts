import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.css']
})
export class TeamInformationComponent implements OnInit {

  id:any;
  team:any;

  teams= [
    {id:1, name:"FCB", country:"Spain", owner:"Ali", stadium:"Camp"},
    {id:2, name:"RMD", country:"Spain", owner:"Salah", stadium:"Bercelone"},
    {id:3, name:"JUV", country:"Italy", owner:"Anis", stadium:"ARenak"},
   
  ];

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    for (let i=0; i < this.teams.length; i++) {
      if (this.teams[i].id ==this.id){
        this.team=this.teams[i];
        break;

      }

    }
      
    }
  }

