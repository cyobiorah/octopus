import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.required],
    });
  }

  async registerUser(user) {
    console.log('here');
    console.log(user);
    this.loading = true;
    await this.authSrv.createAccount(user)
      .pipe(first())
      .subscribe(res => {
        console.log(res);
        if (res.status) {
          this.toastr.success(`Registration Successful, Please Login`)
          this.router.navigateByUrl('/login');
        } else {
          this.toastr.error(`Oops, Something went wrong!!!`);
        }
        this.loading = false;
      }, err => {
        console.log(err.error);
        this.toastr.error(`${err.error.message}`);
        this.loading = false;
      })
  }

}
