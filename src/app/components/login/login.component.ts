import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public authService: AuthService) {
  }

  login() {
    this.authService.login();
  }

}
