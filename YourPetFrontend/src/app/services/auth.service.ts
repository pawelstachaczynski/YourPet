import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertService } from "./app-services/alert.service";
import { Router } from "@angular/router";
import { Login } from "../models/login.model";
import { Register } from "../models/register.model";
import { AppConfig } from "../app-config/app.config";

@Injectable()
export class AuthService {
    private serverUrl: string = AppConfig.APP_URL;
    private apiUrl: string = `${this.serverUrl}api/account/`

    constructor(private http: HttpClient, private alertService: AlertService, private router: Router) { 
    
}
    logIn(login: Login) {
    return true; //return null; //this.http.post<AuthToken>(`${this.apiUrl}login`, login)
    }

    signup(newUser: Register) {
        return this.http.post<Register>(`${this.apiUrl}register`, newUser)
    }
}