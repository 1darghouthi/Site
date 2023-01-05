import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

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
  constructor(
    private activatedRouter:ActivatedRoute,
    private matchService: MatchService,
    private router :Router) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.matchService.displayMatchById(this.id).subscribe(
      (response)=>{
        this.match = response;


      }
    ) 
   }
    

    // for (let i = 0; i < this.T.length; i++) {
    //   if(this.T[i].id == this.id){
    //     this.match =this.T[i];
    //     break;
    //   }
      
    // }

    
  editMatch(){
    this.matchService.editMatch(this.match).subscribe(
      (response)=>{
        this.router.navigate(['admin']);
      }
      
    )
  }

}
