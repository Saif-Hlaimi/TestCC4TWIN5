import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../app/models/team.model';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private apiUrl = 'http://localhost:3000/teams';

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get<Team[]>(this.apiUrl);
  }

  addTeam(team: Team) {
    return this.http.post(this.apiUrl, team);
  }
}
