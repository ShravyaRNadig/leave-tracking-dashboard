import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';

const routes: Routes = [
  {
    path: 'view-leave-request',
    component: ViewLeaveRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
