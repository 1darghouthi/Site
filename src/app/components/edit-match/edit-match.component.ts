import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {


  T:any=[];
  match:any={};
  matchForm: FormGroup;
  id:any;
  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.T =[
      {id:1, scoreOne:1, scoreTwo:3, teamOne:"RMD", teamTwo:"FCB"},
      {id:2, scoreOne:2, scoreTwo:3, teamOne:"JUV", teamTwo:"FCB"},
      {id:3, scoreOne:0, scoreTwo:0, teamOne:"EST", teamTwo:"FCB"},
      {id:4, scoreOne:3, scoreTwo:1, teamOne:"RMD", teamTwo:"EST"},
    ];

    // for (let i = 0; i < this.T.length; i++) {
    //   if(this.T[i].id == this.id){
    //     this.match =this.T[i];
    //     break;
    //   }
      
    // }

    this.match = this.T.find((elt) => {return elt.id == this.id;})
  }
  editMatch(){}

}
