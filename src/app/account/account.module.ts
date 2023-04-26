import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent, LoginComponent, RegisterComponent],
  imports: [AccountRoutingModule, CommonModule, RouterModule, ReactiveFormsModule,HttpClientModule],
})
export class AccountModule {}
