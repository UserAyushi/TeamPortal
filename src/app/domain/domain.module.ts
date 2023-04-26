import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamportalComponent } from './teamportal/teamportal.component';
import { TeammemberComponent } from './teammember/teammember.component';
import { UserComponent } from './user/user.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [DomainComponent, TeammemberComponent, TeamportalComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    DomainRoutingModule,
    NgxSpinnerModule
  ],
})
export class DomainModule {}
