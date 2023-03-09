import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myemail: string = "jv@gmail.com";
  myChoice: boolean = false;

  OnSubmit = () => {
    alert("login done");
    console.log(`email: ${this.myemail}, choice: ${this.myChoice}`);
  }
}
