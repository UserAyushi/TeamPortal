import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TeammemberService {
  private url="https://localhost:7245/account/Account/GetAccount";

  constructor(private http: HttpClient,) { }

  //get teamdetails join by user
  getTeamDetails() {
    let header = new HttpHeaders().set(
      "Authorization",
       "Bearer " +(localStorage.getItem("token") ?? "")
    );
    
    return this.http.get<any>(this.url,{headers:header}).pipe(
      map((result: any) => {
        console.log(result);
        console.log("done to backend");
        return result;
      })
    );
  }
}
