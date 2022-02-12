import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { EntityExampleService } from "src/app/services/entity-example-service/entity-example.service";
import { EntityExample } from '../../../../services/entity-example-service/models/entity-example';

export class EntityExampleDataSource implements DataSource<EntityExample> {
    private entityExampleSubject = new BehaviorSubject<EntityExample[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private _entityService: EntityExampleService) { }

    connect(collectionViewer: CollectionViewer): Observable<readonly EntityExample[]> {
        return this.entityExampleSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.entityExampleSubject.complete();
        this.loadingSubject.complete();
    }

    loadEntitys() {
        this.loadingSubject.next(true);

        this._entityService.getAll()
        .pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
        .subscribe({
            next: data => {
              this.entityExampleSubject.next(data);
            },
            error: err => {
              console.error(JSON.stringify(err));
            }
          });         
    } 
}