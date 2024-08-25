import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (inject(AuthService).isLoggedIn()) {
    console.log("Access allowed");
    return true;
  } else {
    console.log('Not authorized, navigating to login');
    router.navigate(['/login']);
    return false;
  }
};
