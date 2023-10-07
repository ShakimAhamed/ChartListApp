import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private router: Router,
    private http: HttpClient ) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     
    return true;
  }
}
