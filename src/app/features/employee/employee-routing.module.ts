import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpAddLeaveComponent } from './emp-add-leave/emp-add-leave.component';

const routes: Routes = [
  {
    path: 'emp-dashboard',
    component: EmpDashboardComponent
  },
  {
    path: 'add-leave',
    component: EmpAddLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
