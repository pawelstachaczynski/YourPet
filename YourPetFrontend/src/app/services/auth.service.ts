import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertService } from "./app-services/alert.service";
import { Router } from "@angular/router";
import { Login } from "../models/login.model";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private alertService: AlertService, private router: Router) { 
    
}
    logIn(login: Login) {
    return true; //return null; //this.http.post<AuthToken>(`${this.apiUrl}login`, login)
    }
}