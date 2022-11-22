import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes:Routes =[
  {path: 'employees',component: EmployeeListComponent},
  {path: 'employee/create',component: EmployeeCreateComponent},
  {path: 'employee/update/:id',component: EmployeeUpdateComponent},
  {path: 'employee/overview/:id',component: EmployeeOverviewComponent},
  {path: '',redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
