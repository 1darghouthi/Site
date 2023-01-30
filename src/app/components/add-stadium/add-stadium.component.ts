import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadium: any ={};
  stadiumForm: FormGroup;
  id:any;
  title:string="Add Stadium"

  constructor(
    private stadiumService: StadiumService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.stadiumService.getStadiumById(this.id).subscribe(
        (response)=>{
          this.stadium = response.stadium;
        }
      )

    }

  }

  submit(){
    console.log("Here stadium", this.stadium);
    if(this.id){
      this.stadiumService.editStadium(this.stadium).subscribe(
        (response)=>{
          console.log("Here response after update", response.message);

        }
      )

    }else {
    this.stadiumService.addStadium(this.stadium).subscribe(
      (response)=>{
        console.log("Here response from BE", response.message);


      }
    );

  }
  this.router.navigate(["admin"]);

}
}
