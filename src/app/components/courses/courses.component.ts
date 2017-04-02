import {ViewChild, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {CoursesService} from "../../services/courses.service"
import {Course} from "../../models/course"
import {Student} from "../../models/student"
import {MdMenuTrigger} from '@angular/material'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  _courses = []
  _students = []
  _selectedCourse

 @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
 
  someMethod() {
    this.trigger.openMenu();
  }

  constructor(private _coursesService: CoursesService, private cdRef: ChangeDetectorRef) {
    _coursesService.getCourses().subscribe(
      courses => {
        this._courses = courses;
        this.someMethod()
      }
    );
  }
  ngOnInit() {
  }

  selectCourse(course) {
    if(course.students){
      this._students = course.students
      this.cdRef.detectChanges()
      this._selectedCourse = course;
    }
  }
}
