import { UtilitiesService } from './utilities.service';
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
    private userService: UserService,
    private utilitiesService: UtilitiesService
  ) {}

  generateToken(user: User) {
    const token = this.tokenService.generateToken(user);
    this.tokenService.setToken(token);
  }

  authenticate(userArray: User[], loginUser: LoginUser) {
    if (userArray.length == 0) {
      alert('Usuario ou senha incorretos');
      return;
    } else if (userArray[0].password === loginUser.password) {
      this.generateToken(userArray[0]);
      this.utilitiesService.isLogged.next(this.tokenService.hasToken());
      this.router.navigate(['']);
    }
  }
}
