import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  //object that will contains csoreOne, scoreTwo..
  match: any = {};

  //Form ID
  matchForm:FormGroup;

  constructor(
    private matchService: MatchService,
    private router:Router) { }

  ngOnInit(): void {
  }

  // Function that will be called when btn is clicked
  addMatch(){
  console.log("Here match", this.match);
  this.matchService.addMatch(this.match).subscribe(
    (response)=> {
      console.log("Here reponse after adding match", response);
      this.router.navigate(["admin"]);
      

    }
  )
  
  }
}
