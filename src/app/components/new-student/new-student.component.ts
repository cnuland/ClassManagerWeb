import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  _firstName = ""
  _lastName = ""
  _phone = ""
  _email = ""
  constructor() { }

  saveStudent(){
    console.log("Saved a student! "+this._firstName+" "+this._lastName)
  }

  ngOnInit() {
  }

}
