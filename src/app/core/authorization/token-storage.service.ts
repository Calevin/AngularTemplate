import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  public getLoggedInName  = new Subject<String>();
  constructor() { }

  signOut(): void {
    this.getLoggedInName.next('');
    window.sessionStorage.clear();
  }
  
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  get isTokenSaved(): boolean {
    let authToken = window.sessionStorage.getItem(TOKEN_KEY);
    return (authToken !== null) ? true : false;
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.getLoggedInName.next(user.username);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }  
}

