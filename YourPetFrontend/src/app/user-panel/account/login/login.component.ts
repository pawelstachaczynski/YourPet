import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  private login: Login;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async logIn() {
    console.log('ss');
    let isOk: boolean;
    this.login = new Login(this.loginForm.value.email, this.loginForm.value.password)
    
  }

  }


