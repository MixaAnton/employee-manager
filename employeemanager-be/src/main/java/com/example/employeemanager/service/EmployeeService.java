package com.example.employeemanager.service;

import com.example.employeemanager.exeption.UserNotFoundExeption;
import com.example.employeemanager.model.Employee;
import com.example.employeemanager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@Service
public class EmployeeService {

    EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository)
    {
        this.employeeRepository=employeeRepository;
    }
    public List<Employee> getAllEmployees()
    {
        return  employeeRepository.findAll();
    }
    public Employee getEmployeeById(Long id) throws Throwable {
        return employeeRepository.findEmployeeById(id)
                .orElseThrow(()-> new UserNotFoundExeption("Usere with id: "+ id + "was not found"));
    }
    public Employee addEmployee(Employee employee)
    {
        return  employeeRepository.save(employee);
    }
    public Employee updateEmployee(Long id,Employee employee)
    {
        Employee updateEmployee = employeeRepository.findEmployeeById(id)
                .orElseThrow(()->new UserNotFoundExeption("User with id: "+id+"not exist"));
        updateEmployee.setFirstName(employee.getFirstName());
        updateEmployee.setLastName(employee.getLastName());
        updateEmployee.setEmail(employee.getEmail());
        updateEmployee.setPhone(employee.getPhone());
        updateEmployee.setImageUrl(employee.getImageUrl());

        return updateEmployee;
    }
    public void deleteEmployee(Long id)
    {
         employeeRepository.deleteEmployeeById(id);
    }
}
