import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/login' },
  { 
    path: 'home', 
    loadChildren: () => import('./components/login/components/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'entity-example', 
    loadChildren: () => import('./components/entity-example/components/entity-example.module').then(m => m.EntityExampleModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
