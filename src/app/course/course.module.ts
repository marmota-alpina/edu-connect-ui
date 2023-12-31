import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from "./course-routing.module";
import { CourseComponent } from "./course.component";
import { CreateCourseDialogComponent } from './components/create-course-dialog/create-course-dialog.component';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbListModule,
  NbSelectModule
} from "@nebular/theme";
import { ReactiveFormsModule } from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { CourseDetailsComponent } from './components/course-details/course-details.component';


@NgModule({
  declarations: [
    CourseComponent,
    CreateCourseDialogComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
    SharedModule,
    NbAccordionModule,
  ]
})
export class CourseModule { }
