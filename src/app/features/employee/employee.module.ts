import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpAddLeaveComponent } from './emp-add-leave/emp-add-leave.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpDashboardComponent,
    EmpAddLeaveComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
