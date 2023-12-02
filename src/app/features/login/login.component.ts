import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
   
    if (this.loginForm.valid) {
      // Add your login logic here
      this.router.navigateByUrl('/employee/emp-dashboard');
      console.log('Form submitted!', this.loginForm.value);
      // You can add authentication logic here
    } else {
      // Mark the form controls as touched to trigger validation messages
      this.loginForm.markAllAsTouched();
    }
  }
}
