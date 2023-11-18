import { Component, OnInit } from '@angular/core';
import { StudentService } from "../shared/services/student.service";
import { Observable } from "rxjs";
import { StudentOutputModel } from "../shared/models/student-output.model";
import { Router } from "@angular/router";
import { CourseService } from "../shared/services/course.service";
import { CourseOutputModel } from "../shared/models/course-output.model";
import { StudentInputModel } from "../shared/models/student-input.model";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{

  students$: Observable<StudentOutputModel[]>;
  courseList: CourseOutputModel[] = [];

  constructor(private readonly _studentService: StudentService,  private readonly courseService: CourseService,
              private readonly _router: Router, private _toastrService: NbToastrService) {
    this.students$ = this._studentService.getStudents();
  }

  showDetails(id: number) {
    this._router.navigate(['student', id]);
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (list) => this.courseList = list
    })
  }

  updateStudent(student: StudentInputModel) {
    this._studentService.updateStudent(student.id, student).subscribe({
      next: (student) => {
        this.students$ = this._studentService.getStudents();
        this._toastrService.success(`Aluno ${student.name} atualizado com sucesso!`,'Sucesso!');
      },
      error: err => this._toastrService.danger(`${err.error.message}.`,'Erro!')
    });
  }
}
