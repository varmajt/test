import { Component } from '@angular/core';
import { User } from './_models/User';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'started';
  user?: User | null;

  constructor(private authService: AuthenticationService) {
    this.authService.user.subscribe(u => this.user = u);
  }

  logout() {
    this.authService.logout();
  }

}
