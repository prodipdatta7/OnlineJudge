import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialManagementRoutingModule } from './credential-management-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent],
  imports: [
    CommonModule,
    CredentialManagementRoutingModule
  ]
})
export class CredentialManagementModule { }
