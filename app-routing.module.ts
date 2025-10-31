import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from 'C:\Users\ayman\OneDrive\Desktop\eventplanner-frontend\src\app\pages\signup';
import { LoginComponent } from 'C:\Users\ayman\OneDrive\Desktop\eventplanner-frontend\src\app\pages\login';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
