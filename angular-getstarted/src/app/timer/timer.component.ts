import { Component, Inject, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { TimerService } from '../_services/timer.service';
import { Timer_Value } from '../app.config';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {


  currentTime!: Date | null;
  subscription: Subscription = new Subscription();
  timeLeft;
  constructor(private timerService: TimerService, @Inject(Timer_Value) timerValue: number,
    private authServce: AuthenticationService) {
    this.timeLeft = timerValue;
  }

  ngOnInit(): void {
    const mock = interval(1000);
    this.subscription = mock.subscribe(() => { this.settime() });
  }

  settime() {
    this.SetTimeleft(null);
    if (this.timeLeft == 0) {
      this.logout();
    }
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  logout() {
    this.authServce.logout();
  }

  ResetSessoion() {
    this.SetTimeleft(3600);
  }

  ExtendSession() {
    var timeLeftString = localStorage.getItem('timeout');
    var sesstionTimeLeft = parseInt(timeLeftString ?? "0") + 1800;
    this.SetTimeleft(sesstionTimeLeft);
    throw new Error('Method not implemented.');
  }

  SetTimeleft = (timeCounter: number | null) => {
    if (timeCounter == null) {
      this.timeLeft--;
      localStorage.setItem('timeout', this.timeLeft.toString());
      return;
    }
    this.timeLeft = timeCounter ?? 0;
    localStorage.setItem('timeout', this.timeLeft.toString());
  }

}

