import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serverUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

 public getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<any>(`${this.serverUrl}`);
  }
  public getEmployeeById(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.serverUrl}/find/${id}`);
  }
  public addEmployee(employee:Employee):Observable<Employee>
  {
  return this.http.post<Employee>(`${this.serverUrl}/add`,employee);
  }

  public updateEmployee(id:number,employee:Employee):Observable<Employee>
  {
    return this.http.put<Employee>(`${this.serverUrl}/update/${id}`, employee);
  }
  public deleteEmployee(id:number)
  {
    return this.http.delete(`${this.serverUrl}/delete/${id}`);
  }
}
