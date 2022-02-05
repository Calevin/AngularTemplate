import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, Subject } from 'rxjs';

const API_URL : string = environment.API_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  login(username:string, password:string): Observable<any> {
    const endpoint = `${API_URL}/auth/login`;

    return this
              .http
              .post(endpoint, {username, password}, httpOptions);
  }

  me(): Observable<any> {
    const endpoint = `${API_URL}/me_jwt`;

    return this.http.get(endpoint, httpOptions);
  }  
}
