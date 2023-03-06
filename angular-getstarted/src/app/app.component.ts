import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titlex = 'started';
  myemail:string = "jv@gmail.com";
  myChoice:boolean  = false;

  OnSubmit = () =>{
    alert("login done");
    console.log(`email: ${this.myemail}, choice: ${this.myChoice}`);
  }
}
