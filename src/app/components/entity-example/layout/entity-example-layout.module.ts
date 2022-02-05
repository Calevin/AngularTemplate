import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityExampleContainerComponent } from './container/entity-example-container.component';

@NgModule({
  declarations: [
    EntityExampleContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EntityExampleLayoutModule { }
