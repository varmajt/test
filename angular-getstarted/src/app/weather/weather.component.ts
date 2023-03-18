import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forcastData: any;
  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.weatherService.getForcast().subscribe(data => {
      console.log(`data: ${data}`);
      this.forcastData = data;
    })
  }


}
