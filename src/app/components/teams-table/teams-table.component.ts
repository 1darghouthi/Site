import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams= [
    {id:1, name:"FCB", country:"Spain", owner:"Ali", stadium:"Camp"},
    {id:2, name:"RMD", country:"Spain", owner:"Salah", stadium:"Bercelone"},
    {id:3, name:"JUV", country:"Italy", owner:"Anis", stadium:"ARenak"},
   
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToDisplay(id){
    this.router.navigate([`displayTeam/${id}`]);
  }

}
