import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  stadiums: any=[];

  constructor(
    private stadiumService: StadiumService,
    private router:Router) { }

  ngOnInit() {
    this.stadiumService.getAllStadiums().subscribe(
      (response)=>{
        this.stadiums = response.stadiums;
      }
    )
  }
  deleteStadium(id){
    this.stadiumService.deleteStadium(id).subscribe(
      (response)=>{
        console.log("Here message after delete", response.message);
        this.stadiumService.getAllStadiums().subscribe(
          (response)=>{
            this.stadiums = response.stadiums;
          }
        )

      }
    )
  }
  goToEdit(id){
    this.router.navigate([`editStadium/${id}`])
  }

}
