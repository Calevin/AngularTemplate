import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginCardComponent } from './login-card/login-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LoginLayoutModule } from '../layout/login-layout.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginCardComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    LoginLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule { }
