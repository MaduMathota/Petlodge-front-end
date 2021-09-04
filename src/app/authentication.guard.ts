import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable()

export class AuthenticationGuard implements CanActivate {


  constructor(private service: RegistrationService, private router: Router) {}

  canActivate(): boolean {

    if (this.service.loginActivated()) {
      return true;
    }
    else {
      this.router.navigate([''])
      return false;
    }
  }
}
