import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team: any = {};
  teamForm: FormGroup;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }
  addTeam() {
    console.log("Here team object", this.team);
    this.teamService.addTeam(this.team).subscribe(
      (response)=>{
        console.log("Here response after adding team", response.message);

      }
    )
  }

  // teams.filter( obj => {return (obj.id > T[0].id)})
  generateId(T) {
    var max;
    if (T.length == 0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 0; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }
      }
    }
    return max;
  }

}
