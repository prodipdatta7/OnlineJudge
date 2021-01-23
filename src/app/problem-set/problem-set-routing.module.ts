import { PageNotFoundComponent } from './../root/components/page-not-found/page-not-found.component';
import { ProblemsetDefaultsComponent } from './components/problemset-defaults/problemset-defaults.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/problem-set',
    pathMatch: "full"
  },
  {
    path: 'problem-set',
    component: ProblemsetDefaultsComponent
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
export class ProblemSetRoutingModule { }
