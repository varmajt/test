import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from './material.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TFormComponent } from './t-form/t-form.component';
import { TimerComponent } from './timer/timer.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent } from './voter/voter.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MinuteSecondsPipe } from './_helpers';
import { TimezoneComponent } from './timezone/timezone.component';
import { Timer_Value } from './app.config';
import { ViewArticleComponent } from './view-article/view-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    TFormComponent,
    ReactiveFormComponent,
    FormComponent,
    TimerComponent,
    VoterComponent,
    VoteTakerComponent,
    WeatherComponent,
    LoginComponent,
    HomeComponent,
    MinuteSecondsPipe,
    TimezoneComponent,
    ViewArticleComponent,
    EditArticleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: Timer_Value, useValue: 3600 }],
  bootstrap: [AppComponent]
})
export class AppModule { }
