import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {CoursesService} from "../../services/courses.service"
import {Course} from "../../models/course"
import {Student} from "../../models/student"

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  _courses = []
  _students = []
  constructor(private _coursesService: CoursesService, private cdRef: ChangeDetectorRef) {
    _coursesService.getCourses().subscribe(
      courses => {
        this._courses = courses;
      }
    );
  }
  ngOnInit() {
  }

  selectCourse(course) {
    console.log("Selected a Course:",course)  
    if(course.students){
      this._students = course.students
      this.cdRef.detectChanges()
      console.log("set students",this._students)
    }
  }
}
