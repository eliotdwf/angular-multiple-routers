import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const logoutGuard: CanActivateFn = (route, state) => {
  inject(AuthService).logout(false);
  return true;
};
