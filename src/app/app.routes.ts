import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component'; // example of a component to be shown in the layout
import { ProfileComponent } from './components/profile/profile.component'; // another example
import { ArticleComponent } from './components/article/article.component';
import { LayoutAuthComponent } from './components/layout-auth/layout-auth.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {authGuard} from "./guards/auth.guard";
import {logoutGuard} from "./guards/logout.guard";

export const routes: Routes = [
    { path: '', component: HomeComponent },
  {
    path: '', component: LayoutAuthComponent, canActivate: [logoutGuard],
    children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '',
    component: LayoutComponent, canActivate: [authGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'article', component: ArticleComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
