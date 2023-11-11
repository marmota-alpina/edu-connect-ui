import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import {NbButtonModule} from "@nebular/theme";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NbButtonModule,
    SharedModule
  ]
})
export class StudentModule { }
