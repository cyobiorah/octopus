// import { Injectable, Inject } from '@angular/core';
// import { CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// @Injectable()
// export class AuthGuardService implements CanLoad {

//     constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

//     canLoad() {
//         if (this.isLoggedIn()) {
//             console.log('OnlyLoggedInUsers');
//             return true;
//         } else {
//             this.router.navigateByUrl('/login');
//             return false;
//         }
//     }

//     isLoggedIn(): boolean {
//         const isUserSignedIn = this.storage.get('data');
//         if (isUserSignedIn) {
//             return true;
//         }
//         return false;
//     }
// }


import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentLoggedValue;
        console.log(currentUser);
        if (currentUser) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        this.router.navigateByUrl('/login');
        return false;
    }
}