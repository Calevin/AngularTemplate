import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityExampleRoutingModule } from './entity-example-routing.module';
import { EntityExampleLayoutModule } from '../layout/entity-example-layout.module';
import { EntityExampleTableComponent } from './entity-example-table/entity-example-table.component';
import { EntityExampleFormComponent } from './entity-example-form/entity-example-form.component';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EntityExampleTableComponent,
    EntityExampleFormComponent
  ],
  imports: [
    CommonModule,
    EntityExampleRoutingModule,
    EntityExampleLayoutModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule
  ]
})
export class EntityExampleModule { }
