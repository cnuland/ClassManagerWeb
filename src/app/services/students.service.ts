import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Student} from '../models/student';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class StudentsService {

  constructor(private _http:Http) {  
  }

  getStudents(){
    return this._http.get('./assets/Students.json')
                .map(res => {
                    return res.json().students;
                 })
                .map(function(students) {
                  let result: Array<any> = [];

                  if(students){
                    console.log("Lets see whats inside this:",students)
                    students.forEach((json) => {
                      console.log(json)
                      let newStudent = Object.create(Student).init(json.id, json.firstName, json.lastName, json.email, json.phone, json.gpa, json.totalCredits, json.currentCredits)
                      result.push(newStudent);
                    });
                  }
                return result;
                });
  }

}
