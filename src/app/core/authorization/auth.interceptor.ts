import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenStorage: TokenStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.tokenStorage.getToken();
      if (token) {
        request = request.clone({
          setHeaders: { 
            Authorization: `Bearer ${token}`
          }
        });
      }
      return next.handle(request);
    }    
}