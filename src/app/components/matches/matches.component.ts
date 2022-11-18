import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches=[
  {id:1, scoreOne:1, scoreTwo:3, teamOne:"EST",teamTwo:2},
  {id:2, scoreOne:1, scoreTwo:3, teamOne:"EST",teamTwo:2},
  {id:3, scoreOne:1, scoreTwo:3, teamOne:"EST",teamTwo:2},
  {id:4, scoreOne:1, scoreTwo:3, teamOne:"EST",teamTwo:2},
]
  constructor() { }

  ngOnInit(): void {
  }

}
