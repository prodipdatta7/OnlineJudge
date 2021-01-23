import { AngularMaterialsModule } from './../angular-materials/angular-materials.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from './root-routing.module';
import { DefaultsComponent } from './components/defaults/defaults.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultsComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RootRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule,
  ],
  bootstrap: [
    DefaultsComponent
  ],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RootModule { }
