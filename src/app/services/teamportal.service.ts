import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { teamMember } from '../teamMemberModel';
import { Team } from '../teammodel';
import { join } from '../join';

@Injectable({
  providedIn: 'root'
})
export class TeamportalService {
  private endpoint = 'https://localhost:7245/api/Teams/GetTeams';
  url = 'https://localhost:7245/api/Teams/GetTeam';
  baseurl = "https://localhost:7245/account/Account/GetUsers";
  baseurl1 = "https://localhost:7245/api/Teams/PostTeam";
  join1 = "https://localhost:7245/api/Teams/AddUserToTeam";
 
  data: any;
  teamdata: any;
  id: any;
  Id: any;
  ID: any;
  constructor(private http: HttpClient) {

  }
  //get Team  method
  getTeamPortal(): Observable<any> {
    return this.http.get<any>(this.endpoint).pipe(
      map((result: any) => {
        console.log("done");
        return result;
      })
    );
  }
  //post Team method
  postTeam(data: any): Observable<any> {
    return this.http.post<any>(this.baseurl1, data).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  //join team member.
  join(ID: any): Observable<join[]> {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + (localStorage.getItem("token") ?? "")
    );
    return this.http.put<any>(this.join1 + '/' + ID, { headers: header }).pipe(
      map((result: any) => {
        console.log("done join");
        return result;
      })
    )
  }

  // methods for teamdata
  getTeamData(Id: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + Id).pipe(
      map((result: any) => {
        console.log("done");
        console.log(result);
        return result;
      })
    );
  }
  //get data from teamMember
  getTeamMember(): Observable<teamMember[]> {
    return this.http.get<teamMember>(this.baseurl).pipe(map((result: any) => {
      console.log("done1");
      console.log(result);
      return result;
    }))
  }
  
}