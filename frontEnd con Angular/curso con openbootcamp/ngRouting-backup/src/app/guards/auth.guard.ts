import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state): boolean=> /*UrlTree*/{
  const router = inject(Router);
  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }else{
    router.navigate(['/login']);
    return false;
    /*return router.createUrlTree(['/login']);*//*Esto es lo recomendado porque cancela la navegación,
    y redirige al usuario automáticamente.*/
  }
  
};
