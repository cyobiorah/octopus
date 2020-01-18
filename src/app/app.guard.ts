import { Injectable, Inject } from '@angular/core';
import { CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class AuthGuardService implements CanLoad {

    constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

    canLoad() {
        if (this.isLoggedIn()) {
            console.log('OnlyLoggedInUsers');
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }

    isLoggedIn(): boolean {
        const isUserSignedIn = this.storage.get('data');
        if (isUserSignedIn) {
            return true;
        }
        return false;
    }
}
