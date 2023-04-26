import { isPlatformWorkerApp } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OnSameUrlNavigation, Router } from '@angular/router';
import { from } from 'rxjs';
import { TeamportalService } from 'src/app/services/teamportal.service';
import { TeamDataModel } from 'src/app/teamdatamodel';
import { Team } from 'src/app/teammodel';
import { teamMember } from 'src/app/teamMemberModel';
import { NewTeam } from 'src/app/newteammodel';
import { NgxSpinnerService } from 'ngx-spinner';
import { join } from 'src/app/join';


@Component({
  selector: 'app-teamportal',
  templateUrl: './teamportal.component.html',
  styleUrls: ['./teamportal.component.css'],
  
})
export class TeamportalComponent implements OnInit{
 data:any;
  Team=new FormGroup({
    teamaname:new FormControl('',Validators.required),
    teammember:new FormControl('',Validators.required)
  })
   
  NewTeam= new FormGroup({
    teamName: new FormControl('',Validators.required),
    teamLeadID:new FormControl('',Validators.required),
    teamMemberIds: new FormControl('',Validators.required)
  })

  showadd:boolean=false;
  showTable:boolean=false;
  newteam:NewTeam[]=[];
  add: join[]=[];
  dataList: Team[]=[];
  TeamData:TeamDataModel[]=[];
  TeamMember: teamMember[]=[];
  teamid:string;
  teamMemberIds:any
  id:string;
  teamId:string
  Id: any;

  constructor(
    private formBuilder:FormBuilder,
    private endpoint: TeamportalService,
    private teamportalService: TeamportalService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.NewTeam=this.formBuilder.group({
      teamName:[''],
      teamLeadID:[''],
      teamMemberIds:['']
    })

  }
  ngOnInit(): void {
    this.submit();
    this.getTeammember();
   
  
  }

 
submit(){
  
    this.teamportalService.getTeamPortal().subscribe((res: any) => {
    this.dataList = res;
  },
  (err: any) => {
  alert(" please select the team for view details!!!");
  }
  );
  }
  Submit(){
    alert("Done");
    console.log(this.Team.value);
    this.teamportalService.getTeamPortal().subscribe((res: any) => {
      this.dataList = res;     
    });
  }
  getTeamData1(){
   
    this.teamportalService.getTeamData(this.teamid).subscribe((res:any)=>
    {
      console.log(res);
      this.showTable=true;
      this.TeamData=res['teamMember'];
      console.log(this.TeamData);
      
    })
  }
 //Add user in team
 Addteam(){
  this.showadd=true;
 }
  //get teammember
  getTeammember(){
    this.teamportalService.getTeamMember().subscribe((res:any)=>
    {
      console.log(res);
      this.TeamMember=res;
    })
  }
  //post team
  postteam(){
    
    console.log(this.NewTeam.value);
    this.teamportalService.postTeam(this.NewTeam.value).subscribe((res:any)=>
    {
     alert("You successfully Create New Team !!!");
     this.router.navigate(["/domain/teamportal"]);
      console.log(res);
      this.newteam=res;
    },
    (err: any) => {
      alert("Please fill the details!!");
    }
    )
  }
  // join team.
  join(){
    // this.add.Id=this.Id
    this.teamportalService.join(this.data).subscribe((res:any)=>{
      console.log(res);
      // this.
    })
  }

}