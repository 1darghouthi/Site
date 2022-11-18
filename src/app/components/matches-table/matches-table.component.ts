import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
T =[
  {id:1, scoreOne:1, scoreTwo:3, teamOne:"RMD", teamTwo:"FCB"},
  {id:2, scoreOne:2, scoreTwo:3, teamOne:"JUV", teamTwo:"FCB"},
  {id:3, scoreOne:0, scoreTwo:3, teamOne:"EST", teamTwo:"FCB"},
  {id:4, scoreOne:1, scoreTwo:3, teamOne:"RMD", teamTwo:"EST"},
];
  constructor() { }

  ngOnInit(): void {
  }

}
