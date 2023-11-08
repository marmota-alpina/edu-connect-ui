import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from "./course-routing.module";
import { CourseComponent } from "./course.component";
import { CreateCourseDialogComponent } from './components/create-course-dialog/create-course-dialog.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule } from "@nebular/theme";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CourseComponent,
    CreateCourseDialogComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
  ]
})
export class CourseModule { }
