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
import { RegisterComponent } from './user-panel/account/register/register.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/material.module';
@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserNavigationComponent,
    UserPanelMainPageComponent,
    LoginComponent,
    AccountComponent,
    SpinnerComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({
    })
  ],
  providers: [
    ConfigStore,
    HttpClient,
    AlertService,
    AuthService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
