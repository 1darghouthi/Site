import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches=[
  {id:1, scoreOne:1, scoreTwo:3, teamOne:"EST",teamTwo:"FCB"},
  {id:2, scoreOne:4, scoreTwo:3, teamOne:"JUV",teamTwo:"FCB"},
  {id:3, scoreOne:3, scoreTwo:3, teamOne:"RMD",teamTwo:"FCB"},
  {id:4, scoreOne:1, scoreTwo:3, teamOne:"EST",teamTwo:"FCB"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
