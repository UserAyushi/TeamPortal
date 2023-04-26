import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeammemberService } from 'src/app/services/teammember.service';
import { TEAM, TEAMDATA } from 'src/app/teammodelformember';

@Component({
  selector: 'app-teammember',
  templateUrl: './teammember.component.html',
  styleUrls: ['./teammember.component.css']
})
export class TeammemberComponent implements OnInit{
   TeamData:TEAMDATA[]=[];
   TeamDetails:TEAM[]=[];
   Team=new FormGroup({
    fName:new FormControl(''),
    lName:new FormControl(''), 
    teams:new FormControl(''),
    teamId:new FormControl(''),
    teamName: new FormControl(''),
    teamMemberIds:new FormControl('')

  })


  constructor(
    private url: TeammemberService,
    private teammemberService: TeammemberService,
    private router: Router
  ){}

  ngOnInit(): void {
   this.getTeamDetail();
  }
  getTeamDetail(){
    this.teammemberService.getTeamDetails().subscribe((res:any)=>
    {
      console.log(res);
      this.TeamData=[res];
      this.TeamDetails = res["teams"];
     
     
      
    })
  }
 
  
 
}

