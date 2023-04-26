import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { Data } from '@angular/router';
import { DataModel } from '../datamodel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  

  private endpoint ='https://localhost:7245/account/Account/RegisterUser';
  private url="https://localhost:7245/api/Designations/GetDesignations";
  private urldepartment="https://localhost:7245/api/Departments/GetDepartments";
  private urleducation="https://localhost:7245/api/Educations/GetEducation";
  private urluser="https://localhost:7245/account/Account/GetAccount";
  private url1="https://localhost:7245/account/Account/PutAccount"

  data: any;
  id: any;

  constructor(private http: HttpClient) {}

//get method for education
getEducation():Observable<any>{
  return this.http.get<any>(this.urleducation).pipe(
    map((result:any)=> {
      console.log("done");
      return result;
    })
  )
}
//get method for department
getDepartment():Observable<any>{
  return this.http.get<any>(this.urldepartment).pipe(
    map((result:any)=> {
      console.log("done");
      return result;
    })
  )
}
//get method for designation
  getDesignation():Observable<any>{
    return this.http.get<any>(this.url)
     .pipe(
      map((result:any)=> {
        console.log("done");
        return result;
      })
    )
  }
  //post data method
  postRegister(data: any) {
    return this.http
      .post<any>(
       this.endpoint,
        data
      )
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //get  data metho
  getRegister(): Observable<any> {
    return this.http
      .get<any>(this.endpoint)
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }
  //update data method
  updateRegister(dataList: DataModel, id: string) {
    return this.http
      .put<any>(
        this.endpoint+ "/" + id,
        this.data
      )
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //delete data method
  deleteRegister(id: Number) {
    return this.http
      .delete<any>(
        this.endpoint+'/' + id
      )
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

//  get Use Profile Data
getUser(){
  let header = new HttpHeaders().set(
    "Authorization",
     "Bearer " +(localStorage.getItem("token") ?? "")
  );
  return this.http.get<any>(this.urluser,{headers:header})
  .pipe(
    map((result: any) => {
      console.log("user data");
      return result;
    })
  );
}
//update user data

updateUserData(id:any){
  let header = new HttpHeaders().set(
    "Authorization",
     "Bearer " +(localStorage.getItem("token") ?? "")
  );

  return this.http.put<Data>(this.url1+ "/"+id,{headers:header})
  .pipe(
    map((result: any) => {
      console.log("user data");
      return result;
      
    })
  );
}
}
