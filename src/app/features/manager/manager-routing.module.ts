import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';
import { EmpTaskComponent } from './emp-task/emp-task.component';
const routes: Routes = [
  {
    path: 'view-leave-request',
    component: ViewLeaveRequestComponent
  },
  {
    path: 'emp-project-task',
    component: EmpTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
