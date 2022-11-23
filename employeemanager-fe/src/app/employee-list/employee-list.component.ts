import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];
  constructor(private service:EmployeeService,private router:Router) { }
  
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees()
  {
      this.service.getAllEmployees().subscribe(
        response=>{
          this.employees=response;
        }
      );
  }

  updateEmployee(id:number)
  {
    this.router.navigate(['/employee/update',id]);
  }
  deleteEmployee(id:number)
  {
    this.service.deleteEmployee(id).subscribe(response=>{
      this.getAllEmployees();
    })
  }
  showEmployeeOverviw(id:number){
    this.router.navigate(['/employee/overview',id]);
  }

}
