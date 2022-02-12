import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EntityExampleService } from '../../../../services/entity-example-service/entity-example.service';
import { EntityExample } from '../../../../services/entity-example-service/models/entity-example';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-entity-example-form',
  templateUrl: './entity-example-form.component.html',
  styleUrls: ['./entity-example-form.component.css']
})
export class EntityExampleFormComponent implements OnInit {
  
  entityForm = this.formBulider.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(2)]],
    categoryId: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor(private formBulider: FormBuilder
                , private _entityService: EntityExampleService
                , private router: Router
                , private snackBar: MatSnackBar
                ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if(this.entityForm.valid){

      let newEntity = new EntityExample();
      newEntity.name = this.entityForm.get('name')?.value;
      newEntity.description = this.entityForm.get('description')?.value;
      newEntity.categoryId = this.entityForm.get('categoryId')?.value;

      this._entityService.new(newEntity)
      .pipe(catchError( error => {

        this.snackBar.open('No se pudo guardar entidad', '', {
          duration: 3000
        });
  
        return EMPTY;
      }))      
      .subscribe(() => {

        this.snackBar.open('Entidad guardada ok', 'Cerrar', {
          duration: 3000
        });

        this.router.navigate(['/entity-example/table']);
      });;

    } else {
      this.snackBar.open('Datos del formulario invalidos', 'Cerrar', {
        duration: 3000
      });
    }
    
  }

  getErrorMessage() {
    if (this.entityForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.entityForm.hasError('name') ? 'Not a valid name' : '';
  }  
}
