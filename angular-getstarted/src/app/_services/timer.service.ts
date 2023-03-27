import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  dateURL = `${environment.URI}/date`
  constructor(private http: HttpClient) {

  }

  GetServerTime() {
    return this.http.get(this.dateURL);
  }

}
