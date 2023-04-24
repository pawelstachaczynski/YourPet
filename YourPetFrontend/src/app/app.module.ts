import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserNavigationComponent } from './user-panel/user-navigation/user-navigation.component';
import { UserPanelMainPageComponent } from './user-panel/user-panel-main-page/user-panel-main-page.component';
import { LoginComponent } from './user-panel/account/login/login.component';
import { AccountComponent } from './user-panel/account/account.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AlertService } from './services/app-services/alert.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigStore } from './app-config/config-store';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserNavigationComponent,
    UserPanelMainPageComponent,
    LoginComponent,
    AccountComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({
    })
  ],
  providers: [
    ConfigStore,
    HttpClient,
    AlertService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
