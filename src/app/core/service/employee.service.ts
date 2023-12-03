import { Injectable } from '@angular/core';
import { API_URLS, CONFIG } from 'src/app/config/config';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient){}
  getEmployeeLeaveById(id: string): Observable<any> {
    return this.http.get(API_URLS.Generic_api_url + API_URLS.emp_leaves_by_id_url + '/' + id)
  }
}