import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  checkIsLoggIn() {
    if (localStorage.getItem('roleTMS')) {
      return true;
    } else {
      return false;
    }
  }
}
