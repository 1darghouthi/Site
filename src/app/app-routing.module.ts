import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamInformationComponent } from './components/team-information/team-information.component';


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
  // displayMatch/:id => rendre le path dynamique
  {path:'displayMatch/:id', component:DisplayMatchComponent},
  {path:'displayTeam/:id', component:TeamInformationComponent},
  {path:'editMatch/:id', component:EditMatchComponent},
  {path:'profile/:id', component:ProfileComponent},
  {path:'displayUser/:id', component:DisplayUserComponent },
  {path:'search', component:SearchComponent},
  {path:'addStadium', component: AddStadiumComponent},
  {path:'editStadium/:id', component: AddStadiumComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
