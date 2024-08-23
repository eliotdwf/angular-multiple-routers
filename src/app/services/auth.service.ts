import {Injectable, signal} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = signal<boolean>(false)

  constructor(private router: Router) { }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  login() {
    this._isLoggedIn.set(true);
    console.log('Logged in');
  }

  logout(redirectToLogin: boolean = true) {
    this._isLoggedIn.set(false);
    console.log('Logged out');
    if (redirectToLogin){
      this.router.navigate(['/login']);
    }
  }

}
