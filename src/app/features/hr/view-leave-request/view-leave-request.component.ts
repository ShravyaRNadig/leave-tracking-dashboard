import { Component } from '@angular/core';
import { HrService } from 'src/app/core/service/hr.service';

@Component({
  selector: 'app-view-leave-request',
  templateUrl: './view-leave-request.component.html',
  styleUrls: ['./view-leave-request.component.css']
})
export class ViewLeaveRequestComponent {
  leaveHistory!: any[];
  constructor(private leaveService: HrService){}
  ngOnInit(){
    this.emp_leave()
  }
 
  emp_leave(){
    console.log('hi')
    this.leaveService.getAllEmployee().subscribe((data: any[]) => {
      this.leaveHistory = data;
    });
  }
}
