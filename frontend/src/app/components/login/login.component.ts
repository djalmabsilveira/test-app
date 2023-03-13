import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginUser, User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  teste() {
    const a = Math.random().toString(36).slice(2);
    console.log(a);
  }

  login() {
    const loginUser = this.loginForm.getRawValue() as LoginUser;
    this.userService
      .findUserByUserName(loginUser.userName)
      .subscribe((userArray) =>
        this.authService.authenticate(userArray, loginUser)
      );
  }
}
