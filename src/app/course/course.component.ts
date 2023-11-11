import { Component } from '@angular/core';
import { CourseService } from "../shared/services/course.service";
import { CourseInputModel } from "../shared/models/course-input.model";
import { Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent{

    courses$ = this._courseService.getCourses();
    constructor(private readonly _courseService: CourseService, private readonly _router: Router, private _toastrService: NbToastrService) { }

    saveCourse(course: CourseInputModel) {
      this._courseService.saveCourse(course).subscribe({
        next: (course) => {
          this.courses$ = this._courseService.getCourses();
          this._toastrService.success('Curso cadastrado com sucesso!', 'Sucesso!');
        },
        error: (err) => this._toastrService.danger(err.error.message, 'Erro!')
      });
    }

  updateCourse(course: CourseInputModel) {
    this._courseService.updateCourse(course.id, course).subscribe({
      next: (course) => {
        this.courses$ = this._courseService.getCourses();
        this._toastrService.success('Curso atualizado com sucesso!', 'Sucesso!');
      },
      error: (err) => this._toastrService.danger(err.error.message, 'Erro!')
    });
  }

  navigateToDetails(courseId: number) {
    this._router.navigate(['/course/', courseId]);
  }
}
