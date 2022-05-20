import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  // private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
  private baseUrl = 'https://dummy.restapiexample.com/api/v1/employees';


  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
