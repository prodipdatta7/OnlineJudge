import { DefaultsComponent } from './components/defaults/defaults.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResourcesDefaultsComponent } from './../resources/components/resources-defaults/resources-defaults.component';
import { ContestDefaultsComponent } from './../contest/components/contest-defaults/contest-defaults.component';
import { ProblemsetDefaultsComponent } from './../problem-set/components/problemset-defaults/problemset-defaults.component';
import { HomeDefaultsComponent } from './../home/components/home-defaults/home-defaults.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule)
    // component: HomeDefaultsComponent
  },
  {
    path: 'problem-set',
    loadChildren: () => import('../problem-set/problem-set.module').then((m) => m.ProblemSetModule)
    // component: ProblemsetDefaultsComponent
  },
  {
    path: 'contest',
    loadChildren: () => import('../contest/contest.module').then((m) => m.ContestModule)
    // component: ContestDefaultsComponent
  },
  {
    path: 'resources',
    loadChildren: () => import('../resources/resources.module').then((m) => m.ResourcesModule)
    // component: ResourcesDefaultsComponent
  },
  {
    path: 'register',
    loadChildren: () => import('../credential-management/credential-management.module')
        .then((m) => m.CredentialManagementModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../credential-management/credential-management.module')
        .then((m) => m.CredentialManagementModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RootRoutingModule { }
