import {ModuleWithProviders} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {CoursesComponent} from './components/courses/courses.component'
import {StudentsComponent} from './components/students/students.component'
import {ProfileComponent} from './components/profile/profile.component'
import {HomeComponent} from './components/home/home.component'
import {NewStudentComponent} from './components/new-student/new-student.component'
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent 
  },{
    path: 'newstudent',
    component: NewStudentComponent 
  }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
