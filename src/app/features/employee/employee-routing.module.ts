import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';

const routes: Routes = [
  {
    path: 'emp-dashboard',
    component: EmpDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
