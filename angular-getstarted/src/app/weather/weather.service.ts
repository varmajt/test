import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    weatherURI = `${environment.dotnetURI}/WeatherForecast`
    constructor(private http: HttpClient) {

    }

    getForcast() {
        return this.http.get<any[]>(this.weatherURI);
    }

}
