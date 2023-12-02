import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

/**
 * serviceGateway service
 * http getway
 */

@Injectable({
  providedIn: "root",
})
export class ServiceGateway {
  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(url, this.getRequestOptions("")).pipe(
      tap((response) => response),
      catchError(this.handleError<any>("Exception occured"))
    );
  }

  public post(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data, this.getRequestOptions("")).pipe(
      tap((response: any) => console.log("Inserted successfully")),
      catchError(this.handleError<any>("Exception occured"))
    );
  }

  public put<T>(url: string, contenttype: string, data: any):Observable<T> {
    //console.log("Executing http.post, URL: " + url + " Time: " + new Date().toString(),'post data');
    return this.http
      .put<any>(url, data, this.getRequestOptions(''))
      .pipe(
        tap((response: any) => console.log("Update successfully")),
        catchError(this.handleError<any>("Exception occured"))
      );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete<any>(url, this.getRequestOptions("")).pipe(
      tap((response: any) => console.log("Deleted successfully")),
      catchError(this.handleError<any>("Exception occurred"))
    );
  }

  // get with error exception
  public get2(url: string): Observable<any> {
    return this.http.get(url, this.getRequestOptions("")).pipe(
      tap((response) => response),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  // post with error exception
  public post2(url: string, contenttype: string, data: any): Observable<any> {
    return this.http.post<any>(url, data, this.getRequestOptions(contenttype)).pipe(
      tap((response: any) => response),
      catchError(this.handleError<any>('Exception occured'))
    );
  }

  public put2(url: string, contenttype: string, data: any): Observable<any> {
    //console.log("Executing http.post, URL: " + url + " Time: " + new Date().toString(),'post data');
    return this.http
      .put<any>(url, data, this.getRequestOptions(contenttype))
      .pipe(
        tap((response: any) => console.log("Update successfully")),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.warn(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private getRequestOptions(contentType: string): any {
    let authResponse: any = this.getAuthResponse();
    var _headers = {};
    if ((contentType === '') || (contentType == null) || (contentType === null) || (contentType === 'undefined')) {
      _headers = _.extend(_headers, { 'Authorization': 'Bearer' + ' ' + authResponse });
    } else {
      _headers = _.extend(_headers, { 'Authorization': 'Bearer' + ' ' + authResponse });
    }

    let httpOption = {
      headers: new HttpHeaders(_headers)
    };

    return httpOption;
  }

  private getTokenHeader(): any {
    let authResponse: any = this.getAuthResponse();
    var _headers = {};
    if ((authResponse == null) || (authResponse === null) || (typeof authResponse === 'undefined')) {
      //  console.error("Cannot append Authorization header, authResponse is null or undefined");
    }
    else {
      _headers = _.extend(_headers, { 'Authorization': 'Bearer' + ' ' + authResponse });
    }
    let httpOption = {
      headers: new HttpHeaders(_headers)
    };
    return httpOption;
  }
  // private getRequestOptions(contentType: string): any {
  //   let authResponse: any = this.getAuthResponse();

  //   var _headers = {};
  //   //let headers = new HttpHeaders();
  //   if (
  //     contentType === "" ||
  //     contentType == null ||
  //     contentType === null ||
  //     contentType === "undefined"
  //   ) {
  //     //headers.append('Content-Type', 'application/json');
  //     _headers = {
  //       "Content-Type": "application/json",
  //       "X-Frame-Options": "DENY",
  //       "X-XSS-Protection": "1",
  //       "X-Content-Type-Options": "nosniff",
  //     };
  //   } else {
  //     //headers.append('Content-Type', contentType);
  //     _headers = {
  //       "Content-Type": contentType,
  //       "X-Frame-Options": "DENY",
  //       "X-XSS-Protection": "1",
  //       "X-Content-Type-Options": "nosniff",
  //     };
  //   }

  //   if (
  //     authResponse == null ||
  //     authResponse === null ||
  //     typeof authResponse === "undefined"
  //   ) {
  //     console.warn(
  //       "Cannot append Authorization header, authResponse is null or undefined"
  //     );
  //   } else {
  //     // headers.append('Authorization', authResponse.token_type + ' ' + authResponse.access_token);
  //     _headers = { Authorization: "Bearer" + " " + authResponse };
  //   }

  //   let httpOption = {
  //     headers: new HttpHeaders(_headers),
  //   };
  //   console.log(httpOption);

  //   return httpOption;
  // }

  // private getTokenHeader(): any {
  //   let authResponse: any = this.getAuthResponse();
  //   var _headers = {};
  //   if (
  //     authResponse == null ||
  //     authResponse === null ||
  //     typeof authResponse === "undefined"
  //   ) {
  //     console.warn(
  //       "Cannot append Authorization header, authResponse is null or undefined"
  //     );
  //   } else {
  //     _headers = { Authorization: "Bearer" + " " + authResponse };
  //   }
  //   let httpOption = {
  //     headers: new HttpHeaders(_headers),
  //   };
  //   return httpOption;
  // }

  private getAuthResponse(): any {
    return sessionStorage.getItem('access_token');
}
}
