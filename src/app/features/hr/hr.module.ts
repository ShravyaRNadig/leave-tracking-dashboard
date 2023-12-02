import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { ViewLeaveRequestComponent } from './view-leave-request/view-leave-request.component';


@NgModule({
  declarations: [
    ViewLeaveRequestComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
