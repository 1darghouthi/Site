import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL : string ="http://localhost:3000/teams";

  constructor(private httpClient: HttpClient) { }

  getAllTeams(){
    return this.httpClient.get(this.teamURL);
  }

  getTeamById(id) {
    return this.httpClient.get(`${this.teamURL}/${id}`);

  }

  deleteTeamById(id){
    return this.httpClient.delete(`${this.teamURL}/${id}`);
  }

  addTeam(team){
    return this.httpClient.post<{message:string}>(this.teamURL, team);
  }

  editTeam(team){
    return this.httpClient.put (this.teamURL, team);


  }
}
