import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable, Output } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  @Output() isLogged: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.getToken() && this.decodeAndNotify();
  }

  decodeAndNotify() {
    const user = this.tokenService.decodeToken();
    this.isLogged.next(user);
  }
}
