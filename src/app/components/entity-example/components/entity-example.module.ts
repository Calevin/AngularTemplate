import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityExampleRoutingModule } from './entity-example-routing.module';
import { EntityExampleLayoutModule } from '../layout/entity-example-layout.module';
import { EntityExampleTableComponent } from './entity-example-table/entity-example-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    EntityExampleTableComponent
  ],
  imports: [
    CommonModule,
    EntityExampleRoutingModule,
    EntityExampleLayoutModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class EntityExampleModule { }
