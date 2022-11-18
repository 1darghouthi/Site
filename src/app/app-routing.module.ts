import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:SignupComponent},
  {path:'matches', component:MatchesComponent},
  {path:'allPlayers', component:PlayersComponent},
  {path:'addMatch', component:AddMatchComponent},
  {path:'addTeam', component:AddTeamComponent},
  {path:'addPlayer', component:AddPlayerComponent},
  {path:'admin', component:AdminComponent},
  {path:'myMatches', component:MyMatchesComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
