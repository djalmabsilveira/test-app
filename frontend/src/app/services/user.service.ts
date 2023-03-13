import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUser, User } from '../interfaces/user';
import { TokenService } from './token.service';

const API_URL = environment.API_URL;
const KEY = 'loggedUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  signup(newUser: User): Observable<User> {
    return this.http.post<User>(`${API_URL}/users`, newUser);
  }

  login(user: LoginUser): Observable<User> {
    return this.http.post<User>(`${API_URL}/users`, user);
  }

  findUserByID(id: string): Observable<User> {
    return this.http.get<User>(`${API_URL}/users/${id}`);
  }

  findUserByUserName(userName: string): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users?userName=${userName}`);
  }

  getUserFromStorage() {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  }

  logout() {
    this.tokenService.removeToken();
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
