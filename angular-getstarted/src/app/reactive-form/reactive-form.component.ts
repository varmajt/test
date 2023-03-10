import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private fb: FormBuilder) {

  }

  // skillForm2 = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', [Validators.required, Validators.minLength(3)]],
  //   address: this.fb.group({
  //     street: [''],
  //   })
  // })

  onSubmit() {
    console.log(this.skillForm.value);
  }

  skillForm = new FormGroup({
    first: new FormControl('', Validators.required),
    last: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      street: new FormControl(''),
    })
  });

  updateProfile() {
    this.skillForm.patchValue({
      first: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
