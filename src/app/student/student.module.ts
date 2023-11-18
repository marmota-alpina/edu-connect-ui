import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import {NbButtonModule, NbCardModule, NbInputModule, NbSelectModule} from "@nebular/theme";
import { SharedModule } from "../shared/shared.module";
import { UpdateStudentDialogComponent } from "./components/update-student-dialog/update-student-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StudentComponent,
    StudentDetailsComponent,
    UpdateStudentDialogComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NbButtonModule,
    SharedModule,
    NbCardModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule
  ]
})
export class StudentModule { }
