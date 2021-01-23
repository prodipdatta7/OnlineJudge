import { PageNotFoundComponent } from './../root/components/page-not-found/page-not-found.component';
import { ContestDefaultsComponent } from './components/contest-defaults/contest-defaults.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contest',
    pathMatch: "full"
  },
  {
    path: 'contest',
    component: ContestDefaultsComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule { }
