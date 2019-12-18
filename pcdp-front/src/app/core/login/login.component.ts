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
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createLoginForm();

  }

  login() {
    
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: [null,
        Validators.compose([
          Validators.pattern('^[a-zA-Z0-9]+.{2,}$'),
          Validators.required
        ])
      ],
      password: [null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ]
    });
  }
}
