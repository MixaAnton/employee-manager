import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id:number;
  employee:Employee;
  constructor(private service:EmployeeService,private router :Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(
      response=>{
        this.employee=response;
      },
      error=>{
        alert("Can't read response!");
      }
      
      
    )
  }

  onSubmit(){
    this.service.updateEmployee(this.id,this.employee).subscribe(
      response=>{
        this.router.navigate(['/employees'])
      },
      erorr=>{
        alert("Can't update employee!");
      }
    )
  }

}
