import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (inject(AuthService).isLoggedIn()) {
    return true;
  } else {
    console.log('Not authorized');
    router.navigate(['/login']);
    return false;
  }
};
