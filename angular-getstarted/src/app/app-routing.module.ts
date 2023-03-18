import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TimerComponent } from './timer/timer.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: "playground", component: FormComponent },
  { path: "timer", component: TimerComponent },
  { path: "weather", component: WeatherComponent },
  { path: "**", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
