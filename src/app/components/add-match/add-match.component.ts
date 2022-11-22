import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  // Function that will be called when btn is clicked
  addMatch(){
  //console.log("Here match", this.match);
  
  }
}
