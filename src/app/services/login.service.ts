import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, endWith, Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  api: string = "https://localhost:7245/";
  data: any;
  id: any;

 

  constructor(private http: HttpClient, private router:Router) {}
  
  //get  data method
  getLogin(data:any) {
    let headers= new HttpHeaders();
    
    var url = this.api + "account/Account/Authenticate";
    this.http.post<string>(url, data).subscribe((result)=>{
      console.log('service',result);
      localStorage.setItem("token",result);
      this.router.navigate(['/domain/teamportal']);
   
    })
     
  }

  profile(){
    let headers= new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    this.http.post<any>(this.api,{},{headers}).subscribe((result)=>{ 
  })
  }

  
  // post data method
  postLogin(data: any): Observable<any> {
    var url = this.api + "account/Account/Authenticate";
    return this.http.post<string>(url, data);
    //  return this.http.post<any>(url, data)
    //   .pipe(map((result: any) => {
    //     return result;
    //   },
    //   catchError((err) => {
    //     return err;
    //   })
    //   ))
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }
  
 
  
  

  






 
}
