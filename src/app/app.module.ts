import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CoursesComponent, RemoveStudentDialog } from './components/courses/courses.component';
import { StudentsComponent } from './components/students/students.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {routing} from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    ProfileComponent,
    HomeComponent,
    RemoveStudentDialog
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
  entryComponents: [RemoveStudentDialog]
})
export class AppModule { }
