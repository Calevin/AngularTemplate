import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EntityExample } from './models/entity-example';

const API_URL : string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class EntityExampleService {

  endpoint = `${API_URL}/entityExample`;

  constructor(private _http: HttpClient) { }

  getAll(): Observable<EntityExample[]> {
    
    return this
              ._http
              .get<EntityExample[]>(this.endpoint);
  }

  new(elemento: EntityExample): Observable<EntityExample>{
    return this._http.post<EntityExample>(this.endpoint, elemento);
  }
  
  delete(id: number): Observable<EntityExample>{
    return this._http.delete<EntityExample>(`${this.endpoint}/${id}`);
  }
}
