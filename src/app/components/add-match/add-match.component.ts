import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  //object that will contains csoreOne, scoreTwo..
  match: any = {};
  stadiums: any=[];

  //Form ID
  matchForm:FormGroup;
  stadiumId: any;

  constructor(
    private matchService: MatchService,
    private stadiumService: StadiumService,
    private router:Router) { }

  ngOnInit() {
    this.stadiumService.getAllStadiums().subscribe(
      (response)=>{
        this.stadiums = response.stadiums;
        console.log('Here all stadiums', response.stadiums);

      }
    )
  }

  // Function that will be called when btn is clicked
  addMatch(){
  console.log("Here match", this.match);
  this.match.stadiumId = this.stadiumId;
  this.matchService.addMatch(this.match).subscribe(
    (response)=> {
      console.log("Here reponse after adding match", response.message);
      this.router.navigate(["admin"]);


    }
  )

  }

  onSelect(event){
        this.stadiumId = event.target.value;

  }
}
