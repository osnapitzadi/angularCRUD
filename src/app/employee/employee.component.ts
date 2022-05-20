import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from "./../employee-service.service";
import { Router } from '@angular/router';
import { Employee } from './employee'
import { Observable } from 'rxjs'; 


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Observable<Employee[]> | undefined;

  constructor(private employeeService: EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

}
