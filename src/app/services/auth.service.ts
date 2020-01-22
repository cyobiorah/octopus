import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from '../models'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedSubject: BehaviorSubject<boolean>;
  public isLogged: Observable<boolean>;

  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.storage.get('data'));
    this.isLogged = this.isLoggedSubject.asObservable();
  }

  public get currentLoggedValue(): boolean {
    if (this.isLoggedSubject.value) {
      return true;
    }
    return false;
  }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  createAccount(userData): Observable<any> {
    console.log(userData);
    const firstName = userData.firstName;
    const lastName = userData.lastName;
    const username = userData.username;
    const phone = userData.phone;
    const email = userData.email;
    const password = userData.password;
    return this.http.post(environment.baseUri + `auth/create-account`, { firstName, lastName, username, phone, email, password }).pipe(
      map(res => {
        return res;
      })
    );
  }

  loginAccount(userData): Observable<any> {
    console.log(userData);
    const username = userData.username;
    const password = userData.password;
    return this.http.post(environment.baseUri + `auth/login`, { username, password }).pipe(
      map(res => {
        if (res && !res['blocked']) {
          this.isLoggedSubject.next(true);
        }
        return res;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    this.storage.remove('data');
    this.isLoggedSubject.next(false);
  }
}
