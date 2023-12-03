import { Injectable } from '@angular/core';
import { API_URLS, CONFIG } from 'src/app/config/config';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(private http: HttpClient){}
  getAllEmployee(): Observable<any> {
    return this.http.get(API_URLS.Generic_api_url + API_URLS.emp_leaves_url)
  }
}