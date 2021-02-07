
import { Injectable } from '@angular/core';
import { CanActivateChild,CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate,CanActivateChild {

  constructor(private router:Router) {


  }

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
      debugger;
    if(localStorage.getItem('UserNameAdmin')!=null&&localStorage.getItem('UserName')!=null)
      return true;
      else
      { 
        this.router.navigateByUrl('/login');
        return false;
      }
  }
  canActivateChild(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
      debugger;
    if(localStorage.getItem('UserName')!=null)
      return true;
      else
      { 
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}
