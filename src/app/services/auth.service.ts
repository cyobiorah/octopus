import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
    // console.log(environment);
  }

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
        return res;
      })
    );
  }
}
