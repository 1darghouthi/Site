import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team: any = {};
  teamForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  addTeam() {
    console.log("Here team object", this.team);
    // var idTeam = JSON.parse(localStorage.getItem('idTeam') || '1');
    // this.team.id = idTeam;
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    this.team.id = this.generateId(teams) + 1;
    teams.push(this.team);
    localStorage.setItem('teams', JSON.stringify(teams));
    // localStorage.setItem('idTeam', idTeam + 1);
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
