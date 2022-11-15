package com.example.employeemanager.controller;

import com.example.employeemanager.model.Employee;
import com.example.employeemanager.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;


    @GetMapping(path = "/employees")
    List<Employee> getAllEmployees()
    {
        return employeeService.getAllEmployees();
    }
}
