import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
        if (this.authService.checkIsLoggIn() === true) {
            return true;
        } else {
            return this.router.parseUrl('auth/login');
        }
    }
}

@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
        const expectedRole = next.data.expectedRole;
        if (this.authService.checkIsLoggIn() === true && localStorage.getItem('roleTMS') === expectedRole) {
            return true;
        } else {
            return false;
        }
    }
}
