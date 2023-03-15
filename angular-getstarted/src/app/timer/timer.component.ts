import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  currentTime: Date = new Date("1/1/2000");
  subscription: Subscription = new Subscription();

  constructor(private timerService: TimerService) {

  }

  ngOnInit(): void {
    const mock = interval(1000);
    this.subscription = mock.subscribe(() => { this.settime() });

  }

  settime() {

    this.timerService.GetServerTime().subscribe(data => {
      console.log(`data: ${data}`);
      this.currentTime = new Date(data.toString());
    });

  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
