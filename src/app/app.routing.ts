import {ModuleWithProviders} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {ClassesComponent} from './components/classes/classes.component'
import {StudentsComponent} from './components/students/students.component'
import {ProfileComponent} from './components/profile/profile.component'
import {HomeComponent} from './components/home/home.component'
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent 
  }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
