import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  checkIsLoggIn() {
    if (localStorage.getItem('roleTMS') && localStorage.getItem('placeCodeTMS')
      && localStorage.getItem('buCodeTMS')) {
      return true;
    } else {
      return false;
    }
  }
}
