import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser, User } from '../interfaces/user';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  generateToken() {
    const token = Math.random().toString(36).slice(2);
    this.tokenService.setToken(token);
  }

  authenticate(userArray: User[], loginUser: LoginUser) {
    if (userArray.length == 0) {
      alert('Usuario ou senha incorretos');
      return;
    } else if (userArray[0].password === loginUser.password) {
      this.generateToken();
      this.userService.setUserToStorage(userArray[0]);
      this.router.navigate(['']);
    }
  }
}
