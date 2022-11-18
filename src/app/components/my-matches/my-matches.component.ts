import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.css']
})
export class MyMatchesComponent implements OnInit {

  matches=[
    {id:1, scoreOne:1, scoreTwo:3, teamOne:"RMD", teamTwo:"FCB"},
    {id:2, scoreOne:2, scoreTwo:3, teamOne:"JUV", teamTwo:"FCB"},
    {id:3, scoreOne:0, scoreTwo:3, teamOne:"EST", teamTwo:"FCB"},
    {id:4, scoreOne:1, scoreTwo:3, teamOne:"RMD", teamTwo:"EST"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
