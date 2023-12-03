import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent {

  leaveHistory!: any;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService,private route: ActivatedRoute, private leaveService: EmployeeService,private router: Router) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEmpLeaveById(id);
    }
  }

  getEmpLeaveById(id: string) {
    console.log('hi')
    this.leaveService.getEmployeeLeaveById(id).subscribe({
      next:(response)=>{
        this.leaveHistory = response
      }
    })
  }
}
