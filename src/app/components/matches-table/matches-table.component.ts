import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
T : any=[];
term:any;
  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit()  {
    this.matchService.getAllMatches().subscribe(
      (response)=>{
        this.T = response;
      }
    )

   
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

  deleteMatch(id){
    // alert(id);
    this.matchService.deleteMatchById(id).subscribe(
      (response)=> {
        console.log("Here response after delete", response);
        this.matchService.getAllMatches().subscribe(
          (response)=> {
            this.T = response;
          }
        )
      }
    )
  }
  }
