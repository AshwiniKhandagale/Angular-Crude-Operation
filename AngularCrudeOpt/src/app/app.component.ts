import { Component, OnInit } from '@angular/core';
import { Student } from './student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularCrudeOpt';
  userName:string="";
  lName:string="";
  emailId:string="";
  registrationArr:Student[]=[];
  ngOnInit(){
  
  }
  insertData(){
   this.registrationArr.push({
    firstName:this.userName,
    lastName:this.lName,
    emailId:this.emailId,
   });
   this.userName="";
   this.lName="";
   this.emailId="";
  }
  deleteData(index){
   this.registrationArr.splice(index,1);
  }

}
