import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
T : any;
term:any;
  constructor(private router: Router) { }

  ngOnInit()  {

    this.T =[
      {id:1, scoreOne:1, scoreTwo:3, teamOne:"RMD", teamTwo:"FCB"},
      {id:2, scoreOne:2, scoreTwo:3, teamOne:"JUV", teamTwo:"FCB"},
      {id:3, scoreOne:0, scoreTwo:0, teamOne:"EST", teamTwo:"FCB"},
      {id:4, scoreOne:3, scoreTwo:1, teamOne:"RMD", teamTwo:"EST"},
    ]
  }

  goToDisplay(id:number){
    
   this.router.navigate([`displayMatch/${id}`]);
  }

  goToEdit (id:number){
    this.router.navigate ([`editMatch/${id}`]);
  }
  color(a:number, b:number){
    if (a > b) {
      return'green';
      
    }else if (a < b){
      return 'red';
    } else {
      return'blue';
    }
  }
}
