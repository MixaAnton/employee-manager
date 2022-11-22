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
  listOfImageUrls=[
    "https://bootdey.com/img/Content/avatar/avatar1.png",
    "https://bootdey.com/img/Content/avatar/avatar2.png",
    "https://bootdey.com/img/Content/avatar/avatar3.png",
    "https://bootdey.com/img/Content/avatar/avatar4.png",
    "https://bootdey.com/img/Content/avatar/avatar5.png"

  ]
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  createEmployee(){
    this.service.addEmployee(this.employee).subscribe(response=>
      {
        this.router.navigate(['/employees']);
      })
  };

  onSubmit(){
    this.createEmployee();
  }

}
