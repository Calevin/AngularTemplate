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

  constructor(private _http: HttpClient) { }

  getAll(): Observable<EntityExample[]> {
    const endpoint = `${API_URL}/entityExample`;

    return this
              ._http
              .get<EntityExample[]>(endpoint);
  }
}
