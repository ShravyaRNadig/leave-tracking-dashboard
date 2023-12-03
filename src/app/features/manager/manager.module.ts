import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ManagerRoutingModule } from './manager-routing.module';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';
import { EmpTaskComponent } from './emp-task/emp-task.component';
import { NgPrimeModule } from 'src/app/app.ngprime.module';

@NgModule({
  declarations: [
    ViewLeaveRequestComponent,
    EmpTaskComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    HttpClientModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
