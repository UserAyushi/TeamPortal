import { Component, HostListener, OnInit } from '@angular/core';
import {  FormGroup, Validators,FormControl, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
 
  @HostListener("window:close",["$event"])
  clearLocalStorage(event: any){
      localStorage.clear();
  }

  ngOnInit(): void {
    
  }

 
}   


