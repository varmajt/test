import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TFormComponent } from './t-form/t-form.component';

const routes: Routes = [
  {path:"template-form", component:TFormComponent},
  {path:"reactive-form", component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
