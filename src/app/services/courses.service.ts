import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Course} from '../models/course';
import {Observable} from 'rxjs/Rx';
import {Student} from '../models/student';
import 'rxjs/add/operator/map';


@Injectable()
export class CoursesService {

  constructor(private _http:Http) {  
  }

  getCourses(){
    return this._http.get('./assets/Courses.json')
                .map(res => {
                    return res.json().courses;
                 })
                .map(function(courses) {
                  let result: Array<any> = [];
                  if(courses){
                    console.log("Lets see whats inside this:",courses)
                     courses.forEach((json) => {
                      console.log(json)
                      let newCourse = Object.create(Course).init(json.id,json.name,json.title,json.time.split(" ")[1],json.gpa,json.isCurrent,json.days,json.semester,json.instructor)
                      let students = json.students
                      if(students){
                        students.forEach((student) => {
                          let newStudent = Object.create(Student).init(student.id, student.firstName, student.lastName, student.email, student.phone, student.gpa, student.totalCredits, student.currentCredits)
                          newStudent.classStatus = student.status
                          newCourse.students.push(newStudent)
                        });
                      }
                      result.push(newCourse);
                    });
                  }
                return result;
                });
  }

}

