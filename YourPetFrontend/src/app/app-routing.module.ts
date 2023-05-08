import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { LoginComponent } from './user-panel/account/login/login.component';
import { UserPanelMainPageComponent } from './user-panel/user-panel-main-page/user-panel-main-page.component';
import { RegisterComponent } from './user-panel/account/register/register.component';

const routes: Routes = [
  {
    path: '', component: UserPanelComponent, children: [
      {path: '', component: UserPanelMainPageComponent },
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
