import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemSetRoutingModule } from './problem-set-routing.module';
import { ProblemsetDefaultsComponent } from './components/problemset-defaults/problemset-defaults.component';


@NgModule({
  declarations: [ProblemsetDefaultsComponent],
  imports: [
    CommonModule,
    ProblemSetRoutingModule
  ]
})
export class ProblemSetModule { }
