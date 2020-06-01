import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor( private auth:AuthService, private router:Router ) { }
  canActivate():boolean{
    if(this.auth.isAutenticated()){ //true=admin, false =not authorised
      ///this.router.navigate(['admin']);
      return true;
    }
    return false;
  }


}
