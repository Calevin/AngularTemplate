import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public tokenStorage: TokenStorageService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.tokenStorage.isTokenSaved) {
        window.alert("Access not allowed!");
        this.router.navigate(['home/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }
      return true;
  }
}