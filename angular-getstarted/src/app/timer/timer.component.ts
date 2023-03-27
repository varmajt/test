import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { TimerService } from '../_services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  currentTime!: Date | null;
  subscription: Subscription = new Subscription();
  timeLeft = 3600;
  constructor(private timerService: TimerService,
    private authServce: AuthenticationService) {

  }

  ngOnInit(): void {
    const mock = interval(1000);
    this.subscription = mock.subscribe(() => { this.settime() });
  }

  settime() {

    this.timerService.GetServerTime().subscribe(data => {
      // console.log(`data: ${data}`);
      this.currentTime = new Date(data.toString());
      this.timeLeft--;
      if (this.timeLeft == 0) {
        this.logout();
      }
    });

  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  logout() {
    this.authServce.logout();
  }
}

