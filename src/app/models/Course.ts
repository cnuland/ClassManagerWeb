import {Faculty} from './Faculty'

export enum Days {
  MWF, TTHR, FRI
}

export enum Semester { 
  SPRING, FALL, SUMMER
}

export let Course = function() {
  let id: Number;
  let name: String;
  let title: String;
  let time: Date;
  let gpa: Number;
  let isCurrent: Boolean;
  let days: Days;
  let semester: Semester;
  let instructor; // The faculty member who is currently teaching the class
}
