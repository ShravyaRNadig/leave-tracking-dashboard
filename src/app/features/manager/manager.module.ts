import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';
import { EmpTaskComponent } from './emp-task/emp-task.component';


@NgModule({
  declarations: [
    ViewLeaveRequestComponent,
    EmpTaskComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
