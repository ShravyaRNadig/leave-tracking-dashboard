import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpAddLeaveComponent } from './emp-add-leave/emp-add-leave.component';
import { NgPrimeModule } from 'src/app/app.ngprime.module';


@NgModule({
  declarations: [
    EmpDashboardComponent,
    EmpAddLeaveComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
