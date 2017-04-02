import {Faculty} from './Faculty'
import {Student} from './Student'
export enum Days {
  MWF, TTHR, FRI
}

export enum Semester { 
  SPRING, FALL, SUMMER
}

export let Course =  {
  id: Number,
  name: String,
  title: String,
  time: Date,
  gpa: Number,
  isCurrent: Boolean,
  days: Days,
  semester: Semester,
  instructor: Faculty, // The faculty member who is currently teaching the class
  students: Array,
  init: function(id,name,title,time,gpa,isCurrent,days,semester,instructor){
    this.id = id
    this.name = name
    this.title = title
    this.time = time
    this.gpa = gpa
    this.isCurrent = isCurrent
    this.days = days
    this.semester = semester
    this.instructor = instructor
    this.students = []
    return this;
  }
}
