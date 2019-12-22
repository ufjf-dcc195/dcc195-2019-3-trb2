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

  login(email, password) {
    this.loginService.login(email, password).pipe(take(1)).subscribe(
      (next) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.invalidLogin = true;
      }
    );
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: [null,
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
