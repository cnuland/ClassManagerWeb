import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../services/students.service"
import {Student} from "../../models/student"
import {MdDialog, MdDialogRef ,MdSnackBar, MdMenuTrigger} from '@angular/material'
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {
  _students = []
  constructor(private router: Router,public dialog: MdDialog, public snackBar: MdSnackBar, private _studentsService: StudentsService) { 
    _studentsService.getStudents().subscribe(
      students => {
        this._students = students
      }
    );
  }

  ngOnInit() {
  }

  addStudent() {
    console.log("add student")
    this.router.navigate(["./newstudent"]);
  }

  removeStudent(student){
    let dialogRef = this.dialog.open(DeleteStudentDialog, {
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
           this.snackBar.open(student.firstName+" "+student.lastName+" deleted", "DELETED", {
               duration: 2000,
           });
         }
         else {
           this.snackBar.open("Student not available to delete", "FAILED", {
             duration: 2000,
           });
         }
        }
      }
    });
  }

}

@Component({
  selector: 'dialog-student-student',
  styleUrls: ['./students.component.css'],
  templateUrl: './students.component.deleteStudent.html',
})
export class DeleteStudentDialog {
  constructor(public dialogRef: MdDialogRef<DeleteStudentDialog>) {}
}
  

