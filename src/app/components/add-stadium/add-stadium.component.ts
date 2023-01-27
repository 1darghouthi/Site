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

  constructor(
    private stadiumService: StadiumService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");

  }

  addStadium(){
    console.log("Here stadium", this.stadium);
    this.stadiumService.addStadium(this.stadium).subscribe(
      (response)=>{
        console.log("Here response from BE", response.message);
        this.router.navigate(["admin"]);

      }
    );

  }

}
