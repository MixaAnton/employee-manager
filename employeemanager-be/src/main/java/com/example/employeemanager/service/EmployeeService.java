package com.example.employeemanager.service;

import com.example.employeemanager.exeption.UserNotFoundExeption;
import com.example.employeemanager.model.Employee;
import com.example.employeemanager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
        if(employee.getFirstName()!=null && !employee.getFirstName().isEmpty()) {
            updateEmployee.setFirstName(employee.getFirstName());
        }
        if(employee.getLastName()!=null && !employee.getLastName().isEmpty()){
        updateEmployee.setLastName(employee.getLastName());
        }
        if(employee.getEmail()!=null && !employee.getEmail().isEmpty()){
        updateEmployee.setEmail(employee.getEmail());
        }
        if(employee.getPhone()!=null && !employee.getPhone().isEmpty())
        {
        updateEmployee.setPhone(employee.getPhone());
        }
        if(employee.getImageUrl()!=null && !employee.getImageUrl().isEmpty()){
        updateEmployee.setImageUrl(employee.getImageUrl());
        }

        return updateEmployee;
    }
    @Transactional
    public void deleteEmployee(Long id)
    {
         employeeRepository.deleteEmployeeById(id);
    }
}
