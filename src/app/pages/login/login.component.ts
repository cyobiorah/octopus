import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private toastr: ToastrService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {
    this.initForm();
  }
  ngOnDestroy() {
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async loginUser(user) {
    console.log('here');
    console.log(user);
    this.loading = true;
    await this.authSrv.loginAccount(user)
      .pipe(first())
      .subscribe(res => {
        console.log(res);
        if (res.status) {
          this.toastr.success(`Login Successful`);
          this.router.navigateByUrl('/dashboard');
          this.storage.set('data', res.message);
        } else {
          this.toastr.error(`Something went wrong!!!`);
        }
        this.loading = false;
      }, err => {
        console.log(err);
        this.toastr.error(`${err.error.message}`);
        this.loading = false;
      })
  }

}
