import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadium: any ={};
  stadiumForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  addStadium(){
    console.log("Here stadium", this.stadium);
    
  }

}
