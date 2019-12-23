import { LoginService } from './../../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { take } from 'rxjs/operators';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public invalidLogin = false;
  public loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createLoginForm();

  }

  async login() {
    (await this.loginService.login(this.loginForm.value)).subscribe(
      (res) => {
        console.log(res);

        this.router.navigate(['/home']);
       },
      (error) => {
        this.invalidLogin = true;
      }
    );
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [null,
        Validators.compose([
          Validators.required
        ])
      ],
      password: [null,
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }
}
