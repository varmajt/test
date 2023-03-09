import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private fb: FormBuilder) {

  }

  // skillForm = this.fb.group({
  //   firstName: ['', { validators: Validators.required } as AbstractControlOptions],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //   })
  // })

  onSubmit() {
    console.log(this.skillForm.value);
  }

  skillForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.minLength(3)),
    address: new FormGroup({
      street: new FormControl(''),
    })
  });

  updateProfile() {
    this.skillForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
