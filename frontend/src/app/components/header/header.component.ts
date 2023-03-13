import { User } from 'src/app/interfaces/user';
import { UtilitiesService } from './../../services/utilities.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuBackground!: Element | null;
  menu!: Element | null;
  closeButton!: Element | null;
  isLogged!: boolean;
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.utilitiesService.isLogged.subscribe((res) => {
      this.isLogged = res;
    });

    obj{aa:'sadfasf asfdasf asfdasdf afsdasf'}

  obj.aa.split(' ')

    this.menuBackground = document.querySelector('#menu-background');
    this.menu = document.querySelector('#menu');
    this.closeButton = document.querySelector('#mobile-menu-close-button');
  }

  logout() {
    this.userService.logout();
    this.utilitiesService.isLogged.next(false);
    this.router.navigate(['']);
  }

  openMenu() {
    this.menuBackground?.classList.add('mobile-menu-background');
    this.menu?.classList.remove('desktop-menu');
    this.menu?.classList.add('mobile-menu');
    this.closeButton?.classList.add('display-block');
  }

  closeMenu() {
    this.menuBackground?.classList.remove('mobile-menu-background');
    this.menu?.classList.add('desktop-menu');
    this.menu?.classList.remove('mobile-menu');
    this.closeButton?.classList.remove('display-block');
  }
}
