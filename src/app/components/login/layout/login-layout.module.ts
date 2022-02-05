import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    LoginContainerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatGridListModule
  ]
})
export class LoginLayoutModule { }
