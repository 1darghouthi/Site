import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  match:any;
  id:any;
  matches=[
    {id:1, scoreOne:1, scoreTwo:3, teamOne:"RMD",teamTwo:"FCB"},
    {id:2, scoreOne:2, scoreTwo:3, teamOne:"JUV",teamTwo:"FCB"},
    {id:3, scoreOne:0, scoreTwo:3, teamOne:"EST",teamTwo:"FCB"},
    {id:4, scoreOne:3, scoreTwo:3, teamOne:"RMD",teamTwo:"EST"},
  ];

  constructor(private activateRoute:ActivatedRoute) {}
      
   

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log('here id from path', this.id);
    for (let i=0; i< this.matches.length; i++){
      if (this.matches [i].id ==this.id){
        this.match =this.matches[i];
        break;

      }
    }
    console.log("here finded match", this.match);
    
  }

}
