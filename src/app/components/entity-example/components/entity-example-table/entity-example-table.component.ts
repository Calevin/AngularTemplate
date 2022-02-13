import { Component, OnInit } from '@angular/core';
import { EntityExampleService } from '../../../../services/entity-example-service/entity-example.service';
import { EntityExampleDataSource } from './entity-example-data-source';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-entity-example-table',
  templateUrl: './entity-example-table.component.html',
  styleUrls: ['./entity-example-table.component.css']
})
export class EntityExampleTableComponent implements OnInit {

  displayedColumns: string[] = ['id-entity', 'name', 'categoryName', 'Delete'];
  dataSource!: EntityExampleDataSource;
  
  constructor(private _entityService: EntityExampleService
            , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource = new EntityExampleDataSource(this._entityService);
    this.loadEntitys();
  }

  public loadEntitys() {
    this.dataSource.loadEntitys();    
  }

  deleteEntity(id: number){
    console.log('BORRAR: ' + id);
    this._entityService.delete(id)
    .pipe(catchError( error => {

      this.snackBar.open('No se pudo borrar la entidad', '', {
        duration: 3000
      });

      return EMPTY;
    }))      
    .subscribe(() => {

      this.snackBar.open('Entidad borrada ok', 'Cerrar', {
        duration: 3000
      });

      this.loadEntitys();
    });
  }
}
