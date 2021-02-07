
import { Injectable } from '@angular/core';
import { CanActivateChild,CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardSupplier implements CanActivate {

  constructor(private router:Router) {


  }
  
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
      debugger;
    if(localStorage.getItem('SupplierId')!=null||localStorage.getItem('UserNameandsupplier')!=null)
      return true;
      else
      { 
        this.router.navigateByUrl('/login');
        return false;
      }
  }

}
