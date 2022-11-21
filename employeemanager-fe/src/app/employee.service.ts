import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serverUrl='http://localhost:8080/employee';
  constructor(private http:HttpClient) { }

 public getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<any>(`${this.serverUrl}`);
  }
  public getEmployee(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.serverUrl}/find/${id}`);
  }
  public addEmployee(employee:Employee):Observable<Employee>
  {
  return this.http.post<Employee>(`${this.serverUrl}/add`,employee);
  }

  public updateEmployee(id:number,employee:Employee):Observable<Employee>
  {
    return this.http.put<Employee>(`${this.serverUrl}/update/${id}`,employee);
  }
  public deleteEmployee(id:number):Observable<string>
  {
    return this.http.delete<string>(`${this.serverUrl}/delete/${id}`);
  }
}
