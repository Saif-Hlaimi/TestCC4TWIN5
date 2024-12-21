import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamComponent } from './team/team/team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyTeamsComponent } from './team/my-teams/my-teams.component';
import { FormTeamComponent } from './team/form-team/form-team.component';
import { TeamsComponent } from './team/teams/teams.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
      TeamsComponent,
        TeamComponent,
        FormTeamComponent,
        MyTeamsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
