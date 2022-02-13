import { Component, OnInit } from '@angular/core';
import { EntityExampleService } from '../../../../services/entity-example-service/entity-example.service';
import { EntityExampleDataSource } from './entity-example-data-source';

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

  displayedColumns: string[] = ['id-entity', 'name', 'categoryName'];
  dataSource!: EntityExampleDataSource;
  
  constructor(private _entityService: EntityExampleService) { }

  ngOnInit(): void {
    this.dataSource = new EntityExampleDataSource(this._entityService);
    this.loadEntitys();
  }

  public loadEntitys() {
    this.dataSource.loadEntitys();    
  }
}
