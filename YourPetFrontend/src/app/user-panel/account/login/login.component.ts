import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { ConfigStore } from 'src/app/app-config/config-store';
import { AlertService } from 'src/app/services/app-services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
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
  constructor(private router: Router, private configStore: ConfigStore, private alertService: AlertService
    //private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  async logIn() {
    let isOk: boolean;
    this.configStore.startLoadingPanel();
    this.login = new Login(this.loginForm.value.email, this.loginForm.value.password)
    this.alertService.showError("Nie zalogowano");
   // let authToken = await this.authService.logIn(this.login).toPromise();
  }

  }


