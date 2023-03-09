import { Component } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.css']
})
export class TFormComponent {
  skills = ['.net', 'angular', 'js', '']
  model = new Member(18, 'John Doe', this.skills[0]);

  newMember() {
    console.log(`model is submitted. Saving the data - ${JSON.stringify(this.model)}.`);
    this.model = new Member(22, '', '')
  }
  onSubmit() {
    console.log(`form is submitted.`);
  }
}
