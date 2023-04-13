import * as moment from 'moment-timezone';

import { Component } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent {
  currentDate = moment().format()
  estdate = moment().tz("America/New_York", true).format();
}
