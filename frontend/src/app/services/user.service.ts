import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signup(newUser: User): Observable<User> {
    return this.http.post<User>(`${API_URL}/users`, newUser);
  }

  findUserByID(id: string): Observable<User> {
    return this.http.get<User>(`${API_URL}/users/${id}`);
  }
}
