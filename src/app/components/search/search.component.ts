import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm:FormGroup;
  T:any; 


  constructor(
    private formBuilder:FormBuilder,
    private matchService:MatchService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      scoreOne:['', [Validators.required]],
      scoreTwo:['', [Validators.required]]
    });

  }

  search(){
    console.log("Here object to send", this.searchForm.value);
    this.matchService.searchMatches(this.searchForm.value).subscribe(
      (response)=>{
        this.T = response.matches;
        console.log("T array", this.T);
        

      }
    );
    
  }

}
