import { Component } from '@angular/core';
import { CourseService } from "../shared/services/course.service";
import { CourseInputModel } from "../shared/models/course-input.model";
import {CourseOutputModel} from "../shared/models/course-output.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent{

    courses$ = this._courseService.getCourses();
    constructor(private readonly _courseService: CourseService) { }

    saveCourse(course: CourseInputModel) {
      this._courseService.saveCourse(course).subscribe({
        next: (course) => this.courses$ = this._courseService.getCourses(),
        error: (err) => console.log(err.error.message)
      });
    }

  updateCourse(course: CourseInputModel) {
    this._courseService.updateCourse(course.id, course).subscribe({
      next: (course) => this.courses$ = this._courseService.getCourses(),
      error: (err) => console.log(err.error.message)
    });
  }

  deleteCourse(course: CourseOutputModel) {
      const confirmation = confirm(`Tem certeza de que deseja excluir o curso '${course.name}'? Esta ação é irreversível.`);
      if (confirmation) {
        this._courseService.deleteCourse(course.id).subscribe({
          next: () => this.courses$ = this._courseService.getCourses(),
        });
      }
  }
}
