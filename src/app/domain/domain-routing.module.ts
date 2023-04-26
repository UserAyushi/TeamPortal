import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainComponent } from './domain.component';
import { TeammemberComponent } from './teammember/teammember.component';
import { TeamportalComponent } from './teamportal/teamportal.component';
import { UserComponent } from './user/user.component';
import { DesignationComponent } from './designation/designation.component';
import { EducationComponent } from './education/education.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {
    path: '',
    component: DomainComponent,
    children: [
      { path: 'teammember', component: TeammemberComponent },
      { path: 'teamportal', component: TeamportalComponent },
      { path: 'user', component: UserComponent },
      {path:'designation',component:DesignationComponent},
      {path:'education',component:EducationComponent},
      {path:'department',component:DepartmentComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainRoutingModule {}
