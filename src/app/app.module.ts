import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { BannerComponent } from './components/banner/banner.component';
import { TeamInformationComponent } from './components/team-information/team-information.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    RankingComponent,
    BlogComponent,
    MatchesComponent,
    MatchComponent,
    PlayersComponent,
    PlayerInfoComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MyMatchesComponent,
    ArticleComponent,
    DisplayMatchComponent,
    BannerComponent,
    TeamInformationComponent,
    EditMatchComponent,
    ReversePipe,
    AsterixPipe,
    MyFilterPipe,
    UsersTableComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
