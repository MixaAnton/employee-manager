import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  
  employee :Employee = new Employee();
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  createEmployee(){
    this.service.addEmployee(this.employee).subscribe(response=>
      {
        this.router.navigate(['/employees']);
      },
      error=>{
        alert("Can't create employee!");
      })
  };

  onSubmit(){
    this.createEmployee();
  }

}
