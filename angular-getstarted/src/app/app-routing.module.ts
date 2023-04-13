import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth-guard';
import { ViewArticleComponent } from './view-article/view-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  { path: "playground", component: FormComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "view/:id", component: ViewArticleComponent },
  { path: "add", component: EditArticleComponent },
  { path: "**", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
