import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { DataModel } from 'src/app/datamodel';
import { Router } from '@angular/router';
import { DesModel } from 'src/app/designation';
import { Subscriber } from 'rxjs';
import { department } from 'src/app/Department';
import { education } from 'src/app/Edu';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // Team!: FormGroup;
  ngOnInit(): void {
    this.Submited();
    this.SubmitedDepartment();


  }
  dataList: DataModel = new DataModel;
  RegisterData: DataModel[] = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  id: any;
  Des: DesModel[] = [];
  desId: string;
  Department: department[] = [];
  deptId: string;
  Education: education[] = [];
  eduId: string;
  Team!: FormGroup;
  

  constructor(private formbuilder: FormBuilder,
    private dataService: DataService,
    private router: Router) {
    this.Team = this.formbuilder.group({
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      eduId: new FormControl(''),
      desId: new FormControl(''),
      deptId: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
    },
      // confirm password validators
      {
        validators: this.Mustmatch('password', 'confirmPassword')
      }
    )
  }

  get function() {
    return this.Team.controls;
  }
  Mustmatch(password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcnt = formGroup.controls[password];
      const confirmPasswordcnt = formGroup.controls[confirmPassword];
      if (confirmPasswordcnt.errors && !confirmPasswordcnt.errors['Mustmatch']) {
        return;
      }
      if (passwordcnt.value !== confirmPasswordcnt.value) {
        confirmPasswordcnt.setErrors({ Mustmatch: true });
      }
      else {
        confirmPasswordcnt.setErrors(null);
      }
    }

  }
 
  get fName() {
    return this.Team.get('fName');
  }
  get lName() {
    return this.Team.get('lName');
  }
  get password() {
    return this.Team.get('password');
  }
  get confirmPassword() {
    return this.Team.get('confirmPassword');
  }
  get email() {
    return this.Team.get('email');
  }
  get phone() {
    return this.Team.get("phone");
  }
  get gender() {
    return this.Team.get('gender');
  }
  get dob() {
    return this.Team.get('dob');
  }

  Submit() {
    if (this.Team.valid) {
      
      console.log(this.Team.value);
      alert('you register successfully!');
      this.router.navigate(['/account/login']);
      this.postAllregisterData();

    } else {
      alert('Please fill all the required fields!');
    }

  }
  // get method

  getAllregisterData() {
    this.dataService.getRegister()
      .subscribe((result: any) => {
        console.log(result);
        this.RegisterData = result;
      })
  }
  //delete method
  deleteregisterdata(row: any) {
    this.dataService.deleteRegister(row.id)
      .subscribe((result: any) => {
        alert('Data delete successfully')
        this.getAllregisterData();
      })
  }
  //post method
  postAllregisterData() {
    console.log(this.Team);
    // this.dataList.Id = this.formvalue.value.Id;
    this.dataList.fName = this.Team.value.fName;
    this.dataList.lName = this.Team.value.lName;
    this.dataList.deptId = this.Team.value.deptId;
    this.dataList.desId = this.Team.value.desId;
    this.dataList.eduId = this.Team.value.eduId;
    this.dataList.email = this.Team.value.email;
    this.dataList.phone = this.Team.value.phone;
    this.dataList.password = this.Team.value.password;
    this.dataList.confirmPassword = this.Team.value.confirmPassword;
    this.dataList.gender = this.Team.value.gender;
    this.dataList.dob = this.Team.value.dob;
    console.log(this.dataList);
    this.dataService.postRegister(this.dataList).subscribe((res: any) => {
      console.log(res);
      alert('Teamdata added successfully');
      this.router.navigate(['/domain/teamportal']);
    },
      (err: any) => {
        console.log("something went wrong");
      }
    )
  }
  Submited() {
    this.dataService.getDesignation().subscribe((res: any) => {
      this.Des = res;
    })
  }
  SubmitedDepartment() {
    this.dataService.getDepartment().subscribe((res: any) => {
      this.Department = res;
    })
    this.dataService.getEducation().subscribe((res: any) => {
      this.Education = res;
    })
  }

}








