import { CommonModule } from '@angular/common';
import { HomeDefaultsComponent } from './components/home-defaults/home-defaults.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../root/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeDefaultsComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
