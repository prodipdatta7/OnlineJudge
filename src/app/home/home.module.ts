import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDefaultsComponent } from './components/home-defaults/home-defaults.component';


@NgModule({
  declarations: [HomeDefaultsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
