import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesDefaultsComponent } from './components/resources-defaults/resources-defaults.component';


@NgModule({
  declarations: [ResourcesDefaultsComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule {}
