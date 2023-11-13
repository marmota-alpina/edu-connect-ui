import { Component } from '@angular/core';
import { StudentService } from "../shared/services/student.service";
import { Observable } from "rxjs";
import { StudentOutputModel } from "../shared/models/student-output.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  students$: Observable<StudentOutputModel[]>;

  constructor(private readonly _studentService: StudentService, private readonly _router: Router) {
    this.students$ = this._studentService.getStudents();
  }

  showDetails(id: number) {
    this._router.navigate(['student', id]);
  }

  edit(student: StudentOutputModel) {

  }
}
