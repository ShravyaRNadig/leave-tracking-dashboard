import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent {
  
  ngOnInit(){
    this.emp_leave()
  }
  employeeName: string = "John Doe"; // Replace with actual data
  employeeID: string = "EMP123"; // Replace with actual data
  totalLeaves: number = 20; // Replace with actual data
  leavesLeft: number = 10; // Replace with actual data

  leaveHistory = [
    { date: '2023-01-05', reason: 'Vacation', status: 'Approved' },
    { date: '2023-02-12', reason: 'Family emergency', status: 'Pending Approval' },
    { date: '2023-03-20', reason: 'Personal day', status: 'Rejected' },
    // Add more leave history data as needed
  ];
  emp_leave(){
    console.log('hi')
  }
}
