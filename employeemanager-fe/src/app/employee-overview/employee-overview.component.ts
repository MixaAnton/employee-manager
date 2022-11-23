import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {

  id:number;
  employee:Employee;
  constructor(private service :EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadEmployee(this.id);
  }

  loadEmployee(id:number)
  {
    this.service.getEmployeeById(id).subscribe(response=>
      {
        this.employee=response;
      })
  }

}
