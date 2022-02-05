import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/authorization/auth.guard';
import { EntityExampleContainerComponent } from '../layout/container/entity-example-container.component';
import { EntityExampleTableComponent } from './entity-example-table/entity-example-table.component';

const routes: Routes = [
  {
    path: '',
    component: EntityExampleContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'table' },
      { path: 'table', component: EntityExampleTableComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityExampleRoutingModule { }
