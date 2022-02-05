import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/authorization/auth.guard';
import { LoginContainerComponent } from '../layout/container/login-container/login-container.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginCardComponent },
      { path: 'profile', component: ProfileCardComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
