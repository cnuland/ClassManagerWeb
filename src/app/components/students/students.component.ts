import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../services/students.service"
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {

  constructor(private _studentsService: StudentsService) { 
    _studentsService.getStudents().subscribe(
      students => {
        console.log(students)
      }
    );
  }

  ngOnInit() {
  }

}
