import { Component } from '@angular/core';
import { LoginComponent } from '../account/login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent {
  constructor(private loginService:LoginService){}

  logOut(){
    this.loginService.logout();
    alert("user log out!!");
    }
}
