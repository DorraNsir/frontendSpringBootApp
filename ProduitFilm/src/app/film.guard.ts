import { CanActivateFn } from '@angular/router';

export const filmGuard: CanActivateFn = (route, state) => {
  return true;
  
};
