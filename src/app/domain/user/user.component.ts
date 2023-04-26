import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataModel } from 'src/app/datamodel';
import { department } from 'src/app/Department';
import { DesModel } from 'src/app/designation';
import { education } from 'src/app/Edu';
import { DataService } from 'src/app/services/data.service';
import { Team } from 'src/app/teammodel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public Team: FormGroup;
  Des: DesModel[] = [];
  Department: department[] = [];
  Education: education[] = [];
  ngOnInit(): void {
    this.Team = this.formbuilder.group({
      fName: [''],
      lName: [''],
      desId: [''],
      deptId: [''],
      eduId: [''],
      email: ['']
    })
    this.getuser();

  }
  dataList: DataModel = new DataModel;
  RegisterData: DataModel[] = [];

  showUpdate!: boolean;
  id: any;
  constructor(
    private formbuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  get fName() {
    return this.Team.get('fName');
  }
  get lName() {
    return this.Team.get('lName');
  }
  get email() {
    return this.Team.get('email');
  }
  get eduId() {
    return this.Team.get('education');
  }
  get desId() {
    return this.Team.get('desId');
  }
  get deptId() {
    return this.Team.get('deptId');
  }
  Submit() {
    console.log(this.Team.value);
    this.getuser();
  }
  getuser() {
    this.dataService.getUser().subscribe((res: any) => {
      console.log(res);
      this.dataList = res;
      console.log(this.dataList);
      this.Team.setValue({
        fName: res.fName,
        lName: res.lName,
        email: res.email,
        desId: [''],
        deptId: [''],
        eduId: ['']
      })

    })
  }
}


