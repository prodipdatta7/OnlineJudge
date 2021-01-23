import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestRoutingModule } from './contest-routing.module';
import { ContestDefaultsComponent } from './components/contest-defaults/contest-defaults.component';


@NgModule({
  declarations: [ContestDefaultsComponent],
  imports: [
    CommonModule,
    ContestRoutingModule
  ]
})
export class ContestModule { }
