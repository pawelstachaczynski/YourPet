import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserNavigationComponent } from './user-panel/user-navigation/user-navigation.component';
import { UserPanelMainPageComponent } from './user-panel/user-panel-main-page/user-panel-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserNavigationComponent,
    UserPanelMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
