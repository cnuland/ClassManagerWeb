import {ViewChild, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {CoursesService} from "../../services/courses.service"
import {StudentsService} from "../../services/students.service"
import {Course} from "../../models/course"
import {Student} from "../../models/student"
import {MdDialog, MdDialogRef ,MdSnackBar, MdMenuTrigger} from '@angular/material'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService, StudentsService]
})
export class CoursesComponent implements OnInit {
  _courses = []
  _students = []
  _allStudents = [] //This shows all the students in the system for adding
  _selectedCourse

 @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
 
  someMethod() {
    this.trigger.openMenu();
  }

  constructor(public dialog: MdDialog, public snackBar: MdSnackBar ,private _studentsService: StudentsService, private _coursesService: CoursesService, private cdRef: ChangeDetectorRef) {
    _coursesService.getCourses().subscribe(
      courses => {
        this._courses = courses;
      }
    );

    _studentsService.getStudents().subscribe(
      students => {
        this._allStudents = students;
      }
    )
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
  
  addStudent(student){
    if(student){
      if(!this._students.find(x => x.id == student.id)){
        student.classStatus = "ENROLLED"
        this._students.push(student)
        this.snackBar.open(student.firstName+" "+student.lastName+" Added to "+this._selectedCourse.name, "SUCCESS", {
            duration: 2000,
        });
      }
      else {
        this.snackBar.open("Student Already Enrolled", "FAILED", {
          duration: 2000,
        });
      }
    }
  }

  removeStudent(student){
    let dialogRef = this.dialog.open(RemoveStudentDialog, {
       height: '200px',
       width: '270px',}); //Tried to add these demenisions with CSS but seems to have some progamatic limitation where this is needed
    dialogRef.afterClosed().subscribe(result => {
      if(result === "Confirm"){
        if(student){
          if(this._students.find(x => x.id == student.id)){
           for(var i=0; i < this._students.length; i++) {
             if(this._students[i].id === student.id)
               {
                 this. _students.splice(i,1);
              }
           }
           this.snackBar.open(student.firstName+" "+student.lastName+" removed from "+this._selectedCourse.name, "REMOVED", {
               duration: 2000,
           }); 
         }    
         else {
           this.snackBar.open("Student Not Enrolled", "FAILED", {
             duration: 2000,
           }); 
         }   
        } 
      }
    });  
  }

}

@Component({
  selector: 'dialog-remove-student',
  styleUrls: ['./courses.component.css'],
  templateUrl: './courses.component.removeStudent.html',
})
export class RemoveStudentDialog {
  constructor(public dialogRef: MdDialogRef<RemoveStudentDialog>) {}
}
