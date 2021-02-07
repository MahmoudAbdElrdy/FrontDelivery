
import { Injectable } from '@angular/core';
import { CanActivateChild,CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardOffice implements CanActivate {

  constructor(private router:Router) {


  }
  
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
      debugger;
    if(localStorage.getItem('officeId')!=null||localStorage.getItem('UserNameandoffice')!=null)
      return true;
      else
      { 
        this.router.navigateByUrl('/login');
        return false;
      }
  }

}
