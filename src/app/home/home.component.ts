import { Component } from '@angular/core';
import { CourseService } from "../shared/services/course.service";
import { StudentInputModel } from "../shared/models/student-input.model";
import { Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  courses$ = this._courseService.getCourses();
  constructor(private readonly _courseService: CourseService, private readonly _router: Router, private _toastrService: NbToastrService) { }

  enroll(model: StudentInputModel) {
    this._courseService.enroll(model).subscribe({
      next: () => {
        this._toastrService.success('Matrícula realizada com sucesso!', 'Sucesso!');
      },
      error: (err) => this._toastrService.danger(err.error.message, 'Erro!')
    });
  }
}
