import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { NavbarServiceService } from '../navbar-service.service';
import { FooterService } from '../Services/footer.service';
import studentData from '../student.json';
interface Students{
  Id:Number;
  Name:String;
  College:String;
  Email:string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(public nav: NavbarServiceService, public fs: FooterService) { }
  ngOnInit():void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.fs.show();
    this.fs.doSomethingElseUseful();
   }
   students:Students[]=studentData;
   //displayedColumns: string[] = ['Id', 'Name', 'College', 'Email'];
   //dataSource = this.students;

}
