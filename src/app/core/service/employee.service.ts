import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from "src/app/config/config";
import { ServiceGateway } from "./servicegetway.service";


@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
    constructor(private serviceGateWay: ServiceGateway, private http: HttpClient) { }
  employee(): Observable<boolean> {
    return this.serviceGateWay.get(API_URLS.Generic_api_url + API_URLS.emp_leaves)
  }
}
