import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CoursesComponent, RemoveStudentDialog } from './components/courses/courses.component';
import { StudentsComponent, DeleteStudentDialog } from './components/students/students.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {routing} from './app.routing';
import { NewStudentComponent } from './components/new-student/new-student.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    ProfileComponent,
    HomeComponent,
    RemoveStudentDialog,
    DeleteStudentDialog,
    NewStudentComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteStudentDialog, RemoveStudentDialog]
})
export class AppModule { }
