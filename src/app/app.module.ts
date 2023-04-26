import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgClass } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule  } from 'ngx-spinner';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule, HttpClientModule, AppRoutingModule,CommonModule,NgMultiSelectDropDownModule,NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
 
  }


