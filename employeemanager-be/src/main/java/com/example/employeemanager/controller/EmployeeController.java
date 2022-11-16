package com.example.employeemanager.controller;

import com.example.employeemanager.exeption.UserNotFoundExeption;
import com.example.employeemanager.model.Employee;
import com.example.employeemanager.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping
    ResponseEntity<List<Employee>> getAllEmployees()
    {
        List<Employee> employees = employeeService.getAllEmployees();
        return  new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping(value = "/find/{id}")
    ResponseEntity<Employee> getEmployee(@PathVariable("id") Long id) throws Throwable {
       Employee employee = employeeService.getEmployeeById(id);
       return  new ResponseEntity<>(employee,HttpStatus.OK);
    }
    @PostMapping(value = "/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee)
    {
        Employee emp=employeeService.addEmployee(employee);
        return new ResponseEntity<>(emp,HttpStatus.OK);
    }

    @PutMapping(value = "/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id,@RequestBody Employee employee)
    {
        Employee updateEmployee= employeeService.updateEmployee(id,employee);
        return new ResponseEntity<>(updateEmployee,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id)
    {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>("Employee with id: "+id +"has been deleted",HttpStatus.OK);
    }
}
