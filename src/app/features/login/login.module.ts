import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgPrimeModule } from 'src/app/app.ngprime.module';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
})

export class LoginModule { }
