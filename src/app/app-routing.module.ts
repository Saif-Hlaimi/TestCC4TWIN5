import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormTeamComponent } from './team/form-team/form-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'showteams', pathMatch: 'full' },
  { path: 'showteams', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
  { path: '**', component: NotFoundComponent },
  { path: 'addteam', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
