import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPrimeModule } from 'src/app/app.ngprime.module';
import { HrRoutingModule } from './hr-routing.module';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ViewLeaveRequestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HrRoutingModule,
    NgPrimeModule
  ]
})
export class HrModule { }
