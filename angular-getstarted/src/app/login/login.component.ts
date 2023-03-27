import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  OnSubmit = () => {

    if (this.loginForm.invalid) {
      console.log(this.loginForm.status);
      console.error(this.loginForm.errors);
      return;
    }
    var email = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;
    this.authService.login(email, password)
      .pipe(first()).subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        }
      });

  }
}
