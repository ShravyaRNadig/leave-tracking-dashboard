import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService,MessageService } from 'primeng/api';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpAddLeaveComponent } from './emp-add-leave/emp-add-leave.component';
import { NgPrimeModule } from 'src/app/app.ngprime.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    EmpDashboardComponent,
    EmpAddLeaveComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    CommonModule,
    NgPrimeModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
  providers: [ConfirmationService,MessageService],
})
export class EmployeeModule { }
