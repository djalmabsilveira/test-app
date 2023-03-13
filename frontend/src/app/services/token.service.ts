import { User, UserData } from 'src/app/interfaces/user';
import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  generateToken(loggedUser: User) {
    // const stringUser = `${loggedUser.id}:${loggedUser.email}:${loggedUser.fullName}:${loggedUser.userName}:${loggedUser.address}`;
    // const encodedUser = window.btoa(stringUser);
    // return encodedUser;
    delete loggedUser.password;
    const stringUser = JSON.stringify(loggedUser);
    const encodedUser = window.btoa(stringUser);
    return encodedUser;
  }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  decodeToken() {
    const encodedUser = this.getToken();
    const decodedUser = JSON.parse(window.atob(encodedUser || ''));
    return decodedUser;
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
